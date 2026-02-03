import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SchoolRegistrationStep3, AdministratorRole } from '@/types/school';
import { ArrowLeft, Loader2, Eye, EyeOff } from 'lucide-react';

interface Props {
  initialData: SchoolRegistrationStep3;
  onSubmit: (data: SchoolRegistrationStep3) => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function AdminDetailsStep({ initialData, onSubmit, onBack, isLoading }: Props) {
  const [formData, setFormData] = useState<SchoolRegistrationStep3>(initialData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: keyof SchoolRegistrationStep3, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValid = 
    formData.fullName && 
    formData.tscNo && 
    formData.role &&
    formData.phoneNumber &&
    formData.email &&
    formData.username &&
    formData.password;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          This user will become the Super Admin for the school with full access to manage the school account.
        </p>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="Enter full name"
          required
        />
      </div>

      {/* TSC No. */}
      <div className="space-y-2">
        <Label htmlFor="tscNo">TSC No. *</Label>
        <Input
          id="tscNo"
          value={formData.tscNo}
          onChange={(e) => handleChange('tscNo', e.target.value)}
          placeholder="Enter TSC number"
          required
        />
      </div>

      {/* Role */}
      <div className="space-y-2">
        <Label htmlFor="role">Role *</Label>
        <Select
          value={formData.role || ''}
          onValueChange={(value) => handleChange('role', value as AdministratorRole)}
        >
          <SelectTrigger id="role">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={AdministratorRole.HEADTEACHER}>Headteacher</SelectItem>
            <SelectItem value={AdministratorRole.PRINCIPAL}>Principal</SelectItem>
            <SelectItem value={AdministratorRole.DIRECTOR}>Director</SelectItem>
            <SelectItem value={AdministratorRole.ADMINISTRATOR}>Administrator</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number *</Label>
        <Input
          id="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleChange('phoneNumber', e.target.value)}
          placeholder="e.g., +254 712 345 678"
          required
        />
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="e.g., admin@school.ac.ke"
          required
        />
      </div>

      {/* National ID / Passport */}
      <div className="space-y-2">
        <Label htmlFor="nationalIdOrPassport">National ID / Passport (Optional)</Label>
        <Input
          id="nationalIdOrPassport"
          value={formData.nationalIdOrPassport}
          onChange={(e) => handleChange('nationalIdOrPassport', e.target.value)}
          placeholder="Enter National ID or Passport number"
        />
      </div>

      {/* Username */}
      <div className="space-y-2">
        <Label htmlFor="username">Username *</Label>
        <Input
          id="username"
          value={formData.username}
          onChange={(e) => handleChange('username', e.target.value)}
          placeholder="Choose a username"
          required
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="Create a strong password"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Password must be at least 8 characters with uppercase, lowercase, number, and special character
        </p>
      </div>

      {/* Two-Factor Authentication */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="twoFactorAuth"
          checked={formData.twoFactorAuth}
          onCheckedChange={(checked) => handleChange('twoFactorAuth', checked)}
        />
        <Label
          htmlFor="twoFactorAuth"
          className="text-sm font-normal cursor-pointer"
        >
          Enable Two-Factor Authentication (Optional but recommended)
        </Label>
      </div>

      {/* Form Actions */}
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={isLoading}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous Step
        </Button>
        <Button
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Registering School...
            </>
          ) : (
            'Complete Registration'
          )}
        </Button>
      </div>
    </form>
  );
}
