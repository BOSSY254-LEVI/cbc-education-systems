import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, GraduationCap, School, Sparkles } from 'lucide-react';
import SchoolBasicInfoStep from './steps/SchoolBasicInfoStep';
import SchoolDetailsStep from './steps/SchoolDetailsStep';
import AdminDetailsStep from './steps/AdminDetailsStep';
import { 
  SchoolRegistrationStep1, 
  SchoolRegistrationStep2, 
  SchoolRegistrationStep3 
} from '@/types/school';
import { useToast } from '@/hooks/use-toast';

export default function SchoolRegistration() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [step1Data, setStep1Data] = useState<SchoolRegistrationStep1>({
    name: '',
    code: '',
    schoolType: undefined,
    levelsOffered: [],
    yearEstablished: '',
    motto: '',
  });

  const [step2Data, setStep2Data] = useState<SchoolRegistrationStep2>({
    county: '',
    subCounty: '',
    ward: '',
    physicalAddress: '',
    postalAddress: '',
    phoneNumber: '',
    email: '',
    website: '',
  });

  const [step3Data, setStep3Data] = useState<SchoolRegistrationStep3>({
    fullName: '',
    tscNo: '',
    role: undefined,
    phoneNumber: '',
    email: '',
    nationalIdOrPassport: '',
    username: '',
    password: '',
    twoFactorAuth: false,
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleStep1Submit = (data: SchoolRegistrationStep1) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: SchoolRegistrationStep2) => {
    setStep2Data(data);
    setCurrentStep(3);
  };

  const handleStep3Submit = async (data: SchoolRegistrationStep3) => {
    setStep3Data(data);
    setIsLoading(true);

    try {
      // TODO: Integrate with backend API to create school and super admin
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: 'School Registration Successful',
        description: `${step1Data.name} has been registered successfully. Super Admin account created for ${data.fullName}.`,
      });

      // Navigate to login page after successful registration
      navigate('/login');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to register school. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { number: 1, title: 'School Information', description: 'Basic school details' },
    { number: 2, title: 'Location & Contact', description: 'School address and contacts' },
    { number: 3, title: 'Administrator', description: 'School admin account setup' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />
      
      {/* Animated Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [100, -100, 100],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 right-1/4 text-blue-400/40 dark:text-blue-300/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <GraduationCap size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-purple-400/40 dark:text-purple-300/30"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <School size={56} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-16 text-pink-400/40 dark:text-pink-300/30"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={40} />
      </motion.div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full p-4 shadow-lg">
              <School size={48} />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            School Registration
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join our platform and transform your school's educational journey
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Progress value={progress} className="h-3 mb-6" />
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex flex-col items-center flex-1 ${
                  currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep > step.number
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-lg'
                      : currentStep === step.number
                      ? 'border-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentStep > step.number ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <span className="font-semibold text-lg">{step.number}</span>
                  )}
                </motion.div>
                <div className="text-center hidden md:block">
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-2xl border-white/20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-b border-white/20">
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription className="text-base">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {currentStep === 1 && (
                <SchoolBasicInfoStep
                  initialData={step1Data}
                  onSubmit={handleStep1Submit}
                  onBack={() => navigate('/')}
                />
              )}
              {currentStep === 2 && (
                <SchoolDetailsStep
                  initialData={step2Data}
                  onSubmit={handleStep2Submit}
                  onBack={() => setCurrentStep(1)}
                />
              )}
              {currentStep === 3 && (
                <AdminDetailsStep
                  initialData={step3Data}
                  onSubmit={handleStep3Submit}
                  onBack={() => setCurrentStep(2)}
                  isLoading={isLoading}
                />
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
