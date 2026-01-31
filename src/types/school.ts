import { SchoolLevel } from './enums';

export interface School {
  id: string;
  name: string;
  code: string;
  level: SchoolLevel;
  county: string;
  subCounty: string;
  ward?: string;
  address: string;
  phoneNumber: string;
  email: string;
  logoUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SchoolStats {
  totalTeachers: number;
  totalLearners: number;
  totalParents: number;
  activeClasses: number;
  recentAssessments: number;
}

export interface CreateSchoolDto {
  name: string;
  code: string;
  level: SchoolLevel;
  county: string;
  subCounty: string;
  ward?: string;
  address: string;
  phoneNumber: string;
  email: string;
}
