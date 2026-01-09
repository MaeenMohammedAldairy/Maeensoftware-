export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: { title: string; desc: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: {
    label: string;
    path: string;
    description?: string;
    iconName?: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface JobPosition {
  id: string;
  title: string;
  type: 'full-time' | 'part-time' | 'remote';
  department: string;
  location: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
  demoLink?: string;
  isPopular?: boolean;
}