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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: 'New CBC Inquiry – EduStack',
        from_name: 'EduStack Contact Form',
        category: formData.category,
        full_name: formData.fullName,
        email: formData.email,
        message: formData.message
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (result.success) {
        alert('Your CBC inquiry has been received. Our team will reach out shortly.');
        setFormData({ category: '', fullName: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      <Header />

      <div className="pt-24 pb-12">
        <main className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Honeypot (spam protection) */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid md:grid-cols-2 gap-6">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800"
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
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="example@school.ke"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can EduStack help your institution transform CBC learning?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            <div className="lg:col-span-5 space-y-6">
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
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function ContactInfoCard({ icon, title, detail, link }: any) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border hover:shadow-lg flex items-center gap-5"
    >
      <div className="p-4 rounded-xl bg-blue-50">{icon}</div>
      <div>
        <p className="text-xs text-slate-400 uppercase">{title}</p>
        <p className="font-bold">{detail}</p>
      </div>
      <ExternalLink className="ml-auto w-4 h-4 text-slate-300" />
    </a>
  );
}
