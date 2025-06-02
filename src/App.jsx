import "./App.css";
import Banner from "./sections/Banner"
import Nav from "./sections/Nav"
import About from "./sections/About"
import Stack from "./sections/Stack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer";
import Project from "./sections/Project";
import Service from "./sections/Service";
import LoadingWave from "./components/LoadingWave";
import useAnchorScroll from "./hooks/useAnchorScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useAnchorScroll();
   const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Animate the loader out
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setIsLoading(false),
      });
    }, 2000); // Simulated 2-second loading

    return () => clearTimeout(timeout);
  }, []);



  return (
    <>
      {isLoading && (
        <div ref={loaderRef} className="fixed inset-0 z-50 bg-off-white flex items-center justify-center">
          <LoadingWave />
        </div>
          )} 

      {!isLoading && <div className="overflow-x-hidden overflow-y-auto relative ">
        <Nav/>
        <Banner/>
        <About />
        <Service/>
        <Stack />
        <Project/>
        <Contact/> 
        <Footer/>
      </div>}

    </>
  );
}

export default App;