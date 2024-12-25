'use client'

import { animate, motion, useAnimationFrame, useMotionTemplate, useMotionValue } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const COLORS_TOP = ["#A855F7", "#C79330", "#8C46E5"];

const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])
    const ref = useRef<HTMLHeadingElement | null>(null);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useAnimationFrame((time) => {
        // Smoothen the intensity oscillation by reducing frequency
        const intensity = Math.sin(time / 1500) * 0.5 + 0.5; // Slower oscillation (1500 instead of 1000)

        // Cycle through the colors based on the current color index
        const color = COLORS_TOP[currentColorIndex];

        if (ref.current) {
            ref.current.style.textShadow = `
              1px 1px 2px rgba(168, 85, 247, ${0.3 + intensity * 0.4}),
              0 0 ${10 + intensity * 15}px ${color}, /* Increased smoothness */
              0 0 ${20 + intensity * 25}px ${color},
              0 0 ${30 + intensity * 35}px ${color}
            `;
        }

        // Update the current color index periodically for smoother transitions
        const newIndex = Math.floor((time / 3000) % COLORS_TOP.length); // Change every 3 seconds (slower transitions)
        if (newIndex !== currentColorIndex) {
            setCurrentColorIndex(newIndex);
        }
    });

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, transparent 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 2px 12px ${color}`;

    return (
        <section
            id="hero"
            className="relative h-screen w-full flex items-start justify-center flex-col"
        >
            {/* Video Background */}
            <video
                className="absolute inset-0 h-full w-full object-cover z-0"
                autoPlay
                loop
                muted
                poster="/hero-image.jpg"
            >
                <source src="/to-add-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-50 from-black/100 via-black/75 to-black/0 bg-gradient-to-r left-0"></div>

            {/* Content Section */}
            <motion.section
                className="relative z-20 flex items-start justify-center flex-col h-full w-full px-6"
                style={{
                    backgroundImage
                }}
            >
                <motion.h1
                    ref={ref}
                    className="text-xl md:text-3xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-10"
                    style={{
                        color: "#FFFFFF",
                        fontFamily: "'Playfair Display', serif",
                    }}
                >
                    TWILIGHT LUXE CREATIONS
                </motion.h1>

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

                <div className='flex flex-row justify-around w-1/3 items-start align-middle'>
                    <motion.button
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.10
                        }}
                        whileTap={{
                            scale: 0.985
                        }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2 text-white transition-all duration-300 bg-gradient-to-r from-[#A855F7] via-[#C79330] to-[#8C46E5]"
                    >
                        Our Services
                    </motion.button>

                    <motion.button
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.10
                        }}
                        whileTap={{
                            scale: 0.985
                        }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2 text-white transition-all duration-300"
                    >
                        Contact Us
                    </motion.button>
                </div>

                {/* Partners Layer */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full flex flex-row justify-around items-center py-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2, // Longer duration for a smoother effect
                        ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for a natural motion
                        delay: 0.2, // Adds a slight delay before animation starts
                    }}
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
                </motion.div>
            </motion.section>
        </section>
    )
}

export default Hero
