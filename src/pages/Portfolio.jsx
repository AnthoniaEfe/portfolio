// import {useState} from 'react'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Portfolio() {
  return (
    <div className='font-body pt-20 w-full m-0 text-textblack'>
      <Carousel/>
      <ContactCTA/>
      <Footer/>
    </div>
  )
}
