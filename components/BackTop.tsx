"use client"

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Importing an icon for the button (use Lucide icons)
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll
    const handleScroll = () => {
        const scrollHeight = window.innerHeight; // Get the viewport height
        setIsVisible(window.scrollY > scrollHeight); // Show button if scrolled past the screen height
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: "smooth", // Smooth scrolling animation
        });
    };

    useEffect(() => {
        // Add scroll listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 p-2 md:bottom-8 md:right-8 md:p-3 rounded-full bg-[#faa722] text-white shadow-lg"
                    style={{ zIndex: 1000 }}
                    aria-label="Back to Top"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "#E5941C",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        <ArrowUp size={24} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>

    );
};

export default BackToTop;
