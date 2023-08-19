import React from "react";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import avatar from "../assets/avatar_blob.svg";

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
     w-screen h-screen text-vesta-3 bg-cover pt-16 px-4 md:pt-4 md:px-8 
      bg-scroll md:bg-fixed overflow-y-auto overflow-x-hidden relative
      "
    >
      {/* theme toggler */}
      <div id="theme-toggle"></div>

      {/* socials */}
      <div id="socials"></div>
      {/* welcome section */}
      <section id="welcome" className="grid grid-cols-2 items-center">
        {/* left half */}{" "}
        <div className="col-span-1 justify-center items-center  ">
          {" "}
          <img
            src={avatar}
            alt="avatar"
            className=" 
            transform hover:scale-105 hover-md:text-5xl 
            sticky transition-transform col-span-1 w-4/6 mx-auto my-8"
          />{" "}
        </div>

        {/* right half  */}
        <div className="col-span-1 justify-center items-center ">
          <div className="my-1 mx-1">
            <p
              className="text-7xl font-blobbychug tracking-tighter mt-4
      "
            >
              Hi there👋🏽,
            </p>
            <p
              className="text-8xl my-2 font-blobbychug tracking-tighter
      "
            >
              I'm Anthonia
            </p>
            <p
              className="text-xl md:text-2xl font-akaya  
      "
            >
              {" "}
              A front end developer and web designer.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section id="about">
        <p
          className="text-xl md:text-2xl font-akaya mx-auto text-justify w-11/12 my-6 md:mt-0 
      "
        >
          I'm a software developer with a knack for front-end development and
          crafting eye-catching web designs. I'm all about pushing my boundaries
          in creating seamless digital experiences.
        </p>
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
      </section>
      <hr />
      <section id="projects"></section> <hr />
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
