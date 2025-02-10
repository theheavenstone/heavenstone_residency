"use client";

import { Navbar } from "flowbite-react";
import { Icon } from "@iconify/react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../public/Assets/Logo.webp";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();

    if (router.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <motion.div
          key="navbar-motion"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md md:backdrop-blur-none md:shadow-none shadow-xl md:bg-transparent"
        >
          <Navbar fluid className="container bg-transparent">
            <Navbar.Brand href="/">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="self-center flex items-center whitespace-nowrap text-lg md:text-2xl font-semibold text-brand-dark uppercase"
              >
                {" "}
                <Image
                  src={Logo}
                  alt="Heavenstone Residency"
                  width={42}
                  height={42}
                  className="relative bottom-1 w-auto h-auto object-cover"
                  priority={true}
                />
                <p className="flex">
                  <Icon
                    icon="mdi:copyright"
                    className=" w-3 h-3 md:w-4 md:h-4"
                  />
                  Heavenstone Residency
                </p>
              </motion.div>
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
              <motion.div
                key="navbar-links"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex gap-0 md:gap-4  flex-col  md:flex-row"
              >
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
                  onClick={(e) => handleServiceClick(e, "apartments")}
                  className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
                >
                  Apartments
                </Navbar.Link>

                <Navbar.Link
                  as={Link}
                  href="/#dining"
                  onClick={(e) => handleServiceClick(e, "dining")}
                  className="text-brand-dark hover:!text-brand-light lg:text-xl transition-colors ease-in-out duration-300"
                >
                  Kitchen
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
              </motion.div>

              <div className="md:hidden gap-4 items-center">
                <Navbar.Link
                  className="flex gap-2 items-center tracking-tight text-brand-dark hover:!text-blue-600 hover:underline transition-colors ease-in-out duration-300 lg:text-xl"
                  href="tel:+919447959544"
                >
                  <Icon icon="famicons:call-sharp" width="20" height="20" />{" "}
                  9447959544
                </Navbar.Link>

                <Navbar.Link
                  href="https://wa.me/919447959544"
                  className="flex gap-2 items-center tracking-tight lg:text-xl"
                >
                  <Icon icon="mdi:whatsapp" width="24" height="24" />
                  <span className="md:hidden text-brand-dark hover:!text-brand-light lg:text-xl">
                    Whatsapp
                  </span>
                </Navbar.Link>
              </div>
            </Navbar.Collapse>

            <Navbar.Collapse className="hidden md:flex">
              <Navbar.Link
                className="flex gap-1 items-center tracking-tight text-brand-dark hover:!text-blue-600 hover:underline transition-colors ease-in-out duration-300 lg:text-xl"
                href="tel:+919447959544"
              >
                <Icon icon="famicons:call-sharp" width="20" height="20" />{" "}
                9447959544
              </Navbar.Link>

              <Navbar.Link
                href="https://wa.me/919447959544"
                className="flex gap-2 items-center tracking-tight lg:text-xl hover:!text-brand-light transition-colors ease-in-out duration-300"
              >
                <Icon icon="mdi:whatsapp" width="24" height="24" />
                <span className="md:hidden text-brand-dark hover:!text-brand-light lg:text-xl">
                  Whatsapp
                </span>
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
