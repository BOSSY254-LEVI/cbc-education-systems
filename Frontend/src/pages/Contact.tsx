import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: '',
    fullName: '',
    email: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: 'New CBC Inquiry',
      category: formData.category,
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (data.success) {
        setShowSuccess(true)
        setFormData({
          category: '',
          fullName: '',
          email: '',
          message: ''
        })

        setTimeout(() => setShowSuccess(false), 2500)
      }
    } catch (err) {
      console.error('Web3Forms error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      <Header />

      <div className="pt-24 pb-12">
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
            Empowering Kenya's <span className="text-blue-600">CBC Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Have questions about our competency-based tracking tools? Our team of
            specialists is ready to assist your school's transition.
          </motion.p>
        </section>

        <main className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden"
            >
              {showSuccess && (
                <div className="absolute inset-0 z-50 bg-white/90 dark:bg-slate-900/90 flex flex-col items-center justify-center rounded-[32px]">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-4 animate-pulse" />
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    Message sent successfully
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* --- YOUR ORIGINAL FORM JSX CONTINUES UNCHANGED --- */}
                {/* Nothing removed or redesigned */}
                {/* Button already reacts via isSubmitting */}
              </form>
            </motion.div>

            {/* RIGHT SIDE PANELS — UNCHANGED */}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

function ContactInfoCard({ icon, title, detail, link }) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 flex items-center gap-5 hover:shadow-xl transition-all"
    >
      <div className="p-4 rounded-xl bg-blue-50">{icon}</div>
      <div className="flex-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {title}
        </p>
        <p className="text-sm font-bold text-slate-900 dark:text-white">
          {detail}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-slate-300" />
    </a>
  )
}
