import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aditya Suryavanshi | Freelance Web Developer",
  description:
    "Looking for a professional website for your business? Aditya Suryavanshi builds modern business websites, e-commerce experiences, and landing pages.",
  keywords: [
    "Aditya Suryavanshi",
    "Freelance Web Developer",
    "Business Websites",
    "E-commerce Websites",
    "Landing Pages",
    "Responsive Website Design",
    "Modern UI UX",
    "Next.js Developer",
    "Website Redesign",
  ],
  authors: [{ name: "Aditya Suryavanshi" }],
  creator: "Aditya Suryavanshi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityasuryavanshi.com",
    title: "Aditya Suryavanshi | Freelance Web Developer",
    description:
      "I design and develop modern, high-performing websites and e-commerce experiences that help businesses stand out online.",
    siteName: "Aditya Suryavanshi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Suryavanshi | Freelance Web Developer",
    description:
      "Modern business websites, e-commerce, and high-converting landing pages.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#08090C] text-[#F8FAFC] antialiased selection:bg-[#FF2638] selection:text-white">
        {/* Subtle global ambient glow on top */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-crimson/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <CustomCursor />
        <Navbar />
        <main className="relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
