import React from "react";

export default function Navbar() {
  return (
    <div className="bg-vesta-1 bg-opacity-10 flex items-venter justify-end w-screen px-2 md:px-4 py-1">
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
