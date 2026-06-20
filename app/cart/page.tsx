"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/components/Toast";
import { formatPrice } from "@/app/data/products";
import QuantitySelector from "@/app/components/QuantitySelector";

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } =
    useCart();
  const { showToast } = useToast();

  const shippingCost = totalPrice >= 50000 ? 0 : 3000;
  const grandTotal = totalPrice + shippingCost;

  const handleRemove = (productId: number, name: string) => {
    removeItem(productId);
    showToast(`${name} removed from cart`, "info");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] pt-24 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added anything yet. Explore our
            collection and find something you love!
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Shopping <span className="gradient-text">Cart</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>
          <button
            onClick={() => {
              clearCart();
              showToast("Cart cleared", "info");
            }}
            className="text-sm text-gray-500 hover:text-red-400 transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-[#1a1a2e] rounded-2xl border border-white/5 p-5 flex gap-5 group"
              >
                {/* Image */}
                <Link href={`/products/${item.product.slug}`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl flex-shrink-0 group-hover:ring-1 ring-purple-500/30 transition-all"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link href={`/products/${item.product.slug}`}>
                        <h3 className="font-semibold text-white hover:text-purple-300 transition-colors truncate">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-500 capitalize mt-1">
                        {item.product.category}
                        {item.product.flavor && ` · ${item.product.flavor}`}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.product.id, item.product.name)}
                      className="text-gray-600 hover:text-red-400 transition-colors p-1 flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onChange={(q) => updateQuantity(item.product.id, q)}
                      size="sm"
                    />
                    <div className="text-right">
                      <p className="text-emerald-400 font-bold">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-500">
                          {formatPrice(item.product.price)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a2e] rounded-2xl border border-white/5 p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className={shippingCost === 0 ? "text-emerald-400" : "text-white"}>
                    {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
                  </span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-[11px] text-gray-600">
                    Free shipping on orders over {formatPrice(50000)}
                  </p>
                )}
                <div className="border-t border-white/5 pt-3">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-lg font-bold text-emerald-400">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Points Earned */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2.5 mb-6 flex items-center gap-2">
                <span className="text-amber-400 text-sm">★</span>
                <span className="text-amber-400 text-xs font-medium">
                  You&apos;ll earn{" "}
                  {items.reduce(
                    (sum, i) => sum + i.product.points * i.quantity,
                    0
                  )}{" "}
                  Points
                </span>
              </div>

              <Link
                href="/checkout"
                className="btn-primary w-full py-3.5 text-center block"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                className="block text-center text-sm text-gray-500 hover:text-purple-400 transition-colors mt-4"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
