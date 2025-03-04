"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Tourism() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="container min-h-screen flex flex-col justify-center items-center px-4 pt-24 md:pt-32"
      >
        <motion.header
          variants={fadeIn}
          className="text-start md:text-center pt-10 px-6  text-brand-dark"
        >
          <h1 className="text-4xl font-bold md:text-5xl">
            Explore the Best of Kochi with Heavenstone
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover Kochi: A Blend of Heritage, Culture, and Scenic Beauty
          </p>
        </motion.header>

        <motion.p
          variants={fadeIn}
          className="mt-4 text-xl text-brand-dark text-start md:text-center"
        >
          At <strong>Heavenstone</strong>, we cater to all your travel needs,
          ensuring a seamless and memorable experience. We provide end-to-end
          cab services, customized travel planning, and sightseeing tours.
          Whether you&apos;re exploring Kerala&apos;s scenic beauty or need
          assistance with itinerary planning, we&apos;ve got you covered for a
          hassle-free and enriching journey.
        </motion.p>

        <motion.main className="container mx-auto px-6 pt-10">
          <motion.section variants={fadeIn} className="mb-12">
            <p className="text-lg text-brand-dark">
              Kochi, often referred to as the{" "}
              <strong className="text-brand-dark">
                Queen of the Arabian Sea
              </strong>
              , is a mesmerizing destination where history meets modernity.
              Whether you&apos;re a history enthusiast, a nature lover, or
              someone who enjoys vibrant city life, Kochi offers something for
              everyone.
            </p>
          </motion.section>

          <motion.section variants={fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-brand-dark">
              🌊 Top Attractions in Kochi
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Fort Kochi – Where History Comes Alive",
                  description:
                    "Walk through the charming streets of Fort Kochi, known for its colonial-era buildings, vibrant street art, and Chinese fishing nets.",
                  image: "/images/tourism/fortkochi.jpg",
                },
                {
                  title: "Marine Drive – A Scenic Waterfront Walk",
                  description:
                    "Enjoy a relaxing evening at Marine Drive, a picturesque promenade along the backwaters.",
                  image: "/images/tourism/kochi_marine.jpg",
                },
                {
                  title: "Jew Town & Paradesi Synagogue – A Cultural Gem",
                  description:
                    "Step into history at Jew Town, home to the Paradesi Synagogue, the oldest active synagogue in the Commonwealth.",
                  image: "/images/tourism/Jew_Town.jpg",
                },
                {
                  title: "Cherai Beach – A Perfect Getaway",
                  description:
                    "Just a short drive from Heavenstone Residency, Cherai Beach offers golden sands and tranquil backwaters.",
                  image: "/images/tourism/cherai_beach.jpg",
                },
                {
                  title:
                    "Kerala Kathakali Centre &ndash; A Dive into Performing Arts",
                  description:
                    "Witness the vibrant Kathakali dance-drama at the renowned Kerala Kathakali Centre.",
                  image: "/images/tourism/kathakali.jpg",
                },
                {
                  title: "Boating in the Backwaters – A Tranquil Escape",
                  description:
                    "Experience the serene beauty of Kerala’s backwaters with a traditional houseboat cruise.",
                  image: "/images/tourism/boating.jpg",
                },
              ].map((place, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-xl overflow-hidden"
                >
                  <Image
                    width={400}
                    height={300}
                    priority
                    src={place.image}
                    alt={place.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-brand-dark">
                      {place.title}
                    </h3>
                    <p className="mt-2 text-brand-dark">{place.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-brand-dark">
              🛍️ Shopping & Dining in Kochi
            </h2>
            <motion.ul className="mt-6 space-y-3 list-disc list-inside text-brand-dark text-lg">
              {[
                "Lulu Mall – One of India's largest malls with international brands.",
                "Broadway Market – A paradise for spice lovers and handicrafts.",
                "Princess Street – Cafés, boutiques, and a perfect evening stroll.",
                "Seafood Delicacies – Relish Kochi’s famous fresh seafood.",
              ].map((item, index) => (
                <motion.li key={index} variants={slideUp}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section variants={fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-brand-dark">
              🌿 Plan Your Stay with Heavenstone
            </h2>
            <p className="mt-4 text-lg text-brand-dark text-start md:text-center">
              Located in the heart of Kochi, <strong>Heavenstone</strong> offers
              luxurious fully-furnished apartments that serve as a perfect base
              for exploring the city. Whether you’re visiting for a short
              getaway or an extended stay, we ensure a comfortable and enriching
              experience.
            </p>
            <motion.div className="mt-6 flex flex-col lg:flex-row justify-center space-y-4 lg:space-x-6 lg:space-y-0">
              {[
                "Prime Location - Easy access to major tourist spots.",
                "Modern Amenities - Spacious apartments with premium comforts.",
                "Local Assistance - Our team helps with tours and transportation.",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-lg shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-brand-dark">
                    {feature.split(" - ")[0]}
                  </h3>
                  <p className="text-brand-dark">{feature.split(" - ")[1]}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </motion.main>
      </motion.div>
      <section className="text-start px-5 md:text-center py-12 bg-brand-light rounded-lg">
        <h2 className="text-3xl font-bold text-brand-dark">
          📌 Book Your Stay & Experience Kochi Like Never Before!
        </h2>
        <p className="mt-4 text-lg text-brand-dark">
          Make your trip to Kochi unforgettable with a stay at Heavenstone
          Residency.
        </p>
        <p className="mt-4 text-brand-dark">
          📍 <strong>Location:</strong> Heavenstone Ln, Vaduthala, Kochi, Kerala
          682012, India
        </p>
        <p className="mt-2 text-brand-dark">
          📞 <strong>Call Us:</strong>{" "}
          <a href="tel:+919447959544">+91 9447959544</a>
        </p>
        <p className="mt-2 text-brand-dark">
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:theheavenstone@gmail.com">theheavenstone@gmail.com</a>
        </p>
      </section>
    </div>
  );
}
