import React from "react";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Link } from "../assets/link.svg";
import attendance from "../assets/attendance.png";
import healthybite from "../assets/healthybite.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <img src={healthybite} alt="" className="project-img" />
        <div className="project-text">
          <p className="grow">HealthyBite</p>

          <Github className="project-icon" />
    
          <a href="https://dev-accountability.pantheonsite.io/">      <Link className=" project-icon" /></a>
        </div>
      </div>

      <div className="project">
        <img src={attendance} alt="" className="project-img" />
        <div className="project-text">
          <p className="grow">Attendance System</p>

          <Github className="project-icon " />
          <Link className="project-icon " />
        </div>
      </div>

      <div className="project">
        <img src={attendance} alt="" className="project-img" />
        <div className="project-text">
          <p className="grow">Attendance System</p>

          <Github className=" project-icon " />
          <Link className="project-icon " />
        </div>
      </div>
    </div>
  );
}
