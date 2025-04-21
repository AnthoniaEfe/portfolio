// import {useState} from 'react'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Portfolio() {
  return (
    <div className='page-styles'>
      <Carousel/>
      <ContactCTA/>
      <Footer/>
    </div>
  )
}
