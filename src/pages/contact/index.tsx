"use client";
import Copywright from "@/components/Copywright";
import { sendContactForm } from "../../lib/api";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Spinner } from "flowbite-react";
import React, { useState } from "react";

const initValues = {
  name: "",
  role: "",
  contact: "",
  message: "I'm interested in renting this apartment.",
};

export default function Contact() {
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
    <section className="w-full flex flex-col mt-10">
      <div className="container mx-auto flex flex-col justify-center items-center py-10 px-6 lg:py-16 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center">
          Contact Us
        </h2>
        <p className="text-brand-dark text-center mt-2 text-lg">
          Get in touch with us for apartment bookings and inquiries.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full mt-8">
          <div className="space-y-4 text-brand-dark  text-sm md:text-base lg:text-lg w-full">
            <div className="space-y-0.5 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl tracking-tight font-extrabold text-center lg:text-left">
                HEAVENSTONE RESIDENCY
              </h2>
              <p className="font-semibold">
                Heavenstone Ln, Vaduthala, Kochi, Kerala 682012, India
              </p>
              <p className="font-semibold pb-2">
                <a href="tel:+919447959544">+91 9447959544</a>
              </p>
              <div className="text-center bg-[#EEEE] rounded-xl h-full w-full xl:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1964.5139398659078!2d76.27657742635897!3d10.014555691029862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d7f3ab63f65%3A0xd7063caa9c3ca6ff!2sHeavenstone%20Ln%2C%20Vaduthala%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682012!5e0!3m2!1sen!2sin!4v1738788422988!5m2!1sen!2sin"
                  loading="lazy"
                  className="rounded-xl text-center w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="inline-flex items-center gap-5 w-full justify-center lg:justify-start">
              <p className="text-brand-dark">Hours :</p>
              <p className="text-brand-dark">
                {" "}
                09:00 am - 05:00 pm ( sat, sun closed)
              </p>
            </div>

            <div className="pt-10 text-brand-dark text-center lg:text-left text-lg lg:text-xl">
              <p>Better yet, see us in person!</p>
              <p>
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              <div className=" mt-2 text-brand-dark text-xl">
                <div className="flex justify-center lg:justify-start gap-3 pt-4">
                  {socialMediaLinks.map(({ icon, url }) => (
                    <a
                      key={icon}
                      href={url}
                      target="_blank"
                      className="text-brand-dark hover:text-brand-light transition-all duration-300"
                    >
                      <Icon icon={icon} width={24} height={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 rounded-lg border border-brand-mid p-2 md:p-6 w-full md:w-1/2">
            <p className="text-3xl text-center font-medium text-brand-dark">
              Get in Touch
            </p>

            <hr className="border-brand-dark" />
            {status && (
              <div className="flex justify-center items-center gap-2 text-xl font-semibold text-center text-brand-dark">
                <p>{status}</p>
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
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-brand-dark"
                >
                  Name <Icon icon="mdi:required" />
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full  border-b border-brand-mid  rounded-lg p-2 placeholder:text-brand-dark/60"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="flex items-center gap-1 text-brand-dark"
                >
                  Role <Icon icon="mdi:required" />
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full border-b border-brand-mid rounded-lg p-2 text-brand-dark appearance-none relative pr-10 cursor-pointer focus:outline-none focus:ring-0 "
                  value={values.role}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Select your role
                  </option>
                  <option
                    value="Agent"
                    className=" text-brand-dark hover:bg-primary-500"
                  >
                    Agent
                  </option>
                  <option
                    value="Client"
                    className=" text-brand-dark hover:bg-primary-500"
                  >
                    Client
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone_number"
                  className="flex items-center gap-1 text-brand-dark"
                >
                  Email or Phone Number <Icon icon="mdi:required" />
                </label>

                <input
                  type="text"
                  name="contact"
                  className="w-full  border-b border-brand-mid text-brand-dark rounded-lg p-2 placeholder:text-brand-dark/60"
                  placeholder="Enter your email or phone number"
                  value={values.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-brand-dark"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full  border border-brand-mid text-brand-dark rounded-lg p-0.5 placeholder:text-brand-dark/60"
                  placeholder="Enter your first name"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center">
                {loading && (
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-brand-light text-brand-dark hover:text-brand-light hover:bg-brand-mid transition-colors duration-500 ease-in-out py-3 px-8 text-base font-medium text-center  rounded-lg "
                  >
                    <Spinner aria-label="Spinner button example" size="sm" />
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
              </div>
            </form>
          </div>
        </div>
        <Copywright color="text-brand-dark" />
      </div>
    </section>
  );
}
