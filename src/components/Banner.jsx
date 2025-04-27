import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bannerImage from "../assets/banner-image.jpeg"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {motion} from "framer-motion"

export default function Banner() {
  const MotionSection = motion.section;

  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}      
    animate={{ opacity: 1, y: 0 }}      
    transition={{ duration: 0.5 }}  
    className="md:flex-col gap-0 m-0 relative">
      <div className="w-full h-full p-0 m-0">
        <img src={bannerImage} alt="person with futuristic metavserse avatar mask" 
        className="w-full object-cover h-4/6"/>
      </div>
      <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col gap-8 justify-center items-start
       md:absolute left-8 md:left-18 -bottom-8 md:-bottom-18 w-full md:w-3/5">
        <h1>Hey, I'm Anthonia Efe and I love building beautiful websites</h1>
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
      </div>
    </motion.section>
  );
}
