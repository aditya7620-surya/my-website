"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand your business, audience, requirements, and goals.",
      icon: Search,
      deliverables: ["Requirement mapping", "Audience analysis", "Competitor review"],
    },
    {
      number: "02",
      title: "Design",
      description: "Plan the structure and create a visual direction suited to your brand.",
      icon: Palette,
      deliverables: ["Visual design system", "Responsive wireframes", "Content hierarchy"],
    },
    {
      number: "03",
      title: "Develop",
      description: "Build a responsive website with carefully implemented interactions.",
      icon: Code,
      deliverables: ["Clean code architecture", "Mobile optimization", "Fast animations"],
    },
    {
      number: "04",
      title: "Launch",
      description: "Test the experience, prepare the website for launch, and discuss future improvements.",
      icon: Rocket,
      deliverables: ["Cross-browser testing", "Domain & SSL deploy", "Handoff & support"],
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            How We Bring Your Vision To Life.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3">
            A clear, collaborative four-stage engineering process with zero guesswork.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connecting progress line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#FF2638]/20 via-[#FF2638]/40 to-[#FF2638]/20 -translate-y-12 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-[#111318] border border-white/5 p-6 sm:p-7 flex flex-col justify-between hover:border-[#FF2638]/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-card-subtle z-10"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-[#FF2638] bg-[#FF2638]/10 px-3 py-1 rounded-md border border-[#FF2638]/20">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#161922] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-[#FF2638] group-hover:border-[#FF2638]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#FF5262] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    Key Deliverables
                  </div>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="text-xs text-[#CBD5E1] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#FF2638]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
