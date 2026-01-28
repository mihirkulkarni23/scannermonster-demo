// File: ./types/index.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  freeShipping?: boolean;
  features: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
}

