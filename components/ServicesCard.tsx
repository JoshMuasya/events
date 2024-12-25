import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Service } from '../types';
import { styles } from '../styles/components';

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface ServiceCardProps extends Service {
  hueToColor: (h: number) => string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  hues: [hueA, hueB],
  title,
  description,
  link,
  hueToColor,
}) => {
  const background = `linear-gradient(306deg, ${hueToColor(hueA)}, ${hueToColor(hueB)})`;

  return (
    <motion.div
      className="overflow-hidden flex justify-center items-center relative pt-5 -mb-10"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div 
        className="absolute inset-0"
        style={{
          ...styles.splash,
          background,
        }}
      />
      <Link href={link} className="no-underline">
        <motion.div
          className="w-[300px] h-[430px] flex flex-col items-center justify-start rounded-[20px] bg-[rgba(189,142,64,0.2)] shadow-lg p-8 text-white cursor-pointer backdrop-blur-sm border border-white/10"
          variants={cardVariants}
          style={{ transformOrigin: "10% 60%" }}
        >
          <div className="text-[84px] mb-4">{icon}</div>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#FFD700] drop-shadow-md">
            {title}
          </h2>
          <p className="text-base text-center leading-normal text-[#FFD700] drop-shadow-sm">
            {description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
};