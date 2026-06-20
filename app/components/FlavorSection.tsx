"use client";
import React, { useState, useEffect } from "react";

export default function FlavorSection() {
  const flavors = [
    {
      title: "Citrus Monster",
      tagline: "Zesty & Electric",
      description: "A supercharged citrus blend with a cool ice finish. Perfect for active days and refreshing moments.",
      image: "/assets/images/tryflavor1.jpg",
      color: "from-amber-500/20 to-yellow-500/5",
      badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
      accent: "#f59e0b",
      icon: "🍋",
    },
    {
      title: "Strawberry Yogurt",
      tagline: "Creamy & Indulgent",
      description: "Smooth, velvety Greek yogurt infused with ripe red strawberries. A dessert-vape masterpiece.",
      image: "/assets/images/tryflavor2.jpg",
      color: "from-pink-500/20 to-rose-500/5",
      badgeColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
      accent: "#ec4899",
      icon: "🍓",
    },
    {
      title: "Blueberry Bliss",
      tagline: "Sweet & Wild",
      description: "Freshly-plucked wild blueberries with a subtle sweet nectar base. Rich, round, and intensely aromatic.",
      image: "/assets/images/tryflavor3.jpg",
      color: "from-purple-500/20 to-indigo-500/5",
      badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
      accent: "#8b5cf6",
      icon: "🫐",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flavors.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [flavors.length]);

  return (
    <div className="section-padding relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Try New <span className="gradient-text">Flavors</span>
          </h2>
          <p className="text-gray-400 text-base">
            Explore our handpicked flavor collection
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Interactive Deck Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-4 order-2 lg:order-1">
            {flavors.map((flavor, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 flex items-center gap-4 relative overflow-hidden group ${
                  currentSlide === index
                    ? "bg-white/5 border-purple-500/30 shadow-lg shadow-purple-950/20"
                    : "bg-[#07070e]/30 border-white/5 hover:border-white/10 hover:bg-white/5"
                }`}
              >
                {/* Active Colored Left Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: flavor.accent }}
                />

                <span className="text-3xl filter drop-shadow">{flavor.icon}</span>
                <div>
                  <h4 className="text-base font-bold text-white transition-colors group-hover:text-purple-300">
                    {flavor.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {flavor.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Slide Viewer */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/5 min-h-[350px] sm:min-h-[420px] lg:min-h-[460px] order-1 lg:order-2">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Image */}
                <img
                  src={flavor.image}
                  alt={flavor.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#07070e] via-[#07070e]/75 to-transparent flex flex-col justify-end lg:justify-center p-8 sm:p-12 lg:p-16" />

                {/* Details Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end lg:justify-center p-8 sm:p-12 lg:p-16 max-w-xl">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-4 w-fit ${flavor.badgeColor}`}
                  >
                    Featured Blend
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
                    {flavor.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                    {flavor.description}
                  </p>
                  <div>
                    <button className="btn-primary text-sm px-6 py-2.5 bg-white text-slate-900 border-none font-bold hover:shadow-white/20 transition-all hover:bg-slate-100">
                      Explore Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
