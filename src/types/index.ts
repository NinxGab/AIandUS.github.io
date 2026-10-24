export type Discipline = 
  | 'Computer Science & Engineering'
  | 'Humanities & Social Sciences'
  | 'Business & Economics'
  | 'Biological & Health Sciences'
  | 'Physical & Mathematical Sciences'
  | 'Arts & Architecture';

export type StudyYear = '2023' | '2024' | '2025' | '2026';

export type MethodologyType = 
  | 'Large-Scale Longitudinal Survey'
  | 'Randomized Controlled Trial (RCT)'
  | 'Mixed-Methods Study'
  | 'Institutional Case Analysis'
  | 'Meta-Analysis & Systematic Review';

export interface ResearchStudy {
  id: string;
  title: string;
  authors: string[];
  institution: string;
  year: StudyYear;
  discipline: Discipline | 'Cross-Disciplinary';
  methodology: MethodologyType;
  sampleSize: number;
  doi: string;
  repository: string;
  repositoryUrl: string;
  summary: string;
  keyFindings: string[];
  metrics: {
    adoptionRate?: number; // %
    gradeEffectSize?: string; // e.g. "+0.34 GPA" or "d = 0.38"
    criticalThinkingDelta?: string; // e.g. "-12% retention on unprompted tests"
    timeSavedHoursPerWeek?: number;
  };
  tags: string[];
  apaCitation: string;
  bibtex: string;
}

export interface HeatmapCell {
  discipline: Discipline;
  year: StudyYear;
  adoptionRate: number; // 0 - 100%
  perceivedGradeGain: number; // 0 - 100% (% reporting grade boost)
  cognitiveRelianceIndex: number; // 1 - 10 (scale of cognitive offloading)
  policyClarityRating: number; // 1 - 100% of syllabi with explicit AI policies
  topTask: string;
  sampleCount: number;
}

export interface SurveyTrendPoint {
  year: StudyYear;
  dailyUsers: number; // %
  weeklyUsers: number; // %
  occasionalUsers: number; // %
  nonUsers: number; // %
  topTool: string;
  avgHoursSavedWeekly: number;
}

export interface TaskBreakdownItem {
  task: string;
  category: 'Writing & Language' | 'Problem Solving & Code' | 'Research & Synthesis' | 'Studying & Revision';
  percentage: number;
  impactScore: number; // 1-10 self-reported efficacy
  academicConcernLevel: 'Low' | 'Moderate' | 'High';
}

export interface SentimentQuote {
  id: string;
  quote: string;
  role: 'Undergraduate Senior' | 'Sophomore STEM' | 'First-Year Humanities' | 'Graduate TA' | 'Tenured Faculty' | 'Instructional Dean';
  institutionType: string;
  discipline: Discipline;
  year: StudyYear;
  sentiment: 'positive' | 'ambivalent' | 'concerned';
  theme: 'Productivity & Efficiency' | 'Socratic Learning & Tutoring' | 'Cognitive Atrophy & Retention' | 'Assessment & Honor Codes' | 'Equity & Access Gap';
  verifiedStatus: boolean;
}

export interface AIToolShare {
  name: string;
  share: number; // % of students using regularly
  category: string;
  primaryUse: string;
  trend: string;
}
