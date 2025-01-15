export interface CardProps {
    emoji: string;
    hueA: number;
    hueB: number;
}

export interface Service {
    icon: string;
    hues: [number, number];
    title: string;
    description: string;
    link: string;
}

export type GalleryItem = {
    type: "image";
    src: string;
    alt: string;
    caption: string;
};

export type TestimonialItem = {
    type: "testimonial";
    quote: string;
    name: string;
    role: string;
    avatar: string;
};

export type HybridItem = GalleryItem | TestimonialItem;

export type HybridSectionProps = {
    items: HybridItem[];
    type: "gallery" | "testimonials" | "gallery-testimonials";
};

export type ModalProps = {
    item: HybridItem;
    onClose: () => void;
  };
