
import { motion } from "framer-motion";
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"


export default function Stack() {
  const MotionSection = motion.section;
  return (
    <motion.section
    className='px-8 md:px-20 lg:px-24 py-8 font-mono items-left w-screen h-screen'
  >
    <span className="flex justify-center items-center gap-4  " >
      <img src={leftBrace} alt="" className="h-10"/>
      My Tools
      <img src={rightBrace} alt="" className="h-10"/>
    </span>

    </motion.section>
  )
}
