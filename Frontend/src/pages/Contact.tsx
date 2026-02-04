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
  CheckCircle2,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: '',
    fullName: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        'access_key',
        process.env.VITE_WEB3FORMS_KEY
      );
      formDataToSend.append('subject', 'New CBC Inquiry');
      formDataToSend.append('category', formData.category);
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      alert(
        'Your CBC inquiry has been received. Our team will contact you shortly.'
      );
      setFormData({
        category: '',
        fullName: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

        {/* MAIN CONTENT */}
        <main className="container mx-auto px-6 lg:px-16">
          {/* …rest of JSX unchanged, only spacing preserved … */}
        </main>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        input:focus,
        textarea:focus,
        select:focus {
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
          className:
            'w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors group-hover:text-white',
        })}
      </div>

      <div className="flex-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
          {title}
        </p>
        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {detail}
        </p>
      </div>

      <ExternalLink className="w-5 h-5 text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
    </a>
  );
}
