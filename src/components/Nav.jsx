import { useState, useEffect, useRef } from "react";
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioLogo from "../assets/logo-nav.png"
import { motion } from "framer-motion";

const navItems = [
  {text:'about', link:'#about'},
  {text:'services', link:'#services'},
  {text:'projects', link:'#projects'},
  {text:'contact me', link:'#contact'}
];

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const MotionDiv = motion.div;
  // const [hoveredLink, setHoveredLink] = useState(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    <nav  ref={navRef} 
    className='font-body fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 bg-white/20 backdrop-blur-md shadow-2xs
     flex flex-row m-0 md:px-20 gap-4 justify-between items-center left-0 text-textblack' aria-label="Main navigation">
       <a href="/" className="z-10">
        <img src={portfolioLogo} alt="anthonia efe logo" className='h-12 '/>
      </a>
      {/* nav menu */}
        <div className='flex flex-row md:flex-row-reverse m-0 gap-4'>
          {isMobile ? <div className='flex flex-column m-0 p-0 justify-center items-center' onClick={() => setIsOpen(!isOpen)} 
           aria-controls="mobile-menu">
           <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="z-10 text-2xl"/>
                </div> : (
                <ul className="flex flex-row m-0 gap-4 justify-center items-center" role="menubar">
                {navItems.map((item, index) => (
                <li key={index} role="menuitem" className="relative cursor-pointer group inline-block">
                    <a href={item.link}  >
                      {item.text}
                    </a> 
                    <span className="absolute left-0 -bottom-2 h-0.5 bg-purple-light w-0 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                 ))}
                </ul>
              )}
            </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-full translate-x-[100%] p-8 w-full h-[50vh]
          text-textblack  transition-all duration-300 origin-top-right transform bg-white/95 backdrop-blur-lg shadow-2xs">
          <ul className="list-none flex flex-col gap-8 items-start justify-center h-full">
            {navItems.map((item, index) => (
              <li
                key={index}
                role="menuitem"
              >
                <a href={item.link} onClick={() => setIsOpen(false)}
                className="text-lg cursor-pointer active:underline underline-offset-12
                 decoration-purple-light decoration-4 hover:underline uppercase">
                  {item.text}</a>
              </li>
            ))}
          </ul> 
          </div>
        )}
      </nav>
  );
}
