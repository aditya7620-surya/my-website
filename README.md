# Aditya Suryavanshi — Freelance Web Developer Portfolio

A production-ready digital agency-grade personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for **Aditya Suryavanshi** to convert business owners, founders, and e-commerce clients.

---

## 🚀 Key Highlights & Architecture

- **Aesthetic**: Near-black palette (`#08090C`), charcoal surfaces (`#111318`), electric crimson accents (`#FF2638`), subtle glowing radial atmospheric lighting, Space Grotesk headings, and Inter body typography.
- **Conversion-Focused Navigation**: Sticky glassmorphic navbar with smooth scroll triggers, mobile drawer, instant WhatsApp consultation link, and "Hire Me" primary button.
- **Interactive 3D-Inspired Hero Visual**: Metallic glossy sphere, orbit light vectors, and a miniature interactive website simulator with tab switching between Business, E-Commerce, and Landing page modes.
- **Custom Desktop Cursor**: Physics-based trailing spring ring, magnetic button hover states, and card expansion with automatic touch device disablement for full mobile accessibility.
- **Services Section**: 6 core commercial services (Business Websites, E-Commerce, Landing Pages, Website Redesign, Responsive Design, Maintenance) with prefilled WhatsApp inquiry hooks.
- **4 Complete Working Demo Projects**:
  1. **Luxe Interiors** (`/projects/luxe-interiors`): High-end architectural studio concept with space gallery switcher and consultation modal.
  2. **Nova Commerce** (`/projects/nova-commerce`): E-commerce platform concept with live interactive cart drawer, product catalog, subtotal calculations, and checkout preview.
  3. **Apex Fitness** (`/projects/apex-fitness`): High-energy athletic landing page with 7-Day Free Trial pass modal and interactive daily class timetable.
  4. **Urban Brew** (`/projects/urban-brew`): Specialty roastery experience with interactive single-origin tasting flavor matrix and table reservation modal.
- **Transparent Credibility Standards**: All demo projects are visibly badged as *"Concept Project"* to preserve 100% honesty. Testimonials include a client invitation slot ready for real reviews. Tech stack includes "Confirmed" vs "Review Required" status tags.
- **Functional Contact Section**:
  - Full form validation for Name, Business, Email, Phone, Website Type, Budget, and Project Details.
  - POST API route at `/api/contact`.
  - Instant WhatsApp fallback button prefilled with the client's form responses.
- **Built-in SEO**: Dynamic sitemap (`/sitemap.xml`), robots (`/robots.txt`), OpenGraph meta tags, and branded favicon generator (`/icon`).

---

## 🛠️ Getting Started

### 1. Requirements
- Node.js 18+ (tested with Node.js v20.18 LTS)
- npm 9+

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## ⚙️ Customization Guide

### 1. Contact Information & Branding (`src/data/siteConfig.ts`)
Edit [src/data/siteConfig.ts](file:///c:/Users/surya/OneDrive/Desktop/portfolio.new/src/data/siteConfig.ts) to update:
- Phone number & display format (`phoneDisplay: "+91 96994 64559"`)
- WhatsApp URL (`https://wa.me/919699465590`)
- Your real email address (`emailPlaceholder`)
- Availability notice & headline copies

### 2. Replacing Demo Concepts with Real Client Projects (`src/data/projectsData.ts`)
Edit [src/data/projectsData.ts](file:///c:/Users/surya/OneDrive/Desktop/portfolio.new/src/data/projectsData.ts). Simply update or add new items to the `projectsData` array with your real project screenshots, client names, and live URLs.

### 3. Adding Real Client Testimonials (`src/components/Testimonials.tsx`)
In [src/components/Testimonials.tsx](file:///c:/Users/surya/OneDrive/Desktop/portfolio.new/src/components/Testimonials.tsx), populate the `realTestimonials` array with client quotes, names, and company names once collected.

### 4. Connecting Email Service (Resend / SendGrid / Formspree)
The contact form submits to [src/app/api/contact/route.ts](file:///c:/Users/surya/OneDrive/Desktop/portfolio.new/src/app/api/contact/route.ts).
To forward inquiries directly to your inbox via [Resend](https://resend.com):
```bash
npm install resend
```
Then in `route.ts`:
```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'portfolio@yourdomain.com',
  to: 'suryavanshiaditya967@gmail.com',
  subject: `New Project Inquiry from ${fullName}`,
  text: projectDetails,
});
```

---

## 🚢 One-Click Deployment to Vercel

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Aditya Suryavanshi portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Deploy! Next.js will automatically detect the configuration and deploy globally with edge caching.
