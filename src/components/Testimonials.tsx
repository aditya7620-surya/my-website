"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Sparkles, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function Testimonials() {
  // Configurable array for real client testimonials when provided by Aditya:
  // Once real testimonials are received, populate this array:
  const realTestimonials: Array<{
    quote: string;
    clientName: string;
    company: string;
    projectType: string;
  }> = [];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Client Feedback & Trust
          </h2>
          <p className="text-base text-[#94A3B8] mt-3">
            Transparent collaborations focused on exceptional craftsmanship and tangible business outcomes.
          </p>
        </div>

        {realTestimonials.length === 0 ? (
          /* Honest, elegant placeholder invitation as requested */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#161A22] to-[#101217] border border-white/10 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Subtle crimson accent line on top */}
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#FF2638] to-transparent" />

            <div className="w-16 h-16 rounded-2xl bg-[#FF2638]/10 border border-[#FF2638]/30 flex items-center justify-center text-[#FF2638] mx-auto mb-6 shadow-crimson-glow-sm">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
              Your Experience Could Be Featured Here.
            </h3>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-xl mx-auto leading-relaxed mb-8">
              "Let's build something worth talking about. Every new website is crafted with meticulous attention to detail to make your business stand out."
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl("Hi Aditya, I'd like to collaborate on a website project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF2638] to-[#D61526] text-white font-bold text-xs uppercase tracking-wider hover:shadow-crimson-glow-sm transition-all"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#161922] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:border-white/30 transition-colors"
              >
                <span>Review Concept Demos</span>
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Real testimonials will render here once provided */}
          </div>
        )}
      </div>
    </section>
  );
}
