import { Link } from 'react-router-dom'
import HorizontalLine from './HorizontalLine'

export default function ContactCTA() {
  return (
    <section className='bg-off-white  md:px-20 md:py-24 px-6 py-12 p-8 m-0 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 '>
      <h2 className="font-dm-serif-text text-2xl md:text-3xl lg:text-4xl">Like what you see? </h2>
       <HorizontalLine className='hidden md:block w-[30%]'/>
      <Link to="/contact" className="uppercase border-2 border-textblack py-3 pr-8 pl-6 w-fit">Contact Me</Link>
    </section>
  )
}
