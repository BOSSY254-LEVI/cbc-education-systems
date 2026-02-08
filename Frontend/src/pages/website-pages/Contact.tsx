import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Sparkles,
  Star,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Cloud,
  Database,
  Server,
  Users2,
  TrendingUp,
  LineChart,
  PieChart,
  BarChart3,
  Calendar,
  Bell,
  Search,
  Download,
  Lock,
  Eye,
  MessageSquare,
  Video,
  Music,
  Image,
  FileCode,
  FileSpreadsheet,
  Presentation,
  Code,
  Terminal,
  Palette,
  Brain,
  GitBranch,
  Network,
  Filter,
  Settings,
  UserPlus,
  FileText,
  type LucideIcon
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { cn } from '@/lib/utils';

const GlowingCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('relative group', className)}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 group-hover:duration-200" />
    <div className="relative bg-card rounded-3xl p-8 border border-border/50">
      {children}
    </div>
  </div>
);

const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <span className="font-bold">
      {suffix === '%' ? count.toFixed(0) : count.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      {suffix}
    </span>
  );
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    detail: "+254 111 276 271",
    subtitle: "Direct expert assistance",
    gradient: "from-blue-500 to-cyan-500",
    features: ['Priority support', 'Technical experts', 'Callback service'],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "hello@edustack.ke",
    subtitle: "Detailed inquiries",
    gradient: "from-emerald-500 to-teal-500",
    features: ['24/7 response', 'File attachments', 'Detailed tracking'],
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    detail: "Westlands, Nairobi",
    subtitle: "Visit our office",
    gradient: "from-purple-500 to-pink-500",
    features: ['Meeting rooms', 'Demo sessions', 'Training center'],
    action: "Get Directions"
  },
  {
    icon: Clock,
    title: "Support Hours",
    detail: "Mon-Fri, 8AM-6PM EAT",
    subtitle: "Extended emergency support",
    gradient: "from-orange-500 to-red-500",
    features: ['Emergency hotline', 'Weekend coverage', 'Holiday support'],
    action: "View Schedule"
  }
];

const inquiryCategories = [
  {
    value: "implementation",
    label: "CBC Implementation",
    icon: GraduationCap,
    description: "Get help implementing CBC in your school",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    value: "training",
    label: "Teacher Training",
    icon: Users,
    description: "Professional development and workshops",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    value: "technical",
    label: "Technical Support",
    icon: Terminal,
    description: "Platform issues and technical questions",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    value: "partnership",
    label: "School Partnership",
    icon: School,
    description: "Become an EduStack partner school",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    value: "demo",
    label: "Request Demo",
    icon: Video,
    description: "Schedule a personalized platform demo",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    value: "pricing",
    label: "Pricing Information",
    icon: TrendingUp,
    description: "Get custom pricing for your institution",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  }
];

const supportStats = [
  { value: "99.8%", label: "Uptime Guarantee", icon: Server, trend: "+0.2%" },
  { value: "< 2h", label: "Avg. Response Time", icon: Clock, trend: "-15%" },
  { value: "4.9/5", label: "Customer Satisfaction", icon: Star, trend: "+0.1" },
  { value: "98%", label: "Issue Resolution", icon: Target, trend: "+2%" }
];

const successStories = [
  {
    school: "St. Mary's Academy",
    location: "Nairobi",
    impact: "92% growth in student mastery tracking",
    quote: "EduStack transformed how we monitor CBC competencies.",
    avatar: "SA"
  },
  {
    school: "Green Valley School",
    location: "Mombasa",
    impact: "40% reduction in administrative work",
    quote: "Our teachers now focus more on teaching than paperwork.",
    avatar: "GV"
  },
  {
    school: "Rising Stars Academy",
    location: "Kisumu",
    impact: "75% faster report generation",
    quote: "Parents love the real-time progress updates.",
    avatar: "RS"
  }
];

const regionalOffices = [
  {
    city: "Mombasa",
    address: "Nyali Business Centre, Mombasa",
    phone: "+254 711 222 333",
    email: "coast@edustack.ke",
    manager: "Fatima Ali",
    avatar: "FA"
  },
  {
    city: "Kisumu",
    address: "Mega Plaza, Kisumu",
    phone: "+254 733 444 555",
    email: "west@edustack.ke",
    manager: "John Ochieng",
    avatar: "JO"
  },
  {
    city: "Nakuru",
    address: "Westside Mall, Nakuru",
    phone: "+254 722 666 777",
    email: "rift@edustack.ke",
    manager: "Sarah Kamau",
    avatar: "SK"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: '',
    fullName: '',
    email: '',
    phone: '',
    school: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    console.log('=== Web3Forms ENV DEBUG ===');
    console.log('VITE_WEB3FORMS_KEY raw value:', import.meta.env.VITE_WEB3FORMS_KEY);
    console.log('VITE_WEB3FORMS_KEY length:', import.meta.env.VITE_WEB3FORMS_KEY?.length ?? 'missing');
    console.log('=== END DEBUG ===');
  }, []);

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
    
    if (selectedCategory) {
      formDataToSend.append('category', selectedCategory);
    }

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
        setFormData({ 
          category: '', 
          fullName: '', 
          email: '', 
          phone: '', 
          school: '', 
          message: '' 
        });
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
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [100, 0, 100],
            y: [50, 0, 50],
            rotate: [180, 360, 540]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">Expert Support</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6"
            >
              Transform Your School's{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  CBC Journey
                </span>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-xl"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with Kenya's leading CBC education experts. Get personalized guidance, 
              technical support, and partnership opportunities tailored to your school's needs.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {supportStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                    <div className="text-xs text-emerald-400 mt-1">{stat.trend}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 pb-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <GlowingCard>
              <div className="relative z-10">
                {/* Form Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">
                        Send Us Your Inquiry
                      </h2>
                      <p className="text-muted-foreground mt-1">
                        Our experts will respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms hidden fields */}
                  <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY ?? ''} />
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  {/* Category Selection */}
                  <div className="space-y-3">
                    <Label htmlFor="category" className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Inquiry Type <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.value}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(category.value);
                              setFormData(prev => ({ ...prev, category: category.value }));
                            }}
                            className={cn(
                              "p-4 rounded-xl border-2 text-left transition-all duration-300",
                              selectedCategory === category.value
                                ? `border-primary bg-gradient-to-br ${category.bg} shadow-lg scale-[1.02]`
                                : "border-border hover:border-primary/50 hover:bg-secondary/50"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg ${category.bg} flex items-center justify-center`}>
                                <Icon className={`w-5 h-5 ${category.color}`} />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-foreground text-sm">{category.label}</div>
                                <div className="text-xs text-muted-foreground mt-1">{category.description}</div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <input
                      type="hidden"
                      name="category"
                      value={selectedCategory}
                      required
                    />
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your full name"
                        required
                        className={`h-14 rounded-xl transition-all duration-300 ${
                          focusedField === 'fullName'
                            ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                            : 'border-border'
                        }`}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        School Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="example@school.ke"
                        required
                        className={`h-14 rounded-xl transition-all duration-300 ${
                          focusedField === 'email'
                            ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                            : 'border-border'
                        }`}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+254 700 000 000"
                        className={`h-14 rounded-xl transition-all duration-300 ${
                          focusedField === 'phone'
                            ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                            : 'border-border'
                        }`}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="school" className="text-sm font-bold text-foreground flex items-center gap-2">
                        <School className="w-4 h-4" />
                        School/Institution
                      </Label>
                      <Input
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('school')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your school name"
                        className={`h-14 rounded-xl transition-all duration-300 ${
                          focusedField === 'school'
                            ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                            : 'border-border'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-bold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Your Message <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us how we can help transform your CBC implementation..."
                      required
                      className={`w-full p-4 rounded-xl border transition-all duration-300 resize-none ${
                        focusedField === 'message'
                          ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                          : 'border-border'
                      }`}
                    />
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Include specific goals, challenges, and timeline for better assistance
                    </div>
                  </div>

                  {/* Security & Privacy */}
                  <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-emerald-500 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground mb-2">Your Information is Secure</div>
                        <div className="text-sm text-muted-foreground">
                          We use enterprise-grade encryption and comply with Kenya's Data Protection Act. 
                          Your details will only be used to provide the requested support.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="font-semibold">Sending Your Inquiry...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">Send Inquiry to Experts</span>
                        <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </div>
                    )}
                  </Button>

                  {/* Status Message */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-4 rounded-xl text-center font-medium ${
                        status.type === 'success'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                          : 'bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </form>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Right Column - Contact Info & Success Stories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.title === "Phone Support" ? `tel:${info.detail}` : 
                          info.title === "Email Support" ? `mailto:${info.detail}` : "#"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="block group"
                  >
                    <GlowingCard className="hover:scale-[1.02] transition-transform">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                                {info.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{info.subtitle}</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="mt-4">
                            <div className="text-xl font-bold text-foreground mb-2">{info.detail}</div>
                            <div className="flex flex-wrap gap-2">
                              {info.features.map((feature, idx) => (
                                <span key={idx} className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-muted-foreground">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-border/50">
                            <span className="text-sm font-medium text-primary">{info.action}</span>
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  </motion.a>
                );
              })}
            </div>

            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <GlowingCard>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    Success Stories
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Schools transformed by EduStack across Kenya
                  </p>
                </div>
                <div className="space-y-4">
                  {successStories.map((story, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        {story.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-foreground">{story.school}</div>
                          <span className="text-xs text-muted-foreground">{story.location}</span>
                        </div>
                        <div className="text-sm text-primary font-medium mt-1">{story.impact}</div>
                        <p className="text-sm text-muted-foreground mt-2">"{story.quote}"</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>

            {/* Regional Offices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <GlowingCard>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    Regional Offices
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get local support across Kenya
                  </p>
                </div>
                <div className="space-y-4">
                  {regionalOffices.map((office, index) => (
                    <div key={index} className="p-4 rounded-xl bg-secondary/50">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {office.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground">{office.city}</div>
                          <div className="text-sm text-muted-foreground mt-1">{office.address}</div>
                          <div className="flex items-center gap-4 mt-2">
                            <a href={`tel:${office.phone}`} className="text-sm text-primary hover:underline">
                              {office.phone}
                            </a>
                            <a href={`mailto:${office.email}`} className="text-sm text-primary hover:underline">
                              {office.email}
                            </a>
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">
                            Manager: {office.manager}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <GlowingCard>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-6">
                <Rocket className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-primary">Ready to Transform?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Schedule a Personalized Demo
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how EduStack can transform your school's CBC implementation with a live, 
                personalized demonstration of our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-6 rounded-xl shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Demo Session
                </Button>
                <Button 
                  className="px-8 py-6 rounded-xl border-2 border-border hover:bg-secondary text-foreground"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Watch Video Tour
                </Button>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

// Custom Input Component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full px-4 py-3 bg-background border rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 ${className}`}
      {...props}
    />
  )
);

// Custom Label Component
const Label = ({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={`block text-sm font-medium ${className}`} {...props}>
    {children}
  </label>
);

// Custom Button Component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center px-6 py-3 font-medium transition-colors duration-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);