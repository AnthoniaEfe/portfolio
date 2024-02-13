// Components
import Socials from "./components/Socials";

import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import TabSocials from "./components/TabSocials";
import Banner from "./components/Banner";

// Assets
import wave from "./assets/wave.png";

export default function Home() {
  // use default system appearance
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  return (
    <div
      className=" 
     w-screen h-screen text-black-600-cover overflow-y-auto
     overflow-x-hidden relative 
     dark:bg-vesta-9 dark:text-gray-50
      "
    >
      <Nav />

      <TabSocials />

      <Banner />

  

      <About />

      <section id="projects">
        {" "}
        <Projects />
      </section>

      <img
        src={wave}
        alt=""
        className="h-10 md:h-1/6 w-full mt-2 md:mt-6 mb-0"
      />
      <section id="footer" className="my-0 w-full bg-atsev-1">
        <Socials />
        <p className="font-mali mt-2 md:mt-4">
          &copy; {new Date().getFullYear()} Anthonia Efe
        </p>{" "}
      </section>
    </div>
  );
}
