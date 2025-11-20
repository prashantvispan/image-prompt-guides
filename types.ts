export interface ContentSection {
  heading: string;
  body: string; // Markdown allowed
}

export interface ModuleData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  exercises: string;
  // New detailed content fields
  content: ContentSection[];
  realLifeApplication: string;
}

export interface GeneratedLesson {
  moduleId: number;
  content: string; // Markdown content
}

export enum AppView {
  COURSE = 'COURSE',
  PLAYGROUND = 'PLAYGROUND'
}