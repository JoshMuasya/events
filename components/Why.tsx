"use client"

import React from 'react'
import { motion } from "framer-motion";

const Why = () => {
    const features = [
        {
            title: "Seamless Event Planning & Coordination",
            description: "From conceptualization to execution, we provide comprehensive event planning and coordination services, ensuring every detail is handled flawlessly for an unforgettable experience.",
            image: "/planning.jpg",
        },
        {
            title: "Custom Event Design & Styling",
            description: "Bring your vision to life with tailored themes, stunning décor, and breathtaking designs, creating a unique ambiance that perfectly reflects your event's personality.",
            image: "/planning.jpg",
        },
        {
            title: "Professional Photography & Videography",
            description: "Capture your special moments with precision and creativity through high-quality photography and cinematic videography services.",
            image: "/planning.jpg",
        },
        {
            title: "Catering & Beverage Excellence",
            description: "Treat your guests to delightful menus and beverages crafted to perfection, with catering options tailored to suit every event and preference.",
            image: "/planning.jpg"
        },
        {
            title: "Technology-Driven Event Solutions",
            description: "Stay ahead with our hybrid and virtual event services, offering advanced E-RSVP systems, live streaming, and tech solutions for seamless connectivity.",
            image: "/planning.jpg",
        },
        {
            title: "Personalized Gifts & Favors",
            description: "Leave a lasting impression with customized mementos and gifts for your guests, adding a personal touch to every celebration.",
            image: "/planning.jpg",
        },
    ];

    const animationSettings = {
        initial: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
        }),
        whileInView: { opacity: 1, x: 0 },
        viewport: { amount: 0.4 },
        transition: { duration: 1, ease: "easeOut" },
    };

    const imageAnimationSettings = {
        ...animationSettings,
        transition: { duration: 1, delay: 0.2 },
    };

    const variants = {
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
        }),
        visible: { opacity: 1, x: 0 },
    };

    const textAnimationSettings = {
        ...animationSettings,
        transition: { duration: 1, delay: 0.4 },
    };

    return (
        <div className='bg-[#1a0127]'>
            {/* Top */}
            <div className='flex flex-col items-center align-middle justify-center py-10'>
                <div className='flex flex-col items-center align-middle justify-center font-bold text-[#FFD700]'>
                    {/* Heading */}
                    <div className='text-3xl md:text-6xl text-center px-4'>
                        <h1 className="break-words">
                            Why Clients Trust Us with Their Events
                        </h1>
                    </div>

                    {/* Sub Heading  */}
                    <div className='text-xl md:text-3xl italic py-10 text-center px-4'>
                        <h2 className="break-words">
                            Your vision, our expertise—making every event unforgettable.
                        </h2>
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-12 w-full px-4 md:w-3/4 overflow-x-hidden">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } items-center lg:items-start shadow-bottomRight rounded-lg p-3 md:p-5 w-full`}
                            style={{
                                backgroundColor: index % 2 === 0 ? "#2b1139" : "#3c1a4d",
                            }}
                            custom={index} // Pass index for dynamic animation
                            variants={variants}
                            initial="hidden" // Reference hidden variant
                            whileInView="visible" // Reference visible variant
                            viewport={{ amount: 0.4 }} // Trigger animation when 40% is visible
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Left: Image */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                custom={index}
                                variants={variants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    aria-label={`Image of ${feature.title}`}
                                />
                            </motion.div>

                            {/* Right: Content */}
                            <motion.div
                                className="w-full lg:w-1/2 lg:px-12 mt-6 lg:mt-0 px-2"
                                custom={index}
                                variants={variants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <h3 className="text-lg md:text-2xl font-semibold text-[#F5E1A4] break-words hover:text-[#FFD700] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-[#E2C4FF] mt-4 text-sm md:text-lg break-words">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Why
