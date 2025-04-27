import About from "../components/About";
import Banner from "../components/Banner";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="page-styles">
      <Banner/>
      <About />
      <ContactCTA />
      <Footer/>
    </div>
  );
}

export default Home;