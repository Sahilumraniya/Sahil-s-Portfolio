import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../HOC/index";

const Projects = () => {
  return (
    <>
      {" "}
      <div className="w-full">
        <p className={styles.sectionHeadText}>Project</p>
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => {
            return (
              <ProjectCard key={project.title} index={index} {...project} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
