import React from 'react'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className='page-styles '>
      <h1 className='capitalize my-8 p-8 md:p-18'>contact</h1>
      <section className='px-8 md:px-18 py-6 md:py-10 flex flex-col md:flex-row justify-between border-y-[1px] border-gray-200 items-center'>
        <div className='flex-1'>
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
        </div>

        <div className="w-px self-stretch bg-gray-200"></div>

        <div className='flex-1'>
          <ContactForm/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
