import React from "react";

// Icons
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

export default function TabSocials() {
  return (
    <div
      id="socials"
      className="bg-purple-dark border-purple-dark rounded-2xl border-2 
    w-fit h-fit flex-col p-2 pl-3 gap-2 fixed -left-3 top-1/4 hidden md:block"
    >
      <a
        href="https://twitter.com/Anthonia_Efe"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className="socials " />
      </a>

      <a
        href="https://www.linkedin.com/in/anthoniaefe/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="socials " />
      </a>

      <a href="https://github.com/AnthoniaEfe" target="_blank" rel="noreferrer">
        <Github className="socials " />
      </a>

      <a href="mailto:anthoniaefe36@gmail.com" target="_blank" rel="noreferrer">
        <Gmail className="socials " />
      </a>
    </div>
  );
}
