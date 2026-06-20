"use client";

import React, { useRef } from "react";
import { Product } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

interface SectionProps {
  category: string;
  description: string;
  backgroundImage: string;
  products: Product[];
}

export default function ProductSection({
  category,
  description,
  backgroundImage,
  products,
}: SectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden mx-4 sm:mx-8 lg:mx-10 border border-white/5">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#0f0f1a]/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Category Info */}
          <div className="lg:w-1/4 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] uppercase text-purple-400 font-medium mb-2">
              Category
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              {category}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <Link
              href={`/products`}
              className="btn-outline text-xs px-5 py-2 w-fit"
            >
              View All
            </Link>
          </div>

          {/* Right: Product Carousel */}
          <div className="lg:w-3/4 relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="compact"
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              aria-label="Scroll left"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              aria-label="Scroll right"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
