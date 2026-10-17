"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";
import {
  ArrowLeft,
  Flame,
  Dumbbell,
  Clock,
  Users,
  Check,
  MessageSquare,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function ApexFitnessDemo() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

  const classes = [
    {
      name: "Hypertrophy & Heavy Iron",
      time: "06:30 AM & 06:00 PM",
      intensity: "High",
      type: "Strength",
      coach: "Marcus Vance",
    },
    {
      name: "Metabolic Conditioning (MetCon)",
      time: "07:30 AM & 07:00 PM",
      intensity: "Extreme",
      type: "HIIT",
      coach: "Elena Rostova",
    },
    {
      name: "Striking & Technical Boxing",
      time: "08:30 AM & 05:00 PM",
      intensity: "High",
      type: "Combat",
      coach: "Tariq King",
    },
    {
      name: "Functional Mobility & Flow",
      time: "09:30 AM & 04:00 PM",
      intensity: "Moderate",
      type: "Mobility",
      coach: "Dr. Chloe Reed",
    },
  ];

  const filteredClasses =
    selectedDiscipline === "All"
      ? classes
      : classes.filter((c) => c.type === selectedDiscipline);

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#FF2638] selection:text-white">
      {/* Floating Demo Notice */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#121217]/95 backdrop-blur-md border-b border-[#FF2638]/40 px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 hover:bg-[#FF2638] text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-[#FF2638] font-mono uppercase tracking-wider hidden sm:inline">
            • Concept Demo: Apex Fitness (Athletic Conversion Funnel)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPassModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FF2638] text-white font-semibold hover:bg-red-600 transition-colors"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Claim 7-Day Pass</span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2638]/10 border border-[#FF2638]/30 text-xs font-mono uppercase text-[#FF5262] mb-4">
              <Flame className="w-3.5 h-3.5 text-[#FF2638]" />
              Elite Conditioning Facility
            </span>

            <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight uppercase leading-[1.05] mb-6">
              Redefine Your <span className="text-[#FF2638]">Absolute Limits.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mb-8 leading-relaxed">
              Biometric tracking, state-of-the-art power cages, Olympic lifting platforms, and world-class athletic coaches under one roof.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsPassModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF2638] to-[#D61526] text-white font-bold text-xs uppercase tracking-wider hover:shadow-crimson-glow-sm transition-all"
              >
                Claim Free 7-Day Trial Pass
              </button>

              <a
                href={getWhatsAppUrl("Hi Aditya, I want a high-energy conversion website like Apex Fitness.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#141419] border border-white/10 hover:border-white/30 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FF2638]" />
                <span>Build this for my gym</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                alt="Apex Athletic Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-[#FF2638] mb-1">
                  <span>LIVE FACILITY CAPACITY</span>
                  <span className="text-[#22C55E]">64% Optimal</span>
                </div>
                <div className="text-white text-sm font-bold">
                  Open 24/7 with Biometric Keycard Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black font-heading uppercase text-white">
              Daily Class Timetable
            </h2>
            <p className="text-xs text-[#94A3B8]">
              Filter by training discipline and reserve your slot.
            </p>
          </div>

          <div className="flex gap-2">
            {["All", "Strength", "HIIT", "Combat", "Mobility"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedDiscipline(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedDiscipline === type
                    ? "bg-[#FF2638] text-white"
                    : "bg-[#141419] text-[#94A3B8] hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredClasses.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#121217] border border-white/5 hover:border-[#FF2638]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF2638] bg-[#FF2638]/10 px-2 py-0.5 rounded border border-[#FF2638]/20 inline-block mb-3">
                  {item.type} • {item.intensity} Intensity
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.name}
                </h3>
                <div className="text-xs text-[#94A3B8] flex items-center gap-1.5 mb-2">
                  <Clock className="w-3.5 h-3.5 text-[#FF2638]" />
                  <span>{item.time}</span>
                </div>
                <div className="text-xs text-[#CBD5E1] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>Coach: {item.coach}</span>
                </div>
              </div>

              <button
                onClick={() => setIsPassModalOpen(true)}
                className="mt-6 w-full py-2 rounded-lg bg-white/5 hover:bg-[#FF2638] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Free Pass Modal */}
      {isPassModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121217] border border-[#FF2638]/40 p-8 rounded-2xl max-w-md w-full relative">
            <h3 className="text-2xl font-black font-heading text-white uppercase mb-2">
              Claim 7-Day Free Pass
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Experience the full facility, any class, and infrared recovery sauna at zero cost.
            </p>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-xs"
              />
              <input
                type="tel"
                placeholder="Phone Number for Pass Delivery"
                className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-xs"
              />
              <select className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-xs">
                <option>Preferred Slot: Morning (6AM - 11AM)</option>
                <option>Preferred Slot: Evening (5PM - 10PM)</option>
              </select>
            </div>

            <div className="flex gap-3">
              <a
                href={getWhatsAppUrl("Hi Aditya, I loved the high-converting pass modal on Apex Fitness. Let's build a website for my fitness/wellness brand.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center rounded bg-[#FF2638] text-white font-bold text-xs uppercase tracking-wider"
              >
                Continue via WhatsApp
              </a>
              <button
                onClick={() => setIsPassModalOpen(false)}
                className="px-4 py-3 rounded bg-white/10 text-white text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
