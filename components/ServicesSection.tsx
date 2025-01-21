'use client';

import { services } from '../data/services';
import { styles } from '../styles/components';
import { ServiceCard } from './ServicesCard';

export default function ScrollTriggered() {
  const hueToColor = (h: number) => `hsl(${h}, 75%, 40%)`;

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      <div style={styles.overlay} />
      <div className="flex flex-col md:flex-row relative w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-10 z-[1]">
        <div className="top-10 left-0 w-full md:w-[400px] h-fit md:sticky">
          <h1 className="text-5xl font-bold m-0 text-[#FFD700] drop-shadow-md text-center">
            OUR SERVICES
          </h1>
        </div>
        <div className="flex-1 pl-0 md:pl-10 max-w-full w-full ml-0 md:max-w-[500px] md:ml-auto pb-24">
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