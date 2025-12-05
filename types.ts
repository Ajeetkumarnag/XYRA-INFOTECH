import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
}
