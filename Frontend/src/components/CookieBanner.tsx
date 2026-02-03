import { useState } from 'react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const CONSENT_ACCEPTED = 'accepted';
const CONSENT_REJECTED = 'rejected';

// Check localStorage synchronously to avoid flash of content
const getInitialBannerState = () => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return !consent;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(getInitialBannerState);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CONSENT_ACCEPTED);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CONSENT_REJECTED);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-lg border bg-card text-card-foreground shadow-lg p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or reject cookies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 min-w-fit">
              <Button 
                variant="outline" 
                onClick={handleReject}
                className="w-full sm:w-auto"
              >
                Reject All
              </Button>
              <Button 
                onClick={handleAccept}
                className="w-full sm:w-auto"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
