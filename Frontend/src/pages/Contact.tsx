import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ExternalLink,
  School,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: '',
    fullName: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'cfeb2c00-e884-4f54-8496-315cf9f85c42',
          category: formData.category,
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          subject: `CBC Education System - ${formData.category}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ category: '', fullName: '', email: '', message: '' });
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      
      {/* Header Component */}
      <Header />
      
      <div className="pt-24 pb-12">
      {/* Hero Header Section */}
      <section className="container mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-4"
        >
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Connect with EduStack</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001f3f] dark:text-white mb-4"
        >
          Empowering Kenya's <span className="text-blue-600">CBC Journey</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Have questions about our competency-based tracking tools? Our team of specialists is ready to assist your school's transition.
        </motion.p>
      </section>

      <main className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl shadow-blue-500/5 border border-slate-100 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden group"
          >
            {/* Animated background blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 dark:bg-blue-400/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600/5 dark:bg-indigo-400/10 rounded-full -ml-16 -mb-16 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Form Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                  <div className="w-1.5 h-7 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  Send Us Your Inquiry
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm ml-6">We'll respond within 24 hours</p>
              </div>

              {/* Two Column Layout for First Row */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                    Inquiry Type
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('category')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 rounded-2xl text-slate-900 dark:text-white transition-all duration-300 appearance-none cursor-pointer ${
                      focusedField === 'category'
                        ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10'
                        : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <option value="">Select Topic...</option>
                    <option value="implementation">CBC Implementation</option>
                    <option value="training">Teacher Training</option>
                    <option value="technical">Platform Support</option>
                    <option value="partnership">School Partnership</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                  </select>
                </div>
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                    Full Name
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'fullName' ? 'text-blue-500' : 'text-slate-400'
                    }`} />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-14 pr-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 rounded-2xl text-slate-900 dark:text-white transition-all duration-300 ${
                        focusedField === 'fullName'
                          ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10 scale-[1.01]'
                          : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* School Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                  School Email Address
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'email' ? 'text-blue-500' : 'text-slate-400'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@school.ke"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-14 pr-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 rounded-2xl text-slate-900 dark:text-white transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10 scale-[1.01]'
                        : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  />
                </div>
              </div>

              {/* Your Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                  Your Message
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can EduStack help your institution transform CBC learning?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 rounded-2xl text-slate-900 dark:text-white transition-all duration-300 resize-none ${
                    focusedField === 'message'
                      ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10 scale-[1.01]'
                      : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                />
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-bold text-green-700 dark:text-green-400">
                    Message Sent Successful
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-500 text-center">
                    Your CBC inquiry has been received. Our curriculum experts will reach out shortly.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#0047AB] to-[#0056D6] hover:from-[#003580] hover:to-[#0047AB] text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-2">
                <span className="text-red-500">*</span> Required fields
              </p>
            </form>
          </motion.div>

          {/* Right: Info Panels */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Contact Cards */}
            <div className="grid gap-4">
              <ContactInfoCard 
                icon={<Phone />} 
                title="Call Support" 
                detail="+254 111 276 271" 
                link="tel:+254111276271"
              />
              <ContactInfoCard 
                icon={<Mail />} 
                title="Email Us" 
                detail="hello@edustack.ke" 
                link="mailto:hello@edustack.ke"
              />
              <ContactInfoCard 
                icon={<MapPin />} 
                title="Nairobi HQ" 
                detail="Westlands, Nairobi, Kenya" 
                link="https://goo.gl/maps/nairobi-westlands"
              />
            </div>

            {/* Support Hours */}
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-[#001f3f] to-[#002855] text-white relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-all duration-500" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all">
                    <Clock className="w-5 h-5 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-bold">Support Hours</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                    <span className="text-blue-200">Mon — Fri</span>
                    <span className="font-mono font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                    <span className="text-blue-200">Saturday</span>
                    <span className="font-mono font-semibold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-200">Emergency Support</span>
                    <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold uppercase tracking-tight flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      24/7 Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose EduStack */}
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Why EduStack?</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold">CBC-Aligned:</span> Designed specifically for Kenya's curriculum
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold">Teacher-Friendly:</span> Intuitive tools that save time
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold">Trusted:</span> Used by 500+ schools nationwide
                  </p>
                </div>
              </div>
            </div>

            {/* School Registration CTA */}
            <div className="p-8 rounded-[32px] border-2 border-dashed border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 flex flex-col items-center text-center gap-4 hover:border-solid hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 group cursor-pointer">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <School className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Register Your School</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Ready to digitize your CBC records today?</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all group-hover:gap-3">
                Access Onboarding
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Platform Features</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Everything You Need for <span className="text-blue-600">CBC Success</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive tools designed to make competency-based learning seamless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-7 h-7" />,
                title: "Competency Tracking",
                description: "Monitor student progress across all CBC strands with real-time analytics",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <BookOpen className="w-7 h-7" />,
                title: "Digital Reports",
                description: "Generate professional CBC-compliant report cards in minutes",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Teacher Collaboration",
                description: "Share resources and insights across your teaching team",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Parent Engagement",
                description: "Keep parents informed with automated progress updates",
                color: "from-pink-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent News Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Latest Updates</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Recent News
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Stay updated with the latest developments in CBC education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "A Proud Milestone for Our In-House Baristas!",
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
                category: "Achievement"
              },
              {
                title: "ISK Educators Present at SENIA Unplugged 2025",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
                category: "Education"
              },
              {
                title: "Celebrating 50 Years of ISK: Join the Journey",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
                category: "Milestone"
              },
              {
                title: "Celebrating Our Tech Team's Expertise at Google Nairobi",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
                category: "Technology"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <button className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Trusted by Kenya's <span className="text-blue-600">Leading Schools</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Join hundreds of institutions transforming education with EduStack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "500+",
                label: "Schools Using EduStack",
                icon: <School className="w-5 h-5" />
              },
              {
                metric: "50,000+",
                label: "Students Tracked",
                icon: <Users className="w-5 h-5" />
              },
              {
                metric: "99.9%",
                label: "Platform Uptime",
                icon: <Zap className="w-5 h-5" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-extrabold mb-2">{stat.metric}</div>
                  <div className="text-blue-100 font-medium text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer Component */}
      <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        input:focus, textarea:focus, select:focus {
          outline: none;
        }
        
        ::placeholder {
          color: #94a3b8;
        }

        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 1.25rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 3rem;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

function ContactInfoCard({ icon, title, detail, link }) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 flex items-center gap-5 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 shadow-md">
        {React.cloneElement(icon, { 
          className: 'w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors group-hover:text-white' 
        })}
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {detail}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
    </a>
  );
}
