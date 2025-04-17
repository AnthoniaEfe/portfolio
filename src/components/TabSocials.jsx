import React from "react";
import Socials from "./Socials";

export default function TabSocials() {
  return (
    <div
      id="socials"
      className="bg-purple-dark border-purple-dark rounded-2xl border-2 
    w-fit h-fit flex-col p-2 pl-3 gap-2 fixed -left-3 top-1/4 hidden md:block"
    >
    <Socials className="flex flex-col"/>
    </div>
  );
}
