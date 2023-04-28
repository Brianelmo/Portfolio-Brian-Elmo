import React from "react"; 
import '../css/index.css'

function Hero() {
  return (
    <div id="Home" className="h-90 text-white lg:ml-60">
      <div className="w-full h-screen bg-[url('/src/images/laptop.jpg')] bg-cover bg-center opacity-90 flex justify-center items-center bg-fixed">
        <div className="text-center flex flex-col items-center gap-8 font-poppins tracking-widest">
          <p className="text-4xl font-semibold">Welcome</p>
          <h1 className="text-5xl font-semibold text-blue-500">I'm Brian Elmo</h1>
          <h2 className="front text-3xl font-bold">Front-End Developer.</h2> 
          <a href="#Contact" className="py-4 px-7 border-2 border-blue-500 rounded-full text-white-500 hover:bg-blue-400 hover:text-white font-bold transition-all delay-75 hover:border-transparent">Contact Me</a>
        </div> 
      </div>
    </div>
  );
}

export default Hero;
