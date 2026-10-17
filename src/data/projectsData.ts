export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Business" | "E-commerce" | "Landing Pages";
  categoryLabel: string;
  badge: "Concept Project" | "Demo Project";
  description: string;
  longDescription: string;
  clientType: string;
  role: string;
  technologies: string[];
  thumbnailUrl: string;
  galleryImages: string[];
  accentColor: string;
  highlights: string[];
  featuresList: string[];
  liveDemoPath: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "luxe-interiors",
    slug: "luxe-interiors",
    title: "Luxe Interiors",
    subtitle: "High-End Architectural & Interior Design Experience",
    category: "Business",
    categoryLabel: "Interior Design Website",
    badge: "Concept Project",
    description:
      "A serene, editorial-grade digital showroom designed for an ultra-luxury interior architecture studio with immersive project walkthroughs.",
    longDescription:
      "Luxe Interiors is an architectural showcase concept celebrating minimalism, warm cream undertones, and tactile photography. It features smooth portfolio transitions, spatial project case studies, and an inquiry system tailored for high-net-worth clientele.",
    clientType: "Interior Design Studio (Demo Concept)",
    role: "Concept Design & Front-End Architecture",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Layouts"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    ],
    accentColor: "#D4AF37",
    highlights: [
      "Editorial aesthetic with warm cream and charcoal balance",
      "Architectural image lightbox and dynamic project sliders",
      "Consultation booking flow for bespoke commissions",
    ],
    featuresList: [
      "Curated residential and commercial spaces gallery",
      "Interactive material palette selector preview",
      "Fast mobile loading for on-the-go prospective clients",
    ],
    liveDemoPath: "/projects/luxe-interiors",
  },
  {
    id: "nova-commerce",
    slug: "nova-commerce",
    title: "Nova Commerce",
    subtitle: "Minimalist E-Commerce Platform for Modern Lifestyle",
    category: "E-commerce",
    categoryLabel: "E-commerce Concept",
    badge: "Concept Project",
    description:
      "A sleek modern product grid with editorial typography, instant category switching, interactive cart drawer, and frictionless checkout flow.",
    longDescription:
      "Nova Commerce reimagines premium retail browsing with clean monochrome palettes, instant product filtering, micro-interaction feedback on add-to-cart, and responsive drawer navigation engineered to maximize conversions.",
    clientType: "Direct-to-Consumer Brand (Demo Concept)",
    role: "Full-Stack E-Commerce Prototyping",
    technologies: ["React", "Next.js", "Tailwind CSS", "Cart State Management"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
    ],
    accentColor: "#3B82F6",
    highlights: [
      "Instant slide-out cart drawer with live subtotal calculation",
      "Dynamic product variations (color, sizing, stock indicator)",
      "Mobile-optimized one-thumb checkout flow preview",
    ],
    featuresList: [
      "High-resolution multi-angle product gallery",
      "Live order calculation and coupon preview logic",
      "Zero-latency client-side search and category filtering",
    ],
    liveDemoPath: "/projects/nova-commerce",
  },
  {
    id: "apex-fitness",
    slug: "apex-fitness",
    title: "Apex Fitness",
    subtitle: "High-Energy Performance & Membership Portal",
    category: "Landing Pages",
    categoryLabel: "Fitness Website",
    badge: "Concept Project",
    description:
      "A high-impact, dark athletic landing page with bold typography, fiery crimson accents, class schedules, and trial pass booking.",
    longDescription:
      "Apex Fitness combines raw athletic intensity with razor-sharp UX. Designed to convert athletic enthusiasts into members through countdown offers, interactive membership tier comparison, and trainer spotlights.",
    clientType: "Elite Gym & Training Center (Demo Concept)",
    role: "Conversion Landing Page Design & Dev",
    technologies: ["Next.js", "Tailwind CSS", "Interactive Booking Modal"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
    ],
    accentColor: "#FF2638",
    highlights: [
      "Striking dark mode aesthetic with high-contrast crimson accents",
      "Interactive membership tiers comparison matrix",
      "Instant 7-Day Free Pass lead capture modal",
    ],
    featuresList: [
      "Weekly class timetable with filter by intensity level",
      "Certified coach roster with specialization tags",
      "Direct integration with WhatsApp quick booking",
    ],
    liveDemoPath: "/projects/apex-fitness",
  },
  {
    id: "urban-brew",
    slug: "urban-brew",
    title: "Urban Brew",
    subtitle: "Artisanal Specialty Coffee & Roastery Experience",
    category: "Business",
    categoryLabel: "Cafe Website",
    badge: "Concept Project",
    description:
      "Warm neutrals, editorial coffee photography, and an interactive digital tasting menu with origin notes and table reservations.",
    longDescription:
      "Urban Brew captures the sensory atmosphere of a neighborhood specialty roastery. Visitors can explore single-origin bean profiles, roast levels, seasonal drink menus, and reserve seating for coffee tastings.",
    clientType: "Specialty Roastery & Cafe (Demo Concept)",
    role: "Brand Experience & Web Development",
    technologies: ["Next.js", "Tailwind CSS", "Interactive Menu"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
    ],
    accentColor: "#C89567",
    highlights: [
      "Atmospheric photography with warm earthy tones",
      "Interactive coffee tasting notes matrix (acidity, body, notes)",
      "Table and private event reservation inquiry form",
    ],
    featuresList: [
      "Filterable food & beverage menu with dietary badges",
      "Origin story & bean sourcing transparency section",
      "Location map, opening hours, and direct call link",
    ],
    liveDemoPath: "/projects/urban-brew",
  },
];
