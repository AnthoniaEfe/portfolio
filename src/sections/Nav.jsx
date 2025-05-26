import { useState, useEffect, useRef } from "react";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import portfolioLogo from "../assets/logo-nav.png";

const navItems = [
  {text: "welcome", link: "#banner"}, 
  { text: "about", link: "#about" },
  { text: "services", link: "#services" },
  { text: "projects", link: "#projects" },
  { text: "contact me", link: "#contact" },
];

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#welcome");
  const navRef = useRef(null);

  // Resize listener for mobile check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click outside to close mobile nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll-based section tracking
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.link));
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // 20% of section must be visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="font-body fixed top-0 w-full z-50 px-8 md:px-20 lg:px-24 py-2 transition-all duration-300 bg-white/30 backdrop-blur-sm shadow-2xs
      flex flex-row gap-4 justify-between items-center left-0 text-textblack"
      aria-label="Main navigation"
    >
      <a href="/" className="z-10">
        <img src={portfolioLogo} alt="anthonia efe logo" className="h-12" />
      </a>

      {/* Nav Menu */}
      <div className="flex flex-row md:flex-row-reverse gap-4">
        {isMobile ? (
          <div
            className="flex flex-column justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="z-10 text-2xl"
            />
          </div>
        ) : (
          <ul className="flex flex-row gap-4 justify-center items-center" role="menubar">
            {navItems.map((item, index) => (
              <li key={index} role="menuitem" className="relative cursor-pointer group inline-block">
                <a
                  href={item.link}
                  className={`text-xs capitalize transition-colors duration-200 ${
                    activeLink === item.link
                      ? "underline underline-offset-8 decoration-purple-light decoration-2 transition-all duration-300 "
                      : ""
                  }`}
                >
                  {item.text}
                </a>
                <span className="absolute left-0 -bottom-1 h-0.5 bg-purple-light w-0 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-full translate-x-[100%] p-8 w-full h-[50vh]
        text-textblack transition-all duration-300 origin-top-right transform bg-white/95 backdrop-blur-lg shadow-2xs">
          <ul className="list-none flex flex-col gap-8 items-start justify-center h-full">
            {navItems.map((item, index) => (
              <li key={index} role="menuitem">
                <a
                  href={item.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`text-base cursor-pointer uppercase transition-all duration-200 ${
                    activeLink === item.link
                      ? "underline underline-offset-4 decoration-purple-light decoration-2"
                      : "hover:underline"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
