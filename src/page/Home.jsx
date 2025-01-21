/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { About, Contact, Hero, Tech, Projects, Navbar } from "../components";
import { useEffect, useState } from "react";
import Experience from "../components/Experience";
import CertificateSection from "../components/CertificateSection";
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>Sahil Umraniya | Full-Stack Developer & Freelancer</title>
        <meta
          name="description"
          content="Hi, I'm Sahil Umraniya, a professional software developer and freelancer specializing in Next, React, Node.js, Java, Spring Boot, Databases (SQL,MongoDB) and modern web technologies. Explore my portfolio and hire me for your next project."
        />
        <meta name="keywords" content="Sahil Umraniy, Full-Stack Developer, Freelance Developer, Portfolio, React Developer, Software Engineer" />
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
        <link rel="canonical" href="https://sahilumraniya.vercel.app/" />
      </Helmet>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div
          className={`${isMobile ? "bg-hero-pattern" : ""
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
        <CertificateSection />
        <Contact />
      </div>
    </>
  );
};

export default Home;
