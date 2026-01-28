// File: ./components/layout/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X, Phone, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Scanners", slug: "scanners", subcategories: ["Portable", "Base/Mobile", "Digital", "Pre-Programmed"] },
  { name: "Accessories", slug: "accessories", subcategories: ["Antennas", "Cases", "Batteries", "Mounts"] },
  { name: "Programming", slug: "programming" },
  { name: "Resources", slug: "resources" },
  { name: "On Sale", slug: "sale" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-secondary text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <Phone className="w-4 h-4" />
          <span>Call 1-800-SCANNER for Expert Advice</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">Free Shipping on Orders Over $99</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="bg-primary rounded-full p-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">S</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-secondary">SCANNER MASTER</h1>
              <p className="text-xs text-muted-foreground">
                America&apos;s Scanner Experts Since 1978
              </p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search scanners, accessories, and more..."
                className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Expert Help */}
            <Link
              href="/help"
              className="hidden lg:flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Headphones className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Need Help?</p>
                <p className="font-semibold">Expert Support</p>
              </div>
            </Link>

            {/* Mobile Search */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center justify-center py-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden p-4 border-t bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="block text-lg font-medium py-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">1-800-SCANNER</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

