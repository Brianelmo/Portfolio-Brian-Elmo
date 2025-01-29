import React from "react";
import ProyectCard from "./ProyectCard";
import imagemercadito from '../images/mercadito.png'
import ipaddres from '../images/ipaddress.webp'
import spotify from '../images/spotify.webp'
import landing from '../images/landigfront.webp'

function Proyects() {
  return (
    <div id="Proyects" className="mb-36 lg:ml-60">
      <div className="mb-36 flex justify-center">
        <h2 className="text-9xl uppercase opacity-5 absolute bg-text">
          Portfolio
        </h2>
        <p className="text-5xl capitalize relative top-10 font-bold border-b-2 border-blue-500 text-x">
          My Work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-7 md:w-3/4 md: m-auto">
        <ProyectCard
          title="Mercadito Gamer"
          text_card={
            "e-commerce made in reactjs and with backend in nodejs with express, with shopping cart and chat bot"
          }
          link_project={"https://mercaditogamer.netlify.app/"}
          url_image={imagemercadito}
        />
        <ProyectCard
          title={"IP Address Tracker"}
          text_card={
            "IP address tracker using the IPAPI API to gather data from the address."
          }
          link_project={
            "https://brianelmo.github.io/IPADDRESSTRACKER.github.io/"
          }
          url_image={ipaddres}
          invisible={'invisible'}
        />
        <ProyectCard
          title={"Spotify Clon"}
          text_card={
            "Spotify clone built with ReactJS and Typescript, using the Spotify API to access user data."
          }
          link_project={"https://spotify-clon-ivory.vercel.app/"}
          url_image={spotify}
        />
        <ProyectCard
          title={"Landing Page"}
          text_card={
            "Landing Page using only HTML and CSS, I made this page to practice web design concepts."
          }
          link_project={
            "https://brianelmo.github.io/landingpage-frontendmentor.github.io/"
          }
          url_image={landing}
          invisible={'invisible'}
        />
      </div>
    </div>
  );
}

export default Proyects;
