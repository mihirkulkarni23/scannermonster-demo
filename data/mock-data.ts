// File: ./data/mock-data.ts
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

export const products: Product[] = [
  {
    id: "1",
    name: "Uniden SDS200 Advanced Digital Scanner",
    slug: "uniden-sds200",
    price: 649.99,
    images: ["/products/sds200.png", "/products/sds200-2.png"],
    rating: 4.9,
    reviewCount: 347,
    description:
      "The Uniden SDS200 is the flagship base/mobile scanner with True I/Q technology for exceptional digital decode performance.",
    category: "Base/Mobile Scanners",
    brand: "Uniden",
    inStock: true,
    isNew: true,
    isFeatured: true,
    isBestseller: true,
    freeShipping: true,
    features: [
      "True I/Q Digital Performance",
      "P25 Phase I & II Support",
      "DMR, NXDN, ProVoice Support",
      "GPS Support",
      "microSD Card Recording",
    ],
  },
  {
    id: "2",
    name: "Uniden SDS100 True I/Q Handheld Scanner",
    slug: "uniden-sds100",
    price: 649.99,
    images: ["/products/sds100.png"],
    rating: 4.8,
    reviewCount: 412,
    description:
      "The ultimate portable digital scanner with True I/Q technology and simulcast performance.",
    category: "Portable Scanners",
    brand: "Uniden",
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    freeShipping: true,
    features: [
      "True I/Q Handheld Design",
      "P25 Phase I & II",
      "GPS Location Support",
      "Compact & Portable",
    ],
  },
  {
    id: "3",
    name: "Uniden BCD436HP Digital Handheld Scanner",
    slug: "uniden-bcd436hp",
    price: 499.99,
    compareAtPrice: 549.99,
    images: ["/products/bcd436hp.png"],
    rating: 4.7,
    reviewCount: 289,
    description:
      "Feature-packed digital handheld scanner with HomePatrol-style interface and GPS support.",
    category: "Portable Scanners",
    brand: "Uniden",
    inStock: true,
    isFeatured: true,
    freeShipping: true,
    features: [
      "HomePatrol-Style Programming",
      "P25 Phase I & II",
      "GPS Support",
      "Close Call RF Capture",
    ],
  },
  {
    id: "4",
    name: "Uniden HomePatrol-2 Scanner",
    slug: "uniden-homepatrol-2",
    price: 619.99,
    images: ["/products/homepatrol2.png"],
    rating: 4.6,
    reviewCount: 198,
    description:
      "The simplest scanner to use - just enter your zip code and start listening.",
    category: "Portable Scanners",
    brand: "Uniden",
    inStock: true,
    isFeatured: true,
    freeShipping: true,
    features: [
      "Zip Code Programming",
      "TouchScreen Interface",
      "P25 Phase I & II",
      "Built-in GPS",
    ],
  },
  {
    id: "5",
    name: "Uniden BC125AT Handheld Scanner",
    slug: "uniden-bc125at",
    price: 129.99,
    images: ["/products/bc125at.png"],
    rating: 4.5,
    reviewCount: 523,
    description:
      "Affordable entry-level scanner perfect for beginners. Alpha tagging and Close Call support.",
    category: "Portable Scanners",
    brand: "Uniden",
    inStock: true,
    isBestseller: true,
    freeShipping: true,
    features: [
      "500 Alpha-Tagged Channels",
      "Close Call RF Capture",
      "Do Not Disturb Mode",
      "Lightweight & Portable",
    ],
  },
  {
    id: "6",
    name: "Uniden BCD996P2 Digital Mobile Scanner",
    slug: "uniden-bcd996p2",
    price: 529.99,
    images: ["/products/bcd996p2.png"],
    rating: 4.8,
    reviewCount: 167,
    description:
      "Full-featured digital mobile scanner with TrunkTracker V technology.",
    category: "Base/Mobile Scanners",
    brand: "Uniden",
    inStock: true,
    freeShipping: true,
    features: [
      "TrunkTracker V",
      "P25 Phase I & II",
      "Dynamic Memory System",
      "Mobile Installation",
    ],
  },
];

export const categories = [
  {
    name: "Portable Scanners",
    slug: "portable-scanners",
    description: "Handheld scanners you can take anywhere",
    image: "/categories/portable.jpg",
    productCount: 45,
  },
  {
    name: "Base/Mobile Scanners",
    slug: "base-mobile-scanners",
    description: "Scanners for home or vehicle installation",
    image: "/categories/base-mobile.jpg",
    productCount: 32,
  },
  {
    name: "Digital Scanners",
    slug: "digital-scanners",
    description: "Advanced scanners for digital communications",
    image: "/categories/digital.jpg",
    productCount: 28,
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Antennas, cases, batteries, and more",
    image: "/categories/accessories.jpg",
    productCount: 120,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Mike R.",
    location: "Houston, TX",
    rating: 5,
    text: "I've been a customer for 15 years. Scanner Master's programming service is unmatched.",
    product: "Uniden SDS200",
  },
  {
    id: "2",
    name: "Sarah K.",
    location: "Chicago, IL",
    rating: 5,
    text: "Called their support line and couldn't believe a real person answered! Spent 20 minutes helping me.",
    product: "Uniden BC125AT",
  },
  {
    id: "3",
    name: "David M.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Fast shipping, great prices, and the programming was spot-on. This is the only place I buy scanners.",
    product: "Uniden BCD436HP",
  },
];

