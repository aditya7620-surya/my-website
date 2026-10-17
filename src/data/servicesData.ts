export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    description:
      "Build credibility online with a polished, professional website that introduces your business and makes it easy for customers to contact you.",
    iconName: "Building2",
    badge: "Core Service",
    features: [
      "Custom brand-aligned design",
      "Lead generation & inquiry flows",
      "Fast page load & SEO foundation",
      "Mobile & tablet optimization",
    ],
    whatsappMessage:
      "Hi Aditya, I'm interested in building a professional Business Website for my company. Let's discuss requirements.",
  },
  {
    id: "ecommerce-development",
    number: "02",
    title: "E-commerce Development",
    description:
      "Showcase products, create shopping experiences, and help customers move from browsing to checkout.",
    iconName: "ShoppingBag",
    badge: "High Conversion",
    features: [
      "Product catalog & filtering",
      "Optimized checkout & payments",
      "Mobile-first shopping interface",
      "Inventory & order notifications",
    ],
    whatsappMessage:
      "Hi Aditya, I'd like to discuss developing an E-commerce Website for my products.",
  },
  {
    id: "landing-pages",
    number: "03",
    title: "Landing Pages",
    description:
      "Focused landing pages designed to present an offer clearly and encourage enquiries, sign-ups, or sales.",
    iconName: "Zap",
    badge: "Campaign Ready",
    features: [
      "Conversion-focused architecture",
      "Compelling value proposition layout",
      "Form validation & instant messaging",
      "A/B testing ready structure",
    ],
    whatsappMessage:
      "Hi Aditya, I want to create a high-converting Landing Page for our campaign.",
  },
  {
    id: "website-redesign",
    number: "04",
    title: "Website Redesign",
    description:
      "Transform an outdated website into a cleaner, more modern, mobile-friendly experience.",
    iconName: "RefreshCw",
    badge: "Modernization",
    features: [
      "Modern UI/UX audit & uplift",
      "Speed & Core Web Vitals boost",
      "Cleaner navigation & content hierarchy",
      "Zero disruption migration",
    ],
    whatsappMessage:
      "Hi Aditya, I have an existing website that needs a modern redesign and speed optimization.",
  },
  {
    id: "responsive-web-design",
    number: "05",
    title: "Responsive Web Design",
    description:
      "Deliver a consistent experience across mobile, tablet, and desktop screens.",
    iconName: "Smartphone",
    badge: "Universal Access",
    features: [
      "Fluid adaptive layouts",
      "Touch-friendly gestures & menus",
      "Retina / high-DPI asset support",
      "Cross-browser compatibility",
    ],
    whatsappMessage:
      "Hi Aditya, I need a responsive web design that looks stunning across phones, tablets, and desktops.",
  },
  {
    id: "website-maintenance",
    number: "06",
    title: "Website Maintenance",
    description:
      "Keep your website updated, functional, and presentable with ongoing maintenance options.",
    iconName: "ShieldCheck",
    badge: "Peace of Mind",
    features: [
      "Security updates & monitoring",
      "Content updates & adjustments",
      "Performance & uptime health checks",
      "Direct developer support",
    ],
    whatsappMessage:
      "Hi Aditya, I'm interested in ongoing website maintenance and support.",
  },
];
