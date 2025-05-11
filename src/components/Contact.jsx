import React from 'react'
import { faPhone, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';
import {motion} from "framer-motion"

export default function Contact() {
  const MotionDiv = motion.div;

  return (
      <section id="contact"
       className='px-8 md:px-18 py-6 md:py-10 flex flex-col md:flex-row justify-between border-y-[1px] border-gray-200 items-center'>
        <div className='flex-1 flex flex-col justify-center items-start gap-8'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laborum doloremque qui recusandae id est ipsum omnis dicta quibusdam, 
            enim molestiae odio beatae non dolor eaque quasi voluptatum quae quia excepturi.
          </p>
          <span>
            <FontAwesomeIcon icon={faPhone}/> 
            <p>+234 8138238511</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope}/> 
            <a href="mailto:anthoniaefe36@gmail.com">anthoniaefe36@gmail.com</a>
          </span>

          <button className='solid-button flex '>
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
              </button>
        </div>

        <div className="w-px self-stretch bg-gray-200"></div>

        <div className='flex-1'>
          <ContactForm/>
        </div>
      </section>
  )
}
