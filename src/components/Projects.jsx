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
            <div className="flex justify-between items-center">
                <p className={`${styles.sectionHeadText}`}>Project</p>
                <a href={"/projects"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50 my-2 mx-2">
                    View All
                </a>
            </div>
            <div className="dark mt-10 flex flex-wrap justify-center gap-10 w-full">
                {projects.slice(0,4).map((project, index) => {
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
