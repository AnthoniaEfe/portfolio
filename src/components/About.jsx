import aboutImage from "../assets/about-image.jpeg"
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
        <div className="w-full md:w-4/5 h-full ">
          <img src={aboutImage} alt="w-full h-full object-cover"/>
        </div>

        <div className="w-full h-full flex flex-col justify-around items-start gap-4 md:gap-10 p-0">
         <hr></hr>
          <h2> About me </h2>
          <p className=" ">
          Hi! I'm Anthonia, a software developer with a passion for creating
          beautiful and functional websites. I have a strong foundation in
          JavaScript and React. I am currently learning new a helpful
          technologies as they roll out. When I'm not coding you'd find me
          enjoying nature with friends or playing games 😊 Feel free to{" "}
          <Link
           to="/contact" className="text-purple-light hover:underline">
            contact me
          </Link>{" "}
            me if you have any questions or just want to chat!
          </p>
          <Link className="solid-button"
            to="/portfolio">
            <FontAwesomeIcon icon={faAnglesRight} className="text-purple-light mr-6 h-10"/>
            Go to portfolio
          </Link>
          <hr></hr>
        </div>
    </section>
  );
}
