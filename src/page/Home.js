import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-vesta-10 via-vesta-9 to-vesta-9 w-scrren h-screen overflow-hidden p-16">
      <Navbar className="fixed" />
      <div
        className="flex-col items-center justify-center
      "
      >
        <h1
          className="text-white text-4xl font-bold m-8
      "
        >
          Hi, I'm{" "}
          <a
            href="https://twitter.com/Anthonia_Efe"
            target="_blank"
            rel="noreferrer"
            className="underline hover:scale-120 underline-offset-2 "
          >
            Anthonia
          </a>
        </h1>

        <p className="text-xl text-white">
          A software developer, web designer and makeup artist
        </p>

        <div className="flex gap-16 text-white font-bold">
          <a href="https://twitter.com/Anthonia_Efe">T</a>
          <a href="https://www.linkedin.com/in/anthoniaefe/">L</a>
          <a href="https://github.com/AnthoniaEfe">G</a>
          <a href="mailto:anthoniaefe36@gmail.com">M</a>
        </div>
      </div>
    </div>
  );
}
