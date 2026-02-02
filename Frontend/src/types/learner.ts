import { GradeLevel, Gender } from './enums';
import { CreateParentDto } from './user';

export interface Learner {
  id: string;
  schoolId: string;
  admissionNumber: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string;
  gender: Gender;
  gradeLevel: GradeLevel;
  streamName?: string;
  photoUrl?: string;
  specialNeeds?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LearnerParent {
  id: string;
  learnerId: string;
  parentId: string;
  isPrimary: boolean;
}

export interface CreateLearnerDto {
  admissionNumber: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string;
  gender: Gender;
  gradeLevel: GradeLevel;
  streamName?: string;
  specialNeeds?: string;
  // Parent details captured during learner creation
  parentDetails: CreateParentDto;
}

export interface LearnerWithParent extends Learner {
  parents: {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    relationship: string;
    isPrimary: boolean;
  }[];
}
