import React from "react";

export default function Navbar() {
  return (
    <div
      className="bg-vesta-1 bg-opacity-10 flex items-venter rounded-t-lg
    justify-end w-screen px-2 md:px-6 py-1 md:py-2 backdrop-blur-sm"
    >
      <div>
        <a href="/" className="anchor">
          Resume
        </a>
        <a href="/" className="anchor">
          About
        </a>
        <a href="/" className="anchor">
          Contact
        </a>
      </div>
    </div>
  );
}
