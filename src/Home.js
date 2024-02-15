// Components
import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import TabSocials from "./components/TabSocials";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
// Assets
import wave from "./assets/wave.png";

export default function Home() {
  return (
    <div
      className=" 
     w-screen h-screen text-black-600-cover overflow-y-auto
     overflow-x-hidden relative dark:bg-vesta-9 dark:text-gray-50
      "
    >
      <Nav />
      <TabSocials />
      <Banner />
      <About />
      <Projects />

      <img
        src={wave}
        alt=""
        className="h-10 md:h-1/6 w-full mt-2 md:mt-6 mb-0"
      />
      <Footer />
    </div>
  );
}
