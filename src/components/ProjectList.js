import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
 
  return (
    <div className="project-list">
      {/* <h2>My Projects</h2> */}
      {/* <div id="project-list">render ProjectItem components here</div> */}
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
    ))}
    </div>
  );
}

export default ProjectList;
