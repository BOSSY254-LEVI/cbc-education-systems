<<<<<<< HEAD:Frontend/src/pages/auth/school-admin/Dashboard.tsx
import { useAuth } from '../../../contexts/AuthContext';
import { StatCard } from '../../../components/dashboard/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
=======
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c:Frontend/src/pages/school-admin/Dashboard.tsx
import { 
  Users, 
  GraduationCap, 
  UserCheck, 
  BookOpen,
  Plus,
  ArrowRight,
  TrendingUp,
<<<<<<< HEAD:Frontend/src/pages/auth/school-admin/Dashboard.tsx
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface SchoolStats {
  totalTeachers: number;
  totalLearners: number;
  totalParents: number;
  activeClasses: number;
  recentAssessments: number;
}

interface Activity {
  id: number;
  action: string;
  name: string;
  time: string;
}

interface PerformanceData {
  grade: string;
  completionRate: number;
}
=======
  TrendingDown,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as PieChartIcon,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Attendance Trend Data
const attendanceTrendData = [
  { day: 'Mon', students: 85, teachers: 92 },
  { day: 'Tue', students: 88, teachers: 94 },
  { day: 'Wed', students: 82, teachers: 88 },
  { day: 'Thu', students: 90, teachers: 96 },
  { day: 'Fri', students: 87, teachers: 90 },
  { day: 'Sat', students: 65, teachers: 70 },
  { day: 'Sun', students: 0, teachers: 0 },
];

// Performance Data
const performanceData = [
  { grade: 'PP1', completion: 92, pass: 88 },
  { grade: 'PP2', completion: 94, pass: 91 },
  { grade: 'Grade 1', completion: 89, pass: 85 },
  { grade: 'Grade 2', completion: 87, pass: 82 },
  { grade: 'Grade 3', completion: 91, pass: 88 },
  { grade: 'Grade 4', completion: 93, pass: 90 },
];

// Fee Collection Data
const feeCollectionData = [
  { name: 'Paid', value: 312, fill: '#10b981' },
  { name: 'Pending', value: 89, fill: '#f59e0b' },
  { name: 'Overdue', value: 55, fill: '#ef4444' },
];

// Student Gender Distribution
const genderData = [
  { name: 'Male', value: 234, fill: '#3b82f6' },
  { name: 'Female', value: 222, fill: '#ec4899' },
];

// Mock Stats
const stats = {
  totalStudents: 456,
  maleStudents: 234,
  femaleStudents: 222,
  totalTeachers: 24,
  totalParents: 312,
  activeClasses: 18,
  avgAttendance: 87,
  feeCollected: 312,
  feePending: 89,
  feeOverdue: 55,
  avgGrade: 8.5,
  passRate: 88,
};

const recentActivities = [
  { id: 1, action: 'New learner enrolled', name: 'Jane Muthoni', time: '2 hours ago', type: 'success' },
  { id: 2, action: 'Assessment submitted', name: 'Mr. Ochieng - Grade 4', time: '3 hours ago', type: 'info' },
  { id: 3, action: 'Parent account created', name: 'Mrs. Wanjiku', time: '5 hours ago', type: 'success' },
  { id: 4, action: 'Attendance issue', name: 'Student absent for 3 days', time: '1 day ago', type: 'warning' },
];
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c:Frontend/src/pages/school-admin/Dashboard.tsx

// Stat Card Component
function StatCardEnhanced({ title, value, subtitle, icon, trend, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    amber: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    pink: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800',
  };

  return (
    <Card className={`border-2 ${colorClasses[color]}`}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <p className="text-3xl font-bold text-foreground">{value}</p>
              {trend && (
                <div className={`flex items-center gap-1 text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {trend.value}%
                </div>
              )}
            </div>
            {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <div className="ml-4">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function EnhancedSchoolDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<SchoolStats | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch school stats
      const { data: statsData, error: statsError } = await supabase
        .from('school_stats')
        .select('*')
        .eq('school_id', user?.schoolId)
        .single();

      if (statsError && statsError.code !== 'PGRST116') {
        throw statsError;
      }

      // Fetch recent activities
      const { data: activitiesData, error: activitiesError } = await supabase
        .from('school_activities')
        .select('*')
        .eq('school_id', user?.schoolId)
        .order('created_at', { ascending: false })
        .limit(10);

      if (activitiesError) {
        throw activitiesError;
      }

      setStats(statsData || {
        totalTeachers: 0,
        totalLearners: 0,
        totalParents: 0,
        activeClasses: 0,
        recentAssessments: 0
      });
      setActivities(activitiesData || []);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [user?.schoolId]);

  useEffect(() => {
    void fetchDashboardData();
  }, [fetchDashboardData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 mx-auto text-red-500" />
          <p className="mt-4 text-red-600">{error}</p>
          <Button onClick={fetchDashboardData} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's a complete overview of your school's operations.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button asChild>
            <Link to="/school-admin/learners/add">
              <Plus className="w-4 h-4 mr-2" />
              Add Learner
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/school-admin/teachers/add">
              <Plus className="w-4 h-4 mr-2" />
              Add Teacher
            </Link>
          </Button>
        </div>
      </div>

<<<<<<< HEAD:Frontend/src/pages/auth/school-admin/Dashboard.tsx
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Teachers"
          value={stats?.totalTeachers || 0}
          icon={<Users className="w-5 h-5 text-primary" />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Total Learners"
          value={stats?.totalLearners || 0}
          icon={<GraduationCap className="w-5 h-5 text-primary" />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Parents Registered"
          value={stats?.totalParents || 0}
          icon={<UserCheck className="w-5 h-5 text-primary" />}
          description={`${stats && stats.totalLearners > 0 ? Math.round((stats.totalParents / stats.totalLearners) * 100) : 0}% of learners`}
        />
        <StatCard
          title="Active Classes"
          value={stats?.activeClasses || 0}
          icon={<BookOpen className="w-5 h-5 text-primary" />}
        />
=======
      {/* SECTION 1: STUDENT STATISTICS */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Student Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCardEnhanced
            title="Total Students"
            value={stats.totalStudents}
            icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
            trend={{ value: 12, isPositive: true }}
            color="blue"
          />
          <StatCardEnhanced
            title="Male Students"
            value={stats.maleStudents}
            subtitle="51.3% of total"
            icon={<Users className="w-8 h-8 text-blue-600" />}
            color="blue"
          />
          <StatCardEnhanced
            title="Female Students"
            value={stats.femaleStudents}
            subtitle="48.7% of total"
            icon={<Users className="w-8 h-8 text-pink-600" />}
            color="pink"
          />
          <StatCardEnhanced
            title="Active Classes"
            value={stats.activeClasses}
            icon={<BookOpen className="w-8 h-8 text-purple-600" />}
            color="purple"
          />
        </div>
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c:Frontend/src/pages/school-admin/Dashboard.tsx
      </div>

      {/* SECTION 2: ATTENDANCE STATISTICS */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Attendance & Performance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCardEnhanced
            title="Average Attendance"
            value={`${stats.avgAttendance}%`}
            icon={<CheckCircle className="w-8 h-8 text-green-600" />}
            trend={{ value: 5, isPositive: true }}
            color="green"
          />
          <StatCardEnhanced
            title="Total Teachers"
            value={stats.totalTeachers}
            icon={<Users className="w-8 h-8 text-indigo-600" />}
            trend={{ value: 8, isPositive: true }}
            color="blue"
          />
          <StatCardEnhanced
            title="Pass Rate"
            value={`${stats.passRate}%`}
            icon={<TrendingUp className="w-8 h-8 text-green-600" />}
            color="green"
          />
          <StatCardEnhanced
            title="Average Grade"
            value={`${stats.avgGrade}/10`}
            icon={<BarChart3 className="w-8 h-8 text-amber-600" />}
            color="amber"
          />
        </div>
      </div>

      {/* SECTION 3: FINANCIAL OVERVIEW */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Finance Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCardEnhanced
            title="Fee Paid"
            value={stats.feePaid || stats.feeCollected}
            subtitle="Full payment"
            icon={<DollarSign className="w-8 h-8 text-green-600" />}
            color="green"
          />
          <StatCardEnhanced
            title="Fee Pending"
            value={stats.feePending}
            subtitle="Partial/installments"
            icon={<Clock className="w-8 h-8 text-amber-600" />}
            color="amber"
          />
          <StatCardEnhanced
            title="Fee Overdue"
            value={stats.feeOverdue}
            subtitle="Action needed"
            icon={<AlertCircle className="w-8 h-8 text-red-600" />}
            color="red"
          />
          <StatCardEnhanced
            title="Total Parents"
            value={stats.totalParents}
            subtitle="68% of learners"
            icon={<UserCheck className="w-8 h-8 text-purple-600" />}
            color="purple"
          />
        </div>
      </div>

      {/* SECTION 4: CHARTS & ANALYTICS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Trend</CardTitle>
            <CardDescription>Last 7 days attendance rate</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="students" 
                  stroke="#3b82f6" 
                  name="Student Attendance"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="teachers" 
                  stroke="#10b981" 
                  name="Teacher Attendance"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance by Grade Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance by Grade</CardTitle>
            <CardDescription>Completion & Pass rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completion" fill="#3b82f6" name="Completion %" />
                <Bar dataKey="pass" fill="#10b981" name="Pass %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fee Collection Status */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Collection Status</CardTitle>
            <CardDescription>Payment collection breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={feeCollectionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {feeCollectionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gender Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Student Gender Distribution</CardTitle>
            <CardDescription>Male vs Female students</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* SECTION 5: QUICK ACTIONS & RECENT ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks & shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/teachers/add">
                <Plus className="w-4 h-4 mr-2" />
                Add New Teacher
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/learners/add">
                <Plus className="w-4 h-4 mr-2" />
                Enroll New Learner
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/attendance/students">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark Attendance
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/fees">
                <DollarSign className="w-4 h-4 mr-2" />
                Manage Fees
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/school-admin/reports">
                <BarChart3 className="w-4 h-4 mr-2" />
                Generate Reports
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your school</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/school-admin/dashboard">
                View all
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD:Frontend/src/pages/auth/school-admin/Dashboard.tsx
            {activities.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No recent activity yet. Start by adding teachers and learners to your school.
              </div>
            )}
=======
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const statusColors = {
                  success: 'border-l-green-500 bg-green-50 dark:bg-green-900/20',
                  warning: 'border-l-amber-500 bg-amber-50 dark:bg-amber-900/20',
                  info: 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20',
                };
                
                return (
                  <div 
                    key={activity.id}
                    className={`border-l-4 p-3 rounded-lg flex items-start justify-between ${statusColors[activity.type]}`}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                      {activity.time}
                    </span>
                  </div>
                );
              })}
            </div>
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c:Frontend/src/pages/school-admin/Dashboard.tsx
          </CardContent>
        </Card>
      </div>

<<<<<<< HEAD:Frontend/src/pages/auth/school-admin/Dashboard.tsx
      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Performance Overview</CardTitle>
          <CardDescription>Assessment completion rates by grade level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].map((grade) => (
              <div key={grade} className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">{grade}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  0%
                </p>
                <p className="text-xs text-muted-foreground mt-1">completed</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
=======
      {/* SECTION 6: KEY ALERTS & NOTICES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm p-2 bg-red-50 dark:bg-red-900/20 rounded border-l-2 border-l-red-500">
              <p className="font-medium text-red-900 dark:text-red-200">55 students</p>
              <p className="text-xs text-red-700 dark:text-red-300">with overdue fees</p>
            </div>
            <div className="text-sm p-2 bg-amber-50 dark:bg-amber-900/20 rounded border-l-2 border-l-amber-500">
              <p className="font-medium text-amber-900 dark:text-amber-200">12 students</p>
              <p className="text-xs text-amber-700 dark:text-amber-300">with low attendance (below 75%)</p>
            </div>
            <div className="text-sm p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-l-blue-500">
              <p className="font-medium text-blue-900 dark:text-blue-200">5 teachers</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">pending leave approvals</p>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-l-blue-500">
              <p className="font-medium text-blue-900 dark:text-blue-200">Parent-Teacher Meeting</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">Next Friday, 3:00 PM</p>
            </div>
            <div className="text-sm p-2 bg-purple-50 dark:bg-purple-900/20 rounded border-l-2 border-l-purple-500">
              <p className="font-medium text-purple-900 dark:text-purple-200">Term 2 Exams Begin</p>
              <p className="text-xs text-purple-700 dark:text-purple-300">Next Week Monday</p>
            </div>
            <div className="text-sm p-2 bg-green-50 dark:bg-green-900/20 rounded border-l-2 border-l-green-500">
              <p className="font-medium text-green-900 dark:text-green-200">School Sports Day</p>
              <p className="text-xs text-green-700 dark:text-green-300">In 2 weeks</p>
            </div>
          </CardContent>
        </Card>
      </div>
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c:Frontend/src/pages/school-admin/Dashboard.tsx
    </div>
  );
}