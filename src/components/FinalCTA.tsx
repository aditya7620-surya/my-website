"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi Aditya, I'm ready to turn my idea into a professional website. Let's talk!"
  );

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[#08090C] border-t border-white/5">
      {/* Dramatic atmospheric red glow & light streak background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] bg-gradient-to-r from-[#FF2638]/20 via-[#FF2638]/10 to-[#FF2638]/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Decorative subtle light streaks */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Subtle tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111318] border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF2638]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Elevate Your Online Brand</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Your Next Website Starts With A{" "}
            <span className="crimson-gradient-text">Conversation.</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-normal">
            Let's turn your idea into a professional digital experience.
          </p>

          {/* Call to action buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF2638] via-[#FF3B4C] to-[#D61526] hover:shadow-crimson-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk On WhatsApp</span>
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#111318] hover:bg-[#161922] border border-white/10 hover:border-white/25 transition-all"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
