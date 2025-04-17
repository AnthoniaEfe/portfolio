import { useState, useEffect } from "react";
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioLogo from "../assets/portfolio-logo.jpeg"

const navItems = ['home', 'about', 'projects', 'contact', 'footer'];

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md shadow-md' : 'bg-transparent'}
     flex flex-row m-0 px-4 md:px-20 py-8 gap-4 justify-between items-center absolute bg-[rgba(0,0,0,0)] z-10 top-0 left-0 w-full text-black`} aria-label="Main navigation">
       <img src={portfolioLogo} alt="loop studios logo" className='w-36 z-10'/>
      {/* nav menu */}
        <div className='flex flex-row md:flex-row-reverse m-0 gap-4'>
          {isMobile ? <div className='flex flex-column m-0 p-0 justify-center items-center' onClick={() => setIsOpen(!isOpen)}  aria-controls="mobile-menu">
           <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="z-10 text-2xl"/>
                </div> : (
                <ul className="flex flex-row m-0 gap-4 justify-center items-center" role="menubar">
                {navItems.map((item) => (
                  <li key={item} role="menuitem">
                    <a href="#" className='capitalize decoration-purple-light decoration-4 hover:underline underline-offset-16 transition duration-300'>{item}</a> 
                  </li>))}
                </ul>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-full translate-x-[100%] p-8 w-full h-full text-black bg-white">
          <ul className="list-none flex flex-col gap-8 items-start justify-center h-full">
            {navItems.map((item, index) => (
              <li
                key={index}
                role="menuitem"
              >
                <a href="#" className="text-2xl cursor-pointer active:underline underline-offset-16 uppercase">
                  {item}</a>
          
              </li>
            ))}
          </ul> 
          </div>
        )}
      </nav>
  );
}
