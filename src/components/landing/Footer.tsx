import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const platformLinks = [
  { label: 'Curriculum Management', href: '/curriculum' },
  { label: 'Progress Tracking', href: '/progress' },
  { label: 'Assessment Tools', href: '/assessments' },
  { label: 'Analytics Dashboard', href: '/analytics' },
  { label: 'Resource Library', href: '/resources' },
];

const resourceLinks = [
  { label: 'CBE Methodology', href: '/methodology' },
  { label: 'Teacher Training', href: '/training' },
  { label: 'Parent Guides', href: '/guides' },
  { label: 'Success Stories', href: '/stories' },
  { label: 'System Status', href: '/status' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-primary">Nonea</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Empowering K-12 education through modern competency-based learning systems. 
              Tracking mastery, fostering growth.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-foreground mb-4 relative">
              Platform
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary -mb-1" />
            </h4>
            <ul className="space-y-3 mt-4">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-4 relative">
              Resources
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary -mb-1" />
            </h4>
            <ul className="space-y-3 mt-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary -mb-1" />
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Education Plaza, Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <a href="mailto:support@nonea.edu" className="text-muted-foreground hover:text-primary">
                  support@nonea.edu
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-muted-foreground shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Nonea CBE Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
