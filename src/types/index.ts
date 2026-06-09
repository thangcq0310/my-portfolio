export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  type: "article" | "video";
  tags: string[];
  authorName: string;
  readTimeMinutes: number;
  coverImage?: string;
  featured?: boolean;
  publishedAt: any;
  viewCount?: number;
}

export interface Book {
  id: string;
  title: string;
  slug: string;
  author: string;
  description: string;
  coverImage?: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  featured?: boolean;
  externalUrl?: string;
  addedAt: any;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: "free" | "freemium" | "paid";
  url?: string;
  tags: string[];
  featured?: boolean;
  addedAt: any;
}

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  createdAt: any;
}

export interface ServiceLead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  message: string;
  createdAt: any;
}