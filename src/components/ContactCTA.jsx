import { Link } from 'react-router-dom'

export default function ContactCTA() {
  return (
    <section classname='justify-between'>
      <h3>Like what you see? </h3>
       <hr className='hidden md:block w-[30%]'></hr>
      <Link to="/contact" className="hollow-button">Contact Me</Link>
    </section>
  )
}
