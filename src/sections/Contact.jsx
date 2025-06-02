import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../components/ContactForm';
import RippleLink from '../components/RippleLink';
import leftBrace from "../assets/left_brace.png"
import rightBrace from "../assets/right_brace.png"

export default function Contact() {

  return (
    <div id="contact"
      className='flex flex-col items-left font-mono my-20 md:my-50 justify-around w-full md:w-[80vw] mx-auto gap-8 md:gap-10 px-8 py-6 md:p-0'>

   <span className="flex justify-start items-center gap-4 my-8 " >
      <img src={leftBrace} alt="" className="h-10 md:h-14"/> 
      <h2 className='text-left text-textblack text-3xl md:text-5xl '>Say Hello!</h2>
      <img src={rightBrace} alt="" className="h-10 md:h-14"/>
    </span>
    
      <p className='md:max-w-[70%]'>
        Feel free to reach out—I’d love to hear from you! Whether you have a project in mind, a question, 
        or just want to say hello, you can contact me using the form below, via email or an SMS. 
        I’ll get back to you as soon as possible. Let’s connect and create something great together!
      </p>

      <div className='flex flex-row gap-4 md:gap-8 w-full md:w-fit'>
        <RippleLink href="tel:08138238511">
          <div className='flex flex-row w-full h-full gap-2 md:gap-4 items-center justify-center'> 
            <FontAwesomeIcon icon={faMessage} className='hidden md:block'/> 
            <p className='text-xs md:text-base'>08138238511</p>
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
