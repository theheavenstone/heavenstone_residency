"use client";

import { motion } from "framer-motion";
import Copywright from "@/components/Copywright";

export default function About() {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center px-4 pt-24 md:pt-32">
      {/* About Section */}
      <motion.div
        className="container w-full space-y-6 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl text-brand-dark font-bold text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          About Heavenstone Residency
        </motion.h2>

        {/* Paragraphs */}
        {[
          "Welcome to Heavenstone Residency, your ideal home away from home! Nestled in a brand-new building, we offer fully furnished rental apartments designed for comfort and convenience. Whether you’re staying for a short visit or a long-term stay, our 1BHK and 2BHK apartments cater to all your needs. Enjoy modern amenities like high-speed Wi-Fi, a fully equipped kitchen, smart TV, washing machine, and more. With weekly cleaning, fresh linens, and optional AC units, we ensure a hassle-free living experience.",
          "For added convenience, we offer healthy meal plans crafted with no artificial ingredients, available in both ordinary and premium options. Our premium plan even allows customizations to suit your dietary preferences.",
          "At Heavenstone Residency, we prioritize your comfort and satisfaction. Book your stay today and experience a perfect blend of luxury and affordability!",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-brand-dark text-left md:text-center text-lg sm:text-xl leading-relaxed max-w-[90%] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3 + index * 0.2,
            }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      <Copywright color="text-brand-dark" />
    </div>
  );
}
