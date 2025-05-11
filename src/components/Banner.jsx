import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bannerImage from "../assets/banner-image.jpg"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {motion} from "framer-motion"


export default function Banner() {
  const MotionSection = motion.section;

  const TypewriterHeading = ({ text = "", speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (!text) return;
  
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [index, text, speed]);
  
    return (
      <motion.h1
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-5xl font-bold"
      >
        {displayedText}
        {index < text.length && <span className="animate-pulse text-purple-light">|</span>}
      </motion.h1>
    );
  };

  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}      
    animate={{ opacity: 1, y: 0 }}      
    transition={{ duration: 0.5 }}  
    className="md:flex-col gap-0 m-0 relative">
      <div className="w-full h-full p-0 m-0">
        <img src={bannerImage} alt="person with futuristic metavserse avatar mask" 
        className="w-auto object-center max-h-[500px] md:mr-[20%] md:my-1 md:ml-auto"/>
      </div>

      <div className="bg-white p-1 flex flex-col gap-8 justify-center items-start
       md:absolute left-8 md:left-15 top-28 md:-bottom-18 w-full md:max-w-[40%] h-fit">
          <TypewriterHeading text="Hey, I'm Anthonia Efe " />
        </div>

        <a className="solid-button flex" href="#about" >
          <motion.div 
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{ 
              y: 6, 
              transition: { type: "spring", stiffness: 300, duration:0.5 }   
            }}>
          <FontAwesomeIcon icon={faAngleDown} className="text-purple-light mr-6 h-10 w-fit"/>
          </motion.div>
          About Me
        </a>
   
    </motion.section>
  );
}
