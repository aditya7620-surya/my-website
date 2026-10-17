"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  MessageCircle,
  Navigation,
  FileCheck,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function WhyWorkWithMe() {
  const points = [
    {
      title: "Design Tailored To Your Business",
      description:
        "Every layout, color palette, and component is created specifically to reflect your brand identity and appeal to your target clientele.",
      icon: Sparkles,
    },
    {
      title: "Responsive User Experience",
      description:
        "Engineered to look polished and function effortlessly across smart phones, tablets, laptops, and ultra-wide desktop monitors.",
      icon: Smartphone,
    },
    {
      title: "Clear Communication Throughout",
      description:
        "Direct updates, transparent milestone tracking, and rapid response times without layers of agency account managers.",
      icon: MessageCircle,
    },
    {
      title: "Thoughtful User Journeys",
      description:
        "Strategic navigation and intuitive content structures that guide prospective clients smoothly toward making an inquiry.",
      icon: Navigation,
    },
    {
      title: "A Transparent Project Scope",
      description:
        "Honest timelines, clear deliverables, and no hidden surprises. You know exactly what is being built at every stage.",
      icon: FileCheck,
    },
    {
      title: "Support Options After Launch",
      description:
        "Post-launch assistance, training on content updates, and ongoing maintenance retainers so your site stays secure and current.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5 overflow-hidden">
      {/* Subtle crimson radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF2638]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
            <span>Client Value & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Your Business Deserves A{" "}
            <span className="crimson-gradient-text">Better Digital Presence.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-4">
            I combine modern design aesthetics with clean engineering practices to build web assets that represent your company with distinction and professionalism.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-[#111318] border border-white/5 hover:border-[#FF2638]/40 transition-all duration-300 group hover:-translate-y-1 shadow-card-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#161922] border border-white/10 flex items-center justify-center text-[#FF2638] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2.5 group-hover:text-[#FF5262] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
