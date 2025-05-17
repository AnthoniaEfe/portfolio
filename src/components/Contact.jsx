import React from 'react'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';
import {motion} from "framer-motion"
import RippleLink from './RippleLink';

export default function Contact() {
  const MotionDiv = motion.div;

  return (
      <div id="contact"
       className=' justify-around px-8 md:px-20 lg:px-24 gap-16 py-6 md:py-10 lg:py-20 flex flex-col items-left font-mono'>
        <h2 className='text-left'>Send a message</h2>
 
          <p className='md:max-w-[60%]'>
           Feel free to reach out—I’d love to hear from you! Whether you have a project in mind, a question, 
           or just want to say hello, you can contact me using the form below or via email. 
           I’ll do my best to get back to you as soon as possible. Let’s connect and create something great together!
          </p>

          <div className='flex flex-row gap-4 md:gap-8 i'>
            <RippleLink href="tel:08138238511">
              <div className='flex flex-row w-full h-full gap-4 items-center justify-center'> 
                <FontAwesomeIcon icon={faPhone}/> 
                <p>+234-813-823-8511</p>
            </div>
          </RippleLink>
        
        <RippleLink href="mailto:anthoniaefe36@gmail.com">
            <div className='flex flex-row w-full h-full gap-4 items-center justify-center'> 
          <FontAwesomeIcon icon={faEnvelope}/> 
          anthoniaefe36@gmail.com 
          </div>
        </RippleLink >
          </div>

       
       

          {/* <button className='solid-button flex '>
            Send message 
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
              ><FontAwesomeIcon icon={faChevronRight} className='text-purple-light ml-5'/>
              </motion.div>
              </button> */}
    
          <ContactForm/>
      
      </div>
  )
}
