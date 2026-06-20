"use client";

import { useState } from "react";
import { getNewReleases } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

export default function NewReleases() {
  const allProducts = getNewReleases();
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-3xl sm:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
            <span className="gradient-text">New</span>
            <span className="text-white">Releases</span>
          </div>
          <p className="text-gray-400 text-base">
            Try our latest flavors here
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} variant="overlay" />
          ))}
        </div>

        {/* View More */}
        {visibleProducts < allProducts.length && (
          <div className="text-center mt-10">
            <button onClick={handleViewMore} className="btn-outline text-sm">
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
