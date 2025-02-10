"use client";

import Image from "next/image";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import bannerImage from "../../public/Assets/banner.webp";

import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

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
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bannerImage}
              alt="Luxury Apartment"
              fill
              className="object-cover object-centers"
              priority
            />
          </motion.div>

          <motion.div
            key="banner-motion"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute flex flex-col justify-center h-full w-full mx-auto space-y-7 z-50 bg-black/10"
          >
            <div className="container mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-4 font-extrabold  text-brand-dark text-4xl md:text-[50px] lg:text-6xl"
              >
                Luxury Rental Apartments for Your Comfort
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                className="text-brand-dark mb-8 text-lg lg:text-2xl sm:px-16 xl:px-48 font-semibold"
              >
                Experience homely living with modern amenities and comfort.
              </motion.p>
              <Link href="#apartments">
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 mx-auto  bg-brand-dark text-brand-light hover:text-brand-dark hover:bg-brand-light transition-colors duration-500 ease-in-out text-lg px-4 py-2 mt-4 rounded-lg"
                >
                  View our Apartments{" "}
                  <Icon icon="mdi-light:arrow-right" className="w-6 h-6" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
