"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";
import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Trash2,
  Check,
  X,
  CreditCard,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "Audio" | "Watches" | "Footwear";
  price: number;
  image: string;
  tag: string;
}

export default function NovaCommerceDemo() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const products: Product[] = [
    {
      id: "prod-1",
      name: "Aether Acoustic Pro Headphones",
      category: "Audio",
      price: 18999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
    },
    {
      id: "prod-2",
      name: "Monolith Titanium Automatic Watch",
      category: "Watches",
      price: 24500,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      tag: "Limited Release",
    },
    {
      id: "prod-3",
      name: "Strata Carbon Minimalist Runner",
      category: "Footwear",
      price: 11200,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      tag: "Engineered Foam",
    },
    {
      id: "prod-4",
      name: "Studio Reference Wireless Earbuds",
      category: "Audio",
      price: 8990,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      tag: "Active ANC",
    },
  ];

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((p) => p.category === categoryFilter);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white selection:bg-[#3B82F6] selection:text-white">
      {/* Floating Demo Notice */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#12141A]/95 backdrop-blur-md border-b border-[#3B82F6]/30 px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 hover:bg-[#3B82F6] text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-[#3B82F6] font-mono uppercase tracking-wider hidden sm:inline">
            • Concept Demo: Nova Commerce (Interactive Cart & Checkout)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1C202B] border border-white/10 hover:border-[#3B82F6]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Cart ({totalItems})</span>
          </button>

          <a
            href={getWhatsAppUrl("Hi Aditya, I want an e-commerce platform like Nova Commerce with instant cart and checkout.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#3B82F6] text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hire Aditya for E-commerce</span>
          </a>
        </div>
      </div>

      {/* Main Container */}
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#3B82F6] font-mono block mb-2">
              Next-Gen Retail Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white">
              Nova Commerce
            </h1>
            <p className="text-sm text-[#94A3B8] mt-2 max-w-lg">
              Demonstrating instant interactive client-side shopping state, frictionless micro-cart drawers, and responsive checkout readiness.
            </p>
          </div>

          {/* Categories */}
          <div className="flex gap-2">
            {["All", "Audio", "Watches", "Footwear"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  categoryFilter === cat
                    ? "bg-[#3B82F6] text-white"
                    : "bg-[#141720] text-[#94A3B8] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-[#12151D] border border-white/5 overflow-hidden flex flex-col justify-between p-4 group hover:border-[#3B82F6]/50 transition-all"
            >
              <div>
                <div className="aspect-square rounded-xl overflow-hidden bg-black mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase text-[#3B82F6] border border-white/10">
                    {product.tag}
                  </span>
                </div>

                <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider mb-1">
                  {product.category}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {product.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-white">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <button
                  onClick={() => addToCart(product)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C202B] hover:bg-[#3B82F6] text-white text-xs font-semibold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* E-commerce features note */}
        <div className="p-8 rounded-2xl bg-[#12151D] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-[#22C55E]" />
              Razor-Fast Cart Drawer
            </h4>
            <p className="text-xs text-[#94A3B8]">
              No disruptive page reloads. Smooth state synchronization with instant calculations.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-[#22C55E]" />
              Secure Payment Gateways
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Ready for Stripe, Razorpay, Cashfree, UPI QR flows, and automated receipt emails.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-[#22C55E]" />
              Mobile Checkout Optimization
            </h4>
            <p className="text-xs text-[#94A3B8]">
              One-thumb mobile UX designed to prevent checkout abandonment and maximize revenue.
            </p>
          </div>
        </div>

        {/* Slide-out Cart Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md bg-[#12151D] border-l border-white/10 h-full flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#3B82F6]" />
                    <h3 className="text-lg font-bold text-white font-heading">Your Order ({totalItems})</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-lg text-[#94A3B8] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="py-16 text-center text-[#94A3B8] text-sm">
                    Your cart is currently empty. Add an item from the catalog above!
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#0A0B0E] border border-white/5"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 rounded-lg object-cover bg-black"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-semibold text-white truncate">
                            {item.product.name}
                          </h4>
                          <div className="text-[11px] text-[#94A3B8]">
                            Qty: {item.quantity} × ₹{item.product.price.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 text-[#EF4444] hover:bg-[#EF4444]/10 rounded"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#94A3B8]">Subtotal:</span>
                    <span className="font-mono text-lg font-bold text-white">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      `Hi Aditya, I was testing your Nova Commerce demo cart with items worth ₹${subtotal.toLocaleString("en-IN")}. I'd like to develop an e-commerce store with this level of polish.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-blue-600 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Proceed To Demo Order (WhatsApp)</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
