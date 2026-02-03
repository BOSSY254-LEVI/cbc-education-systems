import { GraduationCap, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const values = [
  {
    icon: GraduationCap,
    title: 'Excellence in Education',
    description: 'We believe every student deserves access to world-class education that prepares them for the future.'
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Building strong partnerships between students, teachers, and parents for better outcomes.'
  },
  {
    icon: Award,
    title: 'Innovation First',
    description: 'Continuously evolving our platform with the latest educational technology and research.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Supporting educational institutions worldwide in their journey toward competency-based education.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Education Officer',
    bio: 'Former curriculum director with 15+ years in educational innovation.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Tech veteran with experience in edtech platforms serving millions of users.'
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Head of Research',
    bio: 'Educational researcher specializing in competency-based learning systems.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About EduStack CBC Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforming education through innovative competency-based learning platforms
              that empower students, teachers, and schools to achieve excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Nonea, we believe that education should be personalized, mastery-focused, and
                future-ready. Our Competency-Based Education (CBE) platform empowers schools to
                shift from traditional time-based learning to outcomes-based education where
                students progress when they demonstrate mastery of skills and knowledge.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                Founded in 2020, we've partnered with over 150 schools across Kenya and East Africa,
                helping them implement modern educational practices that prepare students for the
                challenges of the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the experts driving educational innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">150+</div>
              <div className="text-primary-foreground/80">Partner Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">50K+</div>
              <div className="text-primary-foreground/80">Students Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">92%</div>
              <div className="text-primary-foreground/80">Mastery Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">4.9/5</div>
              <div className="text-primary-foreground/80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
