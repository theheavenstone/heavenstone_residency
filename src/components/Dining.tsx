"use client";

import React from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

import { IoCheckmark } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

export default function Dining() {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <div
          id="dining"
          className="py-10 h-auto bg-[#c4b6933a] w-full overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="container mx-auto pb-10 space-y-4"
          >
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">
              Curated Dining Experience
            </h2>

            <p key="dining-description" className="sub-heading text-center">
              Indulge in a culinary journey that combines flavor, nutrition, and
              care. Whether you prefer wholesome home-style meals or a gourmet
              dining experience, we have a plan tailored to your tastes and
              preferences.
            </p>
          </motion.div>

          <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Ordinary Plan",
                description:
                  "Perfect for those who appreciate simple, wholesome meals made with love.",
                price: "₹300 per person/day",
                features: [
                  "Wholesome home-style meals",
                  "Fresh, natural ingredients sourced locally",
                  "No artificial additives or preservatives",
                  "Balanced nutrition for a healthy lifestyle",
                  "Daily menu variety to keep your meals exciting",
                ],
              },
              {
                title: "Premium Plan",
                description:
                  "Elevate your dining experience with our gourmet offerings, crafted to delight your palate.",
                price: "₹600 per person/day",
                features: [
                  "Gourmet dining experience with chef-curated dishes",
                  "Premium ingredients including fresh seer fish, boneless chicken, and exotic vegetables",
                  "No artificial additives or preservatives",
                  "Customizable menu options to suit your preferences",
                  "Special diet accommodations (vegetarian, gluten-free, etc.)",
                  "Personalized meal planning for a tailored experience",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="bg-brand-light/55 rounded-xl h-auto p-5 space-y-4"
              >
                <div className="flex flex-col p-6 mx-auto text-brand-dark">
                  <h2 className="mb-1.5 text-[30px] md:text-3xl text-center font-extrabold">
                    {plan.title}
                  </h2>
                  <p className="font-medium text-center text-base sm:text-lg">
                    {plan.description}
                  </p>
                  <p className="text-3xl font-extrabold text-center mb-5 mt-5 bg-brand-mid/95 p-2 rounded-lg text-brand-light">
                    {plan.price}
                  </p>

                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2,
                          ease: "easeInOut",
                          duration: 0.6,
                        },
                      },
                    }}
                    viewport={{ once: true }}
                    className="text-brand-dark font-semibold text-sm md:text-base xl:text-lg space-y-2"
                  >
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 },
                          },
                        }}
                        className="flex items-center gap-2 text-base"
                      >
                        <IoCheckmark className="text-brand-dark" />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="container text-center mx-auto mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-1">Our Food Philosophy</h3>

              <p key="food-philosophy-description" className="sub-heading">
                At <b>Heavenstone Residency</b>, we believe that food is more
                than just sustenance—it’s an experience that nourishes both body
                and soul.
              </p>
            </motion.div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    ease: "easeInOut",
                    duration: 0.6,
                  },
                },
              }}
              viewport={{ once: true }}
              className="text-left space-y-2 mt-6 text-brand-dark text-sm md:text-base xl:text-lg"
            >
              {[
                "Fresh & Natural: We use only the finest, locally sourced ingredients, free from artificial additives.",
                "Thoughtful Preparation: Every meal is crafted with care, ensuring a balance of flavor and nutrition.",
                "Sustainability: We prioritize eco-friendly practices to minimize our environmental impact.",
                "Health & Wellness: Our meals are designed to support your well-being, whether you’re here for relaxation or adventure.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="flex gap-1 items-center text-lg"
                >
                  <GoDotFill className="text-brand-dark" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
