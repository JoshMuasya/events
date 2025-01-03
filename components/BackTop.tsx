"use client"

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Importing an icon for the button (use Lucide icons)

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
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full bg-[#faa722] text-white shadow-lg hover:bg-[#E5941C] transition-transform duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
            style={{ zIndex: 1000 }}
            aria-label="Back to Top"
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default BackToTop;
