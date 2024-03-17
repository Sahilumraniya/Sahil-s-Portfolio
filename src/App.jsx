import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects } from "./components";
import { useEffect, useState } from "react";

function App() {
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
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div
          className={`${
            isMobile ? "bg-hero-pattern" : ""
          } bg-cover bg-no-repeat bg-center`}
        >
          <Navbar />
          <Hero isMobile={isMobile}/>
        </div>
        <div>
          <About />
          <Tech />
        </div>
        <Projects />
        <div className="relative w-full z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
