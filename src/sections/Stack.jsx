
import { motion } from "framer-motion";
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"
import react from "../assets/reactjs.svg"
import html from "../assets/html.svg"
import python from "../assets/python.svg"
import tailwind from "../assets/tailwind.svg"
import js from "../assets/js.svg"
import css from "../assets/css2.svg"
import scss from "../assets/scss.svg"
import github from "../assets/github.svg"
import wp from  "../assets/wordpress.svg"
import canva from "../assets/canva.svg"
import figma from "../assets/figma.svg"

const icons = [
 { text:"React", src: react},
 { text:"TailwindCSS", src: tailwind},
 { text:"JavaScript", src: js},
 { text:"Figma", src:figma},
 { text:"Canva", src:canva},
 { text:"GitHub", src:github},
 { text:"WordPress", src:wp},
 { text:"HTML5", src:html},
 { text:"CSS3", src:css},
 { text:"SCSS", src:scss},
 { text:"Python", src:python},
]
export default function Stack() {
  const MotionSection = motion.section;
  return (
    <motion.div
    className='px-8 md:px-20 lg:px-24 py-8 font-mono items-left w-screen h-screen flex flex-col my-10 md:my-14'
  >
    <span className="flex justify-center items-center gap-4 my-8 " >
      <img src={leftBrace} alt="" className="h-10"/>
      My Tools
      <img src={rightBrace} alt="" className="h-10"/>
    </span>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-10 mx-auto my-4 justify-between items-center">
        {icons.map((icon, i)=>(
          <div key={i} className="border-[1px] border-gray-500 rounded-2xl px-4 py-4 gap-4 flex flex-col justify-between items-center" >
            <img src={icon.src} alt="" className="h-8 md:h-10"/>
            <p className="text-sm">{icon.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
