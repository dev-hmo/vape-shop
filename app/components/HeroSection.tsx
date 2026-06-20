"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const sliderImages = [
    "/assets/images/slider1.jpg",
    "/assets/images/slider2.jpg",
    "/assets/images/slider3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="relative w-full h-[100vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image}
            alt={`Premium vape collection ${index + 1}`}
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0f0f1a]/70 via-transparent to-[#0f0f1a]" />

      {/* Side Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f0f1a]/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md transition-all duration-700 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
            Premium Vape Shop
          </span>
        </div>

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6 transition-all duration-700 delay-150 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-white drop-shadow-sm">ANYTIME</span>
          <br />
          <span className="gradient-text drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]">
            ANYWHERE
          </span>
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          Discover premium devices, pods & custom flavors starting from{" "}
          <span className="text-amber-400 font-bold underline decoration-amber-400/40 underline-offset-4 decoration-2">
            10,000 MMK
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 items-center justify-center transition-all duration-700 delay-500 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <a
            href="#best-deals"
            className="btn-primary text-sm sm:text-base px-8 py-3.5 inline-flex items-center gap-2 group"
          >
            Explore Collection
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#membership"
            className="btn-outline text-sm sm:text-base px-8 py-3.5"
          >
            VIP Membership
          </a>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity hidden md:flex">
        <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-semibold">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 z-30 flex justify-center w-full gap-2.5">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-8 gradient-primary"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
