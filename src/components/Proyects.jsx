import React from "react";

function Proyects() {
  return (
    <div id="Proyects" className="mb-36 lg:ml-60">
      <div className="mb-36 flex justify-center">
        <h2 className="text-9xl uppercase opacity-5 absolute bg-text">Portfolio</h2>
        <p className="text-5xl capitalize relative top-10 font-bold border-b-2 border-blue-500 text-x">
          My Work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-7 md:w-3/4 md: m-auto">
        <div className="w-11/12 md:w-11/12 h-80 bg-[url('/src/images/mercadito4.png')] bg-cover bg-center flex justify-center items-center rounded-xl">
          <div className="fondo w-full h-80 flex flex-col justify-center backdrop-brightness-50 px-2 opacity-0 hover:opacity-100 transition-all rounded-xl">
            <h2 className="text-white text-2xl mb-4 cursor-default">
              Mercadito Gamer
            </h2>
            <p className="text-white mb-4 cursor-default">
              E-commerce with CRUD using Javascript, consuming data from an API
              made by me, showing, deleting, and editing data.
            </p> 
            <div className="flex gap-2">
            <i class="fa-brands fa-html5 text-2xl fa-bounce  text-orange-500"></i>
            <i class="fa-brands fa-css3-alt text-2xl fa-bounce  text-blue-500"></i>
            <i class="fa-brands fa-square-js text-2xl fa-bounce text-yellow-200"></i>
            </div>
            <a target="_blank" className="text-white mt-2" href="https://brianelmo.github.io/MercaditoGamer.github.io/">
              Visit Page
            </a>
          </div>
        </div>
        <div className="w-11/12 md:w-11/12 h-80 bg-[url('/src/images/ipaddress.png')] bg-cover bg-center rounded-xl">
          <div className="fondo w-full h-80 flex flex-col justify-center backdrop-brightness-50 px-2 opacity-0 hover:opacity-100 transition-all rounded-xl">
            <h2 className="text-white text-2xl mb-4 cursor-default">
              IP Address Tracker
            </h2>
            <p className="text-white mb-4 cursor-default">
            IP address tracker using the IPAPI API to gather data from the address.
            </p>
            <div className="flex gap-2">
            <i class="fa-brands fa-html5 text-2xl fa-bounce  text-orange-500"></i>
            <i class="fa-brands fa-css3-alt text-2xl fa-bounce  text-blue-500"></i>
            <i class="fa-brands fa-square-js text-2xl fa-bounce text-yellow-200"></i>
            </div>
            <a target="_blank" className="text-white mt-2" href="https://brianelmo.github.io/IPADDRESSTRACKER.github.io/">
              Visit Page
            </a>
          </div>
        </div>
        <div className="w-11/12 md:w-11/12 h-80 bg-[url('/src/images/todo1.png')] bg-cover bg-center rounded-xl">
          <div className="fondo w-full h-80 flex flex-col justify-center backdrop-brightness-50 px-2 opacity-0 hover:opacity-100 transition-all rounded-xl">
            <h2 className="text-white text-2xl mb-4 cursor-default">
              To Do App
            </h2>
            <p className="text-white mb-4 cursor-default">
            Application to register daily tasks, first project using React.
            </p>
            <div className="flex gap-2">
            <i class="fa-brands fa-html5 text-2xl fa-bounce  text-orange-500"></i>
            <i class="fa-brands fa-css3-alt text-2xl fa-bounce  text-blue-500"></i>
            <i class="fa-brands fa-react fa-bounce text-blue-500"></i>
            </div>
            <a target="_blank" className="text-white mt-2 inline-block" href="https://brianelmo.github.io/todoapp.github.io/">
              Visit Page
            </a>
          </div>
        </div>
        <div className="w-11/12 md:w-11/12 h-80 bg-[url('/src/images/landigfront.png')] bg-cover bg-center rounded-xl">
          <div className="fondo w-full h-80 flex flex-col justify-center backdrop-brightness-50 px-2 opacity-0 hover:opacity-100 transition-all rounded-xl">
            <h2 className="text-white text-2xl mb-4 cursor-default">
            Landing Page  
            </h2>
            <p className="text-white mb-4 cursor-default">
            Landing Page using only HTML and CSS, I made this page to practice web design concepts.
            </p>
            <div className="flex gap-2">
            <i class="fa-brands fa-html5 text-2xl fa-bounce  text-orange-500"></i>
            <i class="fa-brands fa-css3-alt text-2xl fa-bounce  text-blue-500"></i>
            </div>
            <a target="_blank" className="text-white mt-2" href="https://brianelmo.github.io/landingpage-frontendmentor.github.io/">
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
