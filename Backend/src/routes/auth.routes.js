const express = require('express');
const rateLimit = require('express-rate-limit');
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');
const { authenticate, authorize, rateLimit: customRateLimit, auditLog, securityHeaders } = require('../middleware/auth');

const router = express.Router();

// Apply security headers to all auth routes
router.use(securityHeaders);

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many authentication attempts, please try again later.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Registration routes
router.post('/register/school-admin', 
  authLimiter,
  [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('schoolName').notEmpty().withMessage('School name is required'),
    body('schoolCode').notEmpty().withMessage('School code is required'),
    body('schoolLevel').isIn(['ecde', 'primary', 'junior_secondary', 'senior_secondary']).withMessage('Invalid school level'),
    body('county').notEmpty().withMessage('County is required'),
    body('subCounty').notEmpty().withMessage('Sub-county is required'),
    body('physicalAddress').notEmpty().withMessage('Physical address is required'),
    body('schoolPhoneNumber').isMobilePhone().withMessage('Please provide a valid school phone number'),
    body('schoolEmail').isEmail().withMessage('Please provide a valid school email address'),
    body('administratorEmail').isEmail().withMessage('Please provide a valid administrator email address'),
    body('administratorPassword').isLength({ min: 8 }).withMessage('Administrator password must be at least 8 characters long'),
  ],
  auditLog('REGISTER_SCHOOL_ADMIN'),
  authController.registerSchoolAdmin
);

router.post('/register/teacher', 
  authenticate,
  authorize('school_admin'),
  [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('tscNumber').notEmpty().withMessage('TSC number is required'),
    body('subjectsTaught').isArray({ min: 1 }).withMessage('At least one subject must be specified'),
    body('dateJoined').isISO8601().withMessage('Please provide a valid date'),
  ],
  auditLog('REGISTER_TEACHER'),
  authController.registerTeacher
);

router.post('/register/parent', 
  authLimiter,
  [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('relationship').isIn(['father', 'mother', 'guardian']).withMessage('Invalid relationship type'),
  ],
  auditLog('REGISTER_PARENT'),
  authController.registerParent
);

router.post('/register/learner', 
  authenticate,
  authorize('school_admin'),
  [
    body('admissionNumber').notEmpty().withMessage('Admission number is required'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('dateOfBirth').isISO8601().withMessage('Please provide a valid date of birth'),
    body('gender').isIn(['male', 'female']).withMessage('Invalid gender'),
    body('gradeLevel').notEmpty().withMessage('Grade level is required'),
    body('parentEmail').isEmail().withMessage('Please provide a valid parent email address'),
    body('parentFirstName').notEmpty().withMessage('Parent first name is required'),
    body('parentLastName').notEmpty().withMessage('Parent last name is required'),
    body('parentRelationship').isIn(['father', 'mother', 'guardian']).withMessage('Invalid parent relationship'),
  ],
  auditLog('REGISTER_LEARNER'),
  authController.registerLearner
);

// Authentication routes
router.post('/login', 
  authLimiter,
  [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  auditLog('USER_LOGIN'),
  authController.login
);

router.post('/logout', 
  authenticate,
  auditLog('USER_LOGOUT'),
  authController.logout
);

router.post('/refresh-token', 
  authLimiter,
  [
    body('refreshToken').notEmpty().withMessage('Refresh token is required'),
  ],
  auditLog('REFRESH_TOKEN'),
  authController.refreshToken
);

// Password management routes
router.post('/request-password-reset', 
  authLimiter,
  [
    body('email').isEmail().withMessage('Please provide a valid email address'),
  ],
  auditLog('REQUEST_PASSWORD_RESET'),
  authController.requestPasswordReset
);

router.post('/reset-password', 
  authLimiter,
  [
    body('token').notEmpty().withMessage('Reset token is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  ],
  auditLog('RESET_PASSWORD'),
  authController.resetPassword
);

router.post('/change-password', 
  authenticate,
  [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword').isLength({ min: 8 }).withMessage('New password must be at least 8 characters long'),
  ],
  auditLog('CHANGE_PASSWORD'),
  authController.changePassword
);

// Email verification
router.get('/verify-email/:token', 
  auditLog('VERIFY_EMAIL'),
  authController.verifyEmail
);

// Account management routes (for school admins to manage users)
router.get('/users', 
  authenticate,
  authorize('school_admin'),
  auditLog('LIST_USERS'),
  async (req, res) => {
    try {
      const { page = 1, limit = 10, role, status } = req.query;
      const offset = (page - 1) * limit;
      const schoolId = req.user.schoolId;

      let queryText = `
        SELECT u.id, u.email, u.first_name, u.last_name, u.role, u.status, u.created_at, u.last_login,
               t.tsc_number, t.date_joined as teacher_date_joined,
               p.national_id, p.relationship as parent_relationship
        FROM users u
        LEFT JOIN teachers t ON u.id = t.user_id
        LEFT JOIN parents p ON u.id = p.user_id
        WHERE u.school_id = $1 AND u.role != 'super_admin'
      `;
      let params = [schoolId];

      if (role) {
        queryText += ' AND u.role = $' + (params.length + 1);
        params.push(role);
      }

      if (status) {
        queryText += ' AND u.status = $' + (params.length + 1);
        params.push(status);
      }

      queryText += ` ORDER BY u.created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
      params.push(limit, offset);

      const usersResult = await require('../config/database').query(queryText, params);
      
      // Get total count for pagination
      let countQuery = `
        SELECT COUNT(*) as total
        FROM users u
        WHERE u.school_id = $1 AND u.role != 'super_admin'
      `;
      let countParams = [schoolId];

      if (role) {
        countQuery += ' AND u.role = $' + (countParams.length + 1);
        countParams.push(role);
      }

      if (status) {
        countQuery += ' AND u.status = $' + (countParams.length + 1);
        countParams.push(status);
      }

      const countResult = await require('../config/database').query(countQuery, countParams);
      const total = parseInt(countResult.rows[0].total);

      res.json({
        success: true,
        data: {
          users: usersResult.rows,
          pagination: {
            page: parseInt(page),
            limit: parseInt(limit),
            total,
            pages: Math.ceil(total / limit)
          }
        }
      });
    } catch (error) {
      console.error('❌ Error fetching users:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error while fetching users.'
      });
    }
  }
);

router.put('/users/:userId/status', 
  authenticate,
  authorize('school_admin'),
  [
    body('status').isIn(['active', 'suspended', 'deleted']).withMessage('Invalid status'),
  ],
  auditLog('UPDATE_USER_STATUS'),
  async (req, res) => {
    try {
      const { userId } = req.params;
      const { status } = req.body;
      const schoolId = req.user.schoolId;

      // Check if user exists and belongs to the same school
      const userResult = await require('../config/database').query(
        'SELECT id FROM users WHERE id = $1 AND school_id = $2',
        [userId, schoolId]
      );

      if (userResult.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'User not found or does not belong to your school.'
        });
      }

      await require('../config/database').query(
        'UPDATE users SET status = $1, updated_at = NOW() WHERE id = $2',
        [status, userId]
      );

      res.json({
        success: true,
        message: `User status updated to ${status}.`
      });
    } catch (error) {
      console.error('❌ Error updating user status:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error while updating user status.'
      });
    }
  }
);

module.exports = router;