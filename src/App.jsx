import "./App.css";

// Components
import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import TabSocials from "./components/TabSocials";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-roboto text-textblack
    w-full h-screen overflow-y-auto overflow-x-hidden relative ">
      <Nav />
      <TabSocials />
      <Banner />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;