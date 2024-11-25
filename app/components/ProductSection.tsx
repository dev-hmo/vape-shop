"use client";

import React, { useState } from "react";

interface Product {
  title: string;
  price: string;
  points: string;
  image: string;
}

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
  const [scrollIndex, setScrollIndex] = useState(0);

  // Show arrows based on scroll position
  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex < products.length - 4; // Adjust visible product count here

  const scrollLeft = () => setScrollIndex((prev) => Math.max(prev - 1, 0));
  const scrollRight = () =>
    setScrollIndex((prev) => Math.min(prev + 1, products.length - 4));

  return (
    <div
      className="relative bg-cover bg-center rounded-lg mb-8 mx-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden p-6 w-full">
        <div className="flex">
          {/* Left Section */}
          <div className="w-1/4 flex flex-col justify-center text-white pr-6">
            <h2 className="text-3xl font-bold">{category}</h2>
            <p className="text-lg mt-2">{description}</p>
          </div>

          {/* Product List */}
          <div className="w-3/4 relative flex items-center">
            {/* Scrollable Content */}
            <div
              className="flex space-x-4 overflow-hidden"
              style={{
                transform: `translateX(-${scrollIndex * 25}%)`,
                transition: "transform 0.3s ease",
              }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 w-48 flex-shrink-0"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 w-full object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-700">{product.price}</p>
                  <p className="text-sm text-yellow-600 font-bold">
                    {product.points}
                  </p>
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 z-10"
              >
                &#8249;
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 z-10"
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
