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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Optional: dynamic subject based on category
    const subjects: Record<string, string> = {
      implementation: "CBC Implementation Question",
      training: "Teacher Training Inquiry",
      technical: "Platform Technical Support",
      partnership: "School Partnership Request",
      demo: "Demo Request for EduStack",
      pricing: "Pricing & Plans Inquiry",
    };

    data.append("subject", subjects[formData.category] || "New EduStack CBC Inquiry");
    data.append("from_name", formData.fullName || "School Representative");
    // data.append("replyto", formData.email); // optional - uncomment if you want auto-reply feature

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const json = await response.json();

      if (json.success) {
        setStatus({ type: 'success', message: "Thank you! Your inquiry has been sent successfully. We'll get back to you within 24 hours." });
        setFormData({ category: '', fullName: '', email: '', message: '' });
        form.reset(); // also clear any uncontrolled fields if added later
      } else {
        setStatus({ type: 'error', message: json.message || "Something went wrong. Please try again or contact us directly." });
      }
    } catch (err) {
      setStatus({ type: 'error', message: "Network error — please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      
      <Header />
      
      <div className="pt-24 pb-12">
        {/* Hero Header Section - unchanged */}
        <section className="container mx-auto px-6 text-center mb-12">
          {/* ... same as before ... */}
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
              {/* Animated blobs unchanged */}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Hidden fields for Web3Forms */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value={import.meta.env.VITE_WEB3FORMS_KEY || ''} 
                />
                {/* Honeypot spam protection */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                />

                {/* Form Header - unchanged */}
                <div className="mb-6">
                  {/* ... same ... */}
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Inquiry Type - unchanged */}
                  <div className="space-y-2">
                    {/* ... same select ... */}
                  </div>
                  
                  {/* Full Name - unchanged */}
                  <div className="space-y-2">
                    {/* ... same input ... */}
                  </div>
                </div>

                {/* School Email Address - unchanged */}
                <div className="space-y-2">
                  {/* ... same email input ... */}
                </div>

                {/* Your Message - unchanged */}
                <div className="space-y-2">
                  {/* ... same textarea ... */}
                </div>

                {/* Submit Button - updated disabled & text */}
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
                  <div className={`text-center text-sm font-medium mt-4 p-3 rounded-xl ${
                    status.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                  }`}>
                    {status.message}
                  </div>
                )}

                <p className="text-xs text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-2">
                  <span className="text-red-500">*</span> Required fields
                </p>
              </form>
            </motion.div>

            {/* Right side panels - unchanged */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* ... all the cards, support hours, why choose, CTA ... unchanged ... */}
            </motion.div>
          </div>

          {/* Features, News, Success Stories sections - unchanged */}
          {/* ... rest of your code ... */}

        </main>

        <Footer />
      </div>

      {/* style tag unchanged */}
      <style>{`... same ...`}</style>
    </div>
  );
}

// ContactInfoCard component unchanged
function ContactInfoCard({ icon, title, detail, link }: { icon: any; title: string; detail: string; link: string }) {
  // ... same as before ...
}
