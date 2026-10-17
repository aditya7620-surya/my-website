"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import {
  Phone,
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    websiteType: "Business Website",
    budget: "",
    projectDetails: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedWhatsAppText, setSubmittedWhatsAppText] = useState("");

  const websiteTypes = [
    "Business Website",
    "E-commerce",
    "Landing Page",
    "Website Redesign",
    "Other",
  ];

  const budgetRanges = [
    "Flexible / Open to Recommendation",
    "Under ₹25,000 / $300",
    "₹25,000 - ₹50,000 / $300 - $600",
    "₹50,000 - ₹1,00,000 / $600 - $1,200",
    "Above ₹1,00,000 / $1,200+",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.length < 10) {
      setStatus("error");
      setErrorMessage("Please enter at least a brief summary of what you are building.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setSubmittedWhatsAppText(
          `Hi Aditya, I just submitted an inquiry for a ${formData.websiteType}. Name: ${formData.fullName}. Brief: ${formData.projectDetails.slice(0, 100)}`
        );
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send inquiry. Please use WhatsApp directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Network connection issue. You can instantly message Aditya on WhatsApp below."
      );
    }
  };

  // Dynamic WhatsApp quick link based on current form fields
  const currentWhatsAppMessage = `Hi Aditya, I want to discuss a ${formData.websiteType} project for ${
    formData.fullName ? formData.fullName : "my business"
  }. ${formData.projectDetails ? `Details: ${formData.projectDetails}` : ""}`;
  const directWhatsAppLink = getWhatsAppUrl(currentWhatsAppMessage);

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#08090C] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF2638]/8 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts & Value proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF2638] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start A Project</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
                Have A Project In Mind?
              </h2>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8">
                Tell me what you're building. Let's discuss how a well-designed website can support your business.
              </p>

              {/* Personal Card Profile */}
              <div className="p-6 rounded-2xl bg-[#111318] border border-white/10 mb-8 space-y-4 shadow-card-subtle">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs font-medium text-[#FF2638] uppercase tracking-wider">
                    {siteConfig.title}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5 text-sm">
                  {/* Phone Click-to-Call */}
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="flex items-center gap-3 text-[#CBD5E1] hover:text-white group transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#161922] border border-white/10 flex items-center justify-center text-[#FF2638] group-hover:bg-[#FF2638] group-hover:text-white transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#94A3B8] uppercase">Direct Phone</div>
                      <div className="font-semibold text-white">{siteConfig.phoneDisplay}</div>
                    </div>
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href={getWhatsAppUrl("Hi Aditya, I'd like to talk about a website project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#CBD5E1] hover:text-white group transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#161922] border border-white/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-black transition-all">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#94A3B8] uppercase">WhatsApp Chat</div>
                      <div className="font-semibold text-white">Instant Consultation</div>
                    </div>
                  </a>

                  {/* Direct Email Link */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-[#CBD5E1] hover:text-white group transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#161922] border border-white/10 flex items-center justify-center text-[#FF2638] group-hover:bg-[#FF2638] group-hover:text-white transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#94A3B8] uppercase">Direct Email</div>
                      <div className="font-mono text-xs font-semibold text-white group-hover:text-[#FF5262] transition-colors">
                        {siteConfig.email}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time Guarantee note */}
              <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                <Clock className="w-4 h-4 text-[#22C55E]" />
                <span>Typically replies within a few hours on business days.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Conversion Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#111318] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project details have been recorded. Aditya will review your requirements and reach out promptly.
                    </p>
                  </div>

                  {/* Immediate WhatsApp continuation */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(submittedWhatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#22C55E] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#16a34a] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up: Continue on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          fullName: "",
                          businessName: "",
                          email: "",
                          phone: "",
                          websiteType: "Business Website",
                          budget: "",
                          projectDetails: "",
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Full Name <span className="text-[#FF2638]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Business Name <span className="text-[#64748B] lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Zenith Studio"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Email Address <span className="text-[#FF2638]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Phone Number <span className="text-[#64748B] lowercase">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Website Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Website Type
                      </label>
                      <select
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors"
                      >
                        {websiteTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#111318]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Approximate Budget */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Approximate Budget <span className="text-[#64748B] lowercase">(optional)</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors"
                      >
                        <option value="" className="bg-[#111318]">Select budget range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-[#111318]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5E1] mb-2">
                      Project Details <span className="text-[#FF2638]">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does, your main website goals, target audience, and any key feature ideas..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-colors resize-none"
                    />
                  </div>

                  {/* Error display */}
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF2638] to-[#D61526] hover:shadow-crimson-glow-sm transition-all duration-200 disabled:opacity-60 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Quick WhatsApp fallback button */}
                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#161922] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:border-[#FF2638]/50 hover:bg-[#1A1D26] transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-[#FF2638]" />
                      <span>Discuss On WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
