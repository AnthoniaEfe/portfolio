import aboutImage from "../assets/about-image.jpeg"
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      className="bg-off-white p-8 pt-18 md:p-18 m-0 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 "
      id="about"
    >
        <div className="w-full md:w-4/5 h-full ">
          <img src={aboutImage} alt="w-full h-full object-cover"/>
        </div>

        <div className="w-full h-full flex flex-col justify-around items-start gap-4 md:gap-10 p-0">
          <hr className="w-full"></hr>
          <h2 className="font-dm-serif-text text-2xl md:text-3xl lg:text-4xl"> About me </h2>
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
          <Link className="uppercase bg-textblack text-white py-3 pr-8 pl-6 w-fit"
            to="/portfolio">
            <FontAwesomeIcon icon={faAnglesRight} className="text-purple-light mr-6 h-10"/>
            Go to portfolio
          </Link>
          <hr className="w-full"></hr>
        </div>
    </section>
  );
}
