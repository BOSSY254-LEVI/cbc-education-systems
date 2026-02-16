import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  // Logo section icons
  Building2,
  // Academics icons
  LayoutDashboard,
  GraduationCap,
  Users,
  ClipboardList,
  // Attendance & Performance icons
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Award,
  // Administration icons
  CalendarDays,
  Layers,
  TrendingUp,
  // Finance & HR icons
  DollarSign,
  Settings,
  Wallet,
  // Reports & Settings icons
  BarChart3,
  Shield,
  // Common icons
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

// Menu item interface
interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

// Menu section interface
interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Menu data structure
const menuSections: MenuSection[] = [
  {
    title: "ACADEMICS",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/school-admin/dashboard" },
      { id: "students", label: "Students", icon: GraduationCap, href: "/school-admin/learners" },
      { id: "teachers", label: "Teachers", icon: Users, href: "/school-admin/teachers" },
      { id: "assignments", label: "Teacher Assignments", icon: ClipboardList, href: "/school-admin/assignments" },
      { id: "parents", label: "Parents", icon: Users, href: "/school-admin/parents" },
    ]
  },
  {
    title: "ATTENDANCE & PERFORMANCE",
    items: [
      { id: "student-att", label: "Student Attendance", icon: Calendar, href: "/school-admin/attendance/students" },
      { id: "teacher-att", label: "Teacher Attendance", icon: Clock, href: "/school-admin/attendance/teachers" },
      { id: "exams", label: "Exams Management", icon: BookOpen, href: "/school-admin/exams" },
      { id: "results", label: "Final Results", icon: FileText, href: "/school-admin/results" },
      { id: "conduct", label: "Conduct Students", icon: Award, href: "/school-admin/conduct" },
    ]
  },
  {
    title: "ADMINISTRATION",
    items: [
      { id: "curriculum", label: "Curriculum", icon: BookOpen, href: "/school-admin/curriculum" },
      { id: "terms", label: "Term Management", icon: CalendarDays, href: "/school-admin/terms" },
      { id: "exam-groups", label: "Exam Groups", icon: ClipboardList, href: "/school-admin/exam-groups" },
      { id: "classes", label: "Classes & Subjects", icon: Layers, href: "/school-admin/classes" },
      { id: "promotions", label: "Promotions & Graduations", icon: TrendingUp, href: "/school-admin/promotions" },
    ]
  },
  {
    title: "FINANCE & HR",
    items: [
      { id: "fees", label: "Fees", icon: DollarSign, href: "/school-admin/fees" },
      { id: "monthly", label: "Monthly Setup", icon: Settings, href: "/school-admin/monthly" },
      { id: "salary", label: "Salary", icon: Wallet, href: "/school-admin/salary" },
    ]
  },
  {
    title: "REPORTS & SETTINGS",
    items: [
      { id: "reports", label: "Reports", icon: BarChart3, href: "/school-admin/reports" },
      { id: "users", label: "Users", icon: Shield, href: "/school-admin/users" },
      { id: "settings", label: "Settings", icon: Settings, href: "/school-admin/settings" },
    ]
  }
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Track expanded sections (all expanded by default)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    menuSections.reduce((acc, section) => ({ ...acc, [section.title]: true }), {})
  );

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-[280px] bg-gradient-to-b from-gray-900 to-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Section */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-700 bg-gray-900">
          <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center shadow-lg">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg tracking-tight">Edu Stack</span>
            <span className="text-gray-400 text-xs">School Management</span>
          </div>
          <button 
            className="ml-auto lg:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-4">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                <span>{section.title}</span>
                {expandedSections[section.title] ? (
                  <ChevronDown className="w-3 h-3 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-3 h-3 transition-transform duration-300" />
                )}
              </button>
              
              {/* Menu Items - Collapsible */}
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                expandedSections[section.title] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="space-y-1 mt-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                          isActive 
                            ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg shadow-gray-500/25" 
                            : "text-gray-400 hover:text-white hover:bg-gray-700"
                        )}
                      >
                        {/* Active indicator bar */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gray-500 rounded-r-full" />
                        )}
                        
                        <Icon className={cn(
                          "w-[18px] h-[18px] flex-shrink-0",
                          isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                        )} />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-700 bg-gray-900/50">
          <div className="flex items-center gap-3 mb-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-lg">
              <span className="text-sm font-semibold text-white">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b bg-card flex items-center px-4 lg:px-6">
          <button 
            className="lg:hidden p-2 -ml-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
