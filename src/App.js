import "./styles.css";

import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
