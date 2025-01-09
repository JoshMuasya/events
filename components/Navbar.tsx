"use client"

import { Briefcase, Home, Image, Info, Phone } from 'lucide-react';
import { useEffect, useState } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

const NavIcons = [
  {
    name: "Home",
    link: "#Home",
    component: Home,
  },
  {
    name: "Services",
    link: "#Services",
    component: Briefcase,
  },
  {
    name: "About Us",
    link: "#about",
    component: Info,
  },
  {
    name: "Gallery",
    link: "Gallery",
    component: Image,
  },
  {
    name: "Contact",
    link: "#Contact",
    component: Phone,
  },
];

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);
  const [navWidth, setNavWidth] = useState("full");

  useEffect(() => {
    // Ensure this runs only in the browser
    setViewportHeight(window.innerHeight);

    // Optional: Update viewportHeight on window resize
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Spring configuration for smooth transitions
  const springConfig = { stiffness: 300, damping: 30 };
  const animatedNavbarPos = useSpring(20, springConfig); // Spring-based position for the navbar

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercentage = latest * 100;
    if (scrollPercentage > 5) {
      animatedNavbarPos.set(viewportHeight - 150);
      setTimeout(() => {
        setNavWidth("1/2");
      }, 500);
    } else {
      animatedNavbarPos.set(20);
      setTimeout(() => {
        setNavWidth("full");
      }, 500);
    }
  });

  return (
    <motion.div
      style={{
        top: animatedNavbarPos,
        position: "fixed",
        zIndex: 30,
        width: "100%",
      }}
      >
      <div className="z-30 h-16 bg-[rgba(25,0,51,0.5)] backdrop-blur-md flex justify-between items-center container mx-auto navbar px-10 text-white border-radius border border-[rgba(255,255,255,0.2)] rounded-lg">
        {/* Logo */}
        <div className="hidden md:block w-[30px] h-[30px]">
          <img src="/logo.png" alt="Logo" className="w-full h-full" />
        </div>

        {/* Navigation Icons */}
        <div className={`flex justify-center gap-16 w-${navWidth}`}>
          {NavIcons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <a
                key={index}
                href={icon.link}
                className="flex flex-col items-center text-[#faa722] hover:text-[#E5941C] transition duration-300"
              >
                <IconComponent className="w-6 h-6 mb-1 hover:scale-125 transition transform duration-300" />
                <span className="text-sm font-semibold">{icon.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
