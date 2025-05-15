import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin, MotionPathPlugin } from "gsap/all";
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"
import { faGithub, faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const socials =  [
 {icon: faGithub, link: "https://github.com/AnthoniaEfe"},
 {icon: faXTwitter, link: "https://twitter.com/Anthonia_Efe"},
 {icon: faLinkedinIn, link: "https://www.linkedin.com/in/anthoniaefe/"},
 {icon: faInstagram, link: "https://www.instagram.com/anthonia__efe/"} 
]

export default function TypewriterScroll() {
  const sectionRef = useRef(null);
  const [text, setText] = useState("");
  const message = "Hii, I'm Anthonia Efe!";
  const speed = 100; // typing speed
  const delay = 300; // delay after scroll in
  const MotionDiv = motion.div;

  useEffect(() => {
    let timeout;
    let index = 0;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true, // trigger only once
      onEnter: () => {
        timeout = setTimeout(() => {
          type();
        }, delay);
      },
    });

    function type() {
      if (index < message.length) {
        setText((prev) => prev + message.charAt(index));
        index++;
        timeout = setTimeout(type, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, []);

  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.fromTo(
        ".plane",
        { scale: 0.6 },
        {
          duration: 4,
          scale: 1,
          motionPath: {
            path: ".mp",
            align: ".mp",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        },
        0
      )
        .to(svgRef.current, { duration: 0.7, opacity: 1 }, 0.25)
        .from(".mp", { duration: 3.8, drawSVG: 0 }, 0.28)
        .to(".mp", { duration: 2, drawSVG: "94% 94%", ease: "power2" }, "-=2")
        .to(svgRef.current, { duration: 0.7, opacity: 0 }, "-=0.9");
    }, svgRef); // context scoped to svgRef

    return () => ctx.revert();
  }, []);


  return (
    <section
     id="banner"
      ref={sectionRef}
      className="h-[60vh] lg:h-screen flex items-center justify-center bg-off-white relative"
    >

      {/* animated plane */}
      <div className=" sm:h-[50%] md:h-[40%] lg:h-[80%] w-screen absolute top-10 left-0 ">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-40 -180 1250 1100"
        className="w-[80%] max-w-[750px] opacity-0"
      >
        <path
          className="mp"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="4"
          d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
        />
        <g className="plane">
          <path
            fill="url(#grad)"
            opacity="0.3"
            d="m82.8 35 215.9 94.6L79 92l3.8-57Z"
          />
          <path
            fill="url(#grad)"
            d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z"
          />
          <path
            fill="url(#grad)"
            opacity="0.3"
            d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z"
          />
          <path
            fill="url(#grad)"
            d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z"
          />
        </g>

        <defs>
          <linearGradient
            id="grad"
            x1="154"
            x2="160"
            y1="49"
            y2="132"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#36025F" />
            <stop offset="1" stopColor="#9112eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* heading */}
      <h1 className="text-textblack text-xl md:text-2xl lg:text-5xl font-mono whitespace-nowrap border-r-2 border-white pr-2 animate-blink text-wrap">
        {text}
      </h1>

      {/* social links */}
      <div className="absolute md:flex md:flex-col top-[40%] right-10 hidden gap-4 justify-center items-center h-auto w-fit">
      {socials.map((item, index)=>(
        <div   key={index}
        className="border-textblack border-[1px] rounded-full px-2 py-1 hover:border-2 box-border">
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
      <a className="fixed bottom-6 right-10 z-10 hidden md:block"
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
            <FontAwesomeIcon icon={faChevronCircleUp} className=" text-purple-light w-10 text-[30px] hover:scale-110 transition duration-300"/>
          </motion.div>
      </a>

    </section>
  );
}


