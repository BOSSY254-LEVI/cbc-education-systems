import React, { useState, ChangeEvent, useRef } from 'react';
import {
  School, MapPin, GraduationCap, User, Shield, CheckCircle,
  Eye, EyeOff, AlertCircle, Upload, X, ChevronRight, ChevronLeft
} from 'lucide-react';

interface FormData {
  logo: File | null;
  logoPreview: string;
  schoolName: string;
  schoolType: string;
  educationLevel: string;
  affiliation: string;
  address: string;
  city: string;
  county: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  establishedYear: string;
  studentCapacity: string;
  currentEnrollment: string;
  numberOfTeachers: string;
  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
  adminPhone: string;
  adminPosition: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning';
}

const STEPS = [
  { id: 1, label: 'Institution', icon: School },
  { id: 2, label: 'Location', icon: MapPin },
  { id: 3, label: 'Stats', icon: GraduationCap },
  { id: 4, label: 'Admin', icon: User },
  { id: 5, label: 'Security', icon: Shield },
];

export default function SchoolRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    logo: null,
    logoPreview: '',
    schoolName: '',
    schoolType: '',
    educationLevel: '',
    affiliation: '',
    address: '',
    city: '',
    county: '',
    postalCode: '',
    phone: '',
    email: '',
    website: '',
    establishedYear: '',
    studentCapacity: '',
    currentEnrollment: '',
    numberOfTeachers: '',
    adminFirstName: '',
    adminLastName: '',
    adminEmail: '',
    adminPhone: '',
    adminPosition: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const addToast = (message: string, type: Toast['type'] = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        addToast('File size must be less than 2MB', 'error');
        return;
      }
      setFormData(prev => ({
        ...prev,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      }));
      addToast('Logo uploaded successfully', 'success');
    }
  };

  const removeLogo = () => {
    setFormData(prev => ({ ...prev, logo: null, logoPreview: '' }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.schoolName || !formData.schoolType || !formData.educationLevel) {
          addToast('Please fill all required fields', 'error');
          return false;
        }
        return true;
      case 2:
        if (!formData.address || !formData.county || !formData.phone || !formData.email) {
          addToast('Please fill all required location fields', 'error');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          addToast('Please enter a valid email', 'error');
          return false;
        }
        return true;
      case 3:
        if (!formData.establishedYear || !formData.studentCapacity || !formData.currentEnrollment || !formData.numberOfTeachers) {
          addToast('Please fill all required statistics', 'error');
          return false;
        }
        return true;
      case 4:
        if (!formData.adminFirstName || !formData.adminLastName || !formData.adminPosition) {
          addToast('Please fill all admin details', 'error');
          return false;
        }
        return true;
      case 5:
        if (!formData.password || !formData.confirmPassword) {
          addToast('Please enter password', 'error');
          return false;
        }
        if (formData.password.length < 8) {
          addToast('Password must be at least 8 characters', 'error');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          addToast('Passwords do not match', 'error');
          return false;
        }
        if (!formData.acceptTerms) {
          addToast('Please accept terms and conditions', 'error');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      addToast('Registration submitted successfully!', 'success');
      console.log('Form submitted:', formData);
    } catch (error) {
      addToast('Registration failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const InputLabel = ({ label, required }: { label: string; required?: boolean }) => (
    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
  );

  const progress = (currentStep / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4 font-sans text-slate-900 relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Toast notifications */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-sm border animate-slide-in pointer-events-auto ${
              toast.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
              toast.type === 'error' ? 'bg-rose-50 border-rose-200 text-rose-800' :
              'bg-amber-50 border-amber-200 text-amber-800'
            }`}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500" />}
            {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-500" />}
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Main card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden border border-slate-100 relative z-10">

        <div className="flex flex-col lg:flex-row min-h-[700px]">

          {/* Sidebar - Progress */}
          <div className="w-full lg:w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white relative overflow-hidden">
            {/* Sidebar background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                    <School className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight">EduStack</span>
                </div>
                <p className="text-slate-300 text-xs font-medium">Kenya CBC Portal</p>
              </div>

              {/* Progress indicator */}
              <div className="mb-10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Progress</div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 ease-out rounded-full shadow-lg"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-xs text-slate-400 mt-2">{currentStep} of 5 steps</div>
              </div>

              {/* Step navigation */}
              <nav className="space-y-4">
                {STEPS.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;

                  return (
                    <div key={step.id}>
                      <div className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group ${
                        isActive ? 'bg-blue-500/20 border border-blue-400/50' : isCompleted ? 'opacity-60' : 'opacity-40 hover:opacity-60'
                      }`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 flex-shrink-0 ${
                          isActive ? 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/50' :
                          isCompleted ? 'bg-emerald-500 border-emerald-400 text-white' :
                          'border-slate-600 text-slate-400'
                        }`}>
                          {isCompleted ? <CheckCircle className="w-5 h-5" /> : step.id}
                        </div>
                        <div className="hidden md:block">
                          <p className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>{step.label}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </nav>

              {/* Motivational text */}
              <div className="mt-12 p-4 bg-blue-500/10 border border-blue-400/30 rounded-xl">
                <p className="text-xs text-blue-200 leading-relaxed">
                  <span className="font-bold text-blue-300">Almost there!</span> Complete all steps to unlock your institution's digital presence.
                </p>
              </div>
            </div>
          </div>

          {/* Main Form Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="p-8 pb-6 border-b border-slate-100 bg-gradient-to-r from-white to-blue-50/30">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-1">
                Register Institution
              </h1>
              <p className="text-slate-500 text-sm font-medium">Step {currentStep} of 5: {STEPS[currentStep-1].label} Details</p>
            </header>

            {/* Main form content */}
            <main className="flex-1 p-8 overflow-y-auto max-h-[600px] scrollbar-hide">

              {/* Step 1: School Info & Logo */}
              {currentStep === 1 && (
                <div className="animate-fade-in space-y-6">
                  {/* Logo Upload Section */}
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-blue-200 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 group cursor-pointer"
                       onClick={() => !formData.logoPreview && fileInputRef.current?.click()}>
                    {formData.logoPreview ? (
                      <div className="relative">
                        <img src={formData.logoPreview} alt="School Logo" className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-lg" />
                        <button
                          onClick={(e) => { e.stopPropagation(); removeLogo(); }}
                          className="absolute -top-3 -right-3 bg-rose-500 text-white rounded-full p-1.5 shadow-lg hover:bg-rose-600 hover:scale-110 transition-all"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Upload className="w-8 h-8 text-blue-500" />
                        </div>
                        <p className="text-sm font-bold text-slate-700">Upload School Logo</p>
                        <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 2MB</p>
                      </div>
                    )}
                    <input type="file" ref={fileInputRef} onChange={handleLogoChange} className="hidden" accept="image/*" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <InputLabel label="Official School Name" required />
                      <input
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="e.g. Sunshine Academy"
                      />
                    </div>
                    <div>
                      <InputLabel label="School Type" required />
                      <select name="schoolType" value={formData.schoolType} onChange={handleInputChange} className="form-input-custom">
                        <option value="">Select type...</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="charter">Charter</option>
                      </select>
                    </div>
                    <div>
                      <InputLabel label="Education Level" required />
                      <select name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} className="form-input-custom">
                        <option value="">Select level...</option>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="both">Primary & Secondary</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <InputLabel label="Registration/Affiliation Number" />
                      <input
                        name="affiliation"
                        value={formData.affiliation}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="Ministry of Education registration number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location */}
              {currentStep === 2 && (
                <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="md:col-span-2">
                      <InputLabel label="Physical Address" required />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={2}
                        className="form-input-custom resize-none"
                        placeholder="Street, Building, Plot No."
                      />
                    </div>
                    <div>
                      <InputLabel label="City/Town" />
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="e.g. Nairobi"
                      />
                    </div>
                    <div>
                      <InputLabel label="County" required />
                      <input
                        name="county"
                        value={formData.county}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="e.g. Nairobi County"
                      />
                    </div>
                    <div>
                      <InputLabel label="Postal Code" />
                      <input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="00100"
                      />
                    </div>
                    <div>
                      <InputLabel label="Phone Number" required />
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        type="tel"
                        className="form-input-custom"
                        placeholder="+254 712 345 678"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <InputLabel label="School Email" required />
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        className="form-input-custom"
                        placeholder="info@school.ac.ke"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <InputLabel label="Website (Optional)" />
                      <input
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        type="url"
                        className="form-input-custom"
                        placeholder="https://www.school.ac.ke"
                      />
                    </div>
                </div>
              )}

              {/* Step 3: Stats */}
              {currentStep === 3 && (
                <div className="animate-fade-in space-y-5">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700 leading-relaxed">Ensure enrollment figures are accurate as of the latest term for government compliance and system configuration.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <InputLabel label="Est. Year" required />
                      <input
                        name="establishedYear"
                        value={formData.establishedYear}
                        onChange={handleInputChange}
                        type="number"
                        className="form-input-custom"
                        min="1900"
                        max={new Date().getFullYear()}
                        placeholder="2005"
                      />
                    </div>
                    <div>
                      <InputLabel label="Capacity" required />
                      <input
                        name="studentCapacity"
                        value={formData.studentCapacity}
                        onChange={handleInputChange}
                        type="number"
                        className="form-input-custom"
                        placeholder="500"
                        min="1"
                      />
                    </div>
                    <div>
                      <InputLabel label="Enrollment" required />
                      <input
                        name="currentEnrollment"
                        value={formData.currentEnrollment}
                        onChange={handleInputChange}
                        type="number"
                        className="form-input-custom"
                        placeholder="450"
                        min="0"
                      />
                    </div>
                    <div>
                      <InputLabel label="Teachers" required />
                      <input
                        name="numberOfTeachers"
                        value={formData.numberOfTeachers}
                        onChange={handleInputChange}
                        type="number"
                        className="form-input-custom"
                        placeholder="25"
                        min="1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Admin */}
              {currentStep === 4 && (
                <div className="animate-fade-in space-y-5">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                    <User className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 leading-relaxed">This person will be the primary administrator with full access to manage the institution's account.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <InputLabel label="First Name" required />
                      <input
                        name="adminFirstName"
                        value={formData.adminFirstName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <InputLabel label="Last Name" required />
                      <input
                        name="adminLastName"
                        value={formData.adminLastName}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <InputLabel label="Position/Title" required />
                      <input
                        name="adminPosition"
                        value={formData.adminPosition}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input-custom"
                        placeholder="e.g. Principal, Headmaster, Director"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <InputLabel label="Admin Email" />
                      <input
                        name="adminEmail"
                        value={formData.adminEmail}
                        onChange={handleInputChange}
                        type="email"
                        className="form-input-custom"
                        placeholder="admin@school.ac.ke"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <InputLabel label="Admin Phone" />
                      <input
                        name="adminPhone"
                        value={formData.adminPhone}
                        onChange={handleInputChange}
                        type="tel"
                        className="form-input-custom"
                        placeholder="+254 712 345 678"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Security */}
              {currentStep === 5 && (
                <div className="animate-fade-in space-y-5">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-green-700 leading-relaxed">Create a strong password to secure your institution's account. You'll use this to log in.</p>
                  </div>

                  <div>
                    <InputLabel label="Account Password" required />
                    <div className="relative">
                      <input
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        type={showPassword ? "text" : "password"}
                        className="form-input-custom pr-10"
                        placeholder="Enter a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Minimum 8 characters, include uppercase, lowercase, numbers and symbols</p>
                  </div>

                  <div>
                    <InputLabel label="Confirm Password" required />
                    <div className="relative">
                      <input
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-input-custom pr-10"
                        placeholder="Re-enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 hover:border-slate-300 transition-all group">
                    <input
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      type="checkbox"
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I certify that I am an authorized representative of this institution and agree to the
                      <span className="text-blue-600 font-bold hover:underline cursor-pointer"> Terms of Service</span> and
                      <span className="text-blue-600 font-bold hover:underline cursor-pointer"> Privacy Policy</span>.
                    </span>
                  </label>
                </div>
              )}
            </main>

            {/* Footer Navigation */}
            <footer className="p-8 border-t border-slate-100 bg-slate-50/80 backdrop-blur-sm flex justify-between items-center">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:gap-3 duration-300"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              <button
                onClick={currentStep === 5 ? handleSubmit : nextStep}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-300/50 flex items-center gap-2 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : currentStep === 5 ? (
                  <>
                    Complete Registration
                    <CheckCircle className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </footer>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .form-input-custom {
          width: 100%;
          padding: 0.875rem 1rem;
          border-radius: 0.875rem;
          border: 1.5px solid #e2e8f0;
          background-color: #ffffff;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .form-input-custom:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 0 0 1px #3b82f6;
        }
        .form-input-custom:hover:not(:disabled) {
          border-color: #cbd5e1;
        }
        .form-input-custom::placeholder {
          color: #cbd5e1;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
