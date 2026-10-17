export interface TechItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend & Runtimes" | "Styling & UI" | "E-commerce & Tools";
  status: "Confirmed" | "Review Required";
  description: string;
  proficiencyLevel: "Core Competency" | "Production Proficient" | "Configurable";
}

export const techStackData: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    status: "Confirmed",
    description: "Server-side rendering, App Router architecture, dynamic routes & static generation for maximum SEO performance.",
    proficiencyLevel: "Core Competency",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    status: "Confirmed",
    description: "Component-driven user interfaces, state management, interactive hooks, and modular architecture.",
    proficiencyLevel: "Core Competency",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    status: "Confirmed",
    description: "Modern asynchronous workflows, DOM manipulation, clean programmatic logic, and web APIs.",
    proficiencyLevel: "Core Competency",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    status: "Confirmed",
    description: "Type safety, maintainable codebases, strict interfaces, and scalable component props.",
    proficiencyLevel: "Production Proficient",
  },
  {
    id: "html5-css3",
    name: "HTML5 & CSS3",
    category: "Styling & UI",
    status: "Confirmed",
    description: "Semantic web standards, accessibility (a11y), responsive layouts, flexbox, and CSS grid.",
    proficiencyLevel: "Core Competency",
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    category: "Styling & UI",
    status: "Confirmed",
    description: "Utility-first design systems, dark mode palettes, custom spacing scales, and rapid responsive styling.",
    proficiencyLevel: "Core Competency",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend & Runtimes",
    status: "Confirmed",
    description: "Server-side API routes, microservices integration, webhook handlers, and serverless compute.",
    proficiencyLevel: "Production Proficient",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "Styling & UI",
    status: "Confirmed",
    description: "High-frame-rate scroll-linked reveals, physics-based gesture feedback, and custom cursor animations.",
    proficiencyLevel: "Production Proficient",
  },
  {
    id: "ecommerce-integrations",
    name: "E-commerce & Payments",
    category: "E-commerce & Tools",
    status: "Review Required",
    description: "Payment gateway integration (Stripe, Razorpay, UPI flows), shopping carts, and product catalog sync.",
    proficiencyLevel: "Configurable",
  },
  {
    id: "git-github",
    name: "Git & Deployment",
    category: "Backend & Runtimes",
    status: "Confirmed",
    description: "Version control workflows, Vercel/Netlify continuous delivery pipelines, and production domain routing.",
    proficiencyLevel: "Core Competency",
  },
];
