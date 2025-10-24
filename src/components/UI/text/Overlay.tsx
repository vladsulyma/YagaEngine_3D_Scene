import React from "react";
import { motion } from "framer-motion";
import NeonSubtitle from "./NeonSubtitle";
import { X } from "lucide-react";
import type { HotspotData } from "../../../types/HotspotData";

const Overlay: React.FC<
  Omit<HotspotData, "position" | "cameraPoint" | "onClick">
> = ({ title, secondaryTitle1, secondaryTitle2, text, extraText, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-99999999 w-screen h-screen bg-black/70 flex flex-col gap-2 sm:gap-8 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-neutral-900 text-white p-6 shadow-lg w-[300px] sm:w-[500px]"
        style={{
          clipPath:
            "polygon(45px 0, 100% 0, 100% calc(100% - 45px), calc(100% - 45px) 100%, 0 100%, 0 45px)",
          borderRadius: "0.5rem"
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NeonSubtitle
          text={title}
          className="text-center text-2xl mb-3"
        />

        {secondaryTitle1 && (
          <h3 className="text-lg font-semibold mb-2">{secondaryTitle1}</h3>
        )}
        <p className="mb-6 text-base leading-relaxed">{text}</p>

        {secondaryTitle2 && (
          <h4 className="text-base font-medium text-center mb-4 text-gray-300">
            {secondaryTitle2}
          </h4>
        )}
        {extraText && (
          <p className="text-sm leading-relaxed text-gray-400">{extraText}</p>
        )}
      </motion.div>

      <button
        onClick={onClose}
        className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg text-white hover:text-[#88c057] transition-all duration-300 group"
      >
        Close
        <X
          className="transition-transform duration-300 group-hover:rotate-90 group-hover:text-[#88c057]"
          size={20}
        />
      </button>
    </motion.div>
  );
};

export default Overlay;
