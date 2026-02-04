import React from 'react';
import { motion } from 'framer-motion';
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
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CloudSchoolSystemPage() {
  const features = [
    { icon: BookOpen, text: '9+ Modules', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: DollarSign, text: 'Automated Payments', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Users, text: 'Manage Portals', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Wifi, text: 'Remote Access', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const benefits = [
    'Real-time attendance tracking',
    'Automated fee management',
    'Parent-teacher communication',
    'Student performance analytics',
    'Timetable management',
    'Online admissions',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 py-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white shadow-lg mb-6"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">Why Cloud School System</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
              >
                The Best School Management Software{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  In Kenya
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
              >
                Cloud School System is an all-in-one online school management platform designed to streamline school management, enhance learning outcomes, and simplify payment processes for educational institutions, all while ensuring transparency among all stakeholders.
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
                      className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all group cursor-pointer border border-slate-200 dark:border-slate-700"
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
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
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
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop" 
                        alt="Cloud School System Dashboard"
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
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop" 
                        alt="Tablet View"
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
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop" 
                        alt="Mobile View"
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
            className="bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
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
                <span className="text-sm font-bold">Award Winning</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              >
                Comparable to the World's Best SMS
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/90 mb-8 leading-relaxed"
              >
                Rated as the best school management system in Kenya we have earned a reputation for excellence based on positive feedback from students, teachers, and administrators.
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
                  { number: '500+', label: 'Schools' },
                  { number: '50K+', label: 'Students' },
                  { number: '99%', label: 'Uptime' },
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
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop" 
              alt="Students walking in school hallway"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
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
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop" 
              alt="Happy students in classroom"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-transparent"></div>
          </motion.div>

          {/* Right - Benefits Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
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
                Everything Your School Needs in One Platform
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/90 mb-8 leading-relaxed"
              >
                From admissions to graduations, manage every aspect of your school efficiently with our comprehensive suite of tools.
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
                  className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group"
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
    </div>
  );
}