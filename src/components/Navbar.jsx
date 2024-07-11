import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ResumeDownloadButton from "./UI/ResumeDownloadButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white font-bold cursor-pointer text-[18px] flex">
            Sahil &nbsp;
            <samp className="text-white font-bold cursor-pointer text-[18px]">
              Umraniya
            </samp>
          </p>
        </Link>

        {/* Destop */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } text-[20px] font-medium cursor-pointer transition-all duration-300 ease-in-out border-b-[3px] border-transparent hover:border-purple-500 hover:rounded-sm hover:text-purple-200 transform hover:scale-105                
                `}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                {link.title === "Projects" ? <Link to="/projects">Projects</Link> : <a href={`/#${link.id}`}>{link.title}</a>}
              </li>
            );
          })}
          <ResumeDownloadButton />
        </ul>
        {/* Phone */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[30px] h-[30px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl`}
          >
            <ul className="list-none flex gap-10 justify-end items-center flex-col">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:border-b-4 hover:border-purple-500 font-poppins text-[15px] font-medium cursor-pointer duration-500 transition-all`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
              <ResumeDownloadButton />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
