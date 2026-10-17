"use client";

import { motion } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenQuickView: (project: ProjectItem) => void;
  index: number;
}

export default function ProjectCard({ project, onOpenQuickView, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-cursor-card
      className="group relative rounded-2xl bg-[#111318] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card-subtle hover:-translate-y-2"
    >
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
        <img
          src={project.thumbnailUrl}
          alt={`${project.title} - ${project.categoryLabel}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-black/30" />

        {/* Visible Concept / Demo Project Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090C]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638]" />
            {project.badge}
          </span>
        </div>

        {/* Category Label */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-[#94A3B8]">
            {project.categoryLabel}
          </span>
        </div>

        {/* Quick View Button on Desktop Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenQuickView(project);
            }}
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
          >
            <Eye className="w-4 h-4 text-black" />
            <span>Quick Specs</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-[#94A3B8] bg-white/5 px-2 py-0.5 rounded border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 group-hover:text-[#FF5262] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-[#FF2638] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>

          {/* Short Design Description */}
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom CTA Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <Link
            href={project.liveDemoPath}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF2638] transition-colors"
          >
            <span>View Full Demo Page</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => onOpenQuickView(project)}
            className="text-xs font-medium text-[#94A3B8] hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
