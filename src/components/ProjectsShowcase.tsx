"use client";

import { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, Layers, ShieldCheck } from "lucide-react";

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Business", "E-commerce", "Landing Pages"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF2638]/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio & Concepts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] mt-2">
              Digital experiences designed to make an impression.
            </p>
          </div>

          {/* Transparent labeling badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#111318] border border-white/10 text-xs text-[#94A3B8] self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <span>Interactive Concept Demonstrations</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#FF2638] text-white shadow-crimson-glow-sm"
                  : "bg-[#111318] text-[#94A3B8] hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenQuickView={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Client Collaboration Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#111318] via-[#161922] to-[#111318] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-lg font-bold font-heading text-white mb-1">
              Have a custom vision in mind for your brand?
            </h4>
            <p className="text-sm text-[#94A3B8]">
              I build custom bespoke websites from scratch aligned with your exact market positioning and business requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#FF2638] hover:text-white transition-all whitespace-nowrap shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
