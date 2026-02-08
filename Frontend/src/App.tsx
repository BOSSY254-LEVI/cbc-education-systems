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
import Analytics from "@/pages/website-pages/Platform"
import TeamMmembersPage from '@/pages/website-pages/TeamPage';
import ClientsPage from '@/pages/website-pages/ClientsPage';

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
import SchoolDashboard from "@/pages/school-admin/Dashboard";
import TeachersListPage from "@/pages/school-admin/teachers/TeachersList";
import AddTeacherPage from "@/pages/school-admin/teachers/AddTeacher";
import LearnersListPage from "@/pages/school-admin/learners/LearnersList";
import AddLearnerPage from "@/pages/school-admin/learners/AddLearner";
import EducationalResourcesPage from "./pages/website-pages/Educationalresourcespage";

// Placeholder Pages
import CurriculumPage from "@/pages/school-admin/Curriculum";
import ReportsPage from "@/pages/school-admin/Reports";
import SettingsPage from "@/pages/school-admin/Settings";

import NotFound from "./pages/website-pages/NotFound";
import EduStackPlatformPage from "@/pages/website-pages/Platform";
import TeamMembersPage from "@/pages/website-pages/TeamPage";

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
      <Route path="/contact" element={<ContactPage/>} />
      
      {/* Student Routes */}
      <Route path="/student/learning-materials" element={<LearningMaterials />} />
      <Route path="/student/grade/1" element={<Grade1 />} />
      <Route path="/student/grade/2" element={<Grade2 />} />
      
      {/* Teacher Routes */}
      <Route path="/teacher/resources" element={<TeachingResources />} />
      
      {/* Admin Registration Route */}
      <Route path="/admin/register-school" element={<SchoolRegistration />} />
      
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
          <ScrollToTop />
          <AppRoutes />
          
          {/* WhatsApp Float Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            viewport={{ once: false }}
            className="fixed bottom-24 right-8 z-50 group"
          >
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chat with us
            </span>
          </motion.div>
          
          <AIAssistant />
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
