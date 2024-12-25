"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD335C"]

const HeroSection = () => {
    const servicesButtonRef = useRef<HTMLButtonElement>(null);
    const contactButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);
    const contentRef = useRef(null);   

    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section 
        id='hero' 
        className="relative h-screen w-full flex items-start justify-center flex-col"
        style={{
            backgroundImage
        }}
        >
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                poster="/hero-image.jpg" // Fallback image
            >
                <source src="/to-add-video.mp4" type="video/mp4" />
                {/* Fallback message for unsupported browsers */}
                <img
                    src="/hero-image.jpg"
                    alt="Fallback"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-50 from-black/100 via-black/75 to-black/0 bg-gradient-to-r left-0"></div>

            {/* Logo, Company Name, and Slogan */}
            <div className="relative text-white z-10 p-6 flex flex-col text-center md:text-left md:items-start justify-center md:justify-start w-full">
                <h1
                    className="text-xl md:text-3xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-10"
                    style={{
                        color: "#FFFFFF",
                        textShadow: "2px 2px 4px #FAA722, 0 0 25px #FAA722, 0 0 5px #FAA722",
                        fontFamily: "'Playfair Display', serif"
                    }}
                >
                    TWILIGHT LUXE CREATIONS
                </h1> {/* White with golden shadow for the company name */}

                <h3 className="w-full md:max-w-[35%] text-md md:text-xl lg:text-4xl items-center md:text-start mx-auto ml-0 mb-2 md:mb-4 lg:mb-10">
                    "Where Every Detail Dances in Elegance—Discover the Art of Unforgettable Moments."
                </h3>

                <p
                    className="text-sm md:text-lg lg:text-3xl italic mb-2 md:mb-4 lg:mb-10"
                    style={{
                        color: "#FAA722",
                        fontFamily: "'Lora', serif"  // For a classic, elegant look. Or use Raleway for a more modern feel
                    }}
                >
                    Crafting Perfect Events with Luxe Precision
                </p> {/* Gold for the slogan */}
            </div>

            {/* Buttons */}
            <div className='flex flex-row justify-center md:justify-between z-10 align-middle items-center md:items-start w-full md:w-[30%] px-5'>
                {/* Services */}
                <div className="relative mr-5">
                    <button
                        ref={servicesButtonRef}
                        className="relative px-4 py-2 bg-primary text-accent text-lg rounded-md overflow-hidden font-bold"
                    >
                        <Link href="/">Our Services</Link>
                    </button>
                </div>

                {/* Contact */}
                <div className="relative">
                    <button
                        ref={contactButtonRef}
                        className="relative px-4 py-2 bg-accent text-lg text-primary rounded-md overflow-hidden font-bold "
                    >
                        <Link href="/">Contact us</Link>
                    </button>
                </div>
            </div>

            {/* Partners */}
            <div
                ref={containerRef}
                className='absolute bottom-0 left-0 z-10 w-full h-[20%] overflow-hidden'
            >
                {/* Background Layer */}
                <div
                    ref={backgroundRef}
                    className='absolute inset-0 md:bg-bright-purple h-full w-full'
                >
                    {/* Content Layer */}
                    <div
                        ref={contentRef}
                        className='flex flex-row h-full justify-around items-center'
                    >
                        {/* Beyond 001 */}
                        <div className='text-accent font-black text-xl'>
                            Beyond 001
                        </div>

                        {/* Wilhide Bakers */}
                        <div className='text-accent font-black text-xl'>
                            Wilhide Bakers
                        </div>

                        {/* Digimatic Marketers */}
                        <div className='text-accent font-black text-xl'>
                            Digimatic Marketers
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default HeroSection
