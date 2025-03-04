import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heavenstone | Premium Apartments & Tourism in Kochi",
  description:
    "Rent fully furnished luxury apartments in Kochi at Heavenstone. Short & long-term stays, pet-friendly, corporate housing, premium amenities, guided tourism, and exclusive Kerala travel packages.",
  keywords: [
    "Luxury apartments Kochi",
    "furnished rentals",
    "serviced apartments",
    "corporate stays",
    "pet-friendly apartments",
    "monthly rentals",
    "business stays",
    "short-term stays",
    "extended stays",
    "vacation rentals in Kochi",
    "premium housing",
    "service apartments in kochi",
    "Kochi tourism",
    "tourist places in Kochi",
    "things to do in Kochi",
    "best places to visit in Kochi",
    "Kochi city travel guide",
    "Kathakali dance performances",
    "customized Kerala tours",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://www.heavenstone.in"),
  openGraph: {
    title: "Heavenstone | Luxury Apartments & Tourism in Kochi",
    description:
      "Discover fully furnished luxury apartments & rooms for rent at Heavenstone Residency. Enjoy premium amenities and flexible rental options in Kochi.",
    url: "https://www.heavenstone.in",
    siteName: "Heavenstone Residency",
    images: [
      {
        url: "https://www.heavenstone.in/images/meta_img.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury apartments & tourism packages at Heavenstone in Kochi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavenstone | Luxury Apartments & Tourism in Kochi",
    description:
      "Book luxury apartments at Heavenstone Residency and explore Kochi with customized travel packages, and guided tours.",
    images: ["https://www.heavenstone.in/images/meta_img.jpg"],
    site: "@heavenstoneresidency",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
  },
  verification: {
    google: "VP_fjIlQyaoDo7OfJ7lxN6OWqXvpfGGXXvGaLopbjRM",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
