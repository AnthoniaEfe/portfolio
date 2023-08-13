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
     w-screen h-screen overflow-x-hidden text-white bg-stars bg-cover 
      bg-scroll md:bg-fixed bg-opacity-10 bg-blend-darken overflow-y-auto
      "
    >
      <section className="grid grid-cols-3 h-screen">
        {" "}
        {/* left half */}
        <div className="col-span-1 p-4">
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
                className="rounded-full w-16 h-16 border-2 border-vesta-2 shadow-vesta-4"
              />{" "}
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-mali flex text-xl flex-row-reverse p-2 shadow-vesta-4
            w-fit hover:scale-105 border-2 border-vesta-2 rounded-lg"
            >
              Resume
            </a>
          </div>

          <span className="mt-8 mx-4">
            <p
              className="text-2xl md:text-9xl font-calistoga font-bold 
      "
            >
              Hi 👋🏾
            </p>
            <p
              className="text-2xl md:text-6xl font-calistoga font-bold 
      "
            >
              I'm Anthonia
            </p>
            <p
              className="text-lg md:text-xl font-calistoga font-bold  text-justify
      "
            >
              A front-end engineer with a knack for designing beautiful user
              friendly software solutions
            </p>
          </span>
        </div>
        {/* right half */}
        <div className="col-span-2 bg-gradient-to-r from-vesta-8/90 to-vesta-3/90 p-4">
          <footer className="py-2 px-4 flex flex-col justify-center items-center">
            <p className="text-2xl md:text-9xl font-calistoga font-bold ">
              Work
            </p>
            <p className="text-2xl md:text-9xl font-calistoga font-bold ">
              About
            </p>
            <p className="text-2xl md:text-9xl font-calistoga font-bold ">
              Contact
            </p>
            <div
              className="grid grid-cols-4 w-fit 
           justify-start items-start py-2 gap-10"
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
          </footer>
        </div>
      </section>
    </div>
  );
}
