"use client";

import { motion } from "framer-motion";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { getWhatsAppUrl } from "@/data/siteConfig";
import {
  Building2,
  ShoppingBag,
  Zap,
  RefreshCw,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Check,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Building2,
  ShoppingBag,
  Zap,
  RefreshCw,
  Smartphone,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#08090C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF2638]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF2638]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
              <span>Tailored Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Services Designed For{" "}
              <span className="crimson-gradient-text">Commercial Impact.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-md">
            Whether you are launching a new enterprise or revamping an outdated portal, every project is engineered for speed, aesthetic distinction, and conversion.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Building2;
            const whatsappLink = getWhatsAppUrl(service.whatsappMessage);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                data-cursor-card
                className="group relative rounded-2xl bg-[#111318] border border-white/5 p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#FF2638]/40 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(255,38,56,0.18)]"
              >
                {/* Red Edge Accent Glow (Visible on hover) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FF2638]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#FF2638] bg-[#FF2638]/10 px-2.5 py-1 rounded-md border border-[#FF2638]/20">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[11px] font-medium text-[#94A3B8] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-[#161922] border border-white/10 flex items-center justify-center text-[#FF2638] mb-5 group-hover:scale-110 group-hover:border-[#FF2638]/40 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#FF5262] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                        <Check className="w-3.5 h-3.5 text-[#FF2638] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Triggers */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF2638] transition-colors py-1.5"
                    title="Enquire about this service on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FF2638]" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <Link
                    href={`#contact?service=${encodeURIComponent(service.title)}`}
                    className="w-8 h-8 rounded-full bg-[#1A1E27] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#FF2638] group-hover:border-[#FF2638] transition-all duration-200"
                    title="Fill contact inquiry form"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
