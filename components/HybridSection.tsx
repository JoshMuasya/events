"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "./Modal";
import { HybridItem, HybridSectionProps } from "@/types";

const HybridSection: React.FC<HybridSectionProps> = ({ items, type }) => {
    const [selectedItem, setSelectedItem] = useState<HybridItem | null>(null)

    // Function to determine grid area for each item
    const getGridArea = (index: number, itemType: string) => {
        // Create different grid areas based on item type and position
        if (itemType === "image") {
            // Large items (2x2)
            return {
                gridColumn: index % 3 === 0 ? "span 2" : "span 1",
                gridRow: index % 3 === 0 ? "span 2" : "span 1",
            };
        }
        // Regular items (1x1)
        return {
            gridColumn: "span 1",
            gridRow: "span 1",
        };
    };

    return (
        <section className="py-12 glass-borderless">
            <div className="flex flex-col justify-center items-center align-middle py-10">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Stories in Frames and Words
                </h2>
                <h4>
                    Discover the heart and soul of our journey through captivating visuals and inspiring testimonials
                </h4>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-min gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            style={getGridArea(index, item.type)}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                                duration: 0.2
                            }}
                            onClick={() => setSelectedItem(item)}
                            className="relative overflow-hidden cursor-pointer rounded-lg h-full min-h-[250px]"
                        >
                            {item.type === "image" ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="h-full p-6 bg-[rgba(26,1,39,0.8)] border border-[rgba(255,225,164,0.2)] backdrop-blur-lg rounded-lg">
                                    <p className="italic text-[#F5E1A4] mb-4">{item.quote}</p>
                                    <div className="flex items-center mt-auto">
                                        <div className="relative w-10 h-10 mr-3">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                fill
                                                className="rounded-full object-cover border border-[rgba(255,225,164,0.5)]"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#F5E1A4]">{item.name}</p>
                                            <p className="text-sm text-[#EAC08A]">{item.role}</p>
                                        </div>
                                    </div>
                                </div>

                            )}

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-[rgba(26,1,39,0.2)] bg-opacity-25 text-[#F5E1A4] flex items-center justify-center text-center p-4 border border-[rgba(255,225,164,0.2)] backdrop-blur-sm rounded-lg"
                            >
                                <p className="text-lg">
                                    {item.type === "image" ? item.caption : item.quote}
                                </p>
                            </motion.div>

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for Full Details */}
            {selectedItem && (
                <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </section>
    );
};

export default HybridSection;
