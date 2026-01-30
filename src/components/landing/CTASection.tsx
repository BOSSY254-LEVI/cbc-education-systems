import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left - Text */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start?</h2>
              <p className="text-muted-foreground">
                Join hundreds of schools moving toward a mastery-first future with Nonea.
              </p>
            </div>

            {/* Center - Portal Buttons */}
            <div className="md:col-span-1 flex flex-col gap-3">
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <Link to="/login?role=student">Student Login</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link to="/login?role=teacher">Teacher Portal</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link to="/login?role=parent">Parent Access</Link>
              </Button>
            </div>

            {/* Right - Demo CTA */}
            <div className="md:col-span-1 bg-muted/50 rounded-xl p-6 border">
              <h3 className="text-lg font-bold text-foreground mb-2">Request a Demo</h3>
              <p className="text-muted-foreground text-sm mb-4">
                See how Nonea fits your school's unique curriculum needs.
              </p>
              <Button className="w-full" asChild>
                <Link to="/demo">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
