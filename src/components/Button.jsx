import React from "react";

function Button({name}) {
  return (
    <div>
      <a download={'CurriculumBrianElmo'} href="/src/assets/Curriculum-BrianElmo.pdf"
        className="text-white py-4 px-7
           bg-blue-400 rounded-full text-white-500 font-bold hover:bg-blue-500 shadow-2xl transition-all delay-75">{name}</a> 
           
    </div>
  );
} 


export default Button;
