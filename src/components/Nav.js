import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import avatar from "../assets/avatar.png";

import { useState, useEffect } from "react";

export default function Nav() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  // use default system appearance
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-bar relative">
      {/* logo image */}
      <img
        src={avatar}
        alt="avatar"
        className="w-12 inline md:static"
      />

      {/* large screen links */}
      <div className="hidden md:block">
        {" "}
        <div className="flex flex-row justify-center items-center gap-10">
          <a href="#welcome" className="nav-link">
            Home
          </a>{" "}
          <a href="#skills" className="nav-link">
            Skills{" "}
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>

      {/* theme toggle */}
      <div>
        <button onClick={handleTheme} className="hidden md:inline">
          {theme === "dark" ? (
            <Sun className="theme" />
          ) : (
            <Moon className="theme fill-vesta-7" />
          )}
        </button>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="-mr-2 inline md:hidden">
        <button
          onClick={toggleMenu}
          className="text-bg-vesta-6 transform hover:scale-105 focus:outline-none focus:text-2xl"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <span className="md:hidden w-full flow-root ">
          <div className="flex flex-col gap-10 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#welcome" className="nav-link">
              Home
            </a>{" "}
            <a href="#skills" className="nav-link">
              Skills{" "}
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </span>
      )}
    </div>
  );
}
