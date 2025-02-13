"use client";

import React from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import { MdSmartToy } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { MdLocalDining } from "react-icons/md";

import { FaKitchenSet } from "react-icons/fa6";
import { GiCookingPot } from "react-icons/gi";
import { LuCookingPot } from "react-icons/lu";
import { BiSolidFridge } from "react-icons/bi";
import { GiGasStove } from "react-icons/gi";

import { TbAirConditioning } from "react-icons/tb";
import { FaShower } from "react-icons/fa6";
import { MdOutlineBalcony } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

import { FaBed } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { MdIron } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";

export default function Amenities() {
  const amenities = [
    {
      title: "Entertainment",
      icon: <MdSmartToy size={30} className="text-brand-dark" />,
      features: [
        {
          icon: <FaWifi size={20} className="text-brand-dark" />,
          text: "Full HD Smart TV",
        },
        {
          icon: <FaTv size={20} className="text-brand-dark" />,
          text: "High-speed 200Mbps WiFi",
        },
        {
          icon: <GiSofa size={20} className="text-brand-dark" />,
          text: "Comfortable sofa seating",
        },
        {
          icon: <MdLocalDining size={20} className="text-brand-dark" />,
          text: "Modern dining area",
        },
      ],
    },
    {
      title: "Kitchen",
      icon: <FaKitchenSet size={20} className="text-brand-dark" />,
      features: [
        {
          icon: <GiCookingPot size={20} className="text-brand-dark" />,
          text: "Fully equipped  kitchen",
        },
        {
          icon: <LuCookingPot size={20} className="text-brand-dark" />,
          text: "Quality cookware and utensils",
        },
        {
          icon: <BiSolidFridge size={20} className="text-brand-dark" />,
          text: "Premium refrigerator",
        },
        {
          icon: <GiGasStove size={20} className="text-brand-dark" />,
          text: "Electric stove",
        },
      ],
    },
    {
      title: "Essential Comforts",
      icon: <MdSmartToy size={20} className="text-brand-dark" />,
      features: [
        {
          icon: <TbAirConditioning size={20} className="text-brand-dark" />,
          text: "Air conditioning (in AC units)",
        },
        {
          icon: <FaShower size={20} className="text-brand-dark" />,
          text: "Hot water system",
        },
        {
          icon: <MdOutlineBalcony size={20} className="text-brand-dark" />,
          text: "Private balcony",
        },
        {
          icon: <GiVacuumCleaner size={20} className="text-brand-dark" />,
          text: "Weekly housekeeping service",
        },
      ],
    },
    {
      title: "Additional Conveniences",
      icon: <MdSmartToy size={20} className="text-brand-dark" />,
      features: [
        {
          icon: <FaBed size={20} className="text-brand-dark" />,
          text: "Fresh bedsheet change",
        },
        {
          icon: <GiWashingMachine size={20} className="text-brand-dark" />,
          text: "Washing machine access",
        },
        {
          icon: <MdIron size={20} className="text-brand-dark" />,
          text: "Iron box available",
        },
        {
          icon: <MdLocalLaundryService size={20} className="text-brand-dark" />,
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
                    <div className="flex justify-center items-center mb-4 bg-primary-100 rounded">
                      {item.icon}
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
                          {feature.icon}
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
