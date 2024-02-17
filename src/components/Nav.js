import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import avatar from "../assets/avatar.png";

import { useState, useEffect } from "react";

export default function Nav() {
  const [theme, setTheme] = useState("light");

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

  return (
    <div
      className="w-4/6 flex flex-row justify-between content-center bg-atsev-1/30
    fixed top-2 left-52 py-2 px-8 backdrop-blur-md z-10 border rounded-full "
    >
      <div className=" flex flex-row justify-center items-center gap-4">
        <img src={avatar} alt="avatar" className="w-12" />
      </div>
      <div className=" flex flex-row justify-center items-center gap-10">
        <a href="#welcome" className="nav-link">
          Home
        </a>
        <a href="#skills" className="nav-link">
          Skills{" "}
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>{" "}
      {/* theme toggle */}
      <button onClick={handleTheme} className="">
        {theme === "dark" ? (
          <Sun className="theme" />
        ) : (
          <Moon className="theme fill-vesta-7" />
        )}
      </button>
    </div>
  );
}
