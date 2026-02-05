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
  BookMarked
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EduStackPlatformPage() {
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
                        src="/public/anoter.png" 
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