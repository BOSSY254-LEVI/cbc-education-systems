// src/pages/auth/AdminLoginPage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Lock, Mail, ArrowRight, Shield, Loader2, 
  LifeBuoy, ArrowLeft, CheckCircle2, Globe, Scale, 
  BookOpen, Users, BarChart3, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useCountUp from '../../hooks/useCountUp';
import { useTypewriter } from '../../hooks/use-typewriter';

type ViewState = 'login' | 'register' | 'forgot-password';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<ViewState>('login');
  const [resetSent, setResetSent] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const institutionCount = useCountUp({ end: 150, duration: 4000, start: startCount });
  const panelTitle = useTypewriter({ text: 'ADMIN CONTROL PANEL', speed: 80, delay: 500, repeat: true });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    // Trigger count animation when component mounts
    setStartCount(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', formData);
    }, 2000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSent(true);
    setTimeout(() => setResetSent(false), 5000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* Enhanced Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-slate-900/95 backdrop-blur-sm" />
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Orbs - Hidden on mobile for performance */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/4 left-1/4 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1.15, 1, 1.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute bottom-1/4 right-1/4 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
      >
        {/* Main Card Container - Responsive rounded corners */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] sm:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
            
            {/* Left Panel - Compact Branding - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 group">
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover opacity-40"
                  alt="Network Background"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/95 to-slate-950/90" />
                
                {/* Diagonal Stripe Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 20px,
                      rgba(255,255,255,0.03) 20px,
                      rgba(255,255,255,0.03) 40px
                    )`,
                  }} />
                </div>
              </div>

              <div className="relative z-10 p-6 md:p-7 lg:p-8 xl:p-10 h-full flex flex-col justify-between">
                {/* Header Section */}
                <div>
                  {/* Logo - Responsive sizes */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2.5 sm:gap-3 mb-8 lg:mb-10"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg sm:shadow-xl shadow-blue-500/50">
                        <Shield className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 text-white" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-1.5 sm:-inset-2 bg-blue-500/30 rounded-lg sm:rounded-xl blur-xl -z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">EduStack</h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                        <div className="h-0.5 w-5 sm:w-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        <span className="text-[9px] sm:text-[10px] text-blue-300 font-bold">CBC Kenya</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Badge - Reduced */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-blue-300 uppercase tracking-wider">
                      Secure Gateway v4.0
                    </span>
                  </motion.div>

                  {/* Title - Responsive */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-black text-white leading-tight tracking-tight mb-1 sm:mb-2">
                      {panelTitle.split(' ').map((word, idx, arr) => (
                        <span key={idx}>
                          {word === 'CONTROL' ? (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                              {word}
                            </span>
                          ) : (
                            word
                          )}
                          {idx < arr.length - 1 ? ' ' : ''}
                        </span>
                      ))}
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md -mt-2 sm:-mt-1">
                      Unified governance portal for institutional management and national curriculum oversight. Secure access for authorized personnel only.
                    </p>
                  </motion.div>
                </div>

                {/* Features Grid - Responsive */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-3"
                >
                  {[
                    { icon: BookOpen, label: 'Curriculum', color: 'from-blue-500 to-cyan-500' },
                    { icon: Users, label: 'Students', color: 'from-cyan-500 to-emerald-500' },
                    { icon: BarChart3, label: 'Analytics', color: 'from-emerald-500 to-teal-500' },
                    { icon: Settings, label: 'Settings', color: 'from-purple-500 to-pink-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-1.5 sm:mb-2 shadow-lg`}>
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="text-[9px] sm:text-[10px] font-black text-slate-300 uppercase tracking-wide">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Trust Badge - Responsive */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-3.5 md:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[9px] sm:text-[10px] font-black text-emerald-400 uppercase">Verified Secure</p>
                        <p className="text-[9px] sm:text-[10px] text-slate-400">256-bit Encryption</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl font-black text-white">{institutionCount}+</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-400">Institutions</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Panel - Compact Form Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col justify-center">
              
              {/* Mobile-only Logo Header */}
              <div className="lg:hidden flex items-center justify-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">EduStack</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="h-0.5 w-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    <span className="text-[9px] text-blue-600 font-bold">CBC Kenya Admin</span>
                  </div>
                </div>
              </div>

              {/* Tab Switcher - Responsive */}
              {activeTab !== 'forgot-password' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex p-1 sm:p-1.5 bg-slate-100 rounded-lg sm:rounded-xl mb-6 sm:mb-7 md:mb-8 w-full sm:w-fit mx-auto sm:mx-0"
                >
                  <button 
                    onClick={() => setActiveTab('login')}
                    className={`relative flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-black rounded-md sm:rounded-lg transition-all ${
                      activeTab === 'login' 
                        ? 'text-blue-600' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {activeTab === 'login' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-md sm:rounded-lg shadow-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">LOGIN</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('register')}
                    className={`relative flex-1 sm:flex-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-black rounded-md sm:rounded-lg transition-all ${
                      activeTab === 'register' 
                        ? 'text-blue-600' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {activeTab === 'register' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-md sm:rounded-lg shadow-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">REQUEST ACCESS</span>
                  </button>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {activeTab === 'login' && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <header className="mb-5 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1.5 sm:mb-2">
                        Administrator Sign-In
                      </h2>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        Enter your credentials to access the control panel
                      </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                      {/* Email Input - Responsive */}
                      <div className="space-y-1.5 group">
                        <label className="block text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider ml-1">
                          Admin Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border-2 border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-blue-600 focus:ring-2 sm:focus:ring-3 focus:ring-blue-100 outline-none transition-all text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                            placeholder="admin@edustack.ke"
                          />
                        </div>
                      </div>

                      {/* Password Input - Responsive */}
                      <div className="space-y-1.5 group">
                        <div className="flex justify-between items-center px-1">
                          <label className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider">
                            Password
                          </label>
                          <button 
                            type="button"
                            onClick={() => setActiveTab('forgot-password')}
                            className="text-[9px] sm:text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            Forgot Password?
                          </button>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full pl-10 sm:pl-11 pr-10 sm:pr-11 py-2.5 sm:py-3 bg-white border-2 border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:border-blue-600 focus:ring-2 sm:focus:ring-3 focus:ring-blue-100 outline-none transition-all text-slate-900 text-xs sm:text-sm"
                            placeholder="••••••••••••"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>

                      {/* Remember Me - Responsive */}
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id="remember" 
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
                        />
                        <label htmlFor="remember" className="text-[10px] sm:text-xs text-slate-600 font-medium">
                          Keep me signed in for 7 days
                        </label>
                      </div>

                      {/* Submit Button - Responsive */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                        type="submit"
                        className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg sm:rounded-xl font-black text-xs sm:text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="animate-spin" size={16} />
                            <span className="hidden sm:inline">AUTHENTICATING...</span>
                            <span className="sm:hidden">SIGNING IN...</span>
                          </>
                        ) : (
                          <>
                            SIGN IN
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>

                      {/* Security Notice removed as requested */}
                    </form>
                  </motion.div>
                )}

                {activeTab === 'register' && (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Shield className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                      Access Restricted
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                      Administrator accounts are provisioned by the IT department. Unauthorized access attempts are logged and monitored.
                    </p>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 max-w-md mx-auto">
                      <p className="text-xs text-blue-900 mb-3 font-bold">
                        📧 Request Admin Access
                      </p>
                      <p className="text-xs text-slate-700 mb-3">
                        Contact your institution's IT department or email:
                      </p>
                      <a 
                        href="mailto:admin@edustack.ke" 
                        className="inline-block px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        admin@edustack.ke
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'forgot-password' && (
                  <motion.div
                    key="forgot"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <button 
                      onClick={() => {
                        setActiveTab('login');
                        setResetSent(false);
                      }}
                      className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 mb-6 transition-colors group"
                    >
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                      Back to Login
                    </button>

                    <header className="mb-6">
                      <h2 className="text-2xl font-black text-slate-900 mb-2">
                        Reset Password
                      </h2>
                      <p className="text-slate-600 text-sm">
                        Enter your email to receive a secure password reset link
                      </p>
                    </header>
                    
                    {!resetSent ? (
                      <form className="space-y-4" onSubmit={handleResetPassword}>
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider ml-1">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            required 
                            className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all text-slate-900 text-sm"
                            placeholder="admin@edustack.ke"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl font-black text-sm shadow-lg transition-all"
                        >
                          SEND RESET LINK
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                            <CheckCircle2 className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-base font-black text-emerald-900">Email Sent!</p>
                            <p className="text-xs text-emerald-700">Check your inbox</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-700">
                          If an account exists with that email, you'll receive password reset instructions within a few minutes.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Links - Reduced */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-4">
            <Link 
              to="/privacy" 
              className="text-[10px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-wider hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-[10px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-wider hover:underline"
            >
              Terms of Service
            </Link>
            <Link 
              to="/help" 
              className="text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-all uppercase tracking-wider flex items-center gap-1.5 hover:underline"
            >
              <LifeBuoy size={14} />
              Need Help?
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-slate-600" />
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              © 2024 EduStack CBC Kenya • Ministry of Education Licensed
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-slate-600" />
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}