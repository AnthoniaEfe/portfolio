import Socials from "./Socials";
import { Link } from "react-router-dom";
import logo from "../assets/logo-footer.png"

const navItems = [
  {text:'home', link:'/'},
  {text:'portfolio', link:'/portfolio'},
  {text:'contact me', link:'/contact'}
];

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center w-full">
    <Link to="/">
    <img src={logo} alt="anthonia efe logo" className="h-16"/>
    </Link>  
      <ul className="flex flex-col md:flex-row m-0 gap-4 justify-center items-center" role="menubar">
        {navItems.map((item, index) => (
          <li key={index} role="menuitem">
            <Link to={item.link} className='uppercase decoration-purple-light decoration-4 hover:underline underline-offset-12 
            transition duration-300'>{item.text}</Link> 
          </li>))}
      </ul>
      <Socials className="flex flex-row  gap-4 "/>
      </div>
      <p className="text-xs tracking-wider mt-6">
        &copy; {new Date().getFullYear()} Anthonia Efe
      </p>{" "}
    </footer>
  );
}
