import { cn } from '@/lib/utils';
import { ThemeColors, Notification } from '@/types/dashboard';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeColors;
  notifications: Notification[];
  totalBadges: number;
}

export default function NotificationDropdown({ 
  isOpen, 
  onClose, 
  theme, 
  notifications,
  totalBadges 
}: NotificationDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className={cn(
        "absolute right-0 top-12 w-80 rounded-lg shadow-xl z-50 border",
        theme.header.bg,
        theme.header.border
      )}>
        <div className={cn("p-4 border-b", theme.header.border)}>
          <h3 className={cn("font-semibold", theme.header.text)}>Notifications</h3>
        </div>
        
        {notifications.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={cn(
                  "p-4 border-b transition-colors cursor-pointer last:border-0",
                  theme.header.border,
                  theme.sidebar.hoverBg
                )}
              >
                <p className={cn("text-sm font-medium", theme.header.text)}>{notif.message}</p>
                <p className={cn("text-xs mt-1", theme.sidebar.textSecondary)}>{notif.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={cn("p-8 text-center text-sm", theme.sidebar.textSecondary)}>
            No notifications
          </div>
        )}
      </div>
    </>
  );
}
