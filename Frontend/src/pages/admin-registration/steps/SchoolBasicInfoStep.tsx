import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SchoolRegistrationStep1, SchoolType, LevelOffered } from '@/types/school';
import { Upload, X, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  initialData: SchoolRegistrationStep1;
  onSubmit: (data: SchoolRegistrationStep1) => void;
  onBack: () => void;
}

const levelOptions = [
  LevelOffered.PRE_PRIMARY,
  LevelOffered.LOWER_PRIMARY,
  LevelOffered.UPPER_PRIMARY,
  LevelOffered.JUNIOR_SECONDARY,
  LevelOffered.SENIOR_SECONDARY,
];

export default function SchoolBasicInfoStep({ initialData, onSubmit, onBack }: Props) {
  const [formData, setFormData] = useState<SchoolRegistrationStep1>(initialData);
  const [logoPreview, setLogoPreview] = useState<string>('');

  const handleChange = (field: keyof SchoolRegistrationStep1, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLevelToggle = (level: LevelOffered) => {
    setFormData(prev => ({
      ...prev,
      levelsOffered: prev.levelsOffered.includes(level)
        ? prev.levelsOffered.filter(l => l !== level)
        : [...prev.levelsOffered, level],
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setFormData(prev => ({ ...prev, logo: undefined }));
    setLogoPreview('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValid = 
    formData.name && 
    formData.code && 
    formData.schoolType && 
    formData.levelsOffered.length > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* School Name */}
      <div className="space-y-2">
        <Label htmlFor="name">School Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Enter school name"
          required
        />
      </div>

      {/* School Code */}
      <div className="space-y-2">
        <Label htmlFor="code">School Code *</Label>
        <Input
          id="code"
          value={formData.code}
          onChange={(e) => handleChange('code', e.target.value)}
          placeholder="Enter school code"
          required
        />
      </div>

      {/* School Type */}
      <div className="space-y-2">
        <Label htmlFor="schoolType">School Type *</Label>
        <Select
          value={formData.schoolType || ''}
          onValueChange={(value) => handleChange('schoolType', value as SchoolType)}
        >
          <SelectTrigger id="schoolType">
            <SelectValue placeholder="Select school type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={SchoolType.PUBLIC}>Public School</SelectItem>
            <SelectItem value={SchoolType.PRIVATE}>Private School</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Levels Offered */}
      <div className="space-y-2">
        <Label>Levels Offered *</Label>
        <p className="text-sm text-muted-foreground mb-3">
          Select all levels that apply to your school
        </p>
        <div className="space-y-3">
          {levelOptions.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={formData.levelsOffered.includes(level)}
                onCheckedChange={() => handleLevelToggle(level)}
              />
              <Label
                htmlFor={level}
                className="text-sm font-normal cursor-pointer"
              >
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Year Established */}
      <div className="space-y-2">
        <Label htmlFor="yearEstablished">Year Established (Optional)</Label>
        <Input
          id="yearEstablished"
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          value={formData.yearEstablished}
          onChange={(e) => handleChange('yearEstablished', e.target.value)}
          placeholder="e.g., 1995"
        />
      </div>

      {/* School Motto */}
      <div className="space-y-2">
        <Label htmlFor="motto">School Motto (Optional)</Label>
        <Textarea
          id="motto"
          value={formData.motto}
          onChange={(e) => handleChange('motto', e.target.value)}
          placeholder="Enter school motto"
          rows={3}
        />
      </div>

      {/* School Logo */}
      <div className="space-y-2">
        <Label htmlFor="logo">School Logo (Optional)</Label>
        {logoPreview ? (
          <div className="relative inline-block">
            <img
              src={logoPreview}
              alt="Logo preview"
              className="w-32 h-32 object-contain border rounded-md"
            />
            <Button
              type="button"
              size="icon"
              variant="destructive"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
              onClick={removeLogo}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
            <Input
              id="logo"
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden"
            />
            <Label
              htmlFor="logo"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <Upload className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Click to upload school logo
              </span>
              <span className="text-xs text-muted-foreground">
                PNG, JPG up to 5MB
              </span>
            </Label>
          </div>
        )}
      </div>

      {/* Form Actions */}
      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        <Button
          type="submit"
          disabled={!isValid}
        >
          Next: Location & Contact
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}
