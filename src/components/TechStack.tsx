"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { techStackData, TechItem } from "@/data/techStackData";
import { Code2, CheckCircle2, AlertCircle, Cpu, Layers } from "lucide-react";

export default function TechStack() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Frontend", "Styling & UI", "Backend & Runtimes", "E-commerce & Tools"];

  const filteredTech =
    filter === "All"
      ? techStackData
      : techStackData.filter((t) => t.category === filter);

  return (
    <section id="tech-stack" className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Engineered With Modern Standards.
            </h2>
            <p className="text-base text-[#94A3B8] mt-2 max-w-2xl">
              Clean architecture, fast rendering pipelines, and accessible semantic components built for high-scale reliability.
            </p>
          </div>

          {/* Configuration Note */}
          <div className="p-3.5 rounded-xl bg-[#111318] border border-white/10 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
              <AlertCircle className="w-4 h-4 text-[#FFBD2E]" />
              <span>Transparent Competency Matrix</span>
            </div>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              Every tool is accurately documented. Unconfirmed technologies are marked for pre-launch client review.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                filter === c
                  ? "bg-[#1C202B] text-white border border-[#FF2638]/50 shadow-sm"
                  : "bg-[#111318] text-[#94A3B8] hover:text-white border border-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => {
            const isConfirmed = tech.status === "Confirmed";

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-xl bg-[#111318] border border-white/5 hover:border-white/15 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]">
                      {tech.category}
                    </span>
                    {isConfirmed ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#FFBD2E] bg-[#FFBD2E]/10 px-2 py-0.5 rounded border border-[#FFBD2E]/20">
                        Review Req.
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 font-heading group-hover:text-[#FF5262] transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-[#64748B]">Proficiency</span>
                  <span className="font-medium text-white/80">{tech.proficiencyLevel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
