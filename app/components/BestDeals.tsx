"use client";

import { useState } from "react";
import { getBestDeals } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

export default function BestDeals() {
  const products = getBestDeals();
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleViewMore = () => {
    setVisibleProducts(products.length);
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Best <span className="gradient-text">Deals</span>
          </h2>
          <p className="text-gray-400 text-base">
            Exclusive offers just for you
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More */}
        {visibleProducts < products.length && (
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
