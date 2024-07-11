/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { About, Contact, Hero, Tech, Projects ,Navbar } from "../components";
import { useEffect, useState } from "react";
import Experience from "../components/Experience";

const Home = () => {

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
    <div className="relative z-0 bg-primary overflow-x-hidden">
        <div
          className={`${
            isMobile ? "bg-hero-pattern" : ""
          } bg-cover bg-no-repeat bg-center`}
        >
          <Navbar />
          <Hero isMobile={isMobile} />
        </div>
        <div>
          <About />
          <Tech />
        </div>
        <Experience />
        <Projects />
        <div className="relative w-full z-0">
          <Contact />
        </div>
      </div>
  );
};

export default Home;
