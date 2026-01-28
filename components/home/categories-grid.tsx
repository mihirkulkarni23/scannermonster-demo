// File: ./components/home/categories-grid.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Portable Scanners",
    description: "Take your scanner anywhere",
    image: "/next.svg",
    slug: "portable-scanners",
    count: 45,
  },
  {
    name: "Base/Mobile Scanners",
    description: "For home or vehicle use",
    image: "/next.svg",
    slug: "base-mobile-scanners",
    count: 32,
  },
  {
    name: "Digital Scanners",
    description: "Monitor digital communications",
    image: "/next.svg",
    slug: "digital-scanners",
    count: 28,
  },
  {
    name: "Programming Services",
    description: "We program your scanner",
    image: "/next.svg",
    slug: "programming",
    count: null,
  },
];

export function CategoriesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Shop By Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect scanner for your needs. From portable handhelds to professional base stations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] flex flex-col justify-end"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-3">{category.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

