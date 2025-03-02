import About from "@/components/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Heavenstone Residency - Luxury Apartments in Kochi",
  description:
    "Learn more about Heavenstone Residency, our commitment to luxury living, and our premium apartments in Kochi. Experience top-tier amenities and exceptional service.",
};

export default function page() {
  return <About />;
}
