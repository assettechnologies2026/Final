import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asset Technologies | IT/Hardware/Laptop/Desktop/Server Dealer",
  description: "Asset Technologies provides B2B IT infrastructure, computer hardware, enterprise software, networking, data center, cybersecurity and industrial automation solutions in India..",
  keywords: [
    'B2B IT solutions',
    'industrial automation',
    'IT infrastructure',
    'data center solutions',
    'networking services',
    'CCTV solutions',
    'B2B hardware dealer',
    'Best Workstation Dealer',
    'Forensic Workstation Dealer',
    'Server Dealer',
    'Laptop Dealer',
    'Desktop Dealer',
    'IT hardware supplier',
    'Cybersecurity solutions',
    'IT consulting services',
    'B2B technology provider',
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
<html lang="en" className="scroll-smooth"></html>

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Script
          src="https://api.blootrue.com/api/widgets/platform.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
