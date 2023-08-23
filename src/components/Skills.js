import React from "react";
import Git from "../assets/git.svg";
import Figma from "../assets/figma.svg";
import Firebase from "../assets/firebase.svg";
import Javascript from "../assets/javascript.svg";
import NodeJS from "../assets/nodejs.svg";
import Reactlogo from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Tux from "../assets/tux.svg";
import TS from "../assets/TS.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skill">
        <img src={CSS} alt="" className="skill-img" />
        CSS
      </div>{" "}
      <div className="skill">
        <img src={Figma} alt="" className="skill-img" />
        Figma
      </div>{" "}
      <div className="skill">
        <img src={Firebase} alt="" className="skill-img" />
        Firebase
      </div>{" "}
      <div className="skill">
        <img src={Git} alt="" className="skill-img" />
        Git
      </div>
      <div className="skill">
        <img src={HTML} alt="" className="skill-img" />
        HTML
      </div>
      <div className="skill">
        <img src={Javascript} alt="" className="skill-img" />
        Javascript
      </div>{" "}
      <div className="skill">
        <img src={Tux} alt="" className="skill-img" />
        Linux
      </div>{" "}
      <div className="skill">
        <img src={NodeJS} alt="" className="skill-img" />
        NodeJS
      </div>{" "}
      <div className="skill">
        <img src={Reactlogo} alt="" className="skill-img" />
        ReactJS
      </div>
      <div className="skill">
        <img src={Tailwind} alt="" className="skill-img" />
        TailwindCSS
      </div>
      <div className="skill">
        <img src={TS} alt="" className="skill-img" />
        TypeScript
      </div>
    </div>
  );
}
