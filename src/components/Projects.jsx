/* eslint-disable react-refresh/only-export-components */
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
        <div className="dark mt-10 flex flex-wrap justify-center gap-10 w-full">
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
