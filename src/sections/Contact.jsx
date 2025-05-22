import React from 'react'
import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../components/ContactForm';
import {motion} from "framer-motion"
import RippleLink from '../components/RippleLink';

export default function Contact() {
  const MotionDiv = motion.div;

  return (
    <div id="contact"
      className=' justify-around px-8 md:px-20 lg:px-24 gap-16 py-6 md:py-10 lg:py-20 flex flex-col items-left font-mono mt-30 mb-10'>
      <h2 className='text-left text-textblack text-3xl md:text-5xl '>Say Hello!</h2>

      <p className='md:max-w-[70%]'>
        Feel free to reach out—I’d love to hear from you! Whether you have a project in mind, a question, 
        or just want to say hello, you can contact me using the form below, via email or an SMS. 
        I’ll get back to you as soon as possible. Let’s connect and create something great together!
      </p>

      <div className='flex flex-row gap-4 md:gap-8 w-full md:w-fit'>
        <RippleLink href="tel:08138238511">
          <div className='flex flex-row w-full h-full gap-2 md:gap-4 items-center justify-center'> 
            <FontAwesomeIcon icon={faMessage} className='hidden md:block'/> 
            <p className='text-xs md:text-base'>081-38238511</p>
          </div>
        </RippleLink>
    
        <RippleLink href="mailto:anthoniaefe36@gmail.com">
          <div className='flex flex-row w-full h-full gap-2 md:gap-4 items-center justify-center'> 
            <FontAwesomeIcon icon={faEnvelope} className='hidden md:block'/> 
            <p className='text-xs md:text-base'> anthoniaefe36@gmail.com </p>
           
          </div>
        </RippleLink >
      </div>
        
      <ContactForm/>
    </div>
  )
}
