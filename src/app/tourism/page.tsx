import Tourism from "@/components/Tourism";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tourism in Kochi | Explore with Heavenstone Residency",
  description:
    "Discover the best tourist attractions in Kochi while staying at Heavenstone Residency. Explore historical sites, scenic beaches, cultural hotspots, and more with ease.",
};

export default function page() {
  return <Tourism />;
}
