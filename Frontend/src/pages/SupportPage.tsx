import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  Zap
} from 'lucide-react';

const faqs = [
  {
    question: "How do I enroll a new student?",
    answer: "Go to the Learners section in your dashboard, click 'Add Learner', and fill in the required information including student details, grade level, and parent contact information."
  },
  {
    question: "How do students submit assignments?",
    answer: "Students can access their dashboard, navigate to the assignments section, and upload their work directly through the platform. Teachers will receive notifications when submissions are made."
  },
  {
    question: "Can parents track their child's progress?",
    answer: "Yes, parents have access to a dedicated dashboard where they can view their child's grades, completed assignments, attendance records, and teacher feedback."
  },
  {
    question: "How do I generate reports?",
    answer: "Navigate to the Reports section in your dashboard. You can generate various reports including student progress, class performance, and assessment results."
  },
  {
    question: "What if I forget my password?",
    answer: "Click the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to reset your password."
  }
];

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "Mon-Fri, 8AM-6PM EAT",
    action: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "24/7 response within 24 hours",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri, 9AM-5PM EAT",
    action: "Call Now"
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse our comprehensive guides",
    availability: "Available 24/7",
    action: "Browse Articles"
  }
];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header/>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/50 mb-6"
            >
              <HelpCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Support Center</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              How Can We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Help You?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Get the support you need to make the most of your CBC Education Platform
            </motion.p>
          </div>
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
            <Tabs defaultValue="faq" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <TabsTrigger value="faq" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300">
                  <BookOpen className="w-4 h-4 mr-2" />
                  FAQ
                </TabsTrigger>
                <TabsTrigger value="contact" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Us
                </TabsTrigger>
                <TabsTrigger value="ticket" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Ticket
                </TabsTrigger>
              </TabsList>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</CardTitle>
                        <CardDescription className="text-base mt-1">
                          Find quick answers to common questions about using the platform
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <AccordionItem 
                            value={`item-${index}`} 
                            className="border border-slate-200 dark:border-slate-800 rounded-2xl px-6 data-[state=open]:bg-blue-50/50 dark:data-[state=open]:bg-blue-900/10 transition-all duration-300"
                          >
                            <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-900 dark:text-white font-semibold">
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span>{faq.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6 pl-8 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      <Card className="h-full border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                {method.title}
                              </CardTitle>
                              <CardDescription className="text-slate-600 dark:text-slate-400">
                                {method.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{method.availability}</span>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:shadow-xl">
                            {method.action}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>

            {/* Submit Ticket Tab */}
            <TabsContent value="ticket" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Submit a Support Ticket</CardTitle>
                        <CardDescription className="text-base mt-1">
                          Can't find what you're looking for? Send us a detailed message and we'll get back to you.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">
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
                            className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                              focusedField === 'name'
                                ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10'
                                : 'border-slate-200 dark:border-slate-700'
                            }`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">
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
                            className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                              focusedField === 'email'
                                ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10'
                                : 'border-slate-200 dark:border-slate-700'
                            }`}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          Category <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                          <SelectTrigger 
                            className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                              focusedField === 'category'
                                ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10'
                                : 'border-slate-200 dark:border-slate-700'
                            }`}
                            onFocus={() => setFocusedField('category')}
                            onBlur={() => setFocusedField(null)}
                          >
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="account">Account & Login</SelectItem>
                            <SelectItem value="curriculum">Curriculum & Content</SelectItem>
                            <SelectItem value="billing">Billing & Subscription</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">
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
                          className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                            focusedField === 'subject'
                              ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Please provide detailed information about your issue or question..."
                          rows={6}
                          required
                          className={`rounded-xl border-2 transition-all duration-300 resize-none ${
                            focusedField === 'message'
                              ? 'border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg shadow-blue-500/10'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending Request...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span>Submit Support Request</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
