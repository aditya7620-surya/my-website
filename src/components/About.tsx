"use client";

import { motion } from "framer-motion";
import { Compass, MonitorSmartphone, Target, ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  const features = [
    {
      number: "01",
      title: "Design With Purpose",
      description:
        "Clean interfaces designed around your brand, customers, and business goals.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Built For Every Screen",
      description:
        "Responsive experiences that work smoothly across phones, tablets, and desktops.",
      icon: MonitorSmartphone,
    },
    {
      number: "03",
      title: "Focused On Results",
      description:
        "Clear user journeys and strong calls to action designed to encourage meaningful enquiries.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Abstract Developer Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Glass Frame with Workspace Imagery */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111318] p-3 shadow-2xl">
              <div className="relative h-[420px] rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Developer Workspace and Clean Code Environment"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Dark Vignette Overlay with crimson glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent" />
                
                {/* Floating Studio Label Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#111318]/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-[#FF2638] font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      DEV.WORKBENCH
                    </span>
                    <span className="text-[#94A3B8]">Production Quality</span>
                  </div>
                  <div className="text-white font-medium text-sm">
                    Crafting Fast, Purpose-Driven Web Systems
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background red accent */}
            <div className="absolute -bottom-6 -left-6 w-44 h-44 bg-[#FF2638]/15 rounded-full blur-[60px] pointer-events-none -z-10" />
          </motion.div>

          {/* Right Column: Heading, Copy & Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About My Approach</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6">
              Not Just Websites.{" "}
              <span className="text-[#FF2638]">Digital Experiences.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-10">
              {siteConfig.fullBio}
            </p>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.number}
                    className="p-5 rounded-xl bg-[#111318] border border-white/5 hover:border-[#FF2638]/40 transition-all duration-300 group hover:-translate-y-1 shadow-card-subtle"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#FF2638] bg-[#FF2638]/10 px-2 py-0.5 rounded border border-[#FF2638]/20">
                        {feature.number}
                      </span>
                      <Icon className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-2 font-heading">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
