import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bannerImage from "../assets/banner-image.jpeg"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"

export default function Banner() {
  return (
    <section className="p-8 pt-18 md:p-18 flex flex-col justify-center items center gap-0 m-0 relative">
      <div className="w-full h-full p-0 m-0">
        <img src={bannerImage} alt="person with futuristic metavserse avatar mask" 
        className="w-full object-cover h-4/6"/>
      </div>
      <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col gap-8 justify-center items-start
       md:absolute left-8 md:left-18 -bottom-8 md:-bottom-18 w-full md:w-3/5">
        <h1 className="font-dm-serif-text text-3xl md:text-4xl lg:text-5xl">Hey, I'm Anthonia Efe and I love building beautiful websites</h1>
        <a className="uppercase text-white bg-textblack py-3 pr-8 pl-6 w-fit" href="#about">
          <FontAwesomeIcon icon={faAngleDown} className="text-purple-light mr-6 h-10"/>
          About Me
        </a>
      </div>
    </section>
  );
}
