import React, { useState } from "react";
import List from "./List";

function Nav() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="">
      <nav className="flex justify-between p-6 bg-slate-900 text-white lg:flex-col lg:w-60 lg:h-screen lg:fixed">
        <h1 className="text-2xl md:text-3xl font-poppins font-semibold">Brian Elmo</h1>
        <div className="flex flex-col p-4 list-lg">
        <ul className="flex flex-col gap-4 text-white text-2xl font-poppins">
          <li className=" hover:text-teal-600 transition duration-150 ease-in pb-2 ">
            {" "}
            <a  href="#Home">Home</a>
          </li>
          <li className=" hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#About">About Me</a>
          </li>
          <li className=" hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#Resume">Resume</a>
          </li>
          <li className=" hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#Proyects">Projects</a>
          </li>
          <li className=" hover:text-teal-600 transition ease-in pb-2 ">
            {" "}
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
        <ul className="flex lg:gap-10 gap-5"> 
          <li>
            <a target="_blank" href="https://github.com/Brianelmo">
              <i class="fa-brands fa-github transition ease-in hover:text-black text-3xl"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brian-nicolas-elmo-5ab821248/">
              <i class="fa-brands fa-linkedin transition ease-in hover:text-blue-500 text-3xl"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/warnilion">
              <i class="fa-brands fa-twitter transition ease-in hover:text-blue-400 text-3xl"></i>
            </a>
          </li>
          <li>
            <button className="lg:invisible" type="button" onClick={handleClick}>
              <i class="fa-solid fa-bars text-3xl"></i>
            </button>
          </li>
        </ul>
      </nav>
      {showDiv && <List />}
    </div>
  );
}

export default Nav;
