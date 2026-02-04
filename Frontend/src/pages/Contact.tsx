import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: "",
    fullName: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "New CBC Inquiry – EduStack",
      category: formData.category,
      name: formData.fullName,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({
          category: "",
          fullName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      <Header />

      <div className="pt-24 pb-12">
        <section className="container mx-auto px-6 text-center mb-12">
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001f3f] dark:text-white mb-4">
            Empowering Kenya's <span className="text-blue-600">CBC Journey</span>
          </motion.h1>
        </section>

        <main className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl p-8 md:p-12 relative overflow-hidden">

              {/* ✅ SUCCESS STATE */}
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                  <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <svg
                      className="w-20 h-20 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 max-w-md">
                    Thank you for contacting EduStack. Our CBC specialists will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                /* 🔽 ORIGINAL FORM – UNCHANGED */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="px-5 py-4 rounded-2xl bg-slate-50"
                    >
                      <option value="">Select Topic...</option>
                      <option value="implementation">CBC Implementation</option>
                      <option value="training">Teacher Training</option>
                      <option value="technical">Platform Support</option>
                      <option value="partnership">School Partnership</option>
                      <option value="demo">Request Demo</option>
                    </select>

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="px-5 py-4 rounded-2xl bg-slate-50"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="example@school.ke"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can EduStack help your institution transform CBC learning?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WEB3FORMS_KEY = "cfeb2c00-e884-4f54-8496-315cf9f85c42";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: "",
    fullName: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "New CBC Inquiry – EduStack",
      category: formData.category,
      name: formData.fullName,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({
          category: "",
          fullName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817]">
      <Header />

      <div className="pt-24 pb-12">
        <section className="container mx-auto px-6 text-center mb-12">
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001f3f] dark:text-white mb-4">
            Empowering Kenya's <span className="text-blue-600">CBC Journey</span>
          </motion.h1>
        </section>

        <main className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl p-8 md:p-12 relative overflow-hidden">

              {/* ✅ SUCCESS STATE */}
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                  <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <svg
                      className="w-20 h-20 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 max-w-md">
                    Thank you for contacting EduStack. Our CBC specialists will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                /* 🔽 ORIGINAL FORM – UNCHANGED */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="px-5 py-4 rounded-2xl bg-slate-50"
                    >
                      <option value="">Select Topic...</option>
                      <option value="implementation">CBC Implementation</option>
                      <option value="training">Teacher Training</option>
                      <option value="technical">Platform Support</option>
                      <option value="partnership">School Partnership</option>
                      <option value="demo">Request Demo</option>
                    </select>

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="px-5 py-4 rounded-2xl bg-slate-50"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="example@school.ke"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can EduStack help your institution transform CBC learning?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
