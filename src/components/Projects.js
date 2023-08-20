import React from "react";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Link } from "../assets/link.svg";
import wave from "../assets/pilaf.jpg";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <img src={wave} alt="" className="project-img" />
        <div className="project-text">
          <p>Attendance System</p>
          <>
            {" "}
            <Github />
            <Link />
          </>
        </div>
      </div>
      <div className="project">
        <img src={wave} alt="" className="project-img" />
        <div className="project-text">
          <p>Attendance System</p>
          <>
            {" "}
            <Github />
            <Link />
          </>
        </div>
      </div>
      <div className="project">
        <img src={wave} alt="" className="project-img" />
        <div className="project-text">
          <p>Attendance System</p>
          <>
            {" "}
            <Github />
            <Link />
          </>
        </div>
      </div>
    </div>
  );
}
