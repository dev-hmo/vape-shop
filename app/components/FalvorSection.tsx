"use client";
import React, { useState } from "react";

export default function FlavorSection() {
  const flavors = [
    {
      title: "Citrus Monster",
      description: "Refreshing flavor for every mood!",
      image: "/assets/images/tryflavor1.jpg", // Replace with the correct image path
    },
    {
      title: "Strawberry Yogurt",
      description: "Sweet and tangy freshness.",
      image: "/assets/images/tryflavor2.jpg", // Replace with the correct image path
    },
    {
      title: "Blueberry Bliss",
      description: "A burst of juicy blueberry flavor.",
      image: "/assets/images/tryflavor3.jpg", // Replace with the correct image path
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flavors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flavors.length) % flavors.length);
  };

  return (
    <section className="mx-10 py-16 bg-white text-white">
      <div className="container mx-auto relative">
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative w-full h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${flavor.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start py-8 px-16">
                  <h2 className="text-4xl font-bold mb-2 text-center">
                    Try New Flavors
                  </h2>
                  <p className="text-xl italic">{flavor.title}</p>
                  <button className="mt-4 border-2 border-slate-500 bg-gray-700 bg-opacity-40 text-slate-300 py-2 px-8 rounded-3xl font-semibold hover:bg-gray-300">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-500"
        >
          &#8249; {/* Left arrow */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-500"
        >
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
}
