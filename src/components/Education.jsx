import React from "react";
import Button from "./Button";
import Card from "./Card";

function Education() {
  return (
    <div id="Resume" className="mt-40 mb-20 pt-16 pb-16 bg-gray-100 flex flex-col items-center font-poppins lg:ml-60">
      <div className="mb-36 flex justify-center">
        <h2 className="text-9xl uppercase opacity-5  absolute bg-text">Summary</h2>
        <p className="text-5xl capitalize relative top-10 font-bold border-b-2 border-blue-500 text-x">
          Resume
        </p>
      </div>
      <h2 className="text-4xl mb-20 font-bold">My Education</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-4 mb-24">
        <Card
          year={"2022-2023"}
          title={"Front-End"}
          school={"Oracle Next Education"}
          description={
            "Training in front-end development, using technologies such as JavaScript, CSS, HTML, Git"
          }></Card>

        <Card
          year={"2022-2023"}
          title={"Java POO"}
          description={
            "Training in development using Java as the main language and MySQL as the backend."
          }
          school={"Oracle Next Education"}></Card>
        <Card
          year={"2022-2023"}
          title={"Git"}
          school={"Oracle Next Education"}
          description={
            "Training in the version control tool Git."
          }></Card>
        <Card
          year={"2022-2023"}
          title={"Logica de programacion"}
          description={
            "Training to understand programming logic, thinking, and logic."
          }
          school={"Oracle Next Education"}></Card>
      </div>  
      <h2 className="text-4xl font-bold">My Skills</h2> 
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 md:gap-x-60 text-5xl mb-20 mt-16">
        <div className="flex flex-col text-center gap-2 mb-20">
        <i class="fa-brands fa-html5 fa-bounce text-orange-500"></i>
        <p>HTML5</p>
        </div>
        <div className="flex flex-col text-center gap-2 mb-20">
        <i class="fa-brands fa-css3-alt fa-bounce text-blue-500"></i> 
        <p>CSS</p>
        </div>
        <div className="flex flex-col text-center gap-2 mb-20"> 
        <i class="fa-brands fa-square-js fa-bounce text-yellow-200"></i>
        <p>JavaScript</p>
        </div>
        <div className="flex flex-col text-center gap-2 mb-20">
        <i class="fa-brands fa-react fa-spin text-blue-500"></i>
        <p>ReactJS</p>
        </div>
        <div className="flex flex-col text-center gap-2 mb-20">
        <i class="fa-solid fa-code-branch fa-bounce text-orange-500"></i> 
        <p>GIT</p>
        </div>
        <div className="flex flex-col text-center gap-2 mb-20">
        <i class="fa-brands fa-java fa-bounce"></i> 
        <p>Java</p>
        </div>
      </div>
      <Button name="Download CV"></Button>
    </div>
  );
}

export default Education;
