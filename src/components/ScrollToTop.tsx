"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-24 right-5 bg-brand-mid text-brand-light p-1 md:p-3 rounded-full shadow-lg "
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
}
