import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";

export default function Socials() {
  return (
    <div
      className="grid grid-cols-4 w-fit mx-auto px-4 
           justify-start items-start py-2 gap-8 md:gap-10 "
    >
      <a
        href="https://twitter.com/Anthonia_Efe"
        target="_blank"
        rel="noreferrer"
        className="grid-child  "
      >
        <Twitter className="icon " />
      </a>

      <a
        href="https://www.linkedin.com/in/anthoniaefe/"
        target="_blank"
        rel="noreferrer"
        className="grid-child  "
      >
        <Linkedin className="icon " />
      </a>

      <a
        href="https://github.com/AnthoniaEfe"
        target="_blank"
        rel="noreferrer"
        className="grid-child "
      >
        <Github className="icon " />
      </a>

      <a
        href="mailto:anthoniaefe36@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="grid-child "
      >
        <Gmail className="icon " />
      </a>
    </div>
  );
}
