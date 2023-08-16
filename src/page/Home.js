import React from "react";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import avatar from "../assets/avatar.png";

const FileURL = "https://www.anthoniaefe.com/ANTHONIA_EFE_RESUME.pdf";

export default function Home() {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div
      className=" 
     w-screen h-screen text-gray-200 bg-stars bg-cover pt-16 px-4 md:pt-4 md:px-8 
      bg-scroll md:bg-fixed overflow-y-auto overflow-x-hidden relative
      "
    >
      <div
        className="flex justify-between items-center px-8
        w-full relative  pt-4 md:pt-8 "
      >
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-14 md:w-20 h-14 md:h-20 border-2
             border-vesta-6 transform hover:scale-105 hover-md:text-5xl 
            sticky transition-transform underline-offset-2"
        />{" "}
        <button
          onClick={() => {
            downloadFileAtUrl(FileURL);
          }}
          className="font-akaya font-bold flex text-lg md:text-2xl flex-row-reverse px-2 py-1
             md:p-2 transition duration-300 ease-in-out sticky
            w-fit hover:scale-105 border-2 border-vesta-6 rounded-lg hover:bg-vesta-6"
        >
          Resume
        </button>
      </div>

      <div className="px-10 md:px-20 pt-8 pb-2 md:pt-4 md:pb-6">
        <div className="pt-8 md:pt-0">
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
            className="text-xl md:text-2xl font-akaya mx-auto text-justify w-11/12 my-6 md:mt-0 
      "
          >
            I'm a software developer with a knack for front-end development and
            crafting eye-catching web designs. I'm all about pushing my
            boundaries in creating seamless digital experiences.
          </p>
        </div>
      </div>
      <footer className="mb-0 mt-auto w-full  ">
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


        <p className="font-mali mt-2">
          &copy; {new Date().getFullYear()} Anthonia Efe
        </p>{" "}
      </footer>
    </div>
  );
}
