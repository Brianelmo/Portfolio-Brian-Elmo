import React from "react";
import Button from "./Button";

function About() {
  return (
    <div id="About" className="text-center flex flex-col  font-poppins mt-20 lg:ml-60">   
     <div className=" flex justify-center">
        <h2 className="text-9xl uppercase opacity-5 absolute bg-text">About Me</h2>
        <p className="text-5xl capitalize relative top-10 font-bold border-b-2 border-blue-500 text-x">
          Know Me More
        </p>
      </div>
    <div className="md:grid md:grid-cols-2 md:mt-24 md:place-items-center md:place-content-center">
    <div className="mt-32 mb-20 flex flex-col items-center"> 
        <h3 className="text-3xl mb-4 font-bold">
          I'm <span className="text-blue-500">Brian Elmo,</span> a Front-End
          Developer
        </h3>
        <p className="w-11/12 leading-9">
          I am Brian Elmo, I am 20 years old. I am a developer who is starting
          his career as a Front-End Developer, enthusiastic about technology and
          learning. I have academic experience and personal projects that
          demonstrate the knowledge I have acquired throughout my programming
          learning. I am looking to grow as a programmer and face projects that
          put my knowledge to the test and exploit my level as a web programmer
          to the fullest.
        </p>
      </div>
      <div className="w-10/12 ml-10  mb-10">
        <div className="text-left">
          <ul className="mb-4">
            <li className="border-b-2 py-4">
              <span className="font-bold">Name</span>: Brian Nicolas Elmo
            </li>
            <li className="border-b-2  py-4">
              <span className="font-bold">Email</span>:{" "}
              <span className="text-blue-500">brianelmo14@gmail.com</span>
            </li>
            <li className="border-b-2 py-4">
              <span className="font-bold">Age</span>: 20
            </li>
            <li className="py-4">
              <span className="font-bold">From</span>: Buenos Aires, Argentina
            </li>
          </ul>
          <Button name="Download CV"></Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
