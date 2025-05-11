import aboutImage from "../assets/about-image.jpeg"
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"

export default function About() {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  return (
    <motion.section id="about"
    initial={{ opacity: 0, y: 50 }}     
    animate={{ opacity: 1, y: 0 }}       
    transition={{ duration: 0.5 }}  >
        <div className="w-full md:w-4/5 h-full ">
          <img src={aboutImage} alt="w-full h-full object-cover"/>
        </div>

        <div className="w-full h-full flex flex-col justify-around items-start gap-4 md:gap-10 p-0">
          <h2> About me </h2>
          <p className=" ">
          Hi! I'm Anthonia, a software developer with a passion for creating
          beautiful and functional websites. I have a strong foundation in
          JavaScript and React. I am currently learning new a helpful
          technologies as they roll out. When I'm not coding you'd find me
          enjoying nature with friends or playing games 😊 Feel free to{" "}
          <a
           href="/contact" className="text-purple-light hover:underline">
            contact me
          </a>{" "}
            me if you have any questions or just want to chat!
          </p>
          <a className="solid-button flex"
            href="/portfolio">
              <motion.div 
                   animate={{
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    x: 6, 
                    transition: { type: "spring", stiffness: 300, duration:0.5 }   
                  }}
              >
                <FontAwesomeIcon icon={faAnglesRight} className="text-purple-light mr-6 h-10"/>
              </motion.div>
           
            Go to portfolio
          </a>
          <hr></hr>
        </div>
    </motion.section>
  );
}
