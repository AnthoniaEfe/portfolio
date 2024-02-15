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
      <img src={CSS} alt="css" className="skill-img" />
      <img src={Figma} alt="figma" className="skill-img" />
      <img src={Firebase} alt="firebase" className="skill-img" />
      <img src={Git} alt="git" className="skill-img" />
      <img src={HTML} alt="html" className="skill-img" />
      <img src={Javascript} alt="js" className="skill-img" />
      <img src={Tux} alt="linux" className="skill-img" />
      <img src={NodeJS} alt="nodejs" className="skill-img" />
      <img src={Reactlogo} alt="reactjs" className="skill-img" />
      <img src={Tailwind} alt="" className="skill-img" />
      <img src={TS} alt="ts" className="skill-img" />
    </div>
  );
}
