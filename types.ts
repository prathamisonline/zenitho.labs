import { LucideIcon } from 'lucide-react';

export interface PainPoint {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface Step {
  id: number;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  timeline: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  testimonial: string;
  testimonialAuthor: string;
  // Detailed fields
  overview?: string;
  painPointsSolved?: string[];
  userPersonas?: string[];
  marketSize?: {
    tam: string;
    sam: string;
    som: string;
  };
  techStack?: {
    frontend?: string;
    backend?: string;
    integrations?: string;
    other?: string;
  };
  buildTimeline?: string; // or detailed
  resourcesNeeded?: string;
  analyticsSetup?: string;
  marketingEfforts?: string;
}

export interface Differentiator {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  image: string;
  rating: number;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  bestFor: string;
  included: string[];
  notIncluded?: string[];
  timeline: string;
  popular?: boolean;
  value?: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}