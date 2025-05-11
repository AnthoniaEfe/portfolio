import "./App.css";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import About from "./components/About"
import ContactCTA from "./components/ContactCTA"
import ProjectsSection from "./components/ProjectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUpLong} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto relative">
      <Nav/>
      <Banner/>    
      <a href="#banner" className="w-4 h-4 bg-purple-300 p-4 fixed bottom-0 right-0 z-20 rounded-2xl mr-16 mb-8
      flex items-center justify-center transition duration-1000">
        <FontAwesomeIcon icon={faUpLong} />
      </a>
      <About />
      <ContactCTA />
      <ProjectsSection/>
      <Contact/>
      <Footer/>


    </div>

  );
}

export default App;