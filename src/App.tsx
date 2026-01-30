import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Public Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/auth/LoginPage";

// Layouts
import DashboardLayout from "@/components/layout/DashboardLayout";

// School Admin Pages
import SchoolDashboard from "@/pages/school-admin/Dashboard";
import TeachersListPage from "@/pages/school-admin/teachers/TeachersList";
import AddTeacherPage from "@/pages/school-admin/teachers/AddTeacher";
import LearnersListPage from "@/pages/school-admin/learners/LearnersList";
import AddLearnerPage from "@/pages/school-admin/learners/AddLearner";

// Placeholder Pages
import CurriculumPage from "@/pages/school-admin/Curriculum";
import ReportsPage from "@/pages/school-admin/Reports";
import SettingsPage from "@/pages/school-admin/Settings";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  
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
  
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* School Admin Routes */}
      <Route path="/school-admin/*" element={
        <ProtectedRoute>
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
            </Routes>
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
