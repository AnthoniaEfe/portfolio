import { faGithub, faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/logo-footer.png"

// const navItems = [
//   {text:'home', link:'/'},
//   {text:'portfolio', link:'/portfolio'},
//   {text:'contact me', link:'/contact'}
// ];

const socials =  [
 {icon: faGithub, link: "https://github.com/AnthoniaEfe"},
 {icon: faXTwitter, link: "https://twitter.com/Anthonia_Efe"},
 {icon: faLinkedinIn, link: "https://www.linkedin.com/in/anthoniaefe/"},
 {icon: faInstagram, link: "https://www.instagram.com/anthonia__efe/"} 
]

export default function Footer() {
  return (
    <footer>
    
    <a href="/">
    <img src={logo} alt="anthonia efe logo" className="h-12"/>
    </a>  
      {/* <ul className="flex flex-col md:flex-row m-0 gap-4 justify-center items-center" role="menubar">
        {navItems.map((item, index) => (
          <li key={index} role="menuitem" className="cursor-pointer relative group inline-block">
            <a href={item.link} className='uppercase'>{item.text}</a> 
              <span className="absolute left-0 -bottom-2 h-0.5 bg-purple-light w-0 transition-all duration-300 group-hover:w-full"></span>
          </li>))}
      </ul> */}
      <div className='w-full h-full flex-col-reverse md:block justify-center items-center gap-8'>
        <p className="text-xs tracking-wider ">
        &copy; {new Date().getFullYear()} Anthonia Efe
      </p>{" "}

      <div className="flex gap-4 justify-center items-center">
      {socials.map((item, index)=>(
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={index}
          className="hover:cursor:pointer hover:scale-110 md:text-xl active:scale-110 focus:scale-110"
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
      </div>
    </div>

      
    
    </footer>
  );
}
