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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      'Your CBC inquiry has been received. Our curriculum experts will reach out shortly.'
    );

    setFormData({
      category: '',
      fullName: '',
      email: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      <Header />

      <div className="pt-24 pb-12">
        {/* Hero Header */}
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
            Empowering Kenya&apos;s{' '}
            <span className="text-blue-600">CBC Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our competency-based tracking tools? Our team of
            specialists is ready to assist your school&apos;s transition.
          </motion.p>
        </section>

        <main className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Send Us Your Inquiry
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl"
                >
                  <option value="">Select Topic...</option>
                  <option value="implementation">CBC Implementation</option>
                  <option value="training">Teacher Training</option>
                  <option value="technical">Platform Support</option>
                  <option value="partnership">School Partnership</option>
                  <option value="demo">Request Demo</option>
                  <option value="pricing">Pricing Information</option>
                </select>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="example@school.ke"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can EduStack help your institution transform CBC learning?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

function ContactInfoCard({ icon, title, detail, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border flex items-center gap-5"
    >
      {icon}
      <div>
        <p className="text-xs font-bold uppercase">{title}</p>
        <p className="text-sm font-semibold">{detail}</p>
      </div>
      <ExternalLink className="ml-auto w-4 h-4" />
    </a>
  );
}
