"use client";
import React from "react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import VideoModal from "./VideoModal";

import { IoCheckmark } from "react-icons/io5";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
  };
  const data = [
    "/images/stair.jpg",
    "/images/living_area.jpg",
    "/images/kitchen1.jpg",
    "/images/bedroom.jpg",
  ];

  const QuickHighlights = [
    "Fully furnished apartments",
    "High-speed 200Mbps WiFi",
    "Easy public transport access",
    "Pet friendly",
    "Laundry Services on Request",
    "Secure car parking",
    "Flexible stay options",
    "Gourmet dining plans",
    "Housekeeping",
    "On call doctor",
  ];

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <section className={` container mx-auto mt-10 xl:mt-20`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="heading">Experience Luxury Living in Every Stay</h1>
            <p key="hero-subtitle" className="sub-heading !text-lg">
              Welcome to Heavenstone Residency Kochi&rsquo;s premier destination
              for luxury, fully furnished rental apartments. Whether
              you&rsquo;re staying for a week or a month, our premium apartments
              deliver unmatched comfort and convenience, ensuring a home away
              from-home experience that exceeds your expectations.
            </p>
          </motion.div>

          <div className="mx-auto py-8 xl:py-12 ">
            <div className="gap-8 items-center grid grid-cols-1 xl:grid-cols-2 xl:gap-16">
              <motion.div
                key="hero-image"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/front.webp"
                  width={800}
                  height={480}
                  className="w-full aspect-[6/3] object-cover rounded-xl"
                  alt="Front view of the apartment"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
                key="hero-highlights"
                className="text-brand-dark sm:text-lg  flex flex-col justify-center items-center"
              >
                <h2 key="hero-highlights-title" className="heading-1">
                  Quick Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 text-brand-mid place-items-start gap-0 md:gap-4 md:place-items-center mb-3">
                  <motion.ul
                    key="hero-highlights-list-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                      },
                    }}
                  >
                    {QuickHighlights.slice(0, 5).map((highlight, index) => (
                      <motion.li
                        key={`quick-highlight-${index}`}
                        viewport={{ once: true }}
                        className="icon-list"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                          },
                        }}
                      >
                        <IoCheckmark className="text-brand-dark" />
                        {highlight}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.ul
                    key="hero-highlights-list-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                      },
                    }}
                  >
                    {QuickHighlights.slice(5, QuickHighlights.length).map(
                      (highlight, index) => (
                        <motion.li
                          key={`quick-highlight-${index}`}
                          className="icon-list"
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.6 },
                            },
                          }}
                        >
                          <IoCheckmark className="text-brand-dark" />
                          {highlight}
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </div>
                <VideoModal
                  videoSrc="images/intro_video.mp4"
                  label="Quick Overview"
                />
              </motion.div>
            </div>

            <div className="gap-0 xl:gap-4 items-center grid grid-cols-1 xl:grid-cols-2 mt-8 xl:mt-16 ">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
                key="hero-image-1"
                className="text-brand-dark sm:text-lg  flex flex-col justify-center items-center order-2 xl:order-1"
              >
                <h2 className="heading">
                  Premium Living in Vadutala, Kochi | Heavenstone Residency
                </h2>
                <p className="sub-heading !text-start leading-tight !text-lg">
                  Discover Heavenstone Residency in the heart of{" "}
                  <span className="font-semibold">Vadutala, Kochi</span> your
                  destination for luxurious, fully furnished apartments. Ideal
                  for{" "}
                  <span className="font-semibold">
                    corporate stays, workcations, staycation
                  </span>{" "}
                  or a serviced apartment experience, our property is designed
                  to be both family friendly and pet friendly. With key
                  landmarks such as{" "}
                  <span className="font-semibold">
                    Aster Medcity, North Railway Station, the High Court, and
                    Marine Drive
                  </span>{" "}
                  within a 3 km radius and{" "}
                  <span className="font-semibold">Lourdes Hospital</span>
                  {""} just 1 km away enjoy the perfect blend of upscale living
                  and convenience.
                </p>
                <VideoModal
                  label="Promo Video"
                  videoSrc="Assets/promo_video.mp4"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="gap-4 order-2 hidden xl:flex justify-center"
              >
                <motion.div
                  className="relative top-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        staggerChildren: 0.2,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <motion.div
                    key="hero-image-top-left"
                    className="h-[220px] w-[290px] sm:h-[180px] sm:w-[240px] xs:h-[150px] xs:w-[200px] mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 1 * 0.2,
                    }}
                  >
                    <Image
                      src="/images/stair.jpg"
                      width={290}
                      height={220}
                      className="w-full aspect-[4/3] object-cover rounded-xl"
                      alt="Bedroom feature image"
                    />
                  </motion.div>

                  <motion.div
                    key="hero-image-bottom-left"
                    className="h-[220px] w-[290px] sm:h-[180px] sm:w-[240px] xs:h-[150px] xs:w-[200px] mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 2 * 0.2,
                    }}
                  >
                    <Image
                      src="/images/living_area.jpg"
                      width={290}
                      height={220}
                      className="w-full aspect-[4/3] object-cover rounded-xl"
                      alt="Bedroom feature image"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative bottom-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        staggerChildren: 0.2,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <motion.div
                    key="hero-image-top-right"
                    className="h-[220px] w-[290px] sm:h-[180px] sm:w-[240px] xs:h-[150px] xs:w-[200px] mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 1 * 0.2,
                    }}
                  >
                    <Image
                      src="/images/balcony2.webp"
                      width={290}
                      height={220}
                      className="object-cover h-full w-full rounded-xl"
                      alt="Balcony feature image"
                    />
                  </motion.div>

                  <motion.div
                    key="hero-image-bottom-right"
                    className="h-[220px] w-[290px] sm:h-[180px] sm:w-[240px] xs:h-[150px] xs:w-[200px] mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 2 * 0.2,
                    }}
                  >
                    <Image
                      src="/images/kitchen1.jpg"
                      width={290}
                      height={220}
                      className="object-cover h-full w-full rounded-xl"
                      alt="Bathroom feature image"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <div className="container m-auto mb-14 xl:hidden order-1 xl:order-3">
                <div className="">
                  <Slider {...settings}>
                    {data.map((img, index) => {
                      return (
                        <div
                          key={`carousel-slide-${index}`}
                          className="bg-white h-auto text-black rounded-xl "
                        >
                          <Image
                            src={img}
                            width={800}
                            height={600}
                            alt={`${index}-carousel`}
                            loading={index === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            quality={80}
                            className="rounded-xl w-full aspect-[4/3] object-cover"
                          />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </LazyMotion>
  );
}
