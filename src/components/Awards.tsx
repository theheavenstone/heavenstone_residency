"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoRibbonOutline } from "react-icons/io5";

export default function Awards() {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <div className="container h-full flex flex-col justify-center items-center py-16 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-[22px] md:text-3xl lg:text-4xl font-bold text-brand-dark">
              Our Achievements & Awards 🏆
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            <motion.div
              className="bg-[#c4b6933a] shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <IoRibbonOutline size={60} className="text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-brand-dark">
                Airbnb Superhost
              </h3>
              <p className="text-brand-dark text-lg mt-2">
                Recognized for delivering exceptional hospitality and a{" "}
                <strong>5-star</strong> guest experience.
              </p>
              <div className="flex justify-center mt-6">
                <Link
                  href="https://www.airbnb.co.in/rooms/1154626879906290509?viralityEntryPoint=1&s=76&source_impression_id=p3_1739118285_P38xu2Kd_oy4YJAa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark text-brand-light hover:text-brand-dark hover:bg-brand-light transition-colors duration-500 ease-in-out text-base md:text-lg px-6 py-2 rounded-lg  font-semibold  flex items-center gap-2 shadow-md"
                >
                  Book Now Through Airbnb
                  <FaArrowRightLong className="text-brand-light " />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#c4b6933a] shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <IoRibbonOutline size={60} className="text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-brand-dark">
                Best 5-Star Rated Stay
              </h3>
              <p className="text-brand-dark text-lg mt-2">
                Consistently rated 5 stars by our guests for luxury,
                cleanliness, and comfort.
              </p>
              <div className="flex justify-center mt-6">
                <Link
                  href="tel:+919447959544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark text-brand-light hover:text-brand-dark hover:bg-brand-light transition-colors duration-500 ease-in-out text-base md:text-lg px-6 py-2 rounded-lg  font-semibold  flex items-center gap-2 shadow-md"
                >
                  Direct Booking
                  <FaArrowRightLong className="text-brand-light " />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
