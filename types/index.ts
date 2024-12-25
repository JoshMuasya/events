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