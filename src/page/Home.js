import React from "react";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

import avatar from "../assets/avatar.png";

export default function Home() {
  return (
    <div
      className=" 
     w-screen h-screen overflow-x-hidden text-gray-200 bg-stars bg-cover 
      bg-scroll md:bg-fixed bg-opacity-10 bg-blend-darken overflow-y-auto
      "
    >
      <div className="px-10 md:px-20 py-6 md:py-12">
        <div className="flex justify-between items-center">
          {" "}
          <a
            href="https://twitter.com/Anthonia_Efe"
            target="_blank"
            rel="noreferrer"
            className=" transform hover:scale-105 hover-md:text-5xl transition-transform underline-offset-2 "
          >
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full w-14 md:w-20 h-14 md:h-20 border-2 border-vesta-6 "
            />{" "}
          </a>
          <a
            href="portfolio-oi8kb32gc-anthoniaefe.vercel.app/ANTHONIA_EFE_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-akaya font-bold flex text-lg md:text-2xl flex-row-reverse p-1 md:p-2 transition duration-300 ease-in-out
            w-fit hover:scale-105 border-2 border-vesta-6 rounded-lg hover:bg-vesta-6"
          >
            Resume
          </a>
        </div>

        <span>
          <p
            className="text-xl md:text-7xl font-blobbychug tracking-tighter
      "
          >
            Hi there,
          </p>
          <p
            className="text-2xl md:text-9xl font-blobbychug -tracking-[.05em] 
      "
          >
            I'm Anthonia
          </p>
          <p
            className="text-xl md:text-2xl font-akaya mx-auto text-justify w-5/6 
      "
          >
            I'm a software developer with a knack for front-end development and
            crafting eye-catching web designs. I'm all about pushing my
            boundaries and embracing new learning opportunities in creating
            seamless digital experiences that leave a lasting impact.
          </p>
        </span>
      </div>

      <footer
        className="grid grid-cols-4 w-fit mx-auto
           justify-start items-start py-2 gap-6 md:gap-10"
      >
        <a
          href="https://twitter.com/Anthonia_Efe"
          target="_blank"
          rel="noreferrer"
          className="grid-child  "
        >
          <Twitter className="icon " />
        </a>

        <a
          href="https://www.linkedin.com/in/anthoniaefe/"
          target="_blank"
          rel="noreferrer"
          className="grid-child  "
        >
          <Linkedin className="icon " />
        </a>

        <a
          href="https://github.com/AnthoniaEfe"
          target="_blank"
          rel="noreferrer"
          className="grid-child "
        >
          <Github className="icon " />
        </a>

        <a
          href="mailto:anthoniaefe36@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="grid-child "
        >
          <Gmail className="icon " />
        </a>
      </footer>
    </div>
  );
}
