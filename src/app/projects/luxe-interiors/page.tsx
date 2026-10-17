"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { ArrowLeft, MessageSquare, Phone, Check, Sparkles, MapPin, Layers } from "lucide-react";

export default function LuxeInteriorsDemo() {
  const [activeTab, setActiveTab] = useState<"all" | "residential" | "commercial">("all");
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  );
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const projects = [
    {
      title: "The Minimalist Penthouse",
      location: "Marine Drive, Mumbai",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      description: "Monolithic travertine surfaces, warm linen drapery, and low-slung Italian seating.",
    },
    {
      title: "Pavilion Studio Villa",
      location: "Alibaug Coastal Retreat",
      category: "residential",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      description: "Seamless indoor-outdoor transitions with raw fluted concrete and aged oak detailing.",
    },
    {
      title: "Atelier Haute Gallery",
      location: "Kala Ghoda Art District",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      description: "Sculptural ceiling architecture, museum-grade directional illumination, and brushed brass.",
    },
  ];

  const filtered =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0C0D0F] text-[#ECE7DF] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Floating Demo Notice Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#16171B]/95 backdrop-blur-md border-b border-[#D4AF37]/30 px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-[#D4AF37] font-mono uppercase tracking-wider hidden sm:inline">
            • Concept Demo: Luxe Interiors
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Hi Aditya, I saw your Luxe Interiors concept and want a luxury website for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hire Aditya for this design</span>
          </a>
        </div>
      </div>

      {/* Interior Studio Hero */}
      <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-serif block mb-3">
            Architectural Interior Studio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F8F5EE] tracking-tight leading-tight mb-4">
            Luxe Interiors
          </h1>
          <p className="text-sm sm:text-base text-[#A8A49C] font-light max-w-xl mx-auto leading-relaxed">
            Quiet luxury, bespoke residential architecture, and spatial harmony curated for discerning patrons.
          </p>
        </div>

        {/* Big Spotlight Visual */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 aspect-[16/9] max-h-[580px] shadow-2xl mb-12">
          <img
            src={selectedImage}
            alt="Luxe Interiors Featured Space"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono">
                Featured Space
              </span>
              <div className="text-xl sm:text-2xl font-serif text-white">
                Bespoke Architectural Residence
              </div>
            </div>
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Book Private Consultation
            </button>
          </div>
        </div>

        {/* Project Gallery Filter */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="text-lg font-serif text-white">Selected Commissions</h2>
          <div className="flex gap-2">
            {(["all", "residential", "commercial"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded text-xs uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(proj.image)}
              className="group cursor-pointer rounded-xl bg-[#14161B] border border-white/5 overflow-hidden hover:border-[#D4AF37]/40 transition-all p-4"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-black">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-mono mb-1">
                <MapPin className="w-3 h-3" />
                <span>{proj.location}</span>
              </div>
              <h3 className="text-base font-serif text-white mb-1">{proj.title}</h3>
              <p className="text-xs text-[#A8A49C] leading-relaxed">{proj.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Modal */}
        {isConsultOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#14161B] border border-[#D4AF37]/40 p-8 rounded-2xl max-w-md w-full relative">
              <h3 className="text-2xl font-serif text-white mb-2">Request Consultation</h3>
              <p className="text-xs text-[#A8A49C] mb-6">
                This demo form simulates high-end inquiry handling. Click below to continue directly with Aditya.
              </p>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2.5 rounded bg-black/40 border border-white/10 text-white text-xs"
                />
                <input
                  type="email"
                  placeholder="Client Email"
                  className="w-full px-4 py-2.5 rounded bg-black/40 border border-white/10 text-white text-xs"
                />
                <input
                  type="text"
                  placeholder="Property Location & Scope"
                  className="w-full px-4 py-2.5 rounded bg-black/40 border border-white/10 text-white text-xs"
                />
              </div>
              <div className="flex gap-3">
                <a
                  href={getWhatsAppUrl("Hi Aditya, I want an interior architecture website like Luxe Interiors.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={() => setIsConsultOpen(false)}
                  className="px-4 py-3 rounded bg-white/10 text-white text-xs"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
