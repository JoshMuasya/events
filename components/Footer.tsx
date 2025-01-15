import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#1a0127] text-white py-10 w-full relative">
            <div className="w-full container mx-auto flex flex-col md:flex-row justify-center items-center align-middle px-4">
                {/* Logo & Slogan */}
                <div className="mb-6 md:mb-0 text-center w-full ">
                    <h2 className="text-3xl font-bold text-[#E2C4FF]">Twilight Luxe Creations</h2>
                    <p className="text-sm text-[#F5E1A4]">"Where Every Detail Dances in Elegance—Discover the Art of Unforgettable Moments."</p>
                </div>

                {/* Navigation Links
                <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0 text-center md:text-left w-full md:w-[50%] align-middle items-center justify-center">
                    <a
                        href="#services"
                        className="text-[#faa722] hover:text-[#9e3722] hover:font-bold hover:scale-125 transition duration-300"
                    >
                        Services
                    </a>
                    <a
                        href="#about"
                        className="text-[#faa722] hover:text-[#9e3722] hover:font-bold hover:scale-125 transition duration-300"
                    >
                        About Us
                    </a>
                    <a
                        href="#portfolio"
                        className="text-[#faa722] hover:text-[#9e3722] hover:font-bold hover:scale-125 transition duration-300"
                    >
                        Portfolio
                    </a>
                    <a
                        href="/contact"
                        className="text-[#faa722] hover:text-[#9e3722] hover:font-bold hover:scale-125 transition duration-300"
                    >
                        Contact
                    </a>
                </div> */}
            </div>

            {/* Social Media Icons */}
            <div className="absolute right-8 bottom-[8rem] flex flex-col items-end gap-4 z-10">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition transform duration-300"
                >
                    <Facebook className="h-6 w-6 text-[#faa722]" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition transform duration-300"
                >
                    <Twitter className="h-6 w-6 text-[#faa722]" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition transform duration-300"
                >
                    <Instagram className="h-6 w-6 text-[#faa722]" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition transform duration-300"
                >
                    <Linkedin className="h-6 w-6 text-[#faa722]" />
                </a>
            </div>

            {/* Divider */}
            <div className="border-t border-[#faa722] mb-6 mt-14"></div>

            {/* Bottom Section */}
            <div className="text-center text-sm text-gray-400 h-[5vh] flex flex-col justify-center">
                <p>&copy; {new Date().getFullYear()} Twilight Luxe Creations. All rights reserved.</p>
                <p>
                    Designed with ❤️ by <span className="text-[#faa722]">Digimatic Marketers</span>.
                </p>
            </div>
        </footer>
    );
}

export default Footer
