import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CircuitBoard, 
  Database, 
  Mail, 
  Phone, 
  ArrowRight,
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  LineChart,
  ClipboardCheck,
  BookOpen,
  Users,
  ShieldCheck,
  Globe,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const platformLinks = [
  { label: 'Curriculum Management', href: '/curriculum', icon: CircuitBoard },
  { label: 'Progress Tracking', href: '/progress', icon: LineChart },
  { label: 'Assessment Tools', href: '/assessments', icon: ClipboardCheck },
  { label: 'Analytics Dashboard', href: '/analytics', icon: Database },
];

const resourceLinks = [
  { label: 'CBE Methodology', href: '/methodology', icon: BookOpen },
  { label: 'Teacher Resources', href: '/teacher/resources', icon: Users },
  { label: 'System Status', href: '/status', icon: ShieldCheck },
  { label: 'Global Standards', href: '/standards', icon: Globe },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Footer() {
  return (
    <footer className="relative bg-[#fafafa] dark:bg-[#020817] overflow-hidden border-t border-slate-200 dark:border-slate-800">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[50%] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 lg:px-16 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
            <div className="flex flex-col items-start">
              {/* Replace with your local path to the generated 4k logo */}
              <img
                src="/Gemini_Generated_Image_8kqr628kqr628kqr.png" 
                alt="EduStack Logo"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
              />
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Kenya CBC Ready</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              The definitive <span className="text-blue-600 font-semibold">EduStack</span> platform for Competency-Based Education. Bridging technology and pedagogy for the Kenyan classroom.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: 'var(--blue-600)', color: '#fff' }}
                  href="#"
                  className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 shadow-sm transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">Platform</h4>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ChevronRight className="w-0 h-4 opacity-0 -ml-4 group-hover:w-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                    <span className="text-[15px] font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ChevronRight className="w-0 h-4 opacity-0 -ml-4 group-hover:w-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                    <span className="text-[15px] font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
            <div className="relative p-8 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-blue-500/5 overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Stay Informed</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Join 5,000+ educators receiving CBC updates and tech tips.</p>
                <div className="space-y-3">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <Input 
                      placeholder="work-email@school.ke" 
                      className="pl-12 h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl focus-visible:ring-blue-500 transition-all" 
                    />
                  </div>
                  <Button className="w-full h-12 bg-[#0047AB] hover:bg-[#003580] text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95">
                    Subscribe to Edustack
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-blue-600/5 border border-blue-600/10 group cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-tighter text-blue-600 group-hover:text-blue-100">Support Line</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-white">+254 111 276 271</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-16 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                © {new Date().getFullYear()} EduStack Africa.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                A product of technical excellence for Kenyan Schools.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'CBC Standards', href: '/cbc-standards' }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xs font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
