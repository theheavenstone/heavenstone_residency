"use client";

import { sendContactForm } from "../lib/api";
import { Spinner } from "flowbite-react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import React, { useState } from "react";
import Copywright from "./Copywright";

import { FaFacebookF } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";
import { FaStarOfLife } from "react-icons/fa";
// @ts-ignore
import { FaInstagram } from "react-icons/fa";

const initValues = {
  name: "",
  role: "",
  contact: "",
  message: "I'm interested in renting this apartment.",
};

export default function Footer() {
  const [state, setState] = useState({ values: initValues });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const { values } = state;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value.trim(),
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const { name, contact, role } = values;

    if (!name || !contact || !role) {
      alert("Please fill in all required fields.");
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[0-9]{10}$/.test(contact);

    if (!isEmail && !isPhone) {
      alert("Please enter a valid email address or 10-digit phone number.");
      return;
    }

    setLoading(true);

    const response = await sendContactForm(values);

    if (response.success) {
      setStatus(response.message);
      setState({ values: initValues });
    }
    setLoading(false);
  };

  const socialMediaLinks = [
    {
      icon: <FaFacebookF className="text-2xl" />,
      url: "https://www.facebook.com/people/Heavenstone-Residency/61560117024575",
      name: "Facebook",
    },
    // {
    //   icon: <FaInstagram className="text-2xl" />,
    //   url: "https://instagram.com/yourprofile",
    //   name: "Instagram",
    // },
    {
      icon: <FaAirbnb className="text-2xl" />,
      url: "https://www.airbnb.co.in/users/show/577066250",
      name: "Airbnb",
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
                        title="apartment location"
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
                        {socialMediaLinks.map(({ icon, url, name }) => (
                          <motion.a
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-light hover:text-primary-500 transition-all duration-300"
                            aria-label={`Visit our ${name} page`}
                          >
                            <span className="sr-only">{name}</span>
                            {icon}
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

                    {status && (
                      <div className="flex justify-center items-center gap-2 text-xl font-semibold text-center text-brand-light">
                        <p>{status}</p>

                        <GoCheckCircle className="text-brand-dark" />
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
                          Name <FaStarOfLife size={8} />
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-full bg-brand-dark border-b border-brand-light  rounded-lg p-2 placeholder:text-brand-light/60"
                          placeholder="Enter your full name"
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
                          htmlFor="role"
                          className="flex items-center gap-1 text-brand-light"
                        >
                          Role <FaStarOfLife size={8} />
                        </label>
                        <select
                          id="role"
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
                            value="Agent"
                            className="bg-brand-mid text-brand-light hover:bg-primary-500"
                          >
                            Agent
                          </option>
                          <option
                            value="Client"
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
                          Email or Phone Number <FaStarOfLife size={8} />
                        </label>

                        <input
                          type="text"
                          name="contact"
                          className="w-full bg-brand-dark border-b border-brand-light rounded-lg p-2 placeholder:text-brand-light/60"
                          placeholder="Enter your email or phone number"
                          value={values.contact}
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
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="w-full bg-brand-dark border-b border-brand-light  rounded-lg p-2 placeholder:text-brand-light/60"
                          placeholder="Enter your first name"
                          value={values.message}
                          onChange={handleChange}
                        />
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
                            disabled={status.length > 0}
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
