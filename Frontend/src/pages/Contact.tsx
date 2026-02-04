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

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // ───────────────────────────────────────────────
  // Debug: Check if the environment variable is loaded
  // Open browser console (F12) after page load to see this
  // ───────────────────────────────────────────────
  console.log('=== Web3Forms ENV DEBUG ===');
  console.log('VITE_WEB3FORMS_KEY raw value:', import.meta.env.VITE_WEB3FORMS_KEY);
  console.log('VITE_WEB3FORMS_KEY length:', import.meta.env.VITE_WEB3FORMS_KEY?.length ?? 'missing');
  console.log('VITE_WEB3FORMS_KEY trimmed:', import.meta.env.VITE_WEB3FORMS_KEY?.trim() ?? 'missing');
  console.log('All env keys available:', Object.keys(import.meta.env));
  console.log('=== END DEBUG ===');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const accessKey = (import.meta.env.VITE_WEB3FORMS_KEY ?? '').trim();

    if (!accessKey) {
      console.error('Web3Forms access key is missing or empty');
      setStatus({
        type: 'error',
        message: 'Contact form configuration error. Please email us directly at hello@edustack.ke instead.'
      });
      setIsSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    formDataToSend.append('access_key', accessKey);
    formDataToSend.append('from_name', formData.fullName || 'School Contact');
    formDataToSend.append(
      'subject',
      formData.category
        ? `${formData.category.charAt(0).toUpperCase() + formData.category.slice(1)} Inquiry – EduStack`
        : 'New EduStack Inquiry'
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json'
        }
      });

      const json = await response.json();

      if (json.success) {
        setStatus({
          type: 'success',
          message: 'Your CBC inquiry has been received. Our curriculum experts will reach out shortly.'
        });
        setFormData({ category: '', fullName: '', email: '', message: '' });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: json.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
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
            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">
              Connect with EduStack
            </span>
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
                {/* Web3Forms hidden fields */}
                <input
                  type="hidden"
                  name="access_key"
                  value={import.meta.env.VITE_WEB3FORMS_KEY ?? ''}
                />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

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
                      <Users
                        className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                          focusedField === 'fullName' ? 'text-blue-500' : 'text-slate-400'
                        }`}
                      />
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
                    <Mail
                      className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-blue-500' : 'text-slate-400'
                      }`}
                    />
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
                    rows={5}
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
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status message */}
                {status && (
                  <div
                    className={`mt-4 p-4 rounded-2xl text-center font-medium ${
                      status.type === 'success'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

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

              {/* Support Hours, Why Choose, School CTA, Features, News, Success Stories sections */}
              {/* ... (unchanged from your original code – omitted here for brevity) ... */}
            </motion.div>
          </div>

          {/* Features, Recent News, Success Stories sections */}
          {/* ... (unchanged – keep your original content here) ... */}
        </main>

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

function ContactInfoCard({ icon, title, detail, link }: { icon: React.ReactNode; title: string; detail: string; link: string }) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 flex items-center gap-5 hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 shadow-md">
        {React.cloneElement(icon as React.ReactElement, {
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
