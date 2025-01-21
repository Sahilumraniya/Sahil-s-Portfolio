import { useEffect, useState } from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import { Navbar } from "../components";
import { GlareCard } from "../components/UI/glare-card.jsx";
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Skills | Sahil Umraniya</title>
                <meta
                    name="description"
                    content="Discover the technologies and tools I specialize in, including React, Node.js, JavaScript, and more. Learn how my skills can bring value to your projects."
                />
                <meta name="keywords" content="Skills, React Developer, Node.js, Web Development, JavaScript, Freelance Developer" />
                <meta property="og:title" content="Sahil Umraniya | Full-Stack Developer & Freelancer" />
                <meta property="og:description" content="Hi, I'm Sahil Umraniya, a professional software developer specializing in Next, React Node.js, Spring Boot. Explore my portfolio and hire me for your next project." />
                <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=Your+Name+Portfolio" />
                <meta name="twitter:image" content="https://via.placeholder.com/1200x630.png?text=Your+Name+Portfolio" />

                <meta property="og:url" content="https://sahilumraniya.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sahil Umraniya | Full-Stack Developer & Freelancer" />
                <meta name="twitter:description" content="Hi, I'm Sahil Umraniya, a professional software developer specializing in Next, React Node.js, Spring Boot." />
                <meta name="author" content="Sahil Umraniya" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://sahilumraniya.vercel.app/skills" />
            </Helmet>

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
