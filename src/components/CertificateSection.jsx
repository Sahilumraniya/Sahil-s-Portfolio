import React from 'react';
import { styles } from '../styles'; // Adjust the import path accordingly
import { achievements } from '../constants';
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';

const CertificateSection = () => {
    return (
        <section className={`${styles.paddingY}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`${styles.sectionHeadText} text-white`}>Certificates</h2>
                <p className={`${styles.sectionSubText} text-gray-400`}>
                    A glimpse of my achievements
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay for animation
                            className="bg-[#1d1836be] rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:bg-[#1d1836]"
                        >
                            <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={achievement.image}
                                    alt={`${achievement.organization} Certificate`}
                                    className="rounded-md w-full h-48 object-scale-down"
                                />
                                <h3 className="text-lg font-semibold mt-2 text-white">{achievement.organization} Certification</h3>
                                <p className="text-gray-300">{achievement.organization}</p>
                                <p className="text-gray-400 text-sm">{achievement.date}</p>
                            </a>
                            <h4 className="text-md font-semibold mt-2 text-yellow-400">
                                {achievement.title}
                            </h4>
                            <p className="text-gray-300 text-sm">
                                {achievement.details} {/* Fixed typo: deatils to details */}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper(CertificateSection, "certificateSection");
