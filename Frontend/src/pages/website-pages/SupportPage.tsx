import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  MessageSquare,
  BookOpen,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  Search,
  Filter,
  Download,
  ExternalLink,
  ChevronRight,
  Award,
  Users,
  FileText,
  Calendar,
  Video,
  Shield,
  Zap,
  Star,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  User as UserIcon,
  Sparkles,
  Server,
  Target,
  Brain,
  Terminal,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Simplified data structures
const faqCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Sparkles,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    questions: [
      {
        question: "How do I enroll a new student?",
        answer: "Go to the Learners section in your dashboard, click 'Add Learner', and fill in the required information.",
        tags: ['students', 'enrollment']
      },
      {
        question: "How do I set up my school account?",
        answer: "After your school admin creates your account, you'll receive an email with setup instructions.",
        tags: ['setup', 'account']
      }
    ]
  },
  {
    id: 'student-management',
    title: 'Student Management',
    icon: Users,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    questions: [
      {
        question: "How do students submit assignments?",
        answer: "Students can access their dashboard, navigate to assignments section, and upload their work.",
        tags: ['assignments', 'submissions']
      },
      {
        question: "Can parents track their child's progress?",
        answer: "Yes, parents have access to a dedicated dashboard with real-time progress updates.",
        tags: ['parents', 'tracking']
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: Terminal,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    questions: [
      {
        question: "What if I forget my password?",
        answer: "Click 'Forgot Password' on the login page and follow the email instructions.",
        tags: ['login', 'password']
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we use enterprise-grade security including 256-bit encryption.",
        tags: ['security', 'data']
      }
    ]
  }
];

const supportChannels = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant help from specialists",
    responseTime: "< 2 minutes",
    action: "Start Chat",
    color: "text-blue-500",
    bg: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Detailed support for complex issues",
    responseTime: "< 24 hours",
    action: "Send Email",
    color: "text-emerald-500",
    bg: "from-emerald-500 to-teal-500"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Direct conversation with experts",
    responseTime: "Immediate",
    action: "Call Now",
    color: "text-purple-500",
    bg: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Self-help resources & guides",
    responseTime: "24/7",
    action: "Browse",
    color: "text-amber-500",
    bg: "from-amber-500 to-orange-500"
  }
];

const resources = [
  {
    title: "Video Tutorials",
    icon: Video,
    count: "120+",
    description: "Step-by-step video guides",
    color: "text-blue-500"
  },
  {
    title: "User Guides",
    icon: FileText,
    count: "250+",
    description: "Comprehensive documentation",
    color: "text-emerald-500"
  },
  {
    title: "Webinars",
    icon: Calendar,
    count: "Monthly",
    description: "Live training sessions",
    color: "text-purple-500"
  },
  {
    title: "Templates",
    icon: Download,
    count: "50+",
    description: "Ready-to-use templates",
    color: "text-amber-500"
  }
];

const stats = [
  { value: "99.8%", label: "Uptime", icon: Server },
  { value: "< 2m", label: "Response Time", icon: Clock },
  { value: "4.9/5", label: "Satisfaction", icon: Star },
  { value: "98%", label: "Resolution", icon: Target }
];

// Glowing Card Component
const GlowingCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('relative group', className)}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      {children}
    </div>
  </div>
);

// Loading Skeleton
const CardSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
  </div>
);

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Support request submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        category: '',
        subject: '',
        message: ''
      });
      
      // Show success message (you can add a toast here)
      alert('Support request submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Header />
      
      {/* Hero Section - Simplified */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Premium Support</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              How can we <span className="text-blue-600 dark:text-blue-400">help</span> you today?
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Get expert assistance for the EduStack platform. We're here to help you succeed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 rounded-xl text-lg border-gray-300 dark:border-gray-700"
                />
                <Button className="absolute right-2 top-2 h-10 px-6 rounded-lg">
                  Search
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Try "student enrollment", "technical issues", or "account setup"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <>
              {/* Support Channels */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Choose how you'd like to connect
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Multiple ways to get the help you need
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {supportChannels.map((channel, index) => {
                    const Icon = channel.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${channel.bg} flex items-center justify-center mb-4`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                              {channel.title}
                            </CardTitle>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {channel.description}
                            </p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {channel.responseTime}
                                </span>
                              </div>
                            </div>
                            <Button 
                              className={`w-full bg-gradient-to-r ${channel.bg} hover:opacity-90 text-white`}
                            >
                              {channel.action}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-16"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Browse common questions by category
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {faqCategories.map(cat => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {faqCategories.map((category, catIndex) => {
                    const Icon = category.icon;
                    return (
                      <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                      >
                        <Card className="h-full border border-gray-200 dark:border-gray-800">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center`}>
                                <Icon className={`w-6 h-6 ${category.color}`} />
                              </div>
                              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                                {category.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Accordion type="single" collapsible className="space-y-3">
                              {category.questions.map((faq, qIndex) => (
                                <AccordionItem 
                                  key={qIndex}
                                  value={`${catIndex}-${qIndex}`}
                                  className="border border-gray-200 dark:border-gray-800 rounded-lg"
                                >
                                  <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                                    <span className="font-medium text-gray-900 dark:text-white">
                                      {faq.question}
                                    </span>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4 pb-4">
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                      {faq.answer}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {faq.tags.map((tag, tagIndex) => (
                                        <Badge 
                                          key={tagIndex} 
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-16"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Learning Resources
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Explore our library of guides and tutorials
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {resources.map((resource, index) => {
                    const Icon = resource.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                          <CardHeader className="pb-4">
                            <div className={`w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br ${resource.color.replace('text-', 'from-')} to-transparent transition-all`}>
                              <Icon className={`w-7 h-7 ${resource.color}`} />
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                              {resource.title}
                            </CardTitle>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {resource.description}
                            </p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {resource.count}
                              </span>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <GlowingCard>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-4">
                      <Send className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Submit Request</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Can't find what you need?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Send us a detailed message and we'll help you personally
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category *
                      </Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => setFormData({...formData, category: value})}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="account">Account & Login</SelectItem>
                          <SelectItem value="curriculum">Curriculum & Content</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Brief description of your issue"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please provide detailed information about your issue..."
                        rows={6}
                        required
                        className="resize-none"
                      />
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Your information is secure</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            We only use your information to help resolve your issue
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold text-lg rounded-xl shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span>Submit Support Request</span>
                          <Send className="w-5 h-5" />
                        </div>
                      )}
                    </Button>

                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Typical response time: <span className="font-semibold">Less than 2 hours</span>
                    </div>
                  </form>
                </GlowingCard>
              </motion.div>

              {/* Emergency CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16"
              >
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-4">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">Emergency Support</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Need immediate assistance?
                  </h3>
                  <p className="mb-6 opacity-90">
                    For critical issues affecting multiple users or system-wide problems
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-white text-red-600 hover:bg-white/90 px-8 py-6 rounded-xl font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 1-800-EDU-HELP
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      emergency@edustack.edu
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20 text-sm opacity-80">
                    Available 24/7 for critical platform issues only
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}