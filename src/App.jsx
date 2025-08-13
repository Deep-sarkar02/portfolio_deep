import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Exp from "./sections/Exp";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      {/*<Experience/>*/}
      <Exp/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
