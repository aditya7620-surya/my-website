"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import HeroVisual3D from "./HeroVisual3D";
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-tech-grid"
    >
      {/* Subtle crimson radial gradient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF2638]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111318] border border-white/10 text-xs font-medium text-[#F8FAFC] mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
              </span>
              <span className="tracking-wider uppercase text-[11px] font-semibold text-[#CBD5E1]">
                {siteConfig.availability}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-white font-heading leading-[1.08] mb-6">
              I Build{" "}
              <span className="crimson-gradient-text drop-shadow-[0_0_35px_rgba(255,38,56,0.25)]">
                Digital Experiences
              </span>{" "}
              That Move Businesses Forward.
            </h1>

            {/* Supporting copy */}
            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl font-normal leading-relaxed mb-8">
              {siteConfig.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA */}
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF2638] via-[#FF3B4C] to-[#D61526] hover:shadow-crimson-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 w-full sm:w-auto text-center"
              >
                <span>{siteConfig.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#F8FAFC] bg-[#111318]/80 hover:bg-[#161922] border border-white/10 hover:border-white/25 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span>{siteConfig.secondaryCta}</span>
              </Link>

              {/* WhatsApp Quick Trigger */}
              <a
                href={getWhatsAppUrl("Hi Aditya, I'd like to discuss a website project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8] hover:text-[#FF2638] transition-colors py-2 px-3"
              >
                <MessageSquare className="w-4 h-4 text-[#FF2638]" />
                <span>{siteConfig.whatsappCta}</span>
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium uppercase tracking-wider text-[#64748B]">
              <span className="flex items-center gap-1.5 text-[#94A3B8]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2638]" />
                Business Websites
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-[#94A3B8]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2638]" />
                E-commerce
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-[#94A3B8]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2638]" />
                Landing Pages
              </span>
            </div>
          </motion.div>

          {/* Right Column: Premium 3D-inspired Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroVisual3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
