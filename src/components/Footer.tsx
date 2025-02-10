"use client";

import { sendContactForm } from "../lib/api";
import { Icon } from "@iconify/react";
import { Spinner } from "flowbite-react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import React, { useState } from "react";
import Copywright from "./Copywright";

const initValues = {
  name: "",
  phone_number: "",
  email: "",
  role: "",
  country_code: "+91",
};

export default function Footer() {
  const [state, setState] = useState({ values: initValues });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { values } = state;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    if (!values.name || !values.email || !values.role || !values.phone_number) {
      alert("Please fill in all fields");
      return;
    }

    const phoneNumber = values.phone_number.trim();
    const phoneAsNumber = Number(phoneNumber);

    if (!phoneNumber || isNaN(phoneAsNumber) || phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setLoading(true);

    const response = await sendContactForm(values);

    if (response.success) {
      setMessage(response.message);
      setState({ values: initValues });
    }
    setLoading(false);
  };

  const countryCodes = [
    { code: "+1", label: "🇺🇸 US" },
    { code: "+44", label: "🇬🇧 UK" },
    { code: "+91", label: "🇮🇳 India" },
    { code: "+61", label: "🇦🇺 Australia" },
    { code: "+81", label: "🇯🇵 Japan" },
  ];

  const socialMediaLinks = [
    {
      icon: "akar-icons:facebook-fill",
      url: "https://www.facebook.com/people/Heavenstone-Residency/61560117024575",
    },
    // { icon: "akar-icons:twitter-fill", url: "https://twitter.com/yourprofile" },
    // {
    //   icon: "akar-icons:instagram-fill",
    //   url: "https://instagram.com/yourprofile",
    // },
    // {
    //   icon: "akar-icons:linkedin-fill",
    //   url: "https://linkedin.com/in/yourprofile",
    // },
    {
      icon: "hugeicons:airbnb",
      url: "https://www.airbnb.co.in/rooms/1154626879906290509?viralityEntryPoint=1&s=76&source_impression_id=p3_1739118285_P38xu2Kd_oy4YJAa",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <footer className="bg-brand-dark antialiased w-full overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="border-b border-brand-light py-6 md:py-8 lg:py-16"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-center h-full w-full">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 space-y-4 text-brand-light order-2 lg:order-1 text-sm md:text-base lg:text-lg"
                >
                  <div className="space-y-0.5 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl tracking-tight font-extrabold text-center lg:text-left">
                      HEAVENSTONE RESIDENCY
                    </h2>
                    <p className="font-semibold">
                      Heavenstone Ln, Vaduthala, Kochi, Kerala 682012, India
                    </p>
                    <p className="font-semibold pb-2 hover:!text-blue-600  transition-colors duration-300">
                      <a href="tel:+919447959544">+91 9447959544</a>
                    </p>
                    <div className="text-center bg-brand-mid rounded-xl h-full w-full xl:w-1/2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1964.5139398659078!2d76.27657742635897!3d10.014555691029862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d7f3ab63f65%3A0xd7063caa9c3ca6ff!2sHeavenstone%20Ln%2C%20Vaduthala%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682012!5e0!3m2!1sen!2sin!4v1738788422988!5m2!1sen!2sin"
                        loading="lazy"
                        className="rounded-xl text-center w-full h-full"
                      ></iframe>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-5 w-full justify-center lg:justify-start">
                    <p className="text-brand-light">Hours : </p>

                    <p className="text-brand-light">
                      09:00 am - 05:00 pm ( sat , sun closed )
                    </p>
                  </div>

                  <div className="pt-10 text-brand-light text-center lg:text-left text-lg lg:text-xl">
                    <p>Better yet, see us in person!</p>
                    <p>
                      We love our customers, so feel free to visit during normal
                      business hours.
                    </p>
                    <div className=" mt-2 text-brand-light text-xl">
                      <div className="flex justify-center lg:justify-start gap-3 pt-4">
                        {socialMediaLinks.map(({ icon, url }) => (
                          <motion.a
                            key={icon}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-light hover:text-primary-500 transition-all duration-300"
                          >
                            <Icon icon={icon} width={24} height={24} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg order-1 lg:order-2"
                >
                  <div className="space-y-5 rounded-lg border border-brand-light p-6">
                    <p className="text-3xl text-center font-medium text-brand-light">
                      Get in Touch
                    </p>

                    <hr className="border-brand-light" />

                    {message && (
                      <div className="flex justify-center items-center gap-2 text-xl font-semibold text-center text-brand-light">
                        <p>{message}</p>
                        <Icon
                          icon="teenyicons:tick-circle-outline"
                          width="18"
                          height="18"
                        />
                      </div>
                    )}

                    <form
                      action="#"
                      onSubmit={handleSubmit}
                      className="space-y-4 text-brand-light "
                    >
                      <motion.div
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor=""
                          className="flex items-center gap-1 text-brand-light"
                        >
                          Name <Icon icon="mdi:required" />
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-full bg-brand-dark border-b border-brand-light  rounded-lg p-2 placeholder:text-brand-light/60"
                          placeholder="Enter your first name"
                          value={values.name}
                          onChange={handleChange}
                          required
                        />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor=""
                          className="flex items-center gap-1 text-brand-light"
                        >
                          Email
                          <Icon icon="mdi:required" />
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="w-full bg-brand-dark border-b border-brand-light  rounded-lg p-2 placeholder:text-brand-light/60"
                          placeholder="Enter your first name"
                          value={values.email}
                          onChange={handleChange}
                          required
                        />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="role"
                          className="flex items-center gap-1 text-brand-light"
                        >
                          Role <Icon icon="mdi:required" />
                        </label>
                        <select
                          name="role"
                          className="w-full bg-brand-dark border-b border-brand-light rounded-lg p-2 text-brand-light appearance-none relative pr-10 cursor-pointer focus:outline-none focus:ring-0 "
                          value={values.role}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled className="text-gray-400">
                            Select your role
                          </option>
                          <option
                            value="agent"
                            className="bg-brand-mid text-brand-light hover:bg-primary-500"
                          >
                            Agent
                          </option>
                          <option
                            value="client"
                            className="bg-brand-mid text-brand-light hover:bg-primary-500"
                          >
                            Client
                          </option>
                        </select>
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <label
                          htmlFor="phone_number"
                          className="flex items-center gap-1 text-brand-light"
                        >
                          Phone Number <Icon icon="mdi:required" />
                        </label>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                          <div className="relative">
                            <select
                              name="country_code"
                              className="bg-brand-dark border-b border-brand-light rounded-lg p-2 text-brand-light"
                              value={values.country_code}
                              onChange={handleChange}
                            >
                              {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                  {country.label} {country.code}
                                </option>
                              ))}
                            </select>
                          </div>

                          <input
                            type="text"
                            name="phone_number"
                            maxLength={10}
                            className="w-full bg-brand-dark border-b border-brand-light rounded-lg p-2 placeholder:text-brand-light/60"
                            placeholder="Enter your phone number"
                            value={values.phone_number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {loading && (
                          <button
                            type="submit"
                            disabled={loading}
                            className="bg-brand-light text-brand-dark hover:text-brand-light hover:bg-brand-mid transition-colors duration-500 ease-in-out py-3 px-8 text-base font-medium text-center  rounded-lg "
                          >
                            <Spinner
                              aria-label="Spinner button example"
                              size="sm"
                            />
                            <span className="pl-3">Sending...</span>
                          </button>
                        )}

                        {!loading && (
                          <button
                            disabled={message.length > 0}
                            type="submit"
                            className="bg-brand-light text-brand-dark hover:text-brand-light hover:bg-brand-mid transition-colors duration-500 ease-in-out py-3 px-8 text-base font-medium text-center  rounded-lg "
                          >
                            Submit
                          </button>
                        )}
                      </motion.div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <Copywright color="text-brand-light" />
          </div>
        </footer>
      </AnimatePresence>
    </LazyMotion>
  );
}
