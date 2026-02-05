import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Check, 
  Smartphone, 
  DollarSign, 
  Users, 
  Wifi,
  MessageCircle,
  Play,
  ArrowRight,
  BookOpen,
  Award,
  Shield,
  Zap,
  BrainCircuit,
  GraduationCap,
  Target,
  LineChart,
  BookMarked,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// School Node Component with badge images
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
          <img 
            src={logo} 
            alt={name || "School badge"} 
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-400" />
        )}
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* School name tooltip */}
      {name && (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
            <div className="font-semibold">{name}</div>
          </div>
          {/* Arrow */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45"></div>
        </div>
      )}
    </motion.div>
  );
};

export default function EduStackPlatformPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    { icon: BookMarked, text: 'CBC Curriculum Tools', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: BrainCircuit, text: 'Mastery Tracking', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Users, text: 'Multi-Portal Access', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: LineChart, text: 'Real-time Analytics', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const benefits = [
    'CBC competency tracking',
    'Automated progress reports',
    'Parent-teacher communication portal',
    'Student mastery analytics',
    'Digital portfolio management',
    'Strand and sub-strand monitoring',
  ];

  const basicFeatures = [
    'Up to 500 students',
    'CBC Assessment Analysis',
    'Smart Timetable Generation',
    'Bulk SMS (500 messages/month)',
    'Parent Portal Access',
    'Mobile App Access',
    'Email Support'
  ];

  const premiumFeatures = [
    'Unlimited students',
    'Advanced CBC Analytics',
    'AI-Powered Timetabling',
    'Unlimited Bulk SMS',
    'Advanced Parent Portal',
    'Priority Mobile App Features',
    '24/7 Phone Support',
    'Custom Integrations',
    'Data Export & Backup'
  ];

  // Partner schools data
  const partnerSchools = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Header/>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 py-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
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

              {/* Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all group cursor-pointer border border-border/50"
                    >
                      <div className={`p-2 rounded-lg ${feature.bg} group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">
                        {feature.text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-border hover:bg-secondary/50"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Device Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative flex items-center justify-center">
                {/* Desktop Mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative z-10 w-full max-w-2xl"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-4 border-4 border-slate-700">
                    <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                      <img 
                        src="/anoter.png" 
                        alt="EduStack CBC Dashboard"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  {/* Desktop stand */}
                  <div className="w-32 h-2 bg-slate-700 mx-auto mt-2 rounded-full"></div>
                  <div className="w-48 h-3 bg-slate-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Tablet Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-20 z-20 w-48 lg:w-56"
                >
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-xl p-2 border-4 border-slate-600">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=600&fit=crop" 
                        alt="Tablet View - Student Portal"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 bottom-20 z-20 w-32 lg:w-36"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-2 border-4 border-slate-700">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=600&fit=crop" 
                        alt="Mobile View - Parent Portal"
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue CTA Section with Students Image */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          
          {/* Left - Blue CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-400 to-emerald-500 dark:from-blue-600 dark:to-emerald-700 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background Pattern */}
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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group"
                >
                  Book A Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
              >
                {[
                  { number: '250+', label: 'Schools' },
                  { number: '45K+', label: 'Students' },
                  { number: '98%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-extrabold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Students Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:h-auto"
          >
            <img 
              src="/Gemini_Generated_Image_jrstonjrstonjrst.png" 
              alt="Kenyan students learning"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with Students */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          
          {/* Left - Students Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:h-auto"
          >
            <img 
              src="/Gemini_Generated_Image_2iv0jt2iv0jt2iv0.png" 
              alt="African students in classroom"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
          </motion.div>

          {/* Right - Benefits Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background Pattern */}
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
                {benefits.map((benefit, index) => (
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
                    <span className="text-lg font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Schools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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

          {/* Network Visualization */}
          <div className="relative max-w-6xl mx-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center mb-16">
            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
              className="relative z-30"
            >
              <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-2xl flex items-center justify-center relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl animate-pulse"></div>
                <div className="relative text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2">ao</div>
                  <div className="text-white font-semibold text-xl md:text-2xl">schoolbest</div>
                </div>
              </div>
            </motion.div>

            {/* School Nodes - Responsive positioning */}
            <div className="absolute inset-0">
              {/* Top Left Cluster */}
              <div className="absolute top-[8%] left-[8%] md:left-[15%]">
                <SchoolNode name={partnerSchools[0].name} logo={partnerSchools[0].logo} delay={0.4} />
              </div>
              
              <div className="absolute top-[15%] left-[18%] md:left-[25%]">
                <SchoolNode name={partnerSchools[1].name} logo={partnerSchools[1].logo} delay={0.45} />
              </div>

              {/* Top Center */}
              <div className="absolute top-[3%] left-[35%] md:left-[40%]">
                <SchoolNode name={partnerSchools[2].name} logo={partnerSchools[2].logo} delay={0.5} />
              </div>

              <div className="absolute top-[8%] left-[50%] md:left-[52%]">
                <SchoolNode name={partnerSchools[3].name} logo={partnerSchools[3].logo} delay={0.55} />
              </div>

              {/* Top Right Cluster */}
              <div className="absolute top-[12%] right-[12%] md:right-[18%]">
                <SchoolNode name={partnerSchools[4].name} logo={partnerSchools[4].logo} delay={0.6} />
              </div>

              <div className="absolute top-[18%] right-[5%] md:right-[10%]">
                <SchoolNode name={partnerSchools[5].name} logo={partnerSchools[5].logo} delay={0.65} />
              </div>

              {/* Middle Right */}
              <div className="absolute top-[35%] right-[8%] md:right-[12%]">
                <SchoolNode name={partnerSchools[6].name} logo={partnerSchools[6].logo} delay={0.7} />
              </div>

              <div className="absolute top-[45%] right-[15%] md:right-[20%]">
                <SchoolNode name={partnerSchools[7].name} logo={partnerSchools[7].logo} delay={0.75} />
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-[18%] right-[10%] md:right-[15%]">
                <SchoolNode name={partnerSchools[8].name} logo={partnerSchools[8].logo} delay={0.8} />
              </div>

              {/* Bottom Center */}
              <div className="absolute bottom-[12%] left-[45%] md:left-[48%]">
                <SchoolNode name={partnerSchools[9].name} logo={partnerSchools[9].logo} delay={0.85} />
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-[15%] left-[15%] md:left-[22%]">
                <SchoolNode name={partnerSchools[10].name} logo={partnerSchools[10].logo} delay={0.9} />
              </div>

              {/* Middle Left */}
              <div className="absolute top-[40%] left-[5%] md:left-[8%]">
                <SchoolNode name={partnerSchools[11].name} logo={partnerSchools[11].logo} delay={0.95} />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { number: '250+', label: 'Partner Schools', gradient: 'from-blue-600 to-blue-700' },
              { number: '47+', label: 'Counties', gradient: 'from-teal-600 to-teal-700' },
              { number: '45K+', label: 'Active Students', gradient: 'from-emerald-600 to-emerald-700' },
              { number: '5+', label: 'Years Experience', gradient: 'from-blue-600 to-teal-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative p-6 md:p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden">
                  {/* Gradient background on hover */}
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Pricing Header */}
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

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Basic Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 border-slate-200 dark:border-slate-700 p-8 transition-all duration-300 transform ${
                hoveredCard === 'basic' ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard('basic')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Basic Plan</h3>
                <p className="text-slate-600 dark:text-slate-400">Perfect for small to medium schools</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-emerald-500 mb-1">
                  Get A Quote
                </div>
                <p className="text-slate-500 dark:text-slate-400">per term</p>
              </div>

              <ul className="space-y-4 mb-8">
                {basicFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
                Get a Quote
              </Button>
            </motion.div>

            {/* Premium Plan Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-3 border-orange-400 p-8 relative transition-all duration-300 transform ${
                hoveredCard === 'premium' ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard('premium')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  Most Popular
                </span>
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Premium Plan</h3>
                <p className="text-slate-600 dark:text-slate-400">For large schools and institutions</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-emerald-500 mb-1">
                  Get A Quote
                </div>
                <p className="text-slate-500 dark:text-slate-400">per term</p>
              </div>

              <ul className="space-y-4 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
                Get a Quote
              </Button>
            </motion.div>
          </div>

          {/* Footer Note */}
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