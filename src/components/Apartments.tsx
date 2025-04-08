"use client";

import React from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

import { TbAirConditioning } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

export default function ApartmentsPage() {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <div
          id="apartments"
          className={`py-10 h-auto bg-[#c4b6933a] w-full overflow-hidden`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="container mx-auto pb-10 space-y-4"
          >
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">
              Our Living Spaces
            </h2>

            <p key="apartment-description" className="sub-heading text-center">
              Choose from our carefully crafted 1BHK and 2BHK apartments,
              available in both AC and non-AC options to suit your preferences.
            </p>
          </motion.div>

          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              key="1bhk-apartment"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-brand-light/55 rounded-xl h-auto p-5"
            >
              <div className="flex flex-col p-6 mx-auto text-brand-dark space-y-4">
                <div>
                  <h3 className="mb-1.5 text-[30px] md:text-3xl text-center font-extrabold">
                    1BHK Premium Apartment
                  </h3>
                  <p className="font-medium text-center text-base sm:text-lg">
                    Perfect for solo travelers or couples
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { type: "AC", price: "₹2,500/day" },
                    { type: "Non-AC", price: "₹1,500/day" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-brand-mid/95 p-2 rounded-lg text-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      <p className="flex justify-center items-center gap-1 font-bold text-brand-light">
                        {item.type === "AC" ? (
                          <TbAirConditioning className="text-brand-light" />
                        ) : (
                          <IoHomeOutline className="text-brand-light" />
                        )}{" "}
                        {item.type}
                      </p>
                      <p className="font-bold text-brand-light text-center">
                        {item.price}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <ul className="text-brand-dark font-semibold text-sm md:text-base xl:text-lg">
                  {[
                    "Ideal mix of comfort and functionality",
                    "Fully furnished with modern amenities",
                    "High-speed Wi-Fi connectivity",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      <IoCheckmark className="text-brand-dark" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <p className="text-brand-dark text-left font-semibold">
                  All rates inclusive of amenities
                </p>
              </div>
            </motion.div>

            <motion.div
              key="2bhk-apartment"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-brand-light/55 rounded-xl h-auto p-5"
            >
              <div className="flex flex-col p-6 mx-auto text-brand-dark space-y-4">
                <div>
                  <h3 className="mb-1.5 text-[30px] md:text-3xl text-center font-extrabold">
                    2BHK Luxury Apartment
                  </h3>
                  <p className="font-medium text-center text-base sm:text-lg">
                    Spacious living for families or groups
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { type: "AC", price: "₹4,000/day" },
                    { type: "Non-AC", price: "₹3,000/day" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-brand-mid/95 p-2 rounded-lg text-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      <p className="flex justify-center items-center gap-1 font-bold text-brand-light">
                        {item.type === "AC" ? (
                          <TbAirConditioning className="text-brand-light" />
                        ) : (
                          <IoHomeOutline className="text-brand-light" />
                        )}{" "}
                        {item.type}
                      </p>
                      <p className="font-bold text-brand-light text-center">
                        {item.price}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <ul className="text-brand-dark font-semibold text-sm md:text-base xl:text-lg">
                  {[
                    "Enhanced comfort with additional amenities",
                    "Separate living and dining areas",
                    "Premium furnishings throughout",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      <IoCheckmark className="text-brand-dark" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <p className="text-brand-dark text-left font-semibold">
                  All rates inclusive of amenities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
