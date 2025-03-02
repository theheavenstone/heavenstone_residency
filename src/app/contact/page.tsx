import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Heavenstone Residency - Get in Touch",
  description:
    "Have questions or need assistance? Contact Heavenstone Residency for inquiries about our luxury apartments in Kochi. We're here to help with bookings, pricing, and more.",
};

export default function page() {
  return <Contact />;
}
