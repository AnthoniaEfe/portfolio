import About from "../components/About";
import Banner from "../components/Banner";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="font-body text-textblack w-full h-screen overflow-y-auto overflow-x-hidden relative ">
      <Banner />
      <About />
      <ContactCTA />
      <Footer/>
    </div>
  );
}

export default Home;