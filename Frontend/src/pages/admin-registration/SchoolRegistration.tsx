import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2 } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            School Registration
          </h1>
          <p className="text-muted-foreground">
            Complete the registration process to join our platform
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 mb-4" />
          <div className="flex justify-between">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex flex-col items-center ${
                  currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 ${
                    currentStep > step.number
                      ? 'bg-primary border-primary text-primary-foreground'
                      : currentStep === step.number
                      ? 'border-primary text-primary'
                      : 'border-muted-foreground'
                  }`}
                >
                  {currentStep > step.number ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{step.number}</span>
                  )}
                </div>
                <div className="text-center hidden md:block">
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription>
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
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
      </div>
    </div>
  );
}
