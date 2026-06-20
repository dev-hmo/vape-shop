"use client";

import Link from "next/link";
import { Product, formatPrice } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/components/Toast";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "overlay";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    showToast(`${product.name} added to cart`, "success");
  };

  // === Overlay Variant (used in NewReleases) ===
  if (variant === "overlay") {
    return (
      <Link href={`/products/${product.slug}`}>
        <div className="group relative h-64 rounded-2xl overflow-hidden border border-white/5 card-hover cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/40 to-transparent" />

          {product.isNew && (
            <span className="absolute top-3 right-3 z-10 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              New
            </span>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
              <span className="text-white/70 font-semibold text-sm">Out of Stock</span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-emerald-400 font-semibold text-sm">
                {formatPrice(product.price)}
              </p>
              <button
                onClick={handleAddToCart}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 btn-primary text-xs px-3 py-1.5"
              >
                + Cart
              </button>
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-purple-500/30" />
        </div>
      </Link>
    );
  }

  // === Compact Variant (used in ProductSection carousels) ===
  if (variant === "compact") {
    return (
      <Link href={`/products/${product.slug}`}>
        <div className="group flex-shrink-0 w-44 sm:w-48 bg-[#1a1a2e]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 card-hover">
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {formatPrice(product.price)}
            </p>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-xs">★</span>
                <span className="text-[10px] text-amber-400 font-medium">
                  {product.points} Pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // === Default Variant (used in BestDeals, Products page) ===
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group relative glass-card rounded-2xl overflow-hidden">
        {/* Badges */}
        {product.discount && (
          <span className="absolute top-3 left-3 z-10 gradient-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {product.discount}% Off
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 right-3 z-10 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
            NEW
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center rounded-2xl">
            <span className="text-white/80 font-bold bg-[#07070e]/80 border border-white/10 px-4 py-2 rounded-xl text-sm">
              Out of Stock
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden bg-slate-950/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {product.inStock && (
            <div className="absolute inset-0 bg-[#07070e]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={handleAddToCart}
                className="btn-primary text-sm px-6 py-2.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 relative z-10">
          <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-3 mb-2">
            {product.originalPrice && (
              <p className="text-sm text-slate-500 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <p className="text-base font-bold text-emerald-400">
              {formatPrice(product.price)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 text-sm">★</span>
              <span className="text-xs text-amber-400 font-semibold">
                {product.points} Points
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              {product.rating} / 5
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
