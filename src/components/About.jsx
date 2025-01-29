import React from "react";
import Button from "./Button";

function About() {
  return (
    <div
      id="About"
      className="text-center flex flex-col  font-poppins mt-20 lg:ml-60"
    >
      <div className=" flex justify-center">
        <h2 className="text-9xl uppercase opacity-5 absolute bg-text">
          About Me
        </h2>
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
            I am Brian Elmo, I am 21 years old. I am a creative and
            solution-oriented front-end developer with a strong foundation in
            modern web technologies. I am passionate about finding innovative
            approaches to solving problems and creating intuitive web
            applications. My focus is on understanding user needs and
            translating them into effective digital experiences. I am always
            eager to learn and grow, both personally and professionally, and I
            strive to collaborate with teams to develop successful projects.
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
                <span className="font-bold">Age</span>: 21
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
