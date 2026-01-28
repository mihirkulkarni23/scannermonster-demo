// File: ./components/product/product-card.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-secondary text-white">New</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-accent text-white">-{discount}%</Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-primary text-black">Bestseller</Badge>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-sm"
        >
          <Heart
            className={cn(
              "w-5 h-5 transition-colors",
              isWishlisted ? "fill-accent text-accent" : "text-gray-400"
            )}
          />
        </button>

        {/* Quick Actions */}
        <div
          className={cn(
            "absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/90">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-50">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Free Shipping Badge */}
        {product.freeShipping && (
          <div className="flex items-center gap-1 text-xs text-green-600 mb-2">
            <Truck className="w-3 h-3" />
            <span>Free Shipping</span>
          </div>
        )}

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-sm leading-tight hover:text-primary transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary"
                    : "text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.compareAtPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

