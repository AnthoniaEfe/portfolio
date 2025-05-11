// import {useState} from 'react'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import ProjectsSection from "../components/ProjectsSection"

export default function Portfolio() {
  return (
    <div className=''>
      {/* <Carousel/> */}
      <ProjectsSection/>
      <ContactCTA/>
      <Footer/>
    </div>
  )
}
