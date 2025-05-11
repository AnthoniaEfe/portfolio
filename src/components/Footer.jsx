import Socials from "./Socials";
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
    <a href="/">
    <img src={logo} alt="anthonia efe logo" className="h-12"/>
    </a>  
      <ul className="flex flex-col md:flex-row m-0 gap-4 justify-center items-center" role="menubar">
        {navItems.map((item, index) => (
          <li key={index} role="menuitem" className="cursor-pointer relative group inline-block">
            <a href={item.link} className='uppercase'>{item.text}</a> 
              <span className="absolute left-0 -bottom-2 h-0.5 bg-purple-light w-0 transition-all duration-300 group-hover:w-full"></span>
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
