import { useEffect, useState } from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import { Navbar } from "../components";
import { GlareCard } from "../components/UI/glare-card.jsx";

const SkillPage = () => {
    const [filterType, setFilterType] = useState("all");

    const filteredTechnologies = filterType === "all"
        ? technologies
        : technologies.filter(project => project.category === filterType);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)"); // Fix media query syntax
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <>
            <div className="relative z-0 bg-primary overflow-x-hidden">
                <div className="bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <div className="w-full my-24">
                        <div className="flex justify-evenly mx-4 items-center space-x-4">
                            <p className={`${styles.sectionHeadText} text-center`}>Skill</p>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50 my-2 mx-2"
                            >
                                <option className="bg-violet-900 text-white" value="all">All</option>
                                {
                                    [...new Set(technologies.map(project => project.category))].map(tag => (
                                        <option key={tag} className="bg-violet-900 text-white" value={tag}>{tag}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="w-full flex flex-wrap justify-center flex-grow-0 gap-4 md:gap-10 my-12">
                            {filteredTechnologies.map((tech, index) => (
                                <GlareCard
                                    key={index}
                                    name={tech.name}
                                    imageSrc={tech.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillPage;
