"use client";

import Image from "next/image";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Banner() {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <div
          className={` w-full h-screen relative z-0 rounded-none overflow-hidden`}
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
              fill={true}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
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
            <div className="px-4 mx-auto text-center">
              <h1 className="mb-4 font-extrabold  text-brand-dark text-2xl lg:text-5xl ">
                Your Trusted Tourism Partner & Luxury Apartments in Kochi
              </h1>

              <p className="text-brand-dark mb-8 text-lg lg:text-2xl sm:px-16 xl:px-48 font-semibold min-h-[48px]">
                Offering comfort, convenience, and premium experiences for
                travelers and residents alike.
              </p>
              <Link href="#apartments">
                <button className="flex items-center gap-2 mx-auto  bg-brand-dark text-brand-light hover:text-brand-dark hover:bg-brand-light transition-colors duration-500 ease-in-out text-lg px-4 py-2 mt-4 rounded-lg">
                  View our Apartments{" "}
                  <FaArrowRightLong className="text-brand-light " />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
