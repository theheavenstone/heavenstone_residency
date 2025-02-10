import dynamic from "next/dynamic";
import ScrollToTop from "@/components/ScrollToTop";

const Banner = dynamic(() => import("@/components/Banner"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Apartment = dynamic(() => import("@/components/Apartments"), {
  ssr: false,
});
const Amenities = dynamic(() => import("@/components/Amenities"), {
  ssr: false,
});
const Dining = dynamic(() => import("@/components/Dining"), { ssr: false });
const Awards = dynamic(() => import("@/components/Awards"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-[#EEEEEC]">
      <Banner />
      <Hero />
      <Apartment />
      <Amenities />
      <Dining />
      <Awards />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
