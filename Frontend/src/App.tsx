import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import AIAssistant from "@/components/ai-assistant/AIAssistant";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ContactPage from './pages/website-pages/Contact'
// Public Pages
import HomePage from "@/pages/website-pages/HomePage";
import AboutPage from "@/pages/website-pages/AboutPage";
import SupportPage from "@/pages/website-pages/SupportPage";
import PrivacyPage from "@/pages/website-pages/PrivacyPage";
import CBCStandardsPage from "@/pages/website-pages/CBCStandardsPage";
import TermsPage from "@/pages/website-pages/TermsPage";
import LoginPage from "@/pages/auth/LoginPage";
import GetStartedPage from "@/pages/website-pages/signup";
import Analytics from "@/pages/website-pages/Platform"
import TeamMmembersPage from '@/pages/website-pages/TeamPage';
import ClientsPage from '@/pages/website-pages/ClientsPage';
import Feature from "@/pages/website-pages/Features";

// Admin Registration
import SchoolRegistration from "@/pages/admin-registration/SchoolRegistration";

// Student Pages
import LearningMaterials from "@/pages/student/LearningMaterials";
import Grade1 from "@/pages/student/Grade1";
import Grade2 from "@/pages/student/Grade2";

// Teacher Pages
import TeachingResources from "@/pages/teacher/TeachingResources";

// Layouts
import DashboardLayout from "@/components/layout/DashboardLayout";

// School Admin Pages
import SchoolDashboard from "@/pages/auth/school-admin/Dashboard";
import TeachersListPage from "@/pages/auth/school-admin/teachers/TeachersList";
import AddTeacherPage from "@/pages/auth/school-admin/teachers/AddTeacher";
import LearnersListPage from "@/pages/auth/school-admin/learners/LearnersList";
import AddLearnerPage from "@/pages/auth/school-admin/learners/AddLearner";
import EducationalResourcesPage from "./pages/website-pages/Educationalresourcespage";
import AdminLoginPage from '@/pages/auth/AdminLoginPage';
import UserManagement from "./pages/Users/UserManagement";
import ModernDashboard from "@/components/ModernDashboard";

// Placeholder Pages
import CurriculumPage from "@/pages/auth/school-admin/Curriculum";
import ReportsPage from "@/pages/auth/school-admin/Reports";
import SettingsPage from "@/pages/auth/school-admin/Settings";

import NotFound from "./pages/website-pages/NotFound";
import EduStackPlatformPage from "@/pages/website-pages/Platform";
import TeamMembersPage from "@/pages/website-pages/TeamPage";

const queryClient = new QueryClient();

// Protected Route Component
function ProtectedRoute({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check for specific role if required
  if (requiredRole && user?.role !== requiredRole) {
    // Redirect based on user role or to home if no role matches
    if (user?.role === 'school_admin') {
      return <Navigate to="/school-admin/dashboard" replace />;
    } else if (user?.role === 'student') {
      return <Navigate to="/student/learning-materials" replace />;
    } else if (user?.role === 'teacher') {
      return <Navigate to="/teacher/resources" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }
  
  return <>{children}</>;
}

// Admin Route Component - Specifically for admin access
function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }
  
  // Check if authenticated AND has admin role
  if (!isAuthenticated || user?.role !== 'school_admin') {
    return <Navigate to="/admin-login" replace />;
  }
  
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/explore" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/resources" element={<EducationalResourcesPage />} />
      <Route path="/analytics" element={<EduStackPlatformPage />} />
      <Route path="/company/client" element={<ClientsPage/>} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      
      <Route path="/company/our-team" element={<TeamMembersPage/>} />
      <Route path="/cbc-standards" element={<CBCStandardsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      <Route path="/signup" element={<GetStartedPage />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/features" element={<Feature/>} />
      
      {/* Demo Routes - Public access to ModernDashboard */}
      <Route path="/dashboard-demo" element={<ModernDashboard />} />
      <Route path="/demo" element={<ModernDashboard />} />
      
      {/* Student Routes */}
      <Route path="/student/learning-materials" element={
        <ProtectedRoute requiredRole="student">
          <LearningMaterials />
        </ProtectedRoute>
      } />
      <Route path="/student/grade/1" element={
        <ProtectedRoute requiredRole="student">
          <Grade1 />
        </ProtectedRoute>
      } />
      <Route path="/student/grade/2" element={
        <ProtectedRoute requiredRole="student">
          <Grade2 />
        </ProtectedRoute>
      } />
      
      {/* Teacher Routes */}
      <Route path="/teacher/resources" element={
        <ProtectedRoute requiredRole="teacher">
          <TeachingResources />
        </ProtectedRoute>
      } />
      
      {/* Admin Registration Route */}
      <Route path="/admin/register-school" element={<SchoolRegistration />} />
      
      {/* Admin Login - if already authenticated as admin, redirect to dashboard */}
      <Route path="/admin-login" element={
        <AdminLoginRedirect />
      } />
      
      {/* School Admin Routes - Protected with AdminRoute */}
      <Route path="/school-admin/*" element={
        <AdminRoute>
          <DashboardLayout>
            <Routes>
              <Route path="dashboard" element={<SchoolDashboard />} />
              <Route path="teachers" element={<TeachersListPage />} />
              <Route path="teachers/add" element={<AddTeacherPage />} />
              <Route path="learners" element={<LearnersListPage />} />
              <Route path="learners/add" element={<AddLearnerPage />} />
              <Route path="curriculum" element={<CurriculumPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="demo" element={<ModernDashboard/>} />
              {/* Redirect /school-admin to /school-admin/dashboard */}
              <Route path="" element={<Navigate to="dashboard" replace />} />
            </Routes>
          </DashboardLayout>
        </AdminRoute>
      } />
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Helper component to handle admin login redirect
function AdminLoginRedirect() {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }
  
  // If already authenticated as admin, redirect to dashboard
  if (isAuthenticated && user?.role === 'school_admin') {
    return <Navigate to="/school-admin/dashboard" replace />;
  }
  
  // Otherwise show login page
  return <AdminLoginPage />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
          <AIAssistant />
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;