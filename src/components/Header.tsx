"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

import { FaRegRegistered } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const navTheme = {
    root: {
      base: "bg-white px-2 py-2.5 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full xl:block xl:w-auto",
      list: "mt-4 flex flex-col xl:mt-0 xl:flex-row xl:space-x-8 xl:text-sm xl:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 xl:p-0",
      active: {
        on: "bg-cyan-700 text-white  xl:bg-transparent xl:text-cyan-700",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 xl:border-0 xl:hover:bg-transparent xl:hover:text-cyan-700 ",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 xl:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  };

  return (
    <div
      key="navbar-motion"
      className="absolute top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md xl:backdrop-blur-none xl:shadow-none shadow-xl xl:bg-transparent"
    >
      <Navbar fluid theme={navTheme} className="px-0 xl:px-10 bg-transparent">
        <Navbar.Brand href="/">
          <div className="self-center flex items-center whitespace-nowrap text-lg md:text-2xl font-semibold text-brand-dark uppercase">
            {" "}
            <Image
              src="/images/Logo.webp"
              alt="logo"
              width={42}
              height={42}
              className="relative bottom-1 w-auto h-auto object-cover"
              priority={true}
              loading="eager"
              suppressHydrationWarning
            />
            <p className="flex gap-1">
              <span>Heavenstone</span>
              <FaRegRegistered size={15} />
            </p>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            href="/"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            Home
          </Navbar.Link>

          <Navbar.Link
            as={Link}
            href="/#apartments"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            Apartments
          </Navbar.Link>

          <Navbar.Link
            as={Link}
            href="/#gallery"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            Gallery
          </Navbar.Link>

          <Navbar.Link
            as={Link}
            href="/#dining"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            Kitchen
          </Navbar.Link>

          <Navbar.Link
            as={Link}
            href="/tourism"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            Tourism
          </Navbar.Link>

          <Navbar.Link
            as={Link}
            href="/about"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            About
          </Navbar.Link>

          <Navbar.Link
            as={Link}
            href="/contact"
            className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
          >
            Contact
          </Navbar.Link>

          <div className="xl:hidden gap-4 items-center">
            <Navbar.Link
              className="flex gap-2 items-center tracking-tight text-brand-dark hover:!text-blue-600 hover:underline transition-colors ease-in-out duration-300 lg:text-xl"
              href="tel:+919447959544"
              aria-label="Call us at 9447959544"
            >
              <IoCallSharp size={24} className="text-brand-dark" />
              9447959544
            </Navbar.Link>

            <Navbar.Link
              href="https://wa.me/919447959544"
              className="flex gap-2 items-center tracking-tight lg:text-xl"
              aria-label="whatsapp icon"
            >
              <FaWhatsapp size={24} className="text-brand-dark" />
              <span className="xl:hidden text-brand-dark hover:!text-brand-light lg:text-xl">
                Whatsapp
              </span>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>

        <Navbar.Collapse className="hidden xl:flex">
          <Navbar.Link
            className="flex gap-1 items-center tracking-tight text-brand-dark hover:!text-blue-600 hover:underline transition-colors ease-in-out duration-300 lg:text-xl"
            href="tel:+919447959544"
            aria-label="Call us at 9447959544"
          >
            <IoCallSharp size={24} className="text-brand-dark" />
            9447959544
          </Navbar.Link>

          <Navbar.Link
            href="https://wa.me/919447959544"
            className="flex gap-2 items-center tracking-tight lg:text-xl"
            aria-label="whatsapp icon"
          >
            <FaWhatsapp size={24} className="text-brand-dark" />
            <span className="md:hidden text-brand-dark hover:!text-brand-light lg:text-xl">
              Whatsapp
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
