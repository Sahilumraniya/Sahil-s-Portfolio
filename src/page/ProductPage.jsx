import { useState } from "react";
import { styles } from "../styles";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
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
        <div className="w-full">
          <div className="flex justify-around items-center space-x-4 mt-24">
            <p className={`${styles.sectionHeadText} text-center`}>Projects</p>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)} 
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option className="bg-primary text-white" value="all">All</option>
              {
                [...new Set(projects.map(project => project.tag))].map(tag => (
                  <option key={tag} className="bg-primary text-white" value={tag}>{tag}</option>
                ))
              }
            </select>
          </div>
          
          <div className="dark mt-10 flex flex-wrap justify-center gap-10 w-full mb-24">
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
