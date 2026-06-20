"use client";

import { useState, useMemo } from "react";
import { products, Category } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

type SortOption = "name" | "price-asc" | "price-desc" | "rating" | "newest";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.flavor?.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  const categories: { value: Category | "all"; label: string; count: number }[] = [
    { value: "all", label: "All Products", count: products.length },
    {
      value: "devices",
      label: "Devices",
      count: products.filter((p) => p.category === "devices").length,
    },
    {
      value: "pods",
      label: "Pods",
      count: products.filter((p) => p.category === "pods").length,
    },
    {
      value: "disposable",
      label: "Disposable",
      count: products.filter((p) => p.category === "disposable").length,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-gray-400 text-base">
            Browse our complete collection
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products, flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-[#1a1a2e] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-3 rounded-xl bg-[#1a1a2e] border border-white/10 text-gray-300 focus:outline-none focus:border-purple-500/50 text-sm cursor-pointer min-w-[160px]"
          >
            <option value="rating">Top Rated</option>
            <option value="newest">Newest First</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name A–Z</option>
          </select>

          {/* Price Range */}
          <select
            value={`${priceRange[0]}-${priceRange[1]}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split("-").map(Number);
              setPriceRange([min, max]);
            }}
            className="px-4 py-3 rounded-xl bg-[#1a1a2e] border border-white/10 text-gray-300 focus:outline-none focus:border-purple-500/50 text-sm cursor-pointer min-w-[160px]"
          >
            <option value="0-50000">All Prices</option>
            <option value="0-20000">Under 20,000 MMK</option>
            <option value="20000-30000">20,000 – 30,000 MMK</option>
            <option value="30000-50000">Over 30,000 MMK</option>
          </select>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? "gradient-primary text-white shadow-lg shadow-purple-500/20"
                  : "bg-[#1a1a2e] text-gray-400 border border-white/5 hover:border-purple-500/30 hover:text-white"
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-2">No products found</p>
            <p className="text-gray-600 text-sm">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setPriceRange([0, 50000]);
              }}
              className="btn-outline text-sm mt-6"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
