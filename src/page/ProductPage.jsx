import { useState } from "react";
import { styles } from "../styles";
import ProjectCard from "../components/ProjectCard";
import {projects} from "../constants";
import { Navbar } from "../components";

const ProductPage = () => {
  const [filterType, setFilterType] = useState("all");

  const filteredProjects = filterType === "all" 
    ? projects 
    : projects.filter(project => project.tag === filterType);

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="w-full my-24">
          <div className="flex justify-around items-center space-x-4">
            <p className={`${styles.sectionHeadText} text-center`}>Projects</p>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)} 
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50 my-2 mx-2"
            >
              <option className="bg-violet-900 text-white" value="all">All</option>
              {
                [...new Set(projects.map(project => project.tag))].map(tag => (
                    <option key={tag} className="bg-violet-900 text-white" value={tag}>{tag}</option>
                ))
              }
            </select>
          </div>
          
          <div className="dark mt-10 flex flex-wrap justify-center gap-10 w-full">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
