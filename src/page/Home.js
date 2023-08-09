import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-vesta-10 via-vesta-9 to-vesta-8 w-scrren h-screen overflow-hidden p-16">
      <Navbar className="fixed" />

      <h1 className="text-white text-4xl font-bold">
        Hi, I'm{" "}
        <a
          href="https://twitter.com/Anthonia_Efe"
          target="_blank"
          rel="noreferrer"
          className="underline hover:scale-110 transform underline-offset-2"
        >
          Anthonia
        </a>
      </h1>
    </div>
  );
}
