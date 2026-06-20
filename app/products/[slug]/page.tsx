"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, getProductsByCategory, formatPrice } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/components/Toast";
import ProductCard from "@/app/components/ProductCard";
import QuantitySelector from "@/app/components/QuantitySelector";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const { addItem } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product, quantity);
    showToast(`${quantity}x ${product.name} added to cart`, "success");
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-purple-400 transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-300 capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-purple-400 truncate">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a2e]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {product.discount && (
                <span className="gradient-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.discount}% Off
                </span>
              )}
              {product.isNew && (
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  NEW
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.2em] uppercase text-purple-400 font-medium mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= Math.round(product.rating)
                        ? "text-amber-400"
                        : "text-gray-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                {product.rating}/5
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-bold text-emerald-400">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Points */}
            <div className="flex items-center gap-2 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2.5 w-fit">
              <span className="text-amber-400 text-base">★</span>
              <span className="text-amber-400 text-sm font-medium">
                Earn {product.points} Membership Points
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.flavor && (
                <div className="bg-[#1a1a2e] rounded-xl px-4 py-3 border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Flavor</p>
                  <p className="text-sm font-medium text-white">{product.flavor}</p>
                </div>
              )}
              {product.nicotine && (
                <div className="bg-[#1a1a2e] rounded-xl px-4 py-3 border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Nicotine</p>
                  <p className="text-sm font-medium text-white">{product.nicotine}</p>
                </div>
              )}
              <div className="bg-[#1a1a2e] rounded-xl px-4 py-3 border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Category</p>
                <p className="text-sm font-medium text-white capitalize">{product.category}</p>
              </div>
              <div className="bg-[#1a1a2e] rounded-xl px-4 py-3 border border-white/5">
                <p className="text-xs text-gray-500 mb-1">Availability</p>
                <p
                  className={`text-sm font-medium ${
                    product.inStock ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-6">
              <QuantitySelector
                quantity={quantity}
                onChange={setQuantity}
                max={10}
              />
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary py-3.5 text-center disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            {/* Total */}
            {product.inStock && quantity > 1 && (
              <p className="text-gray-500 text-sm">
                Total: <span className="text-white font-semibold">{formatPrice(product.price * quantity)}</span>
              </p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Related <span className="gradient-text">Products</span>
              </h2>
              <div className="w-16 h-1 gradient-primary rounded-full mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
