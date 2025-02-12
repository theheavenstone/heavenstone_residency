"use client";

import Image from "next/image";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

const montserrat = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <div
          className={`${montserrat.className} w-full h-screen relative z-0 rounded-none overflow-hidden`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            suppressHydrationWarning
            className="absolute inset-0"
          >
            <Image
              src="/images/banner.webp"
              alt="Luxury Apartment"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              priority={true}
              loading="eager"
              suppressHydrationWarning
            />
          </motion.div>

          <motion.div
            key="banner-motion"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            suppressHydrationWarning
            className="absolute flex flex-col justify-center h-full w-full mx-auto space-y-7 z-50 bg-black/10"
          >
            <div className="container mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                suppressHydrationWarning
                className="mb-4 font-extrabold  text-brand-dark text-4xl md:text-5xl lg:text-6xl"
              >
                Luxury Rental Apartments for Your Comfort
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-brand-dark mb-8 text-lg lg:text-2xl sm:px-16 xl:px-48 font-semibold min-h-[48px]"
                suppressHydrationWarning
              >
                Experience homely living with modern amenities and comfort.
              </motion.p>
              <Link href="#apartments">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  suppressHydrationWarning
                  className="flex items-center gap-2 mx-auto  bg-brand-dark text-brand-light hover:text-brand-dark hover:bg-brand-light transition-colors duration-500 ease-in-out text-lg px-4 py-2 mt-4 rounded-lg"
                >
                  View our Apartments{" "}
                  <FaArrowRightLong className="text-brand-light " />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
