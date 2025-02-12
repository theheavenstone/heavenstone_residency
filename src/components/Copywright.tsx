import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaRegCopyright } from "react-icons/fa";

export default function Copywright({ color }: { color: string }) {
  return (
    <motion.div
      className="w-full mt-auto py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <hr className="border-brand-dark" />
      <div className="py-4 text-center">
        <p className={`${color} text-sm text-center`}>
          <FaRegCopyright className="inline-block mr-0.5" />
          {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline font-semibold">
            Heavenstone Residency
          </Link>
          . All rights reserved.
        </p>
      </div>
    </motion.div>
  );
}
