import React from "react";

function ProyectCard({title, text_card, link_project, url_image, invisible}) {
  return (
    <div className={`w-11/12 md:w-11/12 h-80 bg-cover bg-center flex justify-center items-center rounded-xl`} style={{backgroundImage:`url(${url_image})`}}>
      <div className="fondo w-full h-80 flex flex-col justify-center backdrop-brightness-50 px-2 opacity-0 hover:opacity-100 transition-all rounded-xl">
        <h2 className="text-white text-2xl mb-4 cursor-default">
          {title}
        </h2>
        <p className="text-white mb-4 cursor-default">
          {text_card}
        </p>
        <div className="flex gap-2">
          <i class="fa-brands fa-html5 text-2xl fa-bounce  text-orange-500"></i>
          <i class="fa-brands fa-css3-alt text-2xl fa-bounce  text-blue-500"></i>
          <i class="fa-brands fa-square-js text-2xl fa-bounce text-yellow-200"></i>
          <i className={`fa-brands fa-react text-2xl fa-bounce text-blue-300 ${invisible}`}></i>
        </div>
        <a
          target="_blank"
          className="text-white mt-2"
          href={link_project}
        >
          Visit Page
        </a>
      </div>
    </div>
  );
}

export default ProyectCard;
