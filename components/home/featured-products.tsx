// File: ./components/home/featured-products.tsx
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Bestselling Scanners
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our most popular scanners, trusted by hobbyists, media professionals, and public safety enthusiasts.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/collections/scanners">View All Scanners</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

