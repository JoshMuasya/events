"use client"

import React from 'react'
import HybridSection from './HybridSection'
import { HybridItem } from '@/types';

const items: HybridItem[] = [
    {
        type: "image",
        src: "/planning.jpg",
        alt: "Beautiful scenery",
        caption: "A stunning view of the mountains.",
    },
    {
        type: "image",
        src: "/planning.jpg",
        alt: "Ocean view",
        caption: "Relaxing by the sea.",
    },
    {
        type: "image",
        src: "/planning.jpg",
        alt: "Forest walk",
        caption: "A peaceful walk in the woods.",
    },
    {
        type: "image",
        src: "/planning.jpg",
        alt: "Forest walk",
        caption: "A peaceful walk in the woods.",
    },
    {
        type: "image",
        src: "/planning.jpg",
        alt: "Forest walk",
        caption: "A peaceful walk in the woods.",
    },
    {
        type: "image",
        src: "/planning.jpg",
        alt: "Forest walk",
        caption: "A peaceful walk in the woods.",
    },
    {
        type: "testimonial",
        quote: "This service was amazing!",
        name: "Jane Smith",
        role: "Happy Customer",
        avatar: "/avatars/jane.jpg",
    },
    {
        type: "testimonial",
        quote: "This service was amazing!",
        name: "Jane Smith",
        role: "Happy Customer",
        avatar: "/avatars/jane.jpg",
    },
    {
        type: "testimonial",
        quote: "I loved the experience.",
        name: "John Doe",
        role: "Satisfied Client",
        avatar: "/avatars/john.jpg",
    },
    {
        type: "testimonial",
        quote: "Highly recommended!",
        name: "Emily Johnson",
        role: "Loyal Customer",
        avatar: "/avatars/emily.jpg",
    },
];


const GallerySection = () => {
    return (
        <div>
            <HybridSection items={items} type="gallery-testimonials" />
        </div>
    )
}

export default GallerySection
