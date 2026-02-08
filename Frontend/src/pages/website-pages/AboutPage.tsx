import React, { useRef } from 'react';
import { 
  GraduationCap, Users, Award, Globe, Target, Heart, Sparkles, 
  Rocket, TrendingUp, Brain, Trophy, CheckCircle2, ArrowRight,
  Linkedin, Twitter, BookOpen, Eye, ChevronRight, Clock,
  Users2, Zap
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
/**
 * DESIGN SYSTEM:
 * Primary: Blue (#2563eb)
 * Secondary: Light Gray (#f3f4f6)
 * Text: Dark Gray (#1f2937)
 * Accent: Emerald (#10b981)
 */

// Standardized Font Sizes
const fontSize = {
  xs: 'text-xs',      // 12px - captions, badges
  sm: 'text-sm',      // 14px - labels, small text
  base: 'text-base',  // 16px - body text
  lg: 'text-lg',      // 18px - lead text
  xl: 'text-xl',      // 20px - small headings
  '2xl': 'text-2xl',  // 24px - section subheading
  '3xl': 'text-3xl',  // 30px - section heading
  '4xl': 'text-4xl',  // 36px - page heading
  '5xl': 'text-5xl',  // 48px - hero heading
};

// Reusable Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

// Section Header Component
const SectionHeader = ({ badge, title, subtitle, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
      <Icon className="w-4 h-4 text-blue-600" />
      <span className={`${fontSize.xs} font-semibold text-blue-600 uppercase tracking-widest`}>
        {badge}
      </span>
    </div>
    <h2 className={`${fontSize['4xl']} font-bold text-slate-900 mb-4`}>
      {title}
    </h2>
    <p className={`${fontSize.lg} text-slate-600 max-w-2xl mx-auto leading-relaxed`}>
      {subtitle}
    </p>
  </motion.div>
);

// Fade In Animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">
      {/* Header */}
    <Header/>

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-blue-600" />
              <span className={`${fontSize.sm} font-semibold text-blue-600 uppercase tracking-widest`}>
                About EduStack
              </span>
            </div>

            <h1 className={`${fontSize['5xl']} font-bold text-slate-900 leading-tight mb-6`}>
              Empowering African Education Through 
              <span className="text-blue-600"> Competency-Based Learning</span>
            </h1>

            <p className={`${fontSize.lg} text-slate-600 mb-8 max-w-2xl leading-relaxed`}>
              We're building the digital infrastructure for competency-based education where every student's 
              potential is unlocked through data-driven mastery, not just traditional assessment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 w-fit"
              >
                Our Mission
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-40 -z-10 blur-3xl" />
      </section>

      {/* ===== MISSION & VISION SECTION ===== */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Our Purpose"
            icon={Target}
            title="Mission & Vision"
            subtitle="Guiding principles that drive everything we do"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div {...fadeInUp} className="md:col-span-1">
              <Card className="p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className={`${fontSize['2xl']} font-bold text-slate-900 mb-4`}>
                  Our Mission
                </h3>
                <p className={`${fontSize.base} text-slate-600 leading-relaxed mb-6`}>
                  To empower educators with intelligent tools that facilitate personalized, mastery-based learning 
                  at scale. We believe the CBC curriculum is the bridge to building a more skilled, innovative workforce for Africa.
                </p>
                <ul className="space-y-3">
                  {[
                    'Real-time competency tracking',
                    'AI-powered personalization',
                    'Teacher empowerment through data'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className={fontSize.sm}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="md:col-span-1">
              <Card className="p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className={`${fontSize['2xl']} font-bold text-slate-900 mb-4`}>
                  Our Vision
                </h3>
                <p className={`${fontSize.base} text-slate-600 leading-relaxed mb-6`}>
                  A future where every African student has access to world-class, personalized education that 
                  recognizes and develops their unique competencies and potential, regardless of socioeconomic background.
                </p>
                <ul className="space-y-3">
                  {[
                    'Accessible to all schools',
                    'Equitable educational outcomes',
                    'Technology serving pedagogy'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className={fontSize.sm}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE ===== */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Milestones"
            icon={Clock}
            title="Our Journey"
            subtitle="From a small pilot to transforming education across Kenya"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-emerald-600 opacity-20" />

            <div className="space-y-12">
              {[
                {
                  year: '2020',
                  title: 'The Beginning',
                  description: 'Started with 5 pilot schools in Nairobi to test CBC assessment tools.',
                  icon: Rocket
                },
                {
                  year: '2021',
                  title: 'Rapid Growth',
                  description: 'Expanded to 30+ schools across Nairobi, Mombasa, and Kisumu.',
                  icon: TrendingUp
                },
                {
                  year: '2022',
                  title: 'Regional Expansion',
                  description: 'Reached 100+ schools with integrated reporting and analytics platform.',
                  icon: Globe
                },
                {
                  year: '2024',
                  title: 'AI Innovation',
                  description: 'Launched AI-powered assessment tools and predictive analytics for student success.',
                  icon: Brain
                }
              ].map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex gap-8 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <Card className="p-6">
                        <span className="text-blue-600 font-bold text-xl">{milestone.year}</span>
                        <h3 className={`${fontSize.xl} font-bold text-slate-900 mt-2 mb-2`}>
                          {milestone.title}
                        </h3>
                        <p className={`${fontSize.sm} text-slate-600`}>
                          {milestone.description}
                        </p>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-2/12 flex justify-center">
                      <motion.div
                        whileInView={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center flex-shrink-0 z-10"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Philosophy"
            icon={Heart}
            title="Our Core Values"
            subtitle="The principles that guide every decision we make"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'Constantly pushing boundaries to create better solutions for education.'
              },
              {
                icon: Trophy,
                title: 'Excellence',
                description: 'Committed to the highest standards in product quality and support.'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working closely with educators, schools, and communities.'
              },
              {
                icon: Globe,
                title: 'Impact',
                description: 'Measured by the success and growth of every student we serve.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="p-6 h-full text-center">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <h3 className={`${fontSize.lg} font-bold text-slate-900 mb-2`}>
                      {value.title}
                    </h3>
                    <p className={`${fontSize.sm} text-slate-600 leading-relaxed`}>
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="The Team"
            icon={Users2}
            title="Meet Our Leaders"
            subtitle="Passionate educators, engineers, and visionaries"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Chief Education Officer',
                bio: 'Former CBC curriculum specialist with 15+ years in education policy.',
                initials: 'SJ'
              },
              {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                bio: 'EdTech veteran who scaled platforms serving 2M+ students globally.',
                initials: 'MC'
              },
              {
                name: 'Dr. Amina Hassan',
                role: 'Head of Research',
                bio: 'PhD in Educational Technology, published researcher in African pedagogy.',
                initials: 'AH'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md"
                  >
                    {member.initials}
                  </motion.div>
                  <h3 className={`${fontSize.xl} font-bold text-slate-900 mb-1`}>
                    {member.name}
                  </h3>
                  <p className={`${fontSize.sm} text-blue-600 font-semibold mb-4`}>
                    {member.role}
                  </p>
                  <p className={`${fontSize.sm} text-slate-600 leading-relaxed`}>
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT METRICS ===== */}
      <section className="py-20 md:py-32 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '150+', label: 'Schools Transformed' },
              { number: '50K+', label: 'Students Impacted' },
              { number: '98%', label: 'Teacher Satisfaction' },
              { number: '24/7', label: 'System Uptime' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`${fontSize['5xl']} font-bold mb-2`}>
                  {stat.number}
                </div>
                <p className={`${fontSize.base} text-blue-100`}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className={`${fontSize['4xl']} font-bold mb-4`}>
              Ready to Transform Your School?
            </h2>
            <p className={`${fontSize.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}>
              Join 150+ schools across Kenya already using EduStack to improve CBC implementation 
              and student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </motion.button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
            <Footer/>
    </div>
  );
}