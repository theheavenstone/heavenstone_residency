"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-bold text-brand-dark"
      >
        404
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600">Oops! Page not found.</p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="mt-6"
      >
        <Link href="/">Go Back Home</Link>
      </motion.div>
    </div>
  );
}
