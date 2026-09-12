export interface UniverseNode {
  id: string;
  category: string;
  emoji: string;
  title: string;
  shortSubtitle: string;
  description: string;
  tags: string[];
  footer: string;
  tagColors: string[];
}

export interface ProjectContribution {
  role: string;
  team: string;
  contributions: string[];
  teamContext?: string;
}

export interface ProjectEvidence {
  githubUrl?: string;
  readmeUrl?: string;
  screenshotsAvailable?: boolean;
  architectureAvailable?: boolean;
  liveDemoUrl?: string;
  repoStatus?: 'available' | 'coming-soon' | 'not-available';
  demoStatus?: 'available' | 'coming-soon' | 'unavailable';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'ai-ml' | 'web-app' | 'research' | 'design-tools';
  badgeCategory: string;
  bannerTitle: string;
  bannerDetail: string;
  bannerSubtext: string;
  iconName: string;
  tags: string[];
  statusLabel: string;
  eventOrContext?: string;
  teamSize?: string;
  features?: string[];
  longOverview?: string;
  technicalHighlights?: string[];
  githubUrl?: string;
  figmaUrl?: string;
  githubRepoType?: 'public' | 'private';
  liveDemoUrl?: string;
  // Enhanced verification & credibility fields
  problem?: string;
  solution?: string;
  contribution?: ProjectContribution;
  evidence?: ProjectEvidence;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  gradeLabel: string;
  summary: string;
  highlights: string[];
  coursework?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
  icon: string;
  metric?: string;
  highlight?: boolean;
}

export interface LeadershipItem {
  id: string;
  role: string;
  entity: string;
  period: string;
  impactMetric: string;
  description: string;
  responsibilities: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  skillsCovered: string[];
  type?: 'Certification' | 'Workshop' | 'Training';
}

export interface InterestScrapbook {
  id: string;
  title: string;
  emoji: string;
  tapeRotation: string;
  handwrittenNote: string;
  noteColor: string;
  description: string;
  hashtag: string;
  topicLabel: string;
  accentColor: string;
}
