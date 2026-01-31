import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import heroVideo from '@/assets/teacher-teaching.mp4';
import heroBg from '@/assets/hero-bg.jpg';
import cbeLogo from '@/assets/cbe-logo.jpg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [videoError, setVideoError] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      navigate('/school-admin/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            poster={heroBg}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        )}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-[hsl(222,47%,11%)]/80" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md animate-fade-in z-10">
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white p-3 mb-4 shadow-xl">
            <img src={cbeLogo} alt="CBE Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-white">CBC Education Platform</h1>
          <p className="text-white/70 mt-1">Competency-Based Education Management</p>
        </div>

        <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl text-center text-foreground">Sign in to your account</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Enter your details provided by the school to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 bg-background border-input"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 bg-background border-input"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <Link to="/forgot-password" className="text-primary hover:underline font-medium">
                Forgot your password?
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t border-border text-center text-sm text-muted-foreground">
              <p className="font-medium">Demo logins:</p>
              <p className="mt-1">admin@school.edu • teacher@school.edu • parent@school.edu</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
