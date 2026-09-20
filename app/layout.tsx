import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://assettech.in"),

  title: "Asset Technologies | B2B IT Hardware & PC Solutions",

  description:
    "Asset Technologies provides B2B IT infrastructure, computer hardware, custom PC builds, workstations, servers, networking, cybersecurity and industrial automation solutions in India.",

  keywords: [
    "B2B IT solutions",
    "IT infrastructure",
    "IT hardware supplier",
    "B2B hardware dealer",
    "computer hardware supplier",
    "PC components supplier",
    "custom PC builder",
    "PC builder",
    "PC components",
    "computer parts",
    "workstation dealer",
    "forensic workstation dealer",
    "server dealer",
    "laptop dealer",
    "desktop dealer",
    "bulk PC components supplier",
    "data center solutions",
    "networking solutions",
    "cybersecurity solutions",
    "industrial automation",
  ],

  alternates: {
    canonical: "https://assettech.in",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Asset Technologies | B2B IT Hardware & PC Solutions",
    description:
      "B2B IT hardware, custom PC builds, workstations, servers, networking, cybersecurity and industrial automation solutions in India.",
    url: "https://assettech.in",
    siteName: "Asset Technologies",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />

        <Script
          src="https://api.blootrue.com/api/widgets/platform.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}