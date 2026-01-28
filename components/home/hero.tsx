// File: ./components/home/hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Trusted by 100,000+ Scanner Enthusiasts
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              America&apos;s Police Scanner Experts
              <span className="text-primary"> Since 1978</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
              The nation&apos;s oldest and largest scanner-only dealer. Expert advice,
              custom programming, and 45 years of trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90" asChild>
                <Link href="/collections/scanners">
                  Shop Scanners
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Expert Help
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.9/5 Rating</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/30" />
              <span className="hidden sm:block">1,000+ 5-Star Reviews</span>
            </div>
          </motion.div>

          {/* Featured Product */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <div className="absolute -top-3 -right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW ARRIVAL
              </div>
              <div className="relative aspect-square max-w-sm mx-auto mb-6">
                <Image
                  src="/vercel.svg"
                  alt="Scanner placeholder"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-white font-heading text-xl font-bold mb-2">
                Uniden SDS200 Digital Scanner
              </h3>
              <p className="text-white/70 text-sm mb-4">
                The ultimate base/mobile scanner with True I/Q technology
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$649.99</span>
                <Button className="bg-primary text-black hover:bg-primary/90">
                  Shop Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

