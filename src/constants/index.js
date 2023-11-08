import {
  mobile,
  backend,
  web,
  javascript,
  c,
  java,
  cpp,
  html,
  python,
  css,
  bootstrap,
  reactjs,
  sql,
  tailwind,
  nodejs,
  mongodb,
  git,
  BM,
  Movie,
  Trade,
  AI,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Andorid Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Pyhton",
    icon: python,
  },

  {
    name: "Java",
    icon: java,
  },

  {
    name: "git",
    icon: git,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    title: "Manufacturing Business Website",
    image: BM,
    github: "https://github.com/Sahilumraniya/Bhramani-Machinery",
    host: "https://bhramani-machinery.vercel.app/",
    tech: ["Next JS", "Tailwind CSS"],
    tag: "web",
  },
  {
    title: "Movie Serach",
    image: Movie,
    github: "https://github.com/sahilumraniya/MovieSearch/",
    host: "https://sahilumraniya.github.io/MovieSearch/",
    tech: ["HTML 5", "CSS 3", "JavaScript"],
    tag: "web",
  },
  {
    title: "Trade-Hub",
    image: Trade,
    github: "https://github.com/sahilumraniya/tradehub/",
    host: "https://trade-hub.vercel.app/",
    tech: ["React JS", "Tailwind CSS", "Appwrite", "MongoDB"],
    tag: "web",
  },
  {
    title: "AI maze solver",
    image: AI,
    github: "https://github.com/Sahilumraniya/Maze_Game",
    host: "https://drive.google.com/file/d/1LrzyO_xEnLR_5kf07WBCzsCL-b5WsLQg/view",
    tech: ["Python", "Pygame"],
    tag: "python",
  },
];

export { services, technologies, testimonials, projects };
