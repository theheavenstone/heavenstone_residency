"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  const data = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
    "/images/gallery-11.jpg",
    "/images/gallery-12.jpg",
    "/images/gallery-13.jpg",
    "/images/gallery-14.jpg",
    "/images/gallery-15.jpg",
    "/images/gallery-16.jpg",
    "/images/gallery-17.jpg",
  ];

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <div
          id="gallery"
          className="container m-auto pt-20 xl:pb-8 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="container mx-auto pb-10 space-y-4"
          >
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">
              Discover Your Ideal Home – A Glimpse Inside
            </h1>

            <p key="gallery-description" className="sub-heading text-center">
              Take a look inside our thoughtfully designed apartments, offering
              comfort, style, and modern amenities. Whether you seek a cozy
              retreat or a spacious home, our gallery gives you a preview of
              what awaits.
            </p>
          </motion.div>
          <div className="py-10">
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      quality={80}
                      priority={true}
                      className="rounded-xl w-full aspect-[4/3] object-cover"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
