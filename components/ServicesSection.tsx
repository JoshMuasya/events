'use client';

import { services } from '../data/services';
import { styles } from '../styles/components';
import { ServiceCard } from './ServicesCard';

export default function ScrollTriggered() {
  const hueToColor = (h: number) => `hsl(${h}, 75%, 40%)`;

  return (
    <div style={styles.mainWrapper}>
      <div style={styles.overlay} />
      <div className="flex relative w-full max-w-[1200px] mx-auto pt-10 z-[1]">
        <div className="sticky top-10 left-0 w-[400px] h-fit">
          <h1 className="text-5xl font-bold m-0 text-[#FFD700] drop-shadow-md">
            OUR SERVICES
          </h1>
        </div>
        <div className="flex-1 pl-10 max-w-[500px] ml-auto pb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              hueToColor={hueToColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}