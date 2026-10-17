export const siteConfig = {
  name: "Aditya Suryavanshi",
  title: "Freelance Web Developer",
  shortBio:
    "I design and develop modern, high-performing websites and e-commerce experiences that help businesses stand out online.",
  fullBio:
    "I'm Aditya Suryavanshi, a web developer passionate about building modern, visually engaging, and user-friendly websites. I help businesses establish a strong digital presence through thoughtful design, responsive development, and experiences built around their goals.",
  phone: "9699464559",
  phoneDisplay: "+91 96994 64559",
  whatsappNumber: "919699465590",
  whatsappBaseUrl: "https://wa.me/919699465590",
  email: "suryavanshiaditya967@gmail.com",
  emailPlaceholder: "suryavanshiaditya967@gmail.com",
  isEmailConfigured: true,
  availability: "AVAILABLE FOR SELECT PROJECTS",
  primaryCta: "Let's Build Your Website",
  secondaryCta: "Explore My Work",
  whatsappCta: "Discuss Your Project",
  trustLine: "Business Websites • E-commerce • Landing Pages",
  specializations: [
    "Professional business websites",
    "E-commerce websites",
    "Landing pages",
    "Responsive website design",
    "Modern UI/UX",
    "Website redesign and optimization",
  ],
  socials: [
    // Real social URLs can be added here when available:
    // { label: "GitHub", url: "https://github.com/..." },
    // { label: "LinkedIn", url: "https://linkedin.com/in/..." },
  ],
};

export function getWhatsAppUrl(prefillMessage?: string): string {
  const base = siteConfig.whatsappBaseUrl;
  if (!prefillMessage) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(prefillMessage)}`;
}
