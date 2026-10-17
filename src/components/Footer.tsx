"use client";

import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { Phone, MessageSquare, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Selected Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

  const serviceLinks = [
    { name: "Business Websites", href: "/#services" },
    { name: "E-commerce Development", href: "/#services" },
    { name: "Landing Pages", href: "/#services" },
    { name: "Website Redesign", href: "/#services" },
    { name: "Responsive Web Design", href: "/#services" },
    { name: "Website Maintenance", href: "/#services" },
  ];

  const demoLinks = [
    { name: "Luxe Interiors (Concept)", href: "/projects/luxe-interiors" },
    { name: "Nova Commerce (Concept)", href: "/projects/nova-commerce" },
    { name: "Apex Fitness (Concept)", href: "/projects/apex-fitness" },
    { name: "Urban Brew (Concept)", href: "/projects/urban-brew" },
  ];

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-[#94A3B8] text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight text-white font-heading"
            >
              <span>ADITYA</span>
              <span className="text-[#FF2638]">.</span>
            </Link>

            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Freelance Web Developer creating modern, high-performing websites and e-commerce platforms that help businesses stand out and convert visitors.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF2638]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl("Hi Aditya, I'd like to get in touch.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>WhatsApp: {siteConfig.whatsappBaseUrl}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF2638]" />
                <span className="font-mono text-xs text-white">{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo Experiences */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-heading">
              Demo Experiences
            </h4>
            <ul className="space-y-2.5 text-xs">
              {demoLinks.map((demo) => (
                <li key={demo.name}>
                  <Link href={demo.href} className="hover:text-white transition-colors">
                    {demo.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved. Built with Next.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#94A3B8]">
              Client Work Inquiries: Open
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#94A3B8] hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF2638]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
