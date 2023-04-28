import { useState } from "react";
import Nav from "./components/Nav";  
import Hero from "./components/Hero"
import About from "./components/About" 
import Education from "./components/Education"; 
import Proyects from "./components/Proyects"; 
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App font-poppins">
      <Nav/> 
      <Hero/> 
      <About/> 
      <Education/> 
      <Proyects/> 
      <Contact/>
    </div>
  );
}

export default App;
