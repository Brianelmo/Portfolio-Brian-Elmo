import React from "react";  


function List() { 
  return (
    <div className="lista">
      <div className="flex flex-col p-4 bg-gray-900">
        <ul className="flex flex-col gap-4 text-white text-ls font-poppins">
          <li className="border-b border-gray-600 hover:text-teal-600 transition duration-150 ease-in pb-2 ">
            {" "}
            <a  href="">Home</a>
          </li>
          <li className="border-b border-gray-600 hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#About">About Me</a>
          </li>
          <li className="border-b border-gray-600 hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#Resume">Resume</a>
          </li>
          <li className="border-b border-gray-600 hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#Proyects">Projects</a>
          </li>
          <li className="border-b border-gray-600 hover:text-teal-600 transition ease-in pb-2">
            {" "}
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
