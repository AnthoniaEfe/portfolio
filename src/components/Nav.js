import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import avatar from "../assets/avatar.png";

import { useState, useEffect } from "react";

export default function Nav() {
  const [theme, setTheme] = useState("light");

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

  return (
    <div
      className="w-screen flex flex-row justify-between content-center bg-slate-100
    fixed top-0 left-0 py-2 px-8 opacity-80"
    >
      <img src={avatar} alt="avatar" className="w-12" />

      <div className=" flex flex-row justify-center items-center gap-10">
        <a href="#welcome" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Work
        </a>
        <a href="#footer" className="nav-link">
          contact
        </a>

        {/* theme toggle */}
        <button onClick={handleTheme} className="">
          {theme === "dark" ? (
            <Sun className="theme" />
          ) : (
            <Moon className="theme fill-vesta-7" />
          )}
        </button>
      </div>
    </div>
  );
}
