import React from "react";

function Card({ title, school, description, year }) {
  return (
    <div className="border-2 border-gray-400 py-5 px-5 w-3/4 h-60 rounded-2xl">
      <p className="inline-flex bg-blue-500 text-white py-1 px-2 rounded-xl">
        {year}
      </p>
      <h2 className="mt-2 text-2xl">{title}</h2>
      <p className="mt-2 text-blue-500">{school}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default Card;
