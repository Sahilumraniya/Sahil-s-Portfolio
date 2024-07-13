/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC/index";
import { styles } from "../styles";
import { CardBody, CardContainer, CardItem } from "./UI/3d-card";

const ServiceCard = ({ title, icon }) => {
  return (
    <CardContainer className="dark inter-var w-full sheadow-card">
      <CardBody className="bg-tertiary relative group/card xs:w-[250px] h-auto w-full dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-tertiary dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border ">
        <CardItem
          translateZ="100"
          className="w-full flex items-center justify-center rounded-[20px] min-h-[200px] item-center flex-col gap-y-5"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain self-center"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={`${styles.sectionHeadText}`}>Overview</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        Building the future, one line of code at a time! As a forward-thinking
        final-year student, my portfolio highlights a fusion of diverse
        technologies and creative innovations. Explore to witness a blend of
        fresh tech explorations and evolving projects, reflective of my passion
        for pioneering solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-6">
        {services.map((s, index) => {
          return (
            <motion.div
              key={s.title}
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full xs:w-[250px]"
            >
              <ServiceCard {...s} />{" "}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
