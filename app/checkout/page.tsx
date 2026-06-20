"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import { useToast } from "@/app/components/Toast";
import { formatPrice } from "@/app/data/products";
import ProtectedRoute from "@/app/components/ProtectedRoute";

function CheckoutContent() {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    phone: "",
    address: "",
    city: "",
    township: "",
    note: "",
    paymentMethod: "cod",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingCost = totalPrice >= 50000 ? 0 : 3000;
  const grandTotal = totalPrice + shippingCost;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address || !formData.city) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    if (items.length === 0) {
      showToast("Your cart is empty", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((r) => setTimeout(r, 1500));

    setOrderPlaced(true);
    clearCart();
    showToast("Order placed successfully!", "success");
  };

  // Success state
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] pt-24 flex items-center justify-center">
        <div className="text-center px-6 max-w-md">
          <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Order <span className="gradient-text">Confirmed!</span>
          </h1>
          <p className="text-gray-400 mb-2">
            Thank you for your purchase, {user?.name}!
          </p>
          <p className="text-gray-500 text-sm mb-8">
            You&apos;ll receive a confirmation via phone. Your items will be
            delivered within 2-3 business days.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/products" className="btn-primary">
              Continue Shopping
            </Link>
            <Link href="/" className="btn-outline">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Empty cart
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] pt-24 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold text-white mb-4">Cart is Empty</h1>
          <p className="text-gray-400 mb-8">
            Add some items to your cart before checking out.
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
        <h1 className="text-3xl font-bold text-white mb-2">
          Check<span className="gradient-text">out</span>
        </h1>
        <p className="text-gray-400 text-sm mb-10">Complete your order</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Info */}
              <div className="bg-[#1a1a2e] rounded-2xl border border-white/5 p-6">
                <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 gradient-primary rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      placeholder="+95 xxx xxx xxx"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-gray-400 mb-1.5 block">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      placeholder="Street address"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      placeholder="e.g. Yangon"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">
                      Township
                    </label>
                    <input
                      type="text"
                      name="township"
                      value={formData.township}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      placeholder="e.g. Kamayut"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-gray-400 mb-1.5 block">
                      Order Note (optional)
                    </label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm resize-none"
                      placeholder="Any special instructions?"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-[#1a1a2e] rounded-2xl border border-white/5 p-6">
                <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 gradient-primary rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Payment Method
                </h2>

                <div className="space-y-3">
                  {[
                    { value: "cod", label: "Cash on Delivery", desc: "Pay when you receive" },
                    { value: "kpay", label: "KBZ Pay", desc: "Mobile payment" },
                    { value: "wave", label: "Wave Pay", desc: "Mobile payment" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === method.value
                          ? "border-purple-500/50 bg-purple-500/5"
                          : "border-white/5 bg-white/[0.02] hover:border-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleChange}
                        className="accent-purple-500"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {method.label}
                        </p>
                        <p className="text-xs text-gray-500">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1a1a2e] rounded-2xl border border-white/5 p-6 sticky top-28">
                <h2 className="text-lg font-semibold text-white mb-5">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-5 max-h-[300px] overflow-y-auto scrollbar-hide">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          x{item.quantity}
                        </p>
                      </div>
                      <p className="text-sm text-emerald-400 font-medium flex-shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-4 space-y-2.5 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span
                      className={
                        shippingCost === 0
                          ? "text-emerald-400"
                          : "text-white"
                      }
                    >
                      {shippingCost === 0
                        ? "Free"
                        : formatPrice(shippingCost)}
                    </span>
                  </div>
                  <div className="border-t border-white/5 pt-3">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-xl font-bold text-emerald-400">
                        {formatPrice(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 text-center flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>

                <Link
                  href="/cart"
                  className="block text-center text-sm text-gray-500 hover:text-purple-400 transition-colors mt-4"
                >
                  ← Back to Cart
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <ProtectedRoute>
      <CheckoutContent />
    </ProtectedRoute>
  );
}
