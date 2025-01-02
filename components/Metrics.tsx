"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
    {
        id: 1,
        value: '50+',
        label: 'Events Organized',
        description: 'Successfully planned and executed memorable events across diverse themes.',
    },
    {
        id: 2,
        value: '20+',
        label: 'Trusted Partners',
        description: 'Collaborating with top vendors and professionals in the event industry.',
    },
    {
        id: 3,
        value: '5+',
        label: 'Years of Expertise',
        description: 'Experience in delivering exceptional event management services.',
    },
    {
        id: 4,
        value: '500+',
        label: 'Happy Clients',
        description: 'Committed to creating seamless and unforgettable experiences.',
    },
    {
        id: 5,
        value: '100%',
        label: 'Customer Satisfaction',
        description: 'Dedicated to exceeding expectations and providing top-notch services.',
    },
];

const Metrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.2 }}
            exit={{ opacity: 0, y: 40 }} // Exit animation
            className="px-4 py-32 text-white glass my-5"
            id="about"
        >
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    exit={{ opacity: 0, y: 40 }} // Exit animation for heading
                    className="text-6xl font-bold mb-12"
                >
                    KEY METRICS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 + (index * 0.1), duration: 1.0 }}
                            exit={{ opacity: 0, y: 40 }} // Exit animation for cards
                            className="flex flex-col"
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                exit={{ scale: 0.5 }} // Exit animation for value
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.8, type: 'spring' }}
                                className="text-5xl font-bold text-purple-300 mb-2"
                            >
                                {metric.value}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                                exit={{ opacity: 0 }} // Exit animation for label
                                className="text-xl font-semibold mb-2"
                            >
                                {metric.label}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                                exit={{ opacity: 0 }} // Exit animation for description
                                className="text-gray-400"
                            >
                                {metric.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Metrics
