import "./index.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
