import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <div className="relative w-full z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
