"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  ShoppingBag,
  Building2,
  Zap,
  CheckCircle2,
  Shield,
  Layers,
} from "lucide-react";

export default function HeroVisual3D() {
  const [activeTab, setActiveTab] = useState<"business" | "ecommerce" | "landing">("business");

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none perspective-1000">
      {/* Ambient Red Glow Sphere behind everything */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#FF2638]/20 blur-[90px] -top-10 -right-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute w-60 h-60 rounded-full bg-[#FF2638]/10 blur-[80px] -bottom-10 -left-10 pointer-events-none" />

      {/* SVG Neon Red Light Trails & Curved Orbit Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 animate-spin-slow opacity-60"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="url(#ringGradient)"
          strokeWidth="1.5"
          strokeDasharray="6 14"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="230"
          ry="130"
          stroke="rgba(255, 38, 56, 0.25)"
          strokeWidth="1.5"
          transform="rotate(-28 250 250)"
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2638" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF2638" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main 3D Composition Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Abstract Metallic Sphere with Glossy Reflection */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-6 -right-4 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 z-10 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #474F60 0%, #171A21 45%, #08090C 85%)",
          }}
        >
          {/* Internal Specular highlight */}
          <div className="absolute top-3 left-6 w-12 h-6 bg-white/40 blur-[6px] rounded-full transform -rotate-45" />
          {/* Subtle electric red rim light */}
          <div className="absolute inset-0 rounded-full ring-2 ring-[#FF2638]/40 blur-[1px]" />
        </motion.div>

        {/* Small floating glossy satellite sphere */}
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-4 w-16 h-16 rounded-full border border-red-500/30 z-20 overflow-hidden shadow-crimson-glow-sm"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #FF5262 0%, #FF2638 50%, #5E000B 100%)",
          }}
        >
          <div className="absolute top-2 left-3 w-4 h-2 bg-white/70 blur-[2px] rounded-full" />
        </motion.div>

        {/* Main Floating Miniature Website Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[92%] sm:w-[88%] md:w-[86%] rounded-2xl bg-[#0F1218]/90 border border-white/10 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,38,56,0.15)] z-20 overflow-hidden"
        >
          {/* Browser Window Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#151922] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
              <span className="ml-2 text-[10px] text-[#94A3B8] font-mono hidden sm:inline">
                preview.aditya-suryavanshi.dev
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#08090C] border border-white/10 text-[11px] text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Production 60 FPS</span>
            </div>
          </div>

          {/* Miniature App Content */}
          <div className="p-4 sm:p-5">
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-[#08090C] rounded-lg border border-white/5 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab("business")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-medium rounded-md transition-all ${
                  activeTab === "business"
                    ? "bg-[#FF2638] text-white shadow-crimson-glow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <Building2 className="w-3 h-3" />
                <span>Business</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ecommerce")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-medium rounded-md transition-all ${
                  activeTab === "ecommerce"
                    ? "bg-[#FF2638] text-white shadow-crimson-glow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Store</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("landing")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-medium rounded-md transition-all ${
                  activeTab === "landing"
                    ? "bg-[#FF2638] text-white shadow-crimson-glow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>Landing</span>
              </button>
            </div>

            {/* Dynamic Interactive Card Content */}
            {activeTab === "business" && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#171B24] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Modern Enterprise Site</div>
                    <div className="text-[11px] text-[#94A3B8]">High conversion architecture</div>
                  </div>
                  <span className="text-xs font-mono text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/20">
                    99/100 Core Vitals
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-[#11141C] border border-white/5">
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Fast Inquiries</div>
                    <div className="text-sm font-bold text-white mt-0.5">Instant WhatsApp</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#11141C] border border-white/5">
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Design System</div>
                    <div className="text-sm font-bold text-white mt-0.5">Tailored Identity</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ecommerce" && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#171B24] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#242A36] flex items-center justify-center text-white">
                      <ShoppingBag className="w-5 h-5 text-[#FF2638]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Nova Lifestyle Store</div>
                      <div className="text-[11px] text-[#94A3B8]">Frictionless Cart & Checkout</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-white font-bold bg-[#FF2638]/20 px-2.5 py-1 rounded text-[#FF5262] border border-[#FF2638]/30">
                    Active Demo
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-[#11141C] border border-white/5 text-[11px]">
                    <div className="text-[#94A3B8]">Catalog</div>
                    <div className="font-semibold text-white">Fast Filters</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#11141C] border border-white/5 text-[11px]">
                    <div className="text-[#94A3B8]">Payments</div>
                    <div className="font-semibold text-white">Stripe / UPI</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#11141C] border border-white/5 text-[11px]">
                    <div className="text-[#94A3B8]">Cart</div>
                    <div className="font-semibold text-white">Drawer UI</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "landing" && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#171B24] border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">High-Converting Offer</span>
                    <span className="text-[10px] text-[#FF2638] font-bold uppercase tracking-wider">
                      Lead Engine
                    </span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    Clear value proposition, dynamic social proof placeholders, and zero-distraction funnel.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-[#08090C] border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#94A3B8]">Expected Inquiry Boost</span>
                  <span className="font-mono text-[#22C55E] font-semibold">+3.8x Clearer Path</span>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Responsive & Semantic Code</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-white/70">
                <Code className="w-3.5 h-3.5 text-[#FF2638]" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Glass Code Badge (Top-left) */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            x: [3, -3, 3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#13161F]/90 border border-white/10 backdrop-blur-md shadow-lg z-30 flex items-center gap-2.5"
        >
          <div className="p-1.5 rounded-lg bg-[#FF2638]/10 text-[#FF2638]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-mono text-[#94A3B8]">Clean Architecture</div>
            <div className="text-xs font-bold text-white">Tailored To Business</div>
          </div>
        </motion.div>

        {/* Floating Glass Shield Badge (Bottom-right) */}
        <motion.div
          animate={{
            y: [5, -5, 5],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-4 right-0 sm:right-4 px-3.5 py-2.5 rounded-xl bg-[#13161F]/90 border border-white/10 backdrop-blur-md shadow-card-subtle z-30 flex items-center gap-2.5"
        >
          <div className="p-1.5 rounded-lg bg-[#22C55E]/10 text-[#22C55E]">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-[#94A3B8]">Speed & Security</div>
            <div className="text-xs font-bold text-white">SSL • Mobile First</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
