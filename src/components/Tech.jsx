/* eslint-disable react/prop-types */
import {technologies} from "../constants";
import {BallCanvas} from "./canvas";
import {styles} from "../styles";
import React, {useState, useEffect} from "react";
import TechnologyCard from "./TechnologyCard.jsx";
import {SectionWrapper} from "../HOC/index.js";

const Tech = () => {
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
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <p className={styles.sectionHeadText}>Skill</p>
                    <a href={"/skills"}
                       className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50 my-2 mx-2">
                        View All
                    </a>
                </div>
                {isMobile ? (
                    <div className="flex flex-wrap justify-center flex-grow-0">
                        {technologies.slice(0, 12).map((tech, index) => (
                            <TechnologyCard
                                key={index}
                                name={tech.name}
                                imageSrc={tech.icon}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-row flex-wrap justify-center gap-10">
                        {technologies.slice(0, 12).map((technology) => {
                            return (
                                <div className="w-28 h-28 mx-5" key={technology.name}>
                                    <BallCanvas
                                        icon={technology.icon}
                                        tooltipContent={technology.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "skills");
