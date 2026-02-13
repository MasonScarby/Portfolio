import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });

        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

    return (
        <div>
            {/* Background Image with Framer Motion Fade Animation */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isScroll ? 0 : 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"
            >
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </motion.div>

            {/* Rest of the Navbar content */}





        {/* Navbar */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white bg-opacity-80 shadow-md ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
            <a href="#top">
            {/* <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='' /> */}
            <h1 className='w-50 cursor-pointer '>Mason Scarborough</h1>
            </a>

            {/* Desktop Menu */}
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"}`}>

            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About Me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
            </ul>

            {/* Right Icons & Mobile Menu Button */}
            <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt='' className='w-6' />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
                Contact <Image src={assets.arrow_icon} className='w-3' alt='' />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button onClick={() => setMenuOpen(true)} className='block md:hidden ml-3'>
                <Image src={assets.menu_black} className='w-6' alt='' />
            </button>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transform transition-transform duration-500 ease-in-out 
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            {/* Close Button */}
            <button onClick={() => setMenuOpen(false)} className='absolute top-4 right-4'>
                <Image src={assets.close_black} className='w-6' alt='Close' />
            </button>

            {/* Sidebar Links */}
            <ul className='flex flex-col gap-6 py-20 px-10'>
                <li><a className='font-Ovo' href="#top" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a className='font-Ovo' href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
                <li><a className='font-Ovo' href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a className='font-Ovo' href="#work" onClick={() => setMenuOpen(false)}>My Work</a></li>
                <li><a className='font-Ovo' href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
            </ul>
            </div>
        </nav>
        </div>
    );
    };

    export default Navbar;
