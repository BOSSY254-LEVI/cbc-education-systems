import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/teacher-teaching.mp4';

const roles = ['Student', 'Teacher', 'Parent', 'Admin'] as const;
type Role = typeof roles[number];

export default function HeroSection() {
  const [selectedRole, setSelectedRole] = useState<Role>('Student');
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
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
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-[hsl(222,47%,11%)]"
          />
        )}
        <div className="absolute inset-0 bg-[hsl(222,47%,11%)]/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6">
            Mastery-Based Learning for Every Student
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
            Nonea empowers K-12 schools with a complete Competency-Based Education system. 
            Track progress, manage curriculum, and achieve excellence through personalized pathways.
          </p>

          {/* Role Selector */}
          <div className="mb-8">
            <p className="text-xs font-medium text-white/60 mb-3 tracking-wide">I AM A:</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-5 py-2 rounded text-sm font-medium transition-all ${
                    selectedRole === role
                      ? 'bg-[hsl(207,90%,54%)] text-white'
                      : 'bg-white text-foreground hover:bg-white/90'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              size="lg" 
              className="bg-[hsl(207,90%,54%)] hover:bg-[hsl(207,90%,48%)] text-white px-6"
              asChild
            >
              <Link to="/login">Explore Dashboard</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,34%)] text-white px-6"
              asChild
            >
              <Link to="#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
