"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { X, ExternalLink, ArrowRight, MessageSquare, Check, Sparkles, Layers } from "lucide-react";
import Link from "next/link";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const whatsappMessage = `Hi Aditya, I saw your concept project "${project.title}" and would like to build something similar for my business.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08090C]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#111318] border border-white/10 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161922]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF2638] bg-[#FF2638]/10 px-2.5 py-0.5 rounded border border-[#FF2638]/20">
                {project.badge}
              </span>
              <span className="text-xs text-[#94A3B8] hidden sm:inline">
                {project.categoryLabel}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
            {/* Title & Subtitle */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {project.subtitle}
              </p>
            </div>

            {/* Main Featured Image */}
            <div className="relative rounded-xl overflow-hidden mb-8 border border-white/10 bg-black aspect-video max-h-[420px]">
              <img
                src={project.thumbnailUrl}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-[#08090C]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#22C55E] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Live Interactive Demo Ready
              </div>
            </div>

            {/* Description & Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#FF2638]">
                  Architectural Concept & Goals
                </h4>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Key Highlights */}
                <div className="pt-2">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF2638]" />
                    Design & Engineering Highlights
                  </h5>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar metadata */}
              <div className="p-5 rounded-xl bg-[#161922] border border-white/5 space-y-4">
                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mb-1">
                    Client Archetype
                  </div>
                  <div className="text-xs font-medium text-white">{project.clientType}</div>
                </div>

                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mb-1">
                    Role & Scope
                  </div>
                  <div className="text-xs font-medium text-white">{project.role}</div>
                </div>

                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider mb-2">
                    Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono bg-[#08090C] text-[#CBD5E1] px-2 py-1 rounded border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages.length > 0 && (
              <div className="mb-8">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF2638]" />
                  Visual Perspectives
                </h5>
                <div className="grid grid-cols-3 gap-3">
                  {project.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden border border-white/5 aspect-video bg-[#171A21]"
                    >
                      <img
                        src={img}
                        alt={`${project.title} gallery thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={project.liveDemoPath}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF2638] to-[#D61526] text-white font-bold text-xs uppercase tracking-wider hover:shadow-crimson-glow-sm transition-all"
              >
                <span>Launch Full Demo Page</span>
                <ExternalLink className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#161922] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:border-[#FF2638]/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#FF2638]" />
                <span>Enquire Similar Website on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
