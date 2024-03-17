/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardBody, CardContainer, CardItem } from "./UI/3d-card";
//{ index, title, image, github, host, tech, video }
const ProjectCard = ({ index, title, image, github, host, tech }) => {
  // return (
  //   <div className="xs:w-[450px] w-full">
  //     <motion.div
  //       variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
  //       className="w-full  p-[1px] rounded-[5px] sheadow-card"
  //     >
  //       <div className="w-full rounded shadow-lg">
  //         <a href={host} target="_black">
  //           <Tilt>
  //             <VideoWithHover
  //               image={image}
  //               video={video}
  //               title={title}
  //             />
  //           </Tilt>
  //           <div className="pt-2 rounded-t-lg bg-tertiary">
  //             <h3 className="font-bold text-xl mb-2 mx-2 text-white">
  //               {title}
  //             </h3>
  //             <div className="flex mb-4 flex-wrap mx-2">
  //               {tech?.map((technoloy) => (
  //                 <div className="mx-1" key={technoloy}>
  //                   <p className="text-xs my-1 px-2 text-center font-bold text-violet-900 bg-white rounded-sm">
  //                     {technoloy}
  //                   </p>
  //                 </div>
  //               ))}
  //             </div>
  //             <div className="flex mx-2">
  //               <a
  //                 href={github}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mr-2 transition duration-300 my-2"
  //               >
  //                 GitHub
  //               </a>
  //               <a
  //                 href={host}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="bg-violet-800 hover-bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 my-2"
  //               >
  //                 Live
  //               </a>
  //             </div>
  //           </div>
  //         </a>
  //       </div>
  //     </motion.div>
  //   </div>
  // );

  return (
    <CardContainer className="inter-var xs:w-[450px] w-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 object-center rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ={50} className="flex flex-wrap mt-10">
          {tech?.map((technoloy) => (
            <div className="mx-1" key={technoloy}>
              <p className="text-xs my-1 px-2 text-center font-bold bg-white rounded-sm flex content-center animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] text-center">
                {technoloy}
              </p>
            </div>
          ))}
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            className="px-4 cursor-pointer py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <a href={github} target="_blank" rel="noreferrer">
              source code →
            </a>
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={host} target="_blank" rel="noreferrer">
              Live at
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
