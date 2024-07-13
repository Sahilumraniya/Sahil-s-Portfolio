import {motion} from "framer-motion";

const TechnologyCard = ({name, imageSrc, index}) => {
    return (
        <motion.div
            className="flex-col animate-shimmer items-center justify-center rounded-md border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] w-[100px] border border-solid my-2 mx-1 cursor-pointer duration-150 overflow-hidden"
            whileHover={{scale: 1.05}} // Animation on hover
            whileTap={{scale: 0.95}}
            variants={index !== 0 ? "left" : "right"}
            // Animation on click
        >
            <div className={`h-full w-full flex flex-col`}>
                <div className="flex-grow-[3] flex justify-center items-center">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full object-contain p-[5px] h-full"
                    />
                </div>
                <div className="flex-grow-[1] flex justify-center items-center">
                    <h3 className="text-center">{name}</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default TechnologyCard;