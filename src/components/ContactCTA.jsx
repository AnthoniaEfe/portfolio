import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


export default function ContactCTA() {
  const MotionSection = motion.section;
  return (
    <motion.section
    className='justify-between'
  >
      <h3>Like what you see? </h3>
       <hr className='hidden md:block w-[30%]'></hr>
      <Link to="/contact" className="hollow-button">Contact Me</Link>
    </motion.section>
  )
}
