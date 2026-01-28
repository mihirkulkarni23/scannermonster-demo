import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TrustBar } from "@/components/home/trust-bar";
import { Hero } from "@/components/home/hero";
import { CategoriesGrid } from "@/components/home/categories-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CategoriesGrid />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

