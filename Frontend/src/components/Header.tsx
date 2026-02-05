import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, Unlock, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setScrolled(currentScrollY > 50);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at top - show header
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg'
          : 'bg-white',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Gemini_Generated_Image_8kqr628kqr628kqr.png"
              alt="EduStack"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/explore"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition"
            >
              Explore
            </Link>
            
            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-foreground/80 hover:text-primary transition flex items-center gap-1">
                Company
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform",
                  companyDropdownOpen && "rotate-180"
                )} />
              </button>
              
              {companyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2">
                  <Link
                    to="/company/client"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary/50 hover:text-primary transition"
                  >
                    Client
                  </Link>
                  <Link
                    to="/company/our-team"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary/50 hover:text-primary transition"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {['Analytics', 'Platform', 'About', 'Support', 'Contact'].map(item => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Auth */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">
                <Unlock className="w-4 h-4 mr-2" />
                Log in
              </Link>
            </Button>

            <Button size="sm" asChild>
              <Link to="/login">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-2 rounded-lg border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link
                to="/explore"
                className="px-4 py-3 rounded-lg hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </Link>
              
              {/* Company Section for Mobile */}
              <div className="px-4 py-3">
                <div className="text-sm font-medium text-foreground/80 mb-2">Company</div>
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    to="/company/client"
                    className="text-sm text-foreground/70 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Client
                  </Link>
                  <Link
                    to="/company/our-team"
                    className="text-sm text-foreground/70 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              </div>

              {['Analytics', 'Platform', 'About', 'Support', 'Contact'].map(item => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="px-4 py-3 rounded-lg hover:bg-secondary/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}