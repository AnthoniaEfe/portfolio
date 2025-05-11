import { faGithub, faXTwitter, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socials =  [
 {icon: faGithub, link: "https://twitter.com/Anthonia_Efe"},
 {icon: faXTwitter, link: "https://twitter.com/Anthonia_Efe"},
 {icon: faLinkedinIn, link: "https://twitter.com/Anthonia_Efe"},
 {icon: faInstagram, link: "https://twitter.com/Anthonia_Efe"} 
]

export default function Socials() {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
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
  );
}
