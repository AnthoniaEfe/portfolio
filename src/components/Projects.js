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
          <p className="grow">Attendance System</p>

          <Github className="grow-0 mr-2" />
          <Link className="grow-0 mr-2" />
        </div>
      </div>

      <div className="project">
        <img src={wave} alt="" className="project-img" />
        <div className="project-text">
          <p className="grow">Attendance System</p>

          <Github className="grow-0 mr-2" />
          <Link className="grow-0 mr-2" />
        </div>
      </div>

      <div className="project">
        <img src={wave} alt="" className="project-img" />
        <div className="project-text">
          <p className="grow">Attendance System</p>

          <Github className="grow-0 mr-2" />
          <Link className="grow-0 mr-2" />
        </div>
      </div>
    </div>
  );
}
