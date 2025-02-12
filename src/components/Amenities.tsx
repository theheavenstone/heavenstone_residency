"use client";

import { Icon } from "@iconify/react";
import React from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

export default function Amenities() {
  const amenities = [
    {
      title: "Entertainment",
      icon: "material-symbols:smart-toy",
      features: [
        { icon: "material-symbols:tv-outline", text: "Full HD Smart TV" },
        {
          icon: "material-symbols:wifi-rounded",
          text: "High-speed 200Mbps WiFi",
        },
        { icon: "mdi:sofa-outline", text: "Comfortable sofa seating" },
        {
          icon: "material-symbols:dining-outline-rounded",
          text: "Modern dining area",
        },
      ],
    },
    {
      title: "Kitchen",
      icon: "cbi:kitchen",
      features: [
        { icon: "cbi:kitchen-alt", text: "Fully equipped modern kitchen" },
        {
          icon: "fa6-solid:kitchen-set",
          text: "Quality cookware and utensils",
        },
        {
          icon: "material-symbols:kitchen-outline",
          text: "Premium refrigerator",
        },
        { icon: "hugeicons:gas-stove", text: "Electric stove" },
      ],
    },
    {
      title: "Essential Comforts",
      icon: "material-symbols:smart-toy",
      features: [
        {
          icon: "mingcute:air-condition-line",
          text: "Air conditioning (in AC units)",
        },
        { icon: "ep:hot-water", text: "Hot water system" },
        { icon: "iconoir:balcony", text: "Private balcony" },
        { icon: "hugeicons:clean", text: "Weekly housekeeping service" },
      ],
    },
    {
      title: "Additional Conveniences",
      icon: "material-symbols:smart-toy",
      features: [
        { icon: "emojione-monotone:bed", text: "Fresh bedsheet change" },
        { icon: "mdi:washing-machine", text: "Washing machine access" },
        { icon: "material-symbols:iron-outline", text: "Iron box available" },
        {
          icon: "material-symbols:laundry-outline",
          text: "Laundry service (on request)",
        },
      ],
    },
  ];
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <section className="container relative w-full h-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-brand-dark text-center mt-16"
          >
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold">
              Premium Amenities for a Luxurious Stay
            </h1>

            <p key="amenities-description" className="sub-heading">
              Experience comfort, convenience, and modern living at its finest.
            </p>
          </motion.div>

          <div className="relative w-full h-full">
            <div className="py-8 px-4 sm:py-16 lg:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                      ease: "easeInOut",
                      duration: 1,
                    },
                  },
                }}
                viewport={{ once: true }}
                className="space-y-8 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 xl:gap-12 md:space-y-0"
              >
                {amenities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: index * 0.2 },
                      },
                    }}
                    className="bg-brand-light/55 backdrop-blur-lg rounded-xl p-5"
                  >
                    <div className="flex justify-center items-center mb-4 bg-primary-100 rounded dark:bg-primary-900">
                      <Icon
                        icon={item.icon}
                        className="w-5 h-5 text-brand-dark lg:w-8 lg:h-8"
                      />
                    </div>
                    <h2 className="mb-2 text-xl text-center font-bold text-brand-dark">
                      {item.title}
                    </h2>

                    <ul className="text-brand-dark my-6 space-y-4">
                      {item.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.6, delay: i * 0.1 },
                            },
                          }}
                          className="flex items-center gap-1 justify-start"
                        >
                          <Icon
                            icon={feature.icon}
                            className="text-primary-500"
                          />
                          {feature.text}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </LazyMotion>
  );
}
