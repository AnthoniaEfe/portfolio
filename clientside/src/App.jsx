import "./App.css";
import Banner from "./sections/Banner"
import Nav from "./sections/Nav"
import About from "./sections/About"
import Stack from "./sections/Stack"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import useAnchorScroll from "./hooks/useAnchorScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useAnchorScroll();
 const pathRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pathRef.current,
      { drawSVG: "0% 0%" },
      {
        drawSVG: "0% 100%",
        scrollTrigger: {
          trigger: "#timeline-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-auto relative ">
      <Nav/>
      <Banner/>
      <About />
      <Services/>
      <Stack />
      <Projects/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;