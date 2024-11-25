"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const sliderImages = [
    "/assets/images/slider1.jpg",
    "/assets/images/slider2.jpg",
    "/assets/images/slider3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <div key={index} className="min-w-full">
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-sm sm:text-base lg:text-lg">The Best Look</h1>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
          Anytime Anywhere
        </h1>
        <h1 className="text-sm sm:text-base lg:text-lg">
          Start from 10,000 MMK
        </h1>
        <Link href={"/"}>
          <button className="mt-4 bg-gray-500 bg-opacity-60 rounded-3xl px-6 py-2 text-sm sm:text-base lg:text-lg hover:bg-opacity-80 transition">
            View
          </button>
        </Link>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 flex justify-center w-full gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
