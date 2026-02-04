import { 
  GraduationCap, 
  Users, 
  Award, 
  Globe, 
  Target, 
  Heart, 
  Lightbulb, 
  Rocket,
  Sparkles,
  Star,
  Shield,
  Zap,
  Clock,
  TrendingUp,
  Users2,
  BookOpen,
  ChevronRight,
  MapPin,
  Calendar,
  CheckCircle,
  Target as TargetIcon,
  Brain,
  GitBranch,
  Cpu,
  Database,
  Cloud,
  Lock,
  ArrowRight,
  Quote,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
  Award as AwardIcon,
  Trophy,
  BadgeCheck,
  Leaf,
  HeartHandshake,
  Eye,
  LineChart,
  PieChart,
  BarChart3,
  type LucideIcon
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const values = [
  {
    icon: GraduationCap,
    title: 'Excellence in Education',
    description: 'We believe every student deserves access to world-class education that prepares them for the future.',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Research-backed methodologies', 'Continuous improvement', 'Quality assurance']
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Building strong partnerships between students, teachers, and parents for better outcomes.',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Multi-stakeholder engagement', 'Community building', 'Feedback loops']
  },
  {
    icon: Award,
    title: 'Innovation First',
    description: 'Continuously evolving our platform with the latest educational technology and research.',
    gradient: 'from-purple-500 to-pink-500',
    features: ['AI integration', 'Real-time analytics', 'Future-ready tools']
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Supporting educational institutions worldwide in their journey toward competency-based education.',
    gradient: 'from-orange-500 to-red-500',
    features: ['Cultural adaptation', 'Local partnerships', 'Global standards']
  }
];

const milestones = [
  {
    year: '2020',
    title: 'Platform Launch',
    description: 'Started with 5 pilot schools in Nairobi',
    icon: Rocket,
    color: 'text-blue-500'
  },
  {
    year: '2021',
    title: 'Series A Funding',
    description: 'Secured $2M to expand development',
    icon: TrendingUp,
    color: 'text-emerald-500'
  },
  {
    year: '2022',
    title: 'Regional Expansion',
    description: 'Expanded to 50+ schools across East Africa',
    icon: Globe,
    color: 'text-purple-500'
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Launched AI-powered assessment tools',
    icon: Brain,
    color: 'text-pink-500'
  },
  {
    year: '2024',
    title: 'Global Recognition',
    description: 'Awarded "Best EdTech Platform" at UN Summit',
    icon: Trophy,
    color: 'text-amber-500'
  }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Education Officer',
    bio: 'Former curriculum director with 15+ years in educational innovation.',
    expertise: ['Curriculum Design', 'Learning Science', 'Teacher Training'],
    avatar: 'SJ',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Tech veteran with experience in edtech platforms serving millions of users.',
    expertise: ['AI/ML', 'Scalable Systems', 'Cloud Architecture'],
    avatar: 'MC',
    social: { linkedin: '#', github: '#' }
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Head of Research',
    bio: 'Educational researcher specializing in competency-based learning systems.',
    expertise: ['Educational Research', 'Assessment Design', 'Data Analytics'],
    avatar: 'AH',
    social: { linkedin: '#', scholar: '#' }
  },
  {
    name: 'Robert Kimani',
    role: 'Head of Partnerships',
    bio: 'Former Ministry of Education official with extensive regional network.',
    expertise: ['Government Relations', 'School Integration', 'Community Engagement'],
    avatar: 'RK',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Lisa Wang',
    role: 'Product Director',
    bio: 'Product leader from Silicon Valley with focus on user experience.',
    expertise: ['UX Design', 'Product Strategy', 'User Research'],
    avatar: 'LW',
    social: { linkedin: '#', dribbble: '#' }
  },
  {
    name: 'David Omondi',
    role: 'Engineering Lead',
    bio: 'Full-stack developer passionate about scalable educational solutions.',
    expertise: ['DevOps', 'Frontend Architecture', 'API Design'],
    avatar: 'DO',
    social: { linkedin: '#', github: '#' }
  }
];

const partners = [
  { name: 'Ministry of Education', logo: '🏛️', type: 'Government' },
  { name: 'Google for Education', logo: '🔍', type: 'Technology' },
  { name: 'Microsoft Education', logo: '💻', type: 'Technology' },
  { name: 'Cambridge Assessment', logo: '🎓', type: 'Education' },
  { name: 'UNESCO', logo: '🌐', type: 'International' },
  { name: 'World Bank', logo: '🏦', type: 'Funding' },
  { name: 'Stanford GSE', logo: '📚', type: 'Research' },
  { name: 'African Union', logo: '🤝', type: 'Regional' }
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  return (
    <motion.span
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="font-bold"
    >
      {value}
    </motion.span>
  );
};

const GlowingCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('relative group', className)}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 group-hover:duration-200" />
    <div className="relative bg-card rounded-3xl p-8 border border-border/50">
      {children}
    </div>
  </div>
);

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [100, 0, 100],
            y: [50, 0, 50],
            rotate: [180, 360, 540]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <Header/>
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 w-4 h-4 rounded-full bg-blue-500/30"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute top-40 right-20 w-6 h-6 rounded-full bg-emerald-500/30"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-40 left-1/4 w-8 h-8 rounded-full bg-purple-500/30"
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">Our Journey</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6"
            >
              Redefining Education with{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Competency-Based Learning
                </span>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-xl"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed"
            >
              We're building the future of education—where every student progresses based on mastery, 
              not time spent. Join us in transforming classrooms worldwide.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 mb-12"
            >
              {[
                { icon: Users2, value: '150+', label: 'Partner Schools' },
                { icon: GraduationCap, value: '50K+', label: 'Students Empowered' },
                { icon: Award, value: '92%', label: 'Success Rate' },
                { icon: Globe, value: '5+', label: 'Countries' }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Join Our Mission
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                Watch Our Story
                <Youtube className="inline ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-4">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-primary">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Building the Future of Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a bold idea to a global platform transforming how students learn
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500" />
            
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-12 ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                  style={{ width: '45%' }}
                >
                  <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} transform translate-x-1/2 -translate-y-1/2`}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <GlowingCard>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-2xl font-bold ${milestone.color}`}>{milestone.year}</div>
                      <div className="h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </GlowingCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6">
                  <Target className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Empowering Every{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Learner's Journey
                  </span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At <span className="font-bold text-emerald-600">EduStack CBC Systems</span>, we're revolutionizing education by shifting the focus from seat time to mastery. Our platform enables personalized learning pathways where students progress based on demonstrated competence.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We partner with schools globally to implement competency-based education frameworks that prepare students for the challenges of the 21st century—equipping them with critical thinking, collaboration, and problem-solving skills.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: CheckCircle, text: 'Evidence-based learning' },
                    { icon: CheckCircle, text: 'Personalized pathways' },
                    { icon: CheckCircle, text: 'Real-time progress tracking' },
                    { icon: CheckCircle, text: 'Teacher empowerment tools' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Interactive Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <GlowingCard>
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                    <TargetIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    To create a world where education is personalized, mastery is celebrated, and every student can reach their full potential regardless of their starting point.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">By 2026</div>
                        <div className="text-sm text-muted-foreground">Reach 1 million students globally</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">AI Integration</div>
                        <div className="text-sm text-muted-foreground">Personalized learning recommendations</div>
                      </div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
              <Heart className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-primary">Our Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Drives{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Everything We Do
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define our impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <GlowingCard className="h-full">
                    <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {value.description}
                    </p>
                    <div className="space-y-2">
                      {value.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </GlowingCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-4">
              <Users2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-primary">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Visionary Leaders
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse experts united by a passion for transforming education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <GlowingCard className="h-full">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="relative mb-6"
                    >
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                        {member.avatar}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-primary font-medium mb-4">{member.role}</div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <motion.a
                          key={platform}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={link}
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                        >
                          {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                          {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                          {platform === 'github' && <GitBranch className="w-5 h-5" />}
                          {platform === 'scholar' && <BookOpen className="w-5 h-5" />}
                          {platform === 'dribbble' && <Eye className="w-5 h-5" />}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-4">
              <HeartHandshake className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-primary">Strategic Partners</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Global Leaders
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with world-class organizations to transform education
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl transition-all text-center group"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <div className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {partner.type}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Making Education{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                More Effective
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '150+', label: 'Partner Schools', icon: Users2, color: 'from-blue-400 to-cyan-400' },
              { value: '50K+', label: 'Students Empowered', icon: GraduationCap, color: 'from-emerald-400 to-teal-400' },
              { value: '92%', label: 'Mastery Growth Rate', icon: TrendingUp, color: 'from-purple-400 to-pink-400' },
              { value: '4.9★', label: 'User Satisfaction', icon: Star, color: 'from-amber-400 to-orange-400' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, type: 'spring' }}
                      className="absolute -inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-white/90 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-16 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '35%', label: 'Faster Progress', sublabel: 'Compared to traditional methods' },
                { value: '89%', label: 'Teacher Satisfaction', sublabel: 'Based on annual surveys' },
                { value: '94%', label: 'Parent Engagement', sublabel: 'Regular platform usage' },
                { value: '24/7', label: 'Support Coverage', sublabel: 'Global support team' }
              ].map((metric, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-sm text-white/60">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <GlowingCard>
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-6">
                  <Rocket className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-primary">Join Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to Transform{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Education Together?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Whether you're a school leader, educator, or passionate about education technology—let's work together to create better learning experiences for every student.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Partner With Us
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-secondary text-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
                  >
                    View Careers
                    <Users2 className="inline ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

