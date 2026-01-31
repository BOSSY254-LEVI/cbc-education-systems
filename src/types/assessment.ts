import { AssessmentType, PerformanceLevel, Term } from './enums';

export interface LearningArea {
  id: string;
  name: string;
  code: string;
  description?: string;
}

export interface Strand {
  id: string;
  learningAreaId: string;
  name: string;
  description?: string;
}

export interface SubStrand {
  id: string;
  strandId: string;
  name: string;
  description?: string;
}

export interface Competency {
  id: string;
  subStrandId: string;
  name: string;
  description?: string;
  indicators: string[];
}

export interface Assessment {
  id: string;
  learnerId: string;
  teacherId: string;
  learningAreaId: string;
  strandId: string;
  subStrandId?: string;
  competencyId?: string;
  type: AssessmentType;
  term: Term;
  year: number;
  performanceLevel: PerformanceLevel;
  remarks?: string;
  evidenceUrls?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Rubric {
  id: string;
  competencyId: string;
  exceedingDescription: string;
  meetingDescription: string;
  approachingDescription: string;
  belowDescription: string;
}

export interface CreateAssessmentDto {
  learnerId: string;
  learningAreaId: string;
  strandId: string;
  subStrandId?: string;
  competencyId?: string;
  type: AssessmentType;
  term: Term;
  year: number;
  performanceLevel: PerformanceLevel;
  remarks?: string;
}
