import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SchoolRegistrationStep2 } from '@/types/school';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  initialData: SchoolRegistrationStep2;
  onSubmit: (data: SchoolRegistrationStep2) => void;
  onBack: () => void;
}

export default function SchoolDetailsStep({ initialData, onSubmit, onBack }: Props) {
  const [formData, setFormData] = useState<SchoolRegistrationStep2>(initialData);

  const handleChange = (field: keyof SchoolRegistrationStep2, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValid = 
    formData.county && 
    formData.subCounty && 
    formData.ward &&
    formData.physicalAddress &&
    formData.postalAddress &&
    formData.phoneNumber &&
    formData.email;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* County */}
      <div className="space-y-2">
        <Label htmlFor="county">County *</Label>
        <Input
          id="county"
          value={formData.county}
          onChange={(e) => handleChange('county', e.target.value)}
          placeholder="Enter county"
          required
        />
      </div>

      {/* Sub-County */}
      <div className="space-y-2">
        <Label htmlFor="subCounty">Sub-County *</Label>
        <Input
          id="subCounty"
          value={formData.subCounty}
          onChange={(e) => handleChange('subCounty', e.target.value)}
          placeholder="Enter sub-county"
          required
        />
      </div>

      {/* Ward */}
      <div className="space-y-2">
        <Label htmlFor="ward">Ward *</Label>
        <Input
          id="ward"
          value={formData.ward}
          onChange={(e) => handleChange('ward', e.target.value)}
          placeholder="Enter ward"
          required
        />
      </div>

      {/* Physical Address */}
      <div className="space-y-2">
        <Label htmlFor="physicalAddress">Physical Address *</Label>
        <Input
          id="physicalAddress"
          value={formData.physicalAddress}
          onChange={(e) => handleChange('physicalAddress', e.target.value)}
          placeholder="Enter physical address"
          required
        />
      </div>

      {/* Postal Address */}
      <div className="space-y-2">
        <Label htmlFor="postalAddress">Postal Address *</Label>
        <Input
          id="postalAddress"
          value={formData.postalAddress}
          onChange={(e) => handleChange('postalAddress', e.target.value)}
          placeholder="e.g., P.O. Box 123-00100, Nairobi"
          required
        />
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

      {/* Official Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Official Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="e.g., info@school.ac.ke"
          required
        />
      </div>

      {/* Website */}
      <div className="space-y-2">
        <Label htmlFor="website">Website (Optional)</Label>
        <Input
          id="website"
          type="url"
          value={formData.website}
          onChange={(e) => handleChange('website', e.target.value)}
          placeholder="e.g., https://www.school.ac.ke"
        />
      </div>

      {/* Form Actions */}
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous Step
        </Button>
        <Button
          type="submit"
          disabled={!isValid}
        >
          Next: Administrator Details
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}
