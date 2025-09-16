import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <>
      <Navbar name="Bharath Reddy"/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      {/* <Contact /> */}
      <Footer />
    </>
  );
  
}

export default App;
