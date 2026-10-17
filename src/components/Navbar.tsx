"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090C]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-crimson rounded-md"
        >
          <span className="font-heading uppercase tracking-wider">Aditya</span>
          <span className="text-[#FF2638] font-black group-hover:scale-125 transition-transform duration-300">
            .
          </span>
          <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[#94A3B8] font-normal ml-2 pl-2 border-l border-white/10">
            Web Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111318]/70 border border-white/5 rounded-full px-5 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-crimson"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={getWhatsAppUrl("Hi Aditya, I'd like to discuss a new website project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#FF2638]" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF2638] to-[#D61526] hover:shadow-crimson-glow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF2638] sm:hidden"
          >
            Hire Me
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#94A3B8] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0D0F14] border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-medium text-[#94A3B8] hover:text-white hover:pl-2 transition-all border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl("Hi Aditya, I'd like to discuss a website project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#111318] border border-white/10 text-white font-medium text-sm hover:border-[#FF2638]/50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF2638]" />
                  <span>Discuss on WhatsApp</span>
                </a>

                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#FF2638] to-[#D61526] text-white font-semibold text-sm shadow-crimson-glow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
