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
     w-screen h-screen text-gray-200 bg-stars bg-cover 
      bg-fixed md:bg-fixed overflow-y-auto overflow-x-hidden relative
      "
    >
      <div className="px-10 md:px-20 pt-12 pb-2 md:pt-4 md:pb-6">
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
            className="font-akaya font-bold flex text-lg md:text-2xl flex-row-reverse px-2 py-1
             md:p-2 transition duration-300 ease-in-out
            w-fit hover:scale-105 border-2 border-vesta-6 rounded-lg hover:bg-vesta-6"
          >
            Resume
          </a>
        </div>

        <div className="pt-16 md:pt-0">
          <p
            className="text-4xl md:text-7xl font-blobbychug tracking-tighter
      "
          >
            Hi there,
          </p>
          <p
            className="text-5xl md:text-9xl my-2 font-blobbychug -tracking-[.05em] 
      "
          >
            I'm Anthonia
          </p>
          <p
            className="text-xl md:text-2xl font-akaya mx-auto text-justify w-11/12 my-8 md:mt-0 
      "
          >
            I'm a software developer with a knack for front-end development and
            crafting eye-catching web designs. I'm all about pushing my
            boundaries in creating seamless digital experiences .
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-4 w-fit mx-auto px-4 
           justify-start items-start py-2 gap-8 md:gap-10 "
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
      </div>

      <footer className="fixed md:sticky bottom-0 w-screen mt-4 p-1 ">
        <p className="font-mali">
          &copy; {new Date().getFullYear()} Anthonia Efe
        </p>{" "}
      </footer>
    </div>
  );
}
