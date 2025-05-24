import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin, MotionPathPlugin } from "gsap/all";
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"
import { faGithub, faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const socials =  [
 {icon: faGithub, link: "https://github.com/AnthoniaEfe"},
 {icon: faXTwitter, link: "https://twitter.com/Anthonia_Efe"},
 {icon: faLinkedinIn, link: "https://www.linkedin.com/in/anthoniaefe/"},
 {icon: faInstagram, link: "https://www.instagram.com/anthonia__efe/"} 
]
const messages = [
  "Software developer ",
  "Front End Developer",
  // "Budding mobile developer ",
  "Web Designer ",
  "Web Developer",
  "Mechatronics Engineer ",
];

export default function TypewriterScroll() {
  const sectionRef = useRef(null);
  const MotionDiv = motion.div;
  const textRef = useRef(null);


  useEffect(() => {
    let currentIndex = 0;
    let chars = [];
    const typeDuration = 0.1;
    const pause = 1;
    const eraseDuration = 0.05;

    const loop = () => {
      const message = messages[currentIndex];
      const tl = gsap.timeline({
        onComplete: () => {
          currentIndex = (currentIndex + 1) % messages.length;
          loop();
        },
      });

      // Split message into characters
      chars = message.split("");

      // Clear text
      gsap.set(textRef.current, { textContent: "" });

      // Typing animation
      chars.forEach((char, i) => {
        tl.to(textRef.current, {
          textContent: chars.slice(0, i + 1).join(""),
          duration: typeDuration,
          ease: "none",
        });
      });

      // Pause
      tl.to({}, { duration: pause });

      // Backspacing animation
      chars.slice().reverse().forEach((_, i) => {
        tl.to(textRef.current, {
          textContent: chars.slice(0, chars.length - i - 1).join(""),
          duration: eraseDuration,
          ease: "none",
        });
      });

      // Pause again
      tl.to({}, { duration: 0.5 });
    };

    loop();
  }, []);
  
  return (
    <section
     id="banner"
      ref={sectionRef}
      className="h-[60vh] lg:h-screen flex flex-col items-center justify-center bg-off-white relative"
    >
      {/* heading */}
      <h1 className="font-dm-serif-text">Hi, I'm Anthonia Efe</h1>

      {/* description */}
      <div className="flex items-center justify-center gap-4 ">
          <img src={leftBrace} alt="open curly brace" className="h-16"/>
          <span ref={textRef} className="text-textblack font-mono whitespace-nowrap animate-blink border-white text-wrap px-2"> </span>   
          <img src={rightBrace} alt="close curly brace"  className="h-16"/>
      </div>

      {/* social links */}
      <div className="absolute md:flex md:flex-col top-[40%] right-10 hidden gap-4 justify-between items-center h-auto w-fit">
        {socials.map((item, index)=>(
          <div   key={index}
          className="border-textblack border-[1px] rounded-full px-3 py-1 hover:border-2 box-border">
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="hover:cursor:pointer hover:scale-110 md:text-xl active:scale-110 focus:scale-110 text-offwhite"
          >
            <FontAwesomeIcon icon={item.icon} className="text-offwhite"/>
          </a>
          </div>
        ))}
      </div>

      {/* jump to top button */}
        <a className="fixed bottom-4 right-10 z-10 hidden md:block "
          href="#banner">
            <motion.div 
                  animate={{
                  y: [0, -4, 0],
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
                }}
            >
              <FontAwesomeIcon icon={faChevronCircleUp} className=" text-purple-light rounded-full p-0 drop-shadow-2xl 
             w-10 text-[30px] hover:scale-110 transition duration-300"/>
            </motion.div>
        </a>

    </section>
  );
}


