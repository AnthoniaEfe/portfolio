import React from "react";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

// import {resume} from "../assets/"

export default function Home() {
  return (
    <div
      className="relative bg-gradient-to-b from-vesta-10 via-vesta-9 to-vesta-9
     w-screen h-screen overflow-x-hidden text-white bg-stars bg-cover 
      bg-scroll bg-opacity-10 bg-blend-darken 
     "
    >
      <main className="px-12 py-8 ">
        <div
          className="flex-col items-center justify-center
      "
        >
          <p
            className=" text-2xl md:text-4xl font-bold m-2 md:m-8
      "
          >
            Hi, I'm{" "}
            <a
              href="https://twitter.com/Anthonia_Efe"
              target="_blank"
              rel="noreferrer"
              className=" transform hover:underline hover-md:text-5xl transition-transform underline-offset-2 "
            >
              Anthonia
            </a>
          </p>

          <div className="w-11/12 md:w-5/6 h-full border-2 rounded-xl shadow-vesta-4 shadow-lg border-vesta-6 mx-auto my-8 p-6 md:p-8 justify-center items-center">
            {/* <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="  "
            >
              RESUME
            </a> */}
            <p className="text-sm md:text-xl mb-4 text-justify">
              👋🏾 Nulla et ipsum velit voluptate occaecat culpa est sunt. Ipsum
              id adipisicing consectetur magna. Voluptate deserunt tempor ex
              duis cupidatat magna nulla ullamco. Veniam sint nostrud nisi
              excepteur laboris labore voluptate ipsum anim et. Nulla et ipsum
              velit voluptate occaecat culpa est sunt. Ipsum id adipisicing
              consectetur magna. Voluptate deserunt tempor ex duis cupidatat
              magna nulla ullamco. Veniam sint nostrud nisi excepteur laboris
              labore voluptate ipsum anim et. Nulla et ipsum velit voluptate
              occaecat culpa est sunt. Ipsum id adipisicing consectetur magna.
              Voluptate deserunt tempor ex duis cupidatat magna nulla ullamco.
              Veniam sint nostrud nisi excepteur laboris labore voluptate ipsum
              anim et. Nulla et ipsum velit voluptate occaecat culpa est sunt.
              Ipsum id adipisicing consectetur magna. Voluptate deserunt tempor
              ex duis cupidatat magna nulla ullamco. Veniam sint nostrud nisi
              excepteur laboris labore voluptate ipsum anim et. Nulla et ipsum
              velit voluptate occaecat culpa est sunt. Ipsum id adipisicing
              consectetur magna. Voluptate deserunt tempor ex duis cupidatat
              magna nulla ullamco.
            </p>

            <footer className=" py-2 px-4 flex flex-col justify-center items-center">
              <div
                className="grid grid-cols-4 w-full 
           justify-center items-center gap-8 py-2 px-4 md:px-16"
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
        </div>
      </main>
    </div>
  );
}
