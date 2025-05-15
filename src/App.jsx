import "./App.css";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import About from "./components/About"
import ContactCTA from "./components/ContactCTA"
import ProjectsSection from "./components/ProjectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto ">
      <Nav/>
      <Banner/>
      <hr></hr>
      <About />
      <Services/>
      <ContactCTA />
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;