import React, { useEffect } from "react";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, title, image, github, host, tech }) => {
  return (
    <a href={host} target="_black">
      <Tilt className="xs:w-[450px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[5px] sheadow-card"
        >
          <div className="w-full rounded overflow-hidden shadow-lg bg-tertiary">
            <img className="object-cover w-full h-[300px]" src={image} alt={title} />
            <h3 className="font-bold text-xl mb-2 mx-2 text-[#915eff]">
              {title}
            </h3>
            <div className="flex mb-4 flex-wrap mx-2">
              {tech?.map((technoloy) => (
                <div className="mx-1" key={technoloy}>
                  <p className="text-xs my-1 px-2 text-center font-bold text-violet-900 bg-white rounded-sm">
                    {technoloy}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex mx-2">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mr-2 transition duration-300 my-2"
              >
                GitHub
              </a>
              <a
                href={host}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-800 hover-bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 my-2"
              >
                Live
              </a>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </a>
  );
};

export default ProjectCard;
