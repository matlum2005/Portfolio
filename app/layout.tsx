import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import BackToTop from "@/components/BackToTop";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const SITE_URL = "https://matloobali.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Matloob Ali — Frontend & React Developer",
  description:
    "Matloob Ali is a frontend developer specializing in React, Next.js, and immersive 3D web experiences.",
  keywords: ["Matloob Ali", "Frontend Developer", "React Developer", "Next.js Developer", "Portfolio"],
  authors: [{ name: "Matloob Ali" }],
  openGraph: {
    title: "Matloob Ali — Frontend & React Developer",
    description:
      "Frontend developer building fast, cinematic React and Next.js interfaces with real-time 3D.",
    url: SITE_URL,
    siteName: "Matloob Ali",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matloob Ali — Frontend & React Developer",
    description:
      "Frontend developer building fast, cinematic React and Next.js interfaces with real-time 3D.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-noise antialiased font-body">
        <Loader />
        <CustomCursor />
        <ScrollProgressBar />
        <CommandPalette />
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
