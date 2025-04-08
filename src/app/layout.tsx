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
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Luxury Apartments in Kochi | Furnished Rentals, Staycations & Workcations – Heavenstone",
  description:
    "Book fully furnished luxury apartments in Kochi at Heavenstone Residency. Ideal for monthly rentals, staycations, workcations, corporate stays, and guided tourism in Kerala.",
  keywords: [
    // 🔑 Primary Keywords
    "Luxury apartments in Kochi",
    "Furnished apartments in Kochi",
    "Serviced apartments in Kochi",
    "Monthly rentals in Kochi",
    "Corporate stays in Kochi",
    "Workcation apartments in Kerala",
    "Staycation rentals in Kochi",
    "Short-term rentals in Kochi",
    "Long-term apartment rentals Kochi",

    // 🧳 Travel & Tourism
    "Vacation apartments in Kochi",
    "Tourist accommodation Kochi",
    "Holiday apartments near Fort Kochi",
    "Places to stay in Kochi",
    "Kochi sightseeing accommodation",
    "Kerala tourism apartments",

    // 🐾 Niche & Features
    "Pet-friendly apartments in Kochi",
    "Daily rental apartments Kochi",
    "Business travel stays Kochi",
    "Extended stays in Kerala",
    "Fully furnished apartments Kochi",

    // 🎯 Long-tail Keywords (high-conversion)
    "Best luxury apartments for rent in Kochi",
    "Affordable serviced apartments in Kochi",
    "Top-rated monthly rental apartments in Kochi",
    "Corporate housing near Kochi city center",
    "Comfortable workcation homes in Kerala",
    "Stay near Fort Kochi tourist attractions",

    // 🧭 Value Adds
    "Guided Kerala tours with accommodation",
    "Cultural stays in Kochi with Kathakali shows",
    "Kochi travel guide with apartment rentals",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.heavenstone.in"),
  alternates: {
    canonical: "https://www.heavenstone.in",
    languages: {
      "en-IN": "https://www.heavenstone.in",
      "en-US": "https://www.heavenstone.in",
    },
  },
  authors: [
    { name: "Heavenstone Residency", url: "https://www.heavenstone.in" },
  ],
  creator: "Heavenstone Residency",
  publisher: "Heavenstone Residency",
  category: "Apartments rentals",
  openGraph: {
    title:
      "Luxury Apartments & Rentals in Kochi – staycation, workcation, Travel | Heavenstone",
    description:
      "Discover Heavenstone’s fully furnished serviced apartments in Kochi. Monthly rentals, pet-friendly stays, and Kerala travel packages all in one place.",
    url: "https://www.heavenstone.in",
    siteName: "Heavenstone Residency",
    images: [
      {
        url: "https://www.heavenstone.in/images/meta_img.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury apartments, staycation, workcation and guided tourism in Kochi – Heavenstone Residency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top-Rated Luxury Apartments in Kochi | Heavenstone Residency",
    description:
      "Stay in Heavenstone’s furnished apartments in Kochi. Perfect for staycations, workcations, and long-term rentals with premium amenities.",
    images: ["https://www.heavenstone.in/images/meta_img.jpg"],
    site: "@heavenstoneresidency",
    creator: "@heavenstoneresidency",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-icon-76x76.png" },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        url: "/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        url: "/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        url: "/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        url: "/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-icon-180x180.png",
      },
    ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.heavenstone.in/#website",
                  url: "https://www.heavenstone.in",
                  name: "Heavenstone Residency",
                  description:
                    "Luxury serviced apartments in Kochi. Perfect for monthly rentals, workcations,staycations, and Kerala tourism packages.",
                  inLanguage: "en-US",
                  publisher: {
                    "@id": "https://www.heavenstone.in/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target:
                        "https://www.heavenstone.in/?s={search_term_string}",
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.heavenstone.in/#webpage",
                  url: "https://www.heavenstone.in",
                  name: "Best Luxury Apartments in Kochi – Heavenstone Residency",
                  description:
                    "Book furnished apartments for rent in Kochi at Heavenstone. Ideal for workcations, staycations, business travel and long-term stays.",
                  isPartOf: {
                    "@id": "https://www.heavenstone.in/#website",
                  },
                  inLanguage: "en-US",
                  breadcrumb: {
                    "@id": "https://www.heavenstone.in/#breadcrumb",
                  },
                  primaryImageOfPage: {
                    "@id": "https://www.heavenstone.in/#primaryimage",
                  },
                  datePublished: "2025-02-11T09:53:00Z",
                  dateModified: new Date().toISOString(),
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.heavenstone.in/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.heavenstone.in",
                    },
                  ],
                },
                {
                  "@type": "ImageObject",
                  "@id": "https://www.heavenstone.in/#primaryimage",
                  inLanguage: "en-US",
                  url: "https://www.heavenstone.in/images/meta_img.jpg",
                  width: 1200,
                  height: 630,
                  caption: "Luxury apartments in Kochi - Heavenstone Residency",
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.heavenstone.in/#organization",
                  name: "Heavenstone Residency",
                  url: "https://www.heavenstone.in",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.heavenstone.in/images/Logo.webp",
                    width: 300,
                    height: 60,
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+91-9447959544",
                      contactType: "reservations",
                      availableLanguage: ["English", "Malayalam", "Hindi"],
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/people/Heavenstone-Residency/61560117024575",
                    "https://www.airbnb.co.in/users/show/577066250",
                    "https://wa.me/919447959544",
                  ],
                },
                {
                  "@type": "LodgingBusiness",
                  "@id": "https://www.heavenstone.in/#lodging",
                  name: "Heavenstone Residency",
                  url: "https://www.heavenstone.in",
                  telephone: "+91-9447959544",
                  email: "theheavenstone@gmail.com",
                  priceRange: "₹₹",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Heavenstone Ln, Vaduthala",
                    addressLocality: "Kochi",
                    addressRegion: "Kerala",
                    postalCode: "682012",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "10.01512826453341",
                    longitude: "76.27603854233024",
                  },
                  hasMap: "https://maps.app.goo.gl/Jb7eHxV44EBcbECbA",
                  image: "https://www.heavenstone.in/images/meta_img.jpg",
                  description:
                    "Luxury serviced apartments and furnished stays in Kochi for tourists, remote workers, and business travelers. Monthly rentals and tourism packages.",
                  amenityFeature: [
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "High-Speed WiFi",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Pet-friendly Accommodation",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Air conditioning",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Fully Furnished",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Staycation Packages",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Workcation Setup",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "24/7 Security",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Housekeeping Services",
                      value: true,
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
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
