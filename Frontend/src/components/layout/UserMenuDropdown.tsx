import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeColors, User } from '@/types/dashboard';
import { User as UserIcon, Lock, LogOut } from 'lucide-react';

interface UserMenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onLogout: () => void;
  theme: ThemeColors;
}

export default function UserMenuDropdown({ 
  isOpen, 
  onClose, 
  user, 
  onLogout, 
  theme 
}: UserMenuDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className={cn(
        "absolute right-0 top-12 w-64 rounded-lg shadow-xl z-50 border overflow-hidden",
        theme.header.bg,
        theme.header.border
      )}>
        <div className={cn("p-4 border-b", theme.header.border)}>
          <p className={cn("font-semibold", theme.header.text)}>{user?.firstName} {user?.lastName}</p>
          <p className={cn("text-xs truncate", theme.sidebar.textSecondary)}>{user?.email}</p>
        </div>
        
        <div className="py-2">
          <Link
            to="/school-admin/settings/profile"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-4 py-2 text-sm transition-colors",
              theme.sidebar.hoverBg,
              theme.sidebar.text
            )}
          >
            <UserIcon className="w-4 h-4" />
            Profile Settings
          </Link>
          <Link
            to="/school-admin/settings/security"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-4 py-2 text-sm transition-colors",
              theme.sidebar.hoverBg,
              theme.sidebar.text
            )}
          >
            <Lock className="w-4 h-4" />
            Security
          </Link>
        </div>
        
        <div className={cn("border-t py-2", theme.header.border)}>
          <button
            onClick={onLogout}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors",
              "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            )}
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}
