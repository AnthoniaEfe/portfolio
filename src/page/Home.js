import React from "react";
import Navbar from "../components/Navbar";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-vesta-10 via-vesta-9 to-vesta-9 w-screen h-screen overflow-x-hidden ">
      <Navbar className="fixed" />
      <main className="p-16">
        <div
          className="flex-col items-center justify-center
      "
        >
          <h1
            className="text-white text-2xl md:text-4xl font-bold m-6
      "
          >
            Hi, I'm{" "}
            <a
              href="https://twitter.com/Anthonia_Efe"
              target="_blank"
              rel="noreferrer"
              className="underline transform hover:text-3xl hover-md:text-5xl transition-transform underline-offset-2 "
            >
              Anthonia
            </a>
          </h1>
          <div className="w-4/5 h-fit border-2 rounded-xl shadow-vesta-4 shadow-lg border-vesta-6 mx-auto my-12 p-6 md:p-8 justify-center items-center">
            <p className="text-sm md:text-xl text-white mb-4">
              A software developer, web designer and makeup artist
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12 mx-auto my-2 justify-center items-center gap-8 p-4">
              <a
                href="https://twitter.com/Anthonia_Efe"
                className=" mx-auto my-2"
              >
                <Twitter className="icon " />
              </a>

              <a
                href="https://www.linkedin.com/in/anthoniaefe/"
                className=" mx-auto my-2"
              >
                <Linkedin className="icon " />
              </a>

              <a
                href="https://github.com/AnthoniaEfe"
                className=" mx-auto my-2"
              >
                <Github className="icon " />
              </a>

              <a
                href="mailto:anthoniaefe36@gmail.com"
                className=" mx-auto my-2"
              >
                <Gmail className="icon " />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
