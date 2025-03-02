import Amenities from "@/components/Amenities";
import ApartmentsPage from "@/components/Apartments";
import Awards from "@/components/Awards";
import Banner from "@/components/Banner";
import Dining from "@/components/Dining";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-[#EEEEEC]">
      <Banner />
      <Hero />
      <ApartmentsPage />
      <Amenities />
      <Dining />
      <Gallery />
      <Awards />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
