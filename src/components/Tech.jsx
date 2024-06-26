/* eslint-disable react/prop-types */
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TechnologyCard = ({ name, imageSrc, index }) => {
  return (
    <motion.div
      className="flex-col animate-shimmer items-center justify-center rounded-md border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] w-[100px] border border-solid m-[10px]  cursor-pointer duration-150 overflow-hidden"
      whileHover={{ scale: 1.05 }} // Animation on hover
      whileTap={{ scale: 0.95 }}
      variants={`${index != 0 ? "left" : "rigth"}`}
      // Animation on click
    >
      <img
        src={imageSrc}
        alt={name}
        className="w-full object-contain p-[10px]"
      />
      <h3 className="text-center">{name}</h3>
    </motion.div>
  );
};

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
      <div className="ml-6 md:ml-14">
        <p className={styles.sectionHeadText}>Skill</p>
      </div>
      {isMobile ? (
        <div className="flex flex-wrap justify-center flex-grow-0">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              name={tech.name}
              imageSrc={tech.icon}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technoloy) => {
            return (
              <div className="w-28 h-28 mx-5" key={technoloy.name}>
                <BallCanvas
                  icon={technoloy.icon}
                  tooltipContent={technoloy.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Tech;
