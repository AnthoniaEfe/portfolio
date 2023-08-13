import React from "react";
import Navbar from "../components/Navbar";

import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

export default function Home() {
  return (
    <div
      className="relative bg-gradient-to-b from-vesta-10 via-vesta-9 to-vesta-9
     w-screen h-screen overflow-x-hidden text-white bg-stars bg-cover 
      bg-scroll bg-opacity-10 bg-blend-darken 
     "
    >
      <Navbar className="sticky top-0 left-0" />{" "}
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
            <p className="text-sm md:text-xl mb-4 text-justify">
              Nulla et ipsum velit voluptate occaecat culpa est sunt. Ipsum id
              adipisicing consectetur magna. Voluptate deserunt tempor ex duis
              cupidatat magna nulla ullamco. Veniam sint nostrud nisi excepteur
              laboris labore voluptate ipsum anim et. Nulla et ipsum velit
              voluptate occaecat culpa est sunt. Ipsum id adipisicing
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
          </div>
        </div>
      </main>
      <footer
        className=" bottom-0 left-0 right-0 p-4 bg-vesta-9 
      flex flex-col justify-center items-center bg-opacity-70 rounded-t-lg"
      >
        <p className="mb-2 text-lg md:text-xl">Contact me:</p>
        {/*  hidden, hide p in modbile view */}
        <div
          className="grid grid-cols-4 w-full md:gap-12
           justify-center items-center gap-8 py-2 px-4 md:px-16
           
           "
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
  );
}
