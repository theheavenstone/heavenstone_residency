"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

interface VideoModalProps {
  videoSrc: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc }) => {
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
        Watch Now{" "}
        <Icon
          icon="solar:play-outline"
          className="ml-2"
          width="20"
          height="20"
        />
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
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 cursor-pointer z-50"
            >
              <Icon icon="mingcute:close-fill" width="24" height="24" />
            </button>

            {/* Video Content */}
            <div className="w-full h-[400px] flex justify-center items-center">
              <video
                key={videoKey}
                className="w-full h-full rounded-lg"
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
