import "./App.css";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import About from "./components/About"
import Stack from "./components/Stack"
import ProjectsSection from "./components/ProjectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Services from "./components/Services";
import useAnchorScroll from "./hooks/useAnchorScroll";
import TimelineScroll from "./components/TimelineScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
import { useEffect, useRef } from "react";
import gsap from "gsap";

// const sections = [
//   { year: "2018", content: "Started the journey" },
//   { year: "2019", content: "Built a strong foundation" },
//   { year: "2020", content: "Reached milestones" },
//   { year: "2021", content: "Expanded projects" },
// ];

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
//  <div className="absolute flex w-fit min-h-screen bg-inherit text-purple-light">
//       {/* Timeline Line SVG */}
//       <svg
//         className="fixed left-10 top-0 h-full w-20 text-purple-light"
//         viewBox="0 0 100 1200"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           ref={pathRef}
//           d="M 50 0 Q 50 300 50 600 T 50 1200"
//           stroke="white"
//           strokeWidth="4"
//         />
//       </svg>

//       {/* Sections */}
//       <div id="timeline-wrapper" className="ml-32 w-full">
//         {sections.map((sec, index) => (
//           <section
//             key={index}
//             className="min-h-screen flex flex-col justify-center items-start px-10 border-b "
//           >
     
//           </section>
//         ))}
//       </div>
//     </div>
  return (
    <div className="overflow-x-hidden overflow-y-auto relative ">
      <Nav/>
      <Banner/>
      <About />
      <Services/>
      <Stack />
      <ProjectsSection/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;