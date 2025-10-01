import React from "react";
import ProjectCards from "./ProjectCards";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";

function Projects() {
  return (
    <div className="projects-container">
      {/* Card 1 */}
      <ProjectCards
        imgPath={project1Img}
        title="Weather App"
        description="A React app that displays real-time weather information using an API."
        ghLink="https://github.com/username/weather-app"
        demoLink="https://weather-app-demo.com"
        isBlog={false}
      />

      {/* Card 2 (another card) */}
      <ProjectCards
        imgPath={project2Img}
        title="Todo List"
        description="A simple and responsive todo list app built with React."
        ghLink="https://github.com/username/todo-list"
        demoLink="https://todo-app-demo.com"
        isBlog={false}
      />
    </div>
  );
}

export default Projects;
