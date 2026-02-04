import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
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
  Zap,
  Sparkles,
  Star,
  Users,
  Target,
  Shield,
  Globe,
  Rocket,
  Search,
  Filter,
  Download,
  ExternalLink,
  ChevronRight,
  Award,
  Brain,
  Terminal,
  Server,
  Database,
  Cloud,
  Lock,
  Eye,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Bell,
  FileText,
  Video,
  Music,
  Image,
  FileCode,
  type LucideIcon,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: 'Getting Started',
    icon: Rocket,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    questions: [
      {
        question: "How do I enroll a new student?",
        answer: "Go to the Learners section in your dashboard, click 'Add Learner', and fill in the required information including student details, grade level, and parent contact information.",
        tags: ['students', 'enrollment', 'setup']
      },
      {
        question: "How do I set up my school account?",
        answer: "After your school admin creates your account, you'll receive an email with setup instructions. Follow the guided wizard to configure your profile, classes, and initial settings.",
        tags: ['setup', 'account', 'profile']
      },
      {
        question: "Where can I find training resources?",
        answer: "Visit our Knowledge Base for video tutorials, step-by-step guides, and interactive demos. We also offer live training webinars every Tuesday and Thursday.",
        tags: ['training', 'resources', 'help']
      }
    ]
  },
  {
    category: 'Student Management',
    icon: Users,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    questions: [
      {
        question: "How do students submit assignments?",
        answer: "Students can access their dashboard, navigate to the assignments section, and upload their work directly through the platform. Teachers will receive notifications when submissions are made.",
        tags: ['assignments', 'submissions', 'students']
      },
      {
        question: "Can parents track their child's progress?",
        answer: "Yes, parents have access to a dedicated dashboard where they can view their child's grades, completed assignments, attendance records, and teacher feedback in real-time.",
        tags: ['parents', 'progress', 'tracking']
      },
      {
        question: "How do I manage student groups?",
        answer: "Navigate to the Groups section to create custom student groups based on criteria like grade level, learning pace, or specific competencies. Groups can be used for targeted assignments and communications.",
        tags: ['groups', 'management', 'organization']
      }
    ]
  },
  {
    category: 'Technical Support',
    icon: Terminal,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    questions: [
      {
        question: "What if I forget my password?",
        answer: "Click the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to reset your password securely.",
        tags: ['login', 'security', 'password']
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we use enterprise-grade security including 256-bit encryption, regular security audits, and compliance with global data protection standards (GDPR, CCPA).",
        tags: ['security', 'privacy', 'data']
      },
      {
        question: "What browsers are supported?",
        answer: "We support the latest versions of Chrome, Firefox, Safari, and Edge. For optimal performance, we recommend keeping your browser updated to the latest version.",
        tags: ['browsers', 'compatibility', 'technical']
      }
    ]
  },
  {
    category: 'Reporting & Analytics',
    icon: BarChart3,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    questions: [
      {
        question: "How do I generate reports?",
        answer: "Navigate to the Reports section in your dashboard. You can generate various reports including student progress, class performance, assessment results, and competency mastery heatmaps.",
        tags: ['reports', 'analytics', 'data']
      },
      {
        question: "Can I export data to other systems?",
        answer: "Yes, you can export data in multiple formats (CSV, Excel, PDF) or integrate with third-party systems using our secure API. Custom export options are available for enterprise plans.",
        tags: ['export', 'integration', 'api']
      },
      {
        question: "How accurate are the analytics?",
        answer: "Our analytics are updated in real-time and use advanced algorithms to ensure accuracy. We provide confidence scores and data quality indicators for all metrics.",
        tags: ['analytics', 'accuracy', 'metrics']
      }
    ]
  }
];

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    description: "Get instant help from our certified support specialists",
    availability: "Mon-Fri, 8AM-6PM EAT • Response time: < 2 minutes",
    action: "Start Chat",
    gradient: "from-blue-500 to-cyan-500",
    stats: "98% satisfaction rate",
    features: ['Instant response', 'Screen sharing', 'File transfer']
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message for complex issues",
    availability: "24/7 • Response time: < 24 hours",
    action: "Send Email",
    gradient: "from-emerald-500 to-teal-500",
    stats: "95% resolution rate",
    features: ['Detailed tracking', 'Attachments support', 'Priority queuing']
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    availability: "Mon-Fri, 9AM-5PM EAT • Callback service available",
    action: "Call Now",
    gradient: "from-purple-500 to-pink-500",
    stats: "4.9/5 satisfaction",
    features: ['Direct expert access', 'Conference calls', 'Follow-up calls']
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse our comprehensive self-help resources",
    availability: "Available 24/7 • Constantly updated",
    action: "Browse Articles",
    gradient: "from-orange-500 to-red-500",
    stats: "500+ articles",
    features: ['Video tutorials', 'Step-by-step guides', 'Best practices']
  }
];

const resourceCategories = [
  {
    title: "Video Tutorials",
    icon: Video,
    count: "120+ videos",
    description: "Step-by-step video guides for all features",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "User Guides",
    icon: FileText,
    count: "250+ guides",
    description: "Comprehensive written documentation",
    color: "text-emerald-500",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Webinars",
    icon: Calendar,
    count: "Monthly sessions",
    description: "Live training and Q&A sessions",
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Templates",
    icon: Download,
    count: "50+ templates",
    description: "Ready-to-use lesson and assessment templates",
    color: "text-amber-500",
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

const supportStats = [
  { value: "99.8%", label: "Uptime", icon: Server, trend: "+0.2%" },
  { value: "< 2m", label: "Avg. Response Time", icon: Clock, trend: "-15%" },
  { value: "4.9/5", label: "Satisfaction", icon: Star, trend: "+0.1" },
  { value: "98%", label: "Resolution Rate", icon: Target, trend: "+2%" }
];

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

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Support request submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const filteredFaqs = faqs.flatMap(category => 
    category.questions.filter(q => 
      (selectedCategory === 'all' || category.category === selectedCategory) &&
      (searchQuery === '' || 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
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
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">Premium Support</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.3 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-2xl shadow-blue-500/30 mb-6 relative"
            >
              <HelpCircle className="w-12 h-12 text-white" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-2 border-white/20 border-t-transparent"
              />
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6"
            >
              Expert Support{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  When You Need It
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
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Get world-class support from our team of education technology experts. 
              We're here to help you succeed with our platform.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {supportStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
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
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Tabs defaultValue="faq" className="max-w-7xl mx-auto">
              {/* Enhanced Tab Navigation */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <TabsList className="grid w-full grid-cols-3 p-1 bg-secondary rounded-2xl border border-border/50">
                  {[
                    { value: 'faq', label: 'FAQ & Guides', icon: BookOpen },
                    { value: 'contact', label: 'Contact Options', icon: MessageSquare },
                    { value: 'ticket', label: 'Submit Ticket', icon: Send }
                  ].map((tab, index) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="relative rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300 group"
                    >
                      <tab.icon className="w-5 h-5 mr-2 group-data-[state=active]:scale-110 transition-transform" />
                      {tab.label}
                      {tab.value === 'ticket' && (
                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-0.5 text-xs">
                          New
                        </Badge>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Search & Filter */}
                  <GlowingCard>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">Find Answers Quickly</h3>
                          <p className="text-muted-foreground">Search our extensive knowledge base</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Filter className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{filteredFaqs.length} results</span>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-12 rounded-xl border-border/50"
                          />
                        </div>
                        
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger className="h-12 rounded-xl border-border/50">
                            <SelectValue placeholder="Filter by category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {faqs.map(category => (
                              <SelectItem key={category.category} value={category.category}>
                                {category.category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </GlowingCard>

                  {/* Resource Categories */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resourceCategories.map((resource, index) => {
                      const Icon = resource.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="group"
                        >
                          <Card className="h-full border-border/50 bg-gradient-to-br from-card to-card/80 hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <CardHeader>
                              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-4`}>
                                <Icon className={`w-7 h-7 ${resource.color}`} />
                              </div>
                              <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {resource.title}
                              </CardTitle>
                              <CardDescription className="text-sm mt-2">
                                {resource.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-primary">{resource.count}</span>
                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* FAQ Categories */}
                  <div className="space-y-8">
                    {faqs.map((category, catIndex) => {
                      const Icon = category.icon;
                      return (
                        <motion.div
                          key={catIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: catIndex * 0.2 }}
                        >
                          <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
                            <CardHeader>
                              <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center`}>
                                  <Icon className={`w-6 h-6 ${category.color}`} />
                                </div>
                                <div>
                                  <CardTitle className="text-2xl font-bold text-foreground">
                                    {category.category}
                                  </CardTitle>
                                  <CardDescription className="text-base">
                                    Common questions about {category.category.toLowerCase()}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <Accordion type="single" collapsible className="w-full space-y-4">
                                {category.questions.map((faq, qIndex) => (
                                  <motion.div
                                    key={qIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (catIndex * 0.2) + (qIndex * 0.1) }}
                                  >
                                    <AccordionItem 
                                      value={`${catIndex}-${qIndex}`}
                                      className="border border-border/50 rounded-2xl px-6 data-[state=open]:bg-gradient-to-br data-[state=open]:from-blue-500/5 data-[state=open]:to-emerald-500/5 transition-all duration-300"
                                    >
                                      <AccordionTrigger className="text-left hover:no-underline py-6 font-semibold group">
                                        <div className="flex items-start gap-4 flex-1">
                                          <div className={`w-8 h-8 rounded-lg ${category.bg} flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-primary/10 transition-colors`}>
                                            <Icon className={`w-4 h-4 ${category.color} group-data-[state=open]:text-primary transition-colors`} />
                                          </div>
                                          <div className="text-left flex-1">
                                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                              {faq.question}
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                              {faq.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                                  {tag}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </AccordionTrigger>
                                      <AccordionContent className="pb-6 pl-12 text-muted-foreground leading-relaxed">
                                        <div className="prose prose-sm dark:prose-invert max-w-none">
                                          {faq.answer}
                                        </div>
                                        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/50">
                                          <Button variant="ghost" size="sm" className="gap-2">
                                            <ThumbsUp className="w-4 h-4" />
                                            Helpful
                                          </Button>
                                          <Button variant="ghost" size="sm" className="gap-2">
                                            <ThumbsDown className="w-4 h-4" />
                                            Not Helpful
                                          </Button>
                                          <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                                            <ExternalLink className="w-4 h-4" />
                                            Learn More
                                          </Button>
                                        </div>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </motion.div>
                                ))}
                              </Accordion>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Contact Tab */}
              <TabsContent value="contact" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <GlowingCard>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-bold text-foreground">
                            Multiple Ways to Connect
                          </CardTitle>
                          <CardDescription className="text-lg">
                            Choose the support method that works best for you
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </GlowingCard>

                  <div className="grid md:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -8 }}
                          className="group"
                        >
                          <GlowingCard className="h-full">
                            <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-br ${method.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                            <div className="relative z-10">
                              <div className="flex items-start gap-4 mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-lg`}>
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {method.title}
                                  </h3>
                                  <p className="text-muted-foreground">{method.description}</p>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-xl">
                                  <Clock className="w-5 h-5 text-primary" />
                                  <div>
                                    <div className="font-medium text-foreground">Availability</div>
                                    <div className="text-sm text-muted-foreground">{method.availability}</div>
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-foreground">Features include:</div>
                                  <div className="flex flex-wrap gap-2">
                                    {method.features.map((feature, idx) => (
                                      <Badge key={idx} variant="secondary" className="gap-1">
                                        <CheckCircle className="w-3 h-3" />
                                        {feature}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="pt-4 border-t border-border/50">
                                  <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-muted-foreground">Success rate:</span>
                                    <span className="font-bold text-primary">{method.stats}</span>
                                  </div>
                                  <Button 
                                    className={`w-full h-14 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]`}
                                  >
                                    {method.action}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </GlowingCard>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Submit Ticket Tab */}
              <TabsContent value="ticket" className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlowingCard>
                    <CardHeader className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                          <Send className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-bold text-foreground">
                            Submit a Support Ticket
                          </CardTitle>
                          <CardDescription className="text-lg">
                            Can't find what you're looking for? We'll help you personally
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                          <Shield className="w-6 h-6 text-emerald-500" />
                          <div>
                            <div className="font-semibold text-foreground">Secure & Private</div>
                            <div className="text-sm text-muted-foreground">Your data is protected</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                          <Clock className="w-6 h-6 text-blue-500" />
                          <div>
                            <div className="font-semibold text-foreground">Fast Response</div>
                            <div className="text-sm text-muted-foreground">Typically within 2 hours</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                          <Award className="w-6 h-6 text-amber-500" />
                          <div>
                            <div className="font-semibold text-foreground">Expert Help</div>
                            <div className="text-sm text-muted-foreground">Certified specialists</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label htmlFor="name" className="text-sm font-bold text-foreground flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Full Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Enter your full name"
                              required
                              className={`h-14 rounded-xl text-base transition-all duration-300 ${
                                focusedField === 'name'
                                  ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                                  : 'border-border'
                              }`}
                            />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="email" className="text-sm font-bold text-foreground flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Enter your email"
                              required
                              className={`h-14 rounded-xl text-base transition-all duration-300 ${
                                focusedField === 'email'
                                  ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                                  : 'border-border'
                              }`}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="category" className="text-sm font-bold text-foreground flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Category <span className="text-red-500">*</span>
                          </Label>
                          <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                            <SelectTrigger 
                              className={`h-14 rounded-xl text-base transition-all duration-300 ${
                                focusedField === 'category'
                                  ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                                  : 'border-border'
                              }`}
                              onFocus={() => setFocusedField('category')}
                              onBlur={() => setFocusedField(null)}
                            >
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {[
                                { value: 'technical', label: '🛠️ Technical Issue', description: 'Platform bugs or errors' },
                                { value: 'account', label: '👤 Account & Login', description: 'Access problems' },
                                { value: 'curriculum', label: '📚 Curriculum & Content', description: 'Learning materials' },
                                { value: 'billing', label: '💳 Billing & Subscription', description: 'Payment issues' },
                                { value: 'feature', label: '💡 Feature Request', description: 'Suggest improvements' },
                                { value: 'other', label: '❓ Other', description: 'Any other questions' }
                              ].map((item) => (
                                <SelectItem key={item.value} value={item.value} className="py-3">
                                  <div>
                                    <div className="font-medium">{item.label}</div>
                                    <div className="text-xs text-muted-foreground">{item.description}</div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="subject" className="text-sm font-bold text-foreground flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Subject <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            onFocus={() => setFocusedField('subject')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Brief description of your issue"
                            required
                            className={`h-14 rounded-xl text-base transition-all duration-300 ${
                              focusedField === 'subject'
                                ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                                : 'border-border'
                            }`}
                          />
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="message" className="text-sm font-bold text-foreground flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Message <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Please provide detailed information about your issue or question. Include steps to reproduce, error messages, and what you've already tried."
                            rows={8}
                            required
                            className={`rounded-xl text-base transition-all duration-300 resize-none ${
                              focusedField === 'message'
                                ? 'border-primary ring-4 ring-primary/20 shadow-lg'
                                : 'border-border'
                            }`}
                          />
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            The more details you provide, the faster we can help you.
                          </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border/50">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                              <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">Privacy Notice</div>
                              <div className="text-sm text-muted-foreground">
                                Your information is secure and will only be used to help resolve your issue.
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full h-16 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="font-semibold">Sending Your Request...</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <span className="font-semibold">Submit Support Request</span>
                              <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </div>
                          )}
                        </Button>
                        
                        <div className="text-center text-sm text-muted-foreground">
                          Typical response time: <span className="font-semibold text-primary">Less than 2 hours</span> during business hours
                        </div>
                      </form>
                    </CardContent>
                  </GlowingCard>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <GlowingCard>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 mb-6">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-primary">Urgent Assistance</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Need Immediate Help?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  For critical issues affecting multiple users or system-wide problems, 
                  contact our emergency support line.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-6 rounded-xl shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Support: 1-800-EDU-HELP
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 rounded-xl border-2"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    emergency@edustack.edu
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-border/50 text-sm text-muted-foreground">
                  Available 24/7 for critical platform issues only
                </div>
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Additional icons needed
const ThumbsUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
);

const ThumbsDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.413.608-2.006L17 13V4m-7 10h2m-7 0H6a2 2 0 00-2 2v4a2 2 0 002 2h2.5" />
  </svg>
);

const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);