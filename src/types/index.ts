export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface RoadmapItem {
  year: string;
  title: string;
  description: string;
  complete: boolean;
}

export interface TechnologySection {
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}