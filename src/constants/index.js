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
  tailwind,
  nodejs,
  mongodb,
  git,
  BM,
  Movie,
  Trade,
  AI,
  Flappy_Bird,
  Smartters,
  startupDirectory,
  Learnfinity,
  InsightfulBlog,
  Feathers,
  TypeScript,
  NextJS,
  Mysql,
  Prostgres,
  Docker,
  Express,
  Spring,
  NumPy, Pandas, Matplotlib, Scikit, Tableau, Pygame,
  AdvanceJava,
  Oracel,
  SAP_Certificate,
  Smartters_internship,
  Dart,
  android,
  flutter,
  kotlin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills"
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
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    category: "Programing Languages"
  },
  {
    name: "TypeScript",
    icon: TypeScript,
    category: "Programing Languages"
  },
  {
    name: "Next JS",
    icon: NextJS,
    category: "Web"
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Web"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Web"
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    category: "Web"
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database"
  },
  {
    name: "My SQL",
    icon: Mysql,
    category: "Database"
  },
  {
    name: "PostgreSQL",
    icon: Prostgres,
    category: "Database"
  },
  {
    name: "Docker",
    icon: Docker,
    category: "tools"
  },
  {
    name: "git",
    icon: git,
    category: "tools"
  },
  {
    name: "Feathers",
    icon: Feathers,
    category: "Backend"
  },
  {
    name: "C",
    icon: c,
    category: "Programing Languages"
  },
  {
    name: "C++",
    icon: cpp,
    category: "Programing Languages"
  },
  {
    name: "Python",
    icon: python,
    category: "Programing Languages"
  },
  {
    name: "Java",
    icon: java,
    category: "Programing Languages"
  },
  {
    name: "Express.js",
    icon: Express,
    category: "Backend"
  },
  {
    name: "Spring Boot",
    icon: Spring,
    category: "Backend"
  }, {
    name: "NumPy",
    icon: NumPy,
    category: "Data Science"
  },
  {
    name: "Pandas",
    icon: Pandas,
    category: "Data Science"
  },
  {
    name: "Matplotlib",
    icon: Matplotlib,
    category: "Data Science"
  },
  {
    name: "Scikit-learn",
    icon: Scikit,
    category: "Data Science"
  },
  {
    name: "Tableau",
    icon: Tableau,
    category: "Data Science"
  },
  {
    name: "Pygame",
    icon: Pygame,
    category: "Data Science"
  },
  {
    name: "HTML 5",
    icon: html,
    category: "Web"
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Web"
  },
  {
    name: "Dart",
    icon: Dart,
    category: "Programing Languages"
  },
  {
    name:"Android",
    icon: android,
    category: "Mobile Application"
  },
  {
    name:"Flutter",
    icon: flutter,
    category: "Mobile Application"
  },
  {
    name:"Kotlin",
    icon: kotlin,
    category: "Programing Languages"
  }
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
    title: "Swap & Share",
    image: Trade,
    github: "https://github.com/Sahilumraniya/ShwapNShare/",
    host: "https://swapnshare.vercel.app/",
    tech: ["React JS", "Tailwind CSS", "NodeJs", "MongoDB", "AWS S3", "Express"],
    tag: "web",
  },
  {
    title: "AI maze solver",
    image: AI,
    github: "https://github.com/Sahilumraniya/Maze_Game",
    host: "https://drive.google.com/file/d/1LrzyO_xEnLR_5kf07WBCzsCL-b5WsLQg/view",
    tech: ["Python", "Pygame", "AI"],
    tag: "python",
  },
  {
    title: "Learnfinity",
    image: Learnfinity,
    github: "https://github.com/Sahilumraniya/Learnfinity",
    host: "https://learnfinity.vercel.app/",
    tech: ["Next JS", "Tailwind CSS", "React JS"],
    tag: "web"
  },
  {
    title: "Manufacturing Business Website",
    image: BM,
    github: "https://github.com/Sahilumraniya/Bhramani-Machinery",
    host: "https://bhramani-machinery.vercel.app/",
    tech: ["Next JS", "Tailwind CSS", "React JS"],
    tag: "web",
  },
  {
    title: "Startup-Directory-Web-App",
    image: startupDirectory,
    github: "https://github.com/Sahilumraniya/Startup-Directory-Web-App",
    host: "https://startup-directory-web-app.vercel.app/",
    tech: ["React JS", "Tailwind CSS", "Node Js", "MongoDB", "Express Js"],
    tag: "web",
  },
  {
    title: "Flappy Bird Game",
    image: Flappy_Bird,
    github: "https://github.com/Sahilumraniya/Flappy-Bird-Game",
    host: "https://github.com/Sahilumraniya/Flappy-Bird-Game/releases/tag/v1.0",
    tech: ["python", "pygame"],
    tag: "python",
  },
  {
    title: "Expense manager Flutter App",
    image: "https://github.com/Sahilumraniya/Expense-manager-Flutter-App/blob/main/screenshots/expensemanager3.jpg?raw=true",
    github: "https://github.com/Sahilumraniya/Expense-manager-Flutter-App",
    host: "https://github.com/Sahilumraniya/Expense-manager-Flutter-App",
    tech: ["Flutter", "Dart", "Android"],
    tag: "Mobile Application"
  },
  {
    title: "Movie Search",
    image: Movie,
    github: "https://github.com/sahilumraniya/MovieSearch/",
    host: "https://sahilumraniya.github.io/MovieSearch/",
    tech: ["HTML 5", "CSS 3", "JavaScript"],
    tag: "web",
  },
  {
    title: "Insightful-Blog",
    image: InsightfulBlog,
    github: "https://github.com/Sahilumraniya/Insightful-Blog",
    host: "https://sahilumraniya.github.io/Insightful-Blog/",
    tech: ["HTML 5", "CSS 3", "JavaScript"],
    tag: "web",
  }
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Smartters",
    icon: Smartters,
    iconBg: "#383E56",
    date: "February 2024 - August 2024",
    points: [
      "Developed and maintained real-time applications and RESTful APIs using Feathers.js within the MERN stack.",
      "Improved application performance by 20% through optimization and refactoring of existing code.",
      "Backend developer for 'Binimise,' a semi-government management portal used by municipal corporations to centralize fleet management, service notification, vendor tracking, complaints, and reporting. I focus on building and optimizing features like task management, complaint handling, report genera on, and custom field (EVA) functionality to enhance resource efficiency and operational effectiveness."
    ],
  },
];

const achievements = [
  {
    image: Oracel,
    organization: "Oracel",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    details: "Participated in training on deploying and optimizing generative AI solutions using Oracle Cloud Infrastructure.",
    date: "July 17, 2024",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1BBB15E94D645DE45156935112528F197168D2E99FF1C73FBB5D6779153A7E32"
  },
  {
    image: SAP_Certificate,
    organization: "SAP | Code Unnati",
    title: "Advanced Course Certification: Machine Learning & IoT Training",
    details: "Participated in training on Machine Learning, IoT, Deep Learning, Computer Vision, and ABAP under the Code Unnati Program.",
    date: "May 01, 2024",
    link: "https://codeunnati.edunetfoundation.com/verify-certificate/CU24_8889"
  },
  {
    image: Smartters_internship,
    organization: "Smartters Software",
    title: "Successfully Completion of Internship",
    details: "Successfully completed an internship at Smartters Software, where I gained valuable practical experience by contributing to real-world projects in software development and project management.",
    date: "August 31, 2024",
    link: "https://drive.google.com/file/d/1YiFImKXrM7FwNQ0L7i9YBWoLQHUwWwHX/view?usp=drive_link"
  },
  {
    image: AdvanceJava,
    organization: "Royal Technosoft",
    title: "Advanace Java",
    details: "Participated in an Advanced Java course, focusing on complex programming concepts and Java application development.",
    date: "April 04, 2024",
    link: "https://certopus.com/c/6f0242c3e46d42078ee4968f5ce8d5e4"
  }
]

export { services, technologies, testimonials, projects, experiences, achievements };
