"use client";

import { ModalProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Content */}
        {item.type === "image" ? (
          <>
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={800}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700">{item.caption}</p>
          </>
        ) : (
          <>
            <p className="italic text-gray-600 mb-4">{item.quote}</p>
            <div className="flex items-center">
              <Image
                src={item.avatar}
                alt={item.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Modal;
