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
      <div className="md:bg-yellow-200 fixed left-0 top-20 z-[100] flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200">
        <span className="block sm:hidden">all</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span>
      </div>
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
