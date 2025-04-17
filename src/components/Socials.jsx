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
    <div className="">
      {socials.map((item, index)=>(
              <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        key={index}
        className=""
      >
          <FontAwesomeIcon icon={item.icon} />
      </a>
      ))}
    </div>

  );
}
