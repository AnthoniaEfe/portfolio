import { faGithub, faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/logo-footer.png"

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

      <div className=" w-fit flex flex-row gap-4 justify-center items-center">
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

       <p className="text-xs tracking-tight w-fit">
        &copy; {new Date().getFullYear()} Anthonia Efe
      </p>{" "}
    </footer>
  );
}
