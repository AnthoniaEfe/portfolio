import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../components/ContactForm';
import RippleLink from '../components/RippleLink';
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"
import * as motion from "motion/react-client"

export default function Contact() {
  const MotionDiv = motion.div;

  return (
    <div id="contact"
      className='flex flex-col items-left font-mono my-15 md:my-35 justify-around w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 py-6 md:p-0'>

   <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
        }}
      className="flex justify-start items-center gap-4 my-8 " >
      <img src={leftBrace} alt="" className="h-10 md:h-14"/> 
      <h2 className='text-left text-textblack text-3xl md:text-5xl '>Say Hello!</h2>
      <img src={rightBrace} alt="" className="h-10 md:h-14"/>
    </motion.span>
    
      <motion.p  initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='md:max-w-[70%]'>
        Feel free to reach out—I’d love to hear from you! Whether you have a project in mind, a question, 
        or just want to say hello, you can contact me using the form below, via email or an SMS. 
        I’ll get back to you as soon as possible. Let’s connect and create something great together!
      </motion.p>

      <motion.div 
       initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className=' w-full '>
    
        <RippleLink href="mailto:anthoniaefe36@gmail.com">
          <div className='flex flex-row w-full h-full gap-2 md:gap-4 items-center justify-center'> 
            <FontAwesomeIcon icon={faEnvelope} className='hidden md:block'/> 
            <p className='text-xs md:text-base'> anthoniaefe36@gmail.com </p>
           
          </div>
        </RippleLink >
      </motion.div>
        
      <ContactForm/>
    </div>
  )
}
