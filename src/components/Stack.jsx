
import { motion } from "framer-motion";
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"

const icons = [
 { text:"react", src: "../assets/left_brace.png"},
 { text:"react", src: "../assets/left_brace.png"},
 { text:"react", src: "../assets/left_brace.png"},
]
export default function Stack() {
  const MotionSection = motion.section;
  return (
    <motion.div
    className='px-8 md:px-20 lg:px-24 py-8 font-mono items-left w-screen h-screen flex flex-col '
  >
    <span className="flex justify-center items-center gap-4  " >
      <img src={leftBrace} alt="" className="h-10"/>
      My Tools
      <img src={rightBrace} alt="" className="h-10"/>
    </span>

      <div className="bg-yellow grid grid-cols-4 gap-4 ">
        {icons.map((icon, i)=>(
          <div key={i} className="border-[1px] border-textblack rounded-2xl p-8" >
            <img src={icon.src} alt=""/>
            <p>{icon.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
