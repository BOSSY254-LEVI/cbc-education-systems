import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Check, 
  MessageCircle,
  Play,
  ArrowRight,
  Award,
  Shield,
  Zap,
  BrainCircuit,
  GraduationCap,
  LineChart,
  BookMarked,
  Star,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  FileText,
  Calendar,
  Bell,
  BarChart3,
  Video,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Constants & Data
const FEATURES = [
  { icon: BookMarked, text: 'CBC Curriculum Tools', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: BrainCircuit, text: 'Mastery Tracking', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Users, text: 'Multi-Portal Access', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: LineChart, text: 'Real-time Analytics', color: 'text-orange-600', bg: 'bg-orange-50' },
];

const BENEFITS = [
  { icon: Check, text: 'CBC competency tracking' },
  { icon: Check, text: 'Automated progress reports' },
  { icon: Check, text: 'Parent-teacher communication portal' },
  { icon: Check, text: 'Student mastery analytics' },
  { icon: Check, text: 'Digital portfolio management' },
  { icon: Check, text: 'Strand and sub-strand monitoring' },
];

const CORE_CAPABILITIES = [
  {
    icon: Calendar,
    title: 'Smart Timetabling',
    description: 'AI-powered automated timetable generation that respects teacher availability and resource constraints.'
  },
  {
    icon: FileText,
    title: 'Assessment Management',
    description: 'Create, distribute, and grade assessments aligned with CBC competency framework.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Deep insights into student performance with strand-level analytics and predictive insights.'
  },
  {
    icon: Bell,
    title: 'Communication Hub',
    description: 'Bulk SMS, email notifications, and in-app messaging to keep all stakeholders connected.'
  },
  {
    icon: Users,
    title: 'Multi-Role Portals',
    description: 'Dedicated dashboards for teachers, students, parents, and administrators with role-based access.'
  },
  {
    icon: TrendingUp,
    title: 'Learning Progress Tracking',
    description: 'Monitor individual and class-wide progress on learning outcomes and competencies in real-time.'
  }
];

const PRICING_PLANS = {
  basic: {
    name: 'Basic Plan',
    subtitle: 'Perfect for small to medium schools',
    features: [
      'Up to 500 students',
      'CBC Assessment Analysis',
      'Smart Timetable Generation',
      'Bulk SMS (500 messages/month)',
      'Parent Portal Access',
      'Mobile App Access',
      'Email Support'
    ]
  },
  premium: {
    name: 'Premium Plan',
    subtitle: 'For large schools and institutions',
    popular: true,
    features: [
      'Unlimited students',
      'Advanced CBC Analytics',
      'AI-Powered Timetabling',
      'Unlimited Bulk SMS',
      'Advanced Parent Portal',
      'Priority Mobile App Features',
      '24/7 Phone Support',
      'Custom Integrations',
      'Data Export & Backup'
    ]
  }
};

const PARTNER_SCHOOLS = [
  { name: "Shema School", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop" },
  { name: "Darnen House", logo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&h=200&fit=crop" },
  { name: "Royal Academy", logo: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=200&h=200&fit=crop" },
  { name: "Ridges Academy", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop" },
  { name: "Mwiki High School", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop" },
  { name: "Shimba Hills School", logo: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=200&h=200&fit=crop" },
  { name: "Hope Academy", logo: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=200&h=200&fit=crop" },
  { name: "Heri School", logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=200&fit=crop" },
  { name: "Nexa International", logo: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=200&fit=crop" },
  { name: "Green Valley School", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop" },
  { name: "St. Mary's Academy", logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=200&fit=crop" },
  { name: "Brighten Academy", logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop" },
];

const STATS = {
  hero: [
    { number: '250+', label: 'Schools' },
    { number: '45K+', label: 'Students' },
    { number: '98%', label: 'Satisfaction' },
  ],
  trust: [
    { number: '250+', label: 'Partner Schools', gradient: 'from-blue-600 to-blue-700' },
    { number: '47+', label: 'Counties', gradient: 'from-teal-600 to-teal-700' },
    { number: '45K+', label: 'Active Students', gradient: 'from-emerald-600 to-emerald-700' },
    { number: '5+', label: 'Years Experience', gradient: 'from-blue-600 to-teal-600' },
  ]
};

const TESTIMONIALS = [
  {
    quote: "EduStack has transformed how we track CBC competencies. The platform is intuitive and saves us countless hours.",
    author: "Mrs. Jane Kamau",
    role: "Headteacher, Green Valley Academy",
    rating: 5
  },
  {
    quote: "Parent engagement has increased by 70% since we started using EduStack's communication features.",
    author: "Mr. David Otieno",
    role: "Principal, Hope International School",
    rating: 5
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. We can now intervene early when students struggle.",
    author: "Dr. Sarah Mwangi",
    role: "Academic Director, Royal Academy",
    rating: 5
  }
];

// Reusable Components
const SchoolNode = ({ logo, name, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 150 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-slate-800 shadow-xl border-4 border-white dark:border-slate-700 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
        {logo ? (
          <img src={logo} alt={name || "School badge"} className="w-full h-full object-contain p-2" />
        ) : (
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-400" />
        )}
      </div>
      
      <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {name && (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
            <div className="font-semibold">{name}</div>
          </div>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45"></div>
        </div>
      )}
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, text, color, bg, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + index * 0.1 }}
    className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all group cursor-pointer border border-border/50"
  >
    <div className={`p-2 rounded-lg ${bg} group-hover:scale-110 transition-transform`}>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <span className="font-semibold text-slate-900 dark:text-white text-sm">{text}</span>
  </motion.div>
);

const StatCard = ({ stat, index, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay + index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group"
  >
    <div className="relative p-6 md:p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      <div className="relative">
        <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
          {stat.number}
        </div>
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
          {stat.label}
        </div>
      </div>
    </div>
  </motion.div>
);

const PricingCard = ({ plan, planKey, hoveredCard, setHoveredCard, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg ${plan.popular ? 'border-3 border-orange-400' : 'border-2 border-slate-200 dark:border-slate-700'} p-8 relative transition-all duration-300 transform ${
      hoveredCard === planKey ? 'scale-105 shadow-2xl' : ''
    }`}
    onMouseEnter={() => setHoveredCard(planKey)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
          <Star className="w-4 h-4 fill-white" />
          Most Popular
        </span>
      </div>
    )}

    <div className={`mb-6 ${plan.popular ? 'mt-2' : ''}`}>
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
      <p className="text-slate-600 dark:text-slate-400">{plan.subtitle}</p>
    </div>

    <div className="mb-8">
      <div className="text-5xl font-bold text-emerald-500 mb-1">Get A Quote</div>
      <p className="text-slate-500 dark:text-slate-400">per term</p>
    </div>

    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <motion.li 
          key={index} 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.1 + index * 0.05 }}
          className="flex items-start gap-3"
        >
          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
        </motion.li>
      ))}
    </ul>

    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg`}>
      Get a Quote
    </Button>
  </motion.div>
);

// Main Component
export default function EduStackPlatformPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Header/>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg mb-6"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">Why Choose EduStack</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
              >
                Kenya's Leading{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  CBC Management Platform
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
              >
                EduStack is an all-in-one Competency-Based Curriculum platform designed to streamline CBC implementation, enhance learning outcomes, and simplify competency tracking for Kenyan schools, all while ensuring transparency among students, teachers, and parents.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {FEATURES.map((feature, index) => (
                  <FeatureCard key={index} {...feature} index={index} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all group">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-border hover:bg-secondary/50">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="relative">
              <div className="relative flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative z-10 w-full max-w-2xl"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-4 border-4 border-slate-700">
                    <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                      <img src="/anoter.png" alt="EduStack CBC Dashboard" className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="w-32 h-2 bg-slate-700 mx-auto mt-2 rounded-full"></div>
                  <div className="w-48 h-3 bg-slate-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-20 z-20 w-48 lg:w-56"
                >
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-xl p-2 border-4 border-slate-600">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img src="data:image/jpeg;base64,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" alt="Tablet View" className="w-full h-auto" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 bottom-20 z-20 w-32 lg:w-36"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-2 border-4 border-slate-700">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <img src="data:image/jpeg;base64,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" alt="Mobile View" className="w-full h-auto" />
                    </div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section - NEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                School Management Tools
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Everything you need to run a modern, efficient school in one integrated platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{capability.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ministry Approved CTA Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-400 to-emerald-500 dark:from-blue-600 dark:to-emerald-700 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6"
              >
                <Award className="w-4 h-4" />
                <span className="text-sm font-bold">Ministry Approved</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              >
                Designed for Kenya's CBC Implementation
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/90 mb-8 leading-relaxed"
              >
                Rated as the top CBC management system in Kenya, we've earned our reputation through successful implementation in schools nationwide and positive feedback from educators, parents, and education officials.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group">
                  Book A Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
              >
                {STATS.hero.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-extrabold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:h-auto"
          >
            <img src="/Gemini_Generated_Image_jrstonjrstonjrst.png" alt="Kenyan students learning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:h-auto"
          >
            <img src="/Gemini_Generated_Image_2iv0jt2iv0jt2iv0.png" alt="African students in classroom" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32 blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6"
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm font-bold">Trusted Platform</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              >
                Complete CBC Management Solution
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/90 mb-8 leading-relaxed"
              >
                From competency tracking to portfolio management, handle every aspect of CBC implementation efficiently with our comprehensive suite of tools designed specifically for Kenyan schools.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mb-8"
              >
                {BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="p-1 bg-white/20 rounded-full">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Educators Nationwide
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              See what school leaders have to say about their experience with EduStack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate-300 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Schools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted By{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500">
                Schools Countrywide
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Join a growing community of schools that trust our system to streamline operations.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center mb-16">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
              className="relative z-30"
            >
              <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-2xl flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl animate-pulse"></div>
                <div className="relative text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2">ao</div>
                  <div className="text-white font-semibold text-xl md:text-2xl">schoolbest</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0">
              {PARTNER_SCHOOLS.map((school, index) => {
                const positions = [
                  { top: '8%', left: '8%', mdLeft: '15%' },
                  { top: '15%', left: '18%', mdLeft: '25%' },
                  { top: '3%', left: '35%', mdLeft: '40%' },
                  { top: '8%', left: '50%', mdLeft: '52%' },
                  { top: '12%', right: '12%', mdRight: '18%' },
                  { top: '18%', right: '5%', mdRight: '10%' },
                  { top: '35%', right: '8%', mdRight: '12%' },
                  { top: '45%', right: '15%', mdRight: '20%' },
                  { bottom: '18%', right: '10%', mdRight: '15%' },
                  { bottom: '12%', left: '45%', mdLeft: '48%' },
                  { bottom: '15%', left: '15%', mdLeft: '22%' },
                  { top: '40%', left: '5%', mdLeft: '8%' },
                ];
                
                const pos = positions[index];
                const style = {
                  top: pos.top,
                  bottom: pos.bottom,
                  left: pos.left || (pos.mdLeft && `${pos.mdLeft}`),
                  right: pos.right || (pos.mdRight && `${pos.mdRight}`),
                };

                return (
                  <div key={index} className="absolute" style={style}>
                    <SchoolNode name={school.name} logo={school.logo} delay={0.4 + index * 0.05} />
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {STATS.trust.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} delay={1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg mb-6"
            >
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-bold">Simple Pricing</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Affordable Pricing for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Kenyan Schools
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choose the plan that works best for your school's needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <PricingCard plan={PRICING_PLANS.basic} planKey="basic" hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} delay={0.2} />
            <PricingCard plan={PRICING_PLANS.premium} planKey="premium" hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} delay={0.3} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              All plans include M-Pesa payment options and free setup assistance
            </p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </motion.a>
      
      <Footer/>
    </div>
  );
}