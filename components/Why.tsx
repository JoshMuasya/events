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

    return (
        <div className='bg-[#1a0127]'>
            {/* Top */}
            <div className='flex flex-col items-center align-middle justify-center py-10'>
                <div className='flex flex-col items-center align-middle justify-center font-bold text-[#FFD700]'>
                    {/* Heading */}
                    <div className='text-4xl md:text-6xl'>
                        <h1 >
                            Why Clients Trust Us with Their Events
                        </h1>
                    </div>

                    {/* Sub Heading  */}
                    <div className='text-xl md:text-3xl italic py-10'>
                        <h2>
                            Your vision, our expertise—making every event unforgettable.
                        </h2>
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-12 w-3/4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } items-center lg:items-start shadow-bottomLeft rounded-lg p-5`}
                            style={{
                                backgroundColor: index % 2 === 0 ? "#2b1139" : "#3c1a4d", // Alternating background colors
                            }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Initial animation state
                            whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
                            viewport={{ amount: 0.4 }} // Trigger once when 40% of the card is in view
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Left: Image */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </motion.div>

                            {/* Right: Content */}
                            <motion.div
                                className="w-full lg:w-1/2 lg:px-12 mt-6 lg:mt-0"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ amount: 0.4 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <h3 className="text-2xl font-semibold text-[#F5E1A4]">{feature.title}</h3>
                                <p className="text-[#E2C4FF] mt-4">{feature.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Metrics */}
            <div>

            </div>

            {/* CTA */}
            <div>

            </div>
        </div>
    )
}

export default Why
