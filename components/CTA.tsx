"use client"

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="px-4 py-32 bg-[#1a0127] text-white glass my-5"
      id="cta"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-[#E2C4FF] mb-6"
        >
          Let’s Bring Your Vision to Life!
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-lg text-[#F5E1A4] mb-8 max-w-2xl"
        >
          Partner with Twilight Luxe Creations for tailored event planning that transforms every moment into a memory. Book your consultation now and let's start crafting your dream event!
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="px-6 py-3 bg-[#9e3722] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#651b0d] transition duration-300"
          >
            Book a Free Consultation
          </motion.a>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="px-6 py-3 bg-[#faa722] text-[#1a0127] text-lg font-bold rounded-lg shadow-lg hover:bg-[#E5941C] transition duration-300"
          >
            Learn More About Us
          </motion.a>
        </div>

        {/* Form Section */}
        <div className="mt-12 max-w-xl w-full bg-[#260136] p-8 rounded-lg shadow-xl">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 text-black rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 text-black rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 text-black rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your event"
              className="w-full px-4 py-3 text-black rounded-md focus:outline-none h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#9e3722] text-white font-bold rounded-lg hover:bg-[#651b0d] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          Have questions? Call us at <a href="tel:+1234567890" className="text-[#faa722]">+123 456 7890</a> or email us at <a href="mailto:info@twilightluxe.com" className="text-[#faa722]">info@twilightluxe.com</a>.
        </p>
      </div>
    </motion.section>
  );
};

export default CTA;
