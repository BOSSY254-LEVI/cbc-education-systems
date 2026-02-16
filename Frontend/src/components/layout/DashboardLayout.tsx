import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  Building2,
  Menu,
  X,
  ChevronDown,
  Bell,
  Search,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
} from 'lucide-react';

// Types
import { DashboardLayoutProps, Notification } from '@/types/dashboard';

// Config
import { lightTheme, darkTheme } from '@/config/theme';
import { menuSections, getTotalBadges } from '@/config/menuData';

// Components
import Breadcrumb from './Breadcrumb';
import NotificationDropdown from './NotificationDropdown';
import UserMenuDropdown from './UserMenuDropdown';

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Theme state - persist to localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved) return saved === 'dark';
    return true;
  });

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme-mode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const theme = isDarkMode ? darkTheme : lightTheme;
  
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Sample notifications
  const notifications: Notification[] = [
    { id: 1, message: "New student enrollment from Class 10A", time: "5 minutes ago" },
    { id: 2, message: "Fee payment received: $5,000", time: "2 hours ago" },
    { id: 3, message: "Teacher attendance incomplete", time: "1 hour ago" },
  ];

  // Get total badge count
  const totalBadges = getTotalBadges();

  const toggleMenuItem = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isMenuItemActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href);
  };

  // Close menus when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={cn("min-h-screen flex", theme.main.bg)}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
<<<<<<< HEAD
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
=======
        "fixed inset-y-0 left-0 z-50 w-64 flex flex-col transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto border-r",
        theme.sidebar.bg,
        theme.sidebar.border,
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo - Sticky at top */}
        <div className={cn(
          "flex-shrink-0 px-6 py-6 border-b flex items-center justify-between",
          theme.sidebar.logoSection,
          theme.sidebar.border
        )}>
          <Link to="/school-admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className={cn("font-bold text-lg hidden sm:inline", theme.sidebar.text)}>
              Edu Stack
            </span>
          </Link>
          <button 
            className={cn("lg:hidden transition-colors", theme.sidebar.hoverBg)}
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

<<<<<<< HEAD
        {/* Navigation Sections */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
=======
        {/* Navigation - Scrollable */}
        <nav className={cn("flex-1 overflow-y-auto px-3 py-4")}>
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
          {menuSections.map((section) => (
            <div key={section.title} className="mb-6">
              {/* Section Header */}
<<<<<<< HEAD
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
=======
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
              <div className={cn(
                "px-3 py-2 text-xs font-semibold uppercase tracking-wider",
                theme.sidebar.textSecondary
              )}>
<<<<<<< HEAD
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
=======
                {section.title}
              </div>
              
              {/* Menu Items */}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = isMenuItemActive(item.href);
                  const isExpanded = expandedItems[item.id];
                  const hasSubmenu = item.submenu && item.submenu.length > 0;

                  return (
                    <div key={item.id}>
                      {/* Main Menu Item */}
                      {hasSubmenu ? (
                        <button
                          onClick={() => toggleMenuItem(item.id)}
                          className={cn(
                            "w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
                            isActive
                              ? cn(theme.sidebar.activeBg, theme.sidebar.text, "font-medium")
                              : cn(theme.sidebar.text, "opacity-70", theme.sidebar.hoverBg, "hover:opacity-100")
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span>{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className={cn(
                                "flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold",
                                theme.badge
                              )}>
                                {item.badge}
                              </span>
                            )}
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200 flex-shrink-0",
                                isExpanded ? "rotate-180" : "rotate-0"
                              )}
                            />
                          </div>
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
                            isActive
                              ? cn(theme.sidebar.activeBg, theme.sidebar.text, "font-medium")
                              : cn(theme.sidebar.text, "opacity-70", theme.sidebar.hoverBg, "hover:opacity-100")
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span>{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className={cn(
                              "flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold flex-shrink-0",
                              theme.badge
                            )}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}

                      {/* Submenu Items */}
                      {hasSubmenu && isExpanded && (
                        <div className={cn(
                          "mt-1 ml-4 space-y-1 border-l pl-3",
                          theme.sidebar.border
                        )}>
                          {item.submenu?.map((subitem) => {
                            const isSubActive = location.pathname === subitem.href;
                            return (
                              <Link
                                key={subitem.id}
                                to={subitem.href}
                                className={cn(
                                  "flex items-center gap-3 px-4 py-2 text-xs rounded-lg transition-colors",
                                  isSubActive
                                    ? cn(theme.sidebar.activeBg, theme.sidebar.text)
                                    : cn(theme.sidebar.text, "opacity-60", theme.sidebar.hoverBg, "hover:opacity-100")
                                )}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                                <span>{subitem.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
              </div>
            </div>
          ))}
        </nav>

<<<<<<< HEAD
        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-700 bg-gray-900/50">
          <div className="flex items-center gap-3 mb-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-lg">
              <span className="text-sm font-semibold text-white">
=======
        {/* User Profile Section - Sticky at bottom */}
        <div className={cn(
          "flex-shrink-0 p-4 border-t",
          theme.sidebar.border
        )}>
          <div className={cn(
            "flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer mb-3",
            theme.sidebar.hoverBg
          )}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-white">
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn("text-sm font-medium", theme.sidebar.text)}>
                {user?.firstName} {user?.lastName}
              </p>
<<<<<<< HEAD
              <p className="text-xs text-gray-400 truncate">
=======
              <p className={cn("text-xs", theme.sidebar.textSecondary)}>
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
                {user?.email}
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
=======
          <button
>>>>>>> f22d392e0692f29263c85a0c169ccdb756fb8b1c
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors",
              "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            )}
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - Sticky */}
        <header className={cn(
          "flex-shrink-0 h-16 border-b flex items-center px-4 lg:px-8 sticky top-0 z-30",
          theme.header.bg,
          theme.header.border
        )}>
          {/* Left Section */}
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Menu Button */}
            <button 
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                theme.header.buttonHover
              )}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumb */}
            <div className="hidden sm:block">
              <Breadcrumb pathname={location.pathname} theme={theme} />
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search Button */}
            <button
              className={cn(
                "p-2 rounded-lg transition-colors hidden md:flex",
                theme.header.buttonHover
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Help Button */}
            <button
              className={cn(
                "p-2 rounded-lg transition-colors hidden md:flex",
                theme.header.buttonHover
              )}
              aria-label="Help"
            >
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-lg transition-colors",
                theme.header.buttonHover
              )}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className={cn(
                  "relative p-2 rounded-lg transition-colors",
                  theme.header.buttonHover
                )}
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {totalBadges > 0 && (
                  <span className={cn(
                    "absolute top-1 right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center font-bold",
                    theme.badge
                  )}>
                    {totalBadges}
                  </span>
                )}
              </button>
              <NotificationDropdown
                isOpen={notificationOpen}
                onClose={() => setNotificationOpen(false)}
                notifications={notifications}
                totalBadges={totalBadges}
                theme={theme}
              />
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={cn(
                  "flex items-center gap-2 p-1 rounded-lg transition-colors",
                  theme.header.buttonHover
                )}
                aria-label="User menu"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </span>
                </div>
              </button>
              <UserMenuDropdown
                isOpen={userMenuOpen}
                onClose={() => setUserMenuOpen(false)}
                user={user}
                onLogout={handleLogout}
                theme={theme}
              />
            </div>
          </div>
        </header>

        {/* Page Content - Scrollable */}
        <main className={cn("flex-1 overflow-auto p-4 lg:p-8", theme.main.bg)}>
          <div className="animate-fade-in">
            {/* Wrapper to ensure proper text color on children */}
            <div className={theme.main.text}>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
