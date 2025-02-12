"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { IoPlayOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface VideoModalProps {
  videoSrc: string;
  label: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  const closeModal = () => {
    setIsOpen(false);
    setVideoKey((prev) => prev + 1);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-brand-dark text-brand-light hover:text-brand-dark hover:bg-brand-light transition-colors duration-500 ease-in-out inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg"
      >
        {label}
        <IoPlayOutline size={20} className="ml-2" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-black rounded-lg p-2 max-w-3xl w-full"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 cursor-pointer z-50"
            >
              <IoClose size={24} />
            </button>

            <div className="w-full h-[400px] flex justify-center items-center">
              <video
                key={videoKey}
                className="w-full h-full rounded-lg"
                title="Apartment Home Tour Video"
                controls
                autoPlay
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
