"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";
import {
  ArrowLeft,
  Coffee,
  Calendar,
  Clock,
  MapPin,
  Check,
  MessageSquare,
  Sparkles,
  Flame,
} from "lucide-react";

export default function UrbanBrewDemo() {
  const [selectedBean, setSelectedBean] = useState<number>(0);
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  const singleOrigins = [
    {
      name: "Ethiopian Guji Highlands",
      roast: "Light-Medium",
      notes: "Bergamot, Jasmine, White Peach, Wild Honey",
      altitude: "2,100 MASL",
      acidity: "Bright & Crisp",
      process: "Washed Heirloom",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Colombian Huila Pink Bourbon",
      roast: "Medium",
      notes: "Ripe Blackberry, Raw Sugar, Red Currant, Dark Cocoa",
      altitude: "1,850 MASL",
      acidity: "Juicy & Winey",
      process: "Double Anaerobic",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sumatra Kerinci Mountain",
      roast: "Medium-Dark",
      notes: "Cedarwood, Dark Molasses, Tobacco Leaf, Spice",
      altitude: "1,600 MASL",
      acidity: "Low & Velvety",
      process: "Wet Hulled (Giling Basah)",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const currentBean = singleOrigins[selectedBean];

  return (
    <div className="min-h-screen bg-[#0E0C0A] text-[#EDE7DE] font-sans selection:bg-[#C89567] selection:text-black">
      {/* Floating Demo Notice */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#171411]/95 backdrop-blur-md border-b border-[#C89567]/30 px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 hover:bg-[#C89567] hover:text-black text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-[#C89567] font-mono uppercase tracking-wider hidden sm:inline">
            • Concept Demo: Urban Brew Roastery & Cafe
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsReserveOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#C89567] text-black font-semibold hover:bg-white transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table / Cupping</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C89567] font-mono flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              Specialty Micro-Roaster & Kitchen
            </span>

            <h1 className="text-4xl sm:text-6xl font-serif text-[#FAF7F2] leading-tight tracking-tight">
              Crafted Coffee. <br />
              <span className="text-[#C89567] italic">Pure Sensory Ritual.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#B0A79C] max-w-xl leading-relaxed">
              Direct-trade single origins roasted in small batches daily. Experience our slow-pour brew bar and artisanal seasonal bakery.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsReserveOpen(true)}
                className="px-7 py-3.5 rounded-xl bg-[#C89567] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Book Tasting Table
              </button>

              <a
                href={getWhatsAppUrl("Hi Aditya, I saw your Urban Brew cafe concept and want an artisanal website for my cafe/restaurant.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#1C1814] border border-[#C89567]/30 text-white font-medium text-xs uppercase tracking-wider hover:border-[#C89567] transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#C89567]" />
                <span>Build this for my restaurant</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#8F8578] font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C89567]" />
                Open 07:00 AM – 10:00 PM
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89567]" />
                Bandra West, Mumbai
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#C89567]/20 shadow-2xl aspect-[4/5] bg-black">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                alt="Urban Brew Specialty Pour Over"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#171411]/90 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] text-[#C89567] font-mono uppercase tracking-wider">
                  TODAY'S SPECIALTY BATCH
                </div>
                <div className="text-white text-sm font-serif">
                  Ethiopian Guji Natural • Anaerobic Fermentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tasting Notes Matrix */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase tracking-widest text-[#C89567] font-mono">
            Interactive Tasting Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
            Explore Current Single Origins
          </h2>
          <p className="text-xs text-[#A0988E] mt-1">
            Click on any bean profile to inspect elevation, flavor spectrum, and brew recommendation.
          </p>
        </div>

        {/* Bean Selectors */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {singleOrigins.map((b, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedBean(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-serif transition-colors whitespace-nowrap ${
                selectedBean === idx
                  ? "bg-[#C89567] text-black font-bold"
                  : "bg-[#181512] text-[#A0988E] hover:text-white border border-white/5"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Selected Bean Deep Dive Card */}
        <div className="p-8 rounded-2xl bg-[#161310] border border-[#C89567]/30 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase font-mono text-[#C89567]">
              Origin Profile & Notes
            </span>
            <h3 className="text-2xl font-serif text-white mt-1 mb-3">
              {currentBean.name}
            </h3>
            <p className="text-sm text-[#C89567] italic mb-6">
              Flavor Notes: {currentBean.notes}
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#0E0C0A] border border-white/5">
                <span className="text-[#8F8578] block">Roast Level</span>
                <span className="text-white font-semibold">{currentBean.roast}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0E0C0A] border border-white/5">
                <span className="text-[#8F8578] block">Elevation</span>
                <span className="text-white font-semibold">{currentBean.altitude}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0E0C0A] border border-white/5">
                <span className="text-[#8F8578] block">Acidity Profile</span>
                <span className="text-white font-semibold">{currentBean.acidity}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0E0C0A] border border-white/5">
                <span className="text-[#8F8578] block">Processing</span>
                <span className="text-white font-semibold">{currentBean.process}</span>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black border border-white/10">
            <img
              src={currentBean.image}
              alt={currentBean.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {isReserveOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#181411] border border-[#C89567]/40 p-8 rounded-2xl max-w-md w-full relative">
            <h3 className="text-2xl font-serif text-white mb-2">Reserve Tasting Experience</h3>
            <p className="text-xs text-[#A0988E] mb-6">
              Reserve a table for weekend cupping sessions or private dining reservations.
            </p>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2.5 rounded bg-black/50 border border-white/10 text-white text-xs"
              />
              <input
                type="tel"
                placeholder="Phone Number for Confirmation"
                className="w-full px-4 py-2.5 rounded bg-black/50 border border-white/10 text-white text-xs"
              />
              <select className="w-full px-4 py-2.5 rounded bg-black/50 border border-white/10 text-white text-xs">
                <option>Session: Saturday Pour-Over Masterclass (11 AM)</option>
                <option>Session: Sunday Espresso & Roasting Lab (03 PM)</option>
                <option>Table Reservation (General Dining)</option>
              </select>
            </div>

            <div className="flex gap-3">
              <a
                href={getWhatsAppUrl("Hi Aditya, I like the tasting notes matrix and reservation flow on Urban Brew. Let's design a website for my brand.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center rounded bg-[#C89567] text-black font-semibold text-xs uppercase tracking-wider"
              >
                Confirm on WhatsApp
              </a>
              <button
                onClick={() => setIsReserveOpen(false)}
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
