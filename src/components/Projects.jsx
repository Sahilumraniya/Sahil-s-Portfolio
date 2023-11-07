import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import { styles } from "../styles";

const Projects = () => {
  return (
    <>
      {" "}
      <div className="ml-6 md:ml-14 md:mt-5">
        <p className={styles.sectionHeadText}>Project</p>
      </div>
      <div className="mx-20 mt-10 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => {
          return <ProjectCard key={project.title} index={index} {...project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
