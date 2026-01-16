// Skills Section Logo's
import figma from "./assets/tech_logo/figma.png";
import xd from "./assets/tech_logo/xd.png";
import framer from "./assets/tech_logo/framer.png";
import sketch from "./assets/tech_logo/sketch.png";
import canva from "./assets/tech_logo/canva.png";
import ps from "./assets/tech_logo/ps.png";
import vscode from "./assets/tech_logo/vscode.png";
import react from "./assets/tech_logo/react.png";
import github from "./assets/tech_logo/github.png";
import pr from "./assets/tech_logo/pr.png";
import gpt from "./assets/tech_logo/gpt.png";
import miro from "./assets/tech_logo/miro.png";
// Experience Section Logo's
import HCLogo from "./assets/company_logo/HC_logo.png";
import PWskills from "./assets/company_logo/PW_logo.png"
// Education Section Logo's
import bit from "./assets/education_logo/BIT_logo.png";
import hr from "./assets/education_logo/High_School_logo.png";

// Project Section Logo's
// import codeXpert from './assets/work_logo/app.png';
// import CSS from './assets/work_logo/CSS.png';
// import DL from './assets/work_logo/Donate4life.png';
// import ST from './assets/work_logo/Skytracker.png';

export const SkillsInfo = [
  {
    title: "Software Skills",
    skills: [
      { name: "", logo: figma },
      { name: "", logo: xd },
      { name: "", logo: framer },
      { name: "", logo: sketch },
      { name: "", logo: canva },
      { name: "", logo: ps },
      { name: "", logo: vscode },
      { name: "", logo: react },
      { name: "", logo: github },
      { name: "", logo: pr },
      { name: "", logo: gpt },
      { name: "", logo: miro },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: HCLogo,
    role: "Creative Designer",
    company: "Hyper Cloud Digital Solutions",
    date: "June 2025 - Present",
    desc: "A summary of my hands-on internship experience, where I contributed to real-world projects and strengthened my design skills in a collaborative environment.",
  },
  {
    id: 1,
    img: PWskills,
    role: "UI/UX Design Trainee",
    company: "PW Skills",
    date: "September 2025 - Present",
    desc: "Completed a structured UI/UX design course focused on user research, wireframing, prototyping, design systems, and hands-on projects using Figma.",
  },
];

export const education = [
  {
    id: 0,
    img: bit,
    school: "Surya College Of Education Miraganj, Khalilabad",
    date: "2021-2023",
    degree: "Bachlor of Art",
  },
  {
    id: 1,
    img: hr,
    school: "National Kala Academy, GORAKHPUR",
    date: "2020-2021",
    degree: "Intermediate in Science ",
  },
  {
    id: 2,
    img: hr,
    school: "National Kala Academy, GORAKHPUR",
    date: "2018-2019",
    degree: "State Board(X) - Matriculation ",
  },
];

export const projects = [
  // {
  //   id: 0,
  //   title: "TRINETRA",
  //   description:
  //     "Trinetra is a modern and intuitive CCTV monitoring app designed to provide users with real-time security and surveillance access from anywhere. The name Trinetra (meaning “Third Eye” fully prototype design)",
  //   image: codeXpert,
  //   // github: "https://github.com/thead76/codeXpert",
  //   // webapp: "https://github.com/thead76/codeXpert",
  // },
  // {
  //   id: 1,
  //   title: "SkyTracker",
  //   description:
  //     "I developed a responsive web application that provides real-time weather details using React. The app allows users to search for any city and instantly view current temperature, humidity, wind speed, and weather conditions. It fetches data from a reliable weather API and displays it in a clean, user-friendly interface. The design is optimized for both desktop and mobile views, ensuring accessibility across devices. This project helped me strengthen my skills in API integration, state management, and React component architecture.",
  //   image: ST,
  //   tags: [      {
  //     "homepage": "https://sunilvishwakarma8778-rgb.github.io/Portfolio",
  //     "scripts": {
  //       // ... existing scripts ...
  //       "predeploy": "npm run build",
  //       "deploy": "gh-pages -d dist"  // Note: using dist instead of build for Vite
  //     }
  //   }],
  //   github: "https://github.com/thead76/SkyTracker",
  //   webapp: "https://thead76.github.io/SkyTracker/",
  // },
  // {
  //   id: 2,
  //   title: "Client Satisfaction Survey Form",
  //   description:
  //     "I developed a responsive Client Satisfaction Survey Form featuring a multi-step interface and an interactive progress bar for enhanced user experience. The form is designed to collect structured feedback from clients in a clean and intuitive format. Each step guides users smoothly through specific question sets, improving completion rates. Upon submission, the entered data is seamlessly fetched and stored in a connected Google Sheet for real-time analysis and record keeping. This project strengthened my skills in frontend development, form validation, and third-party integration.",
  //   image: CSS,
  //   tags: [""],
  //   github: "https://hyperclouddigital.com/css",
  //   webapp: "https://hyperclouddigital.com/css",
  // },
  // {
  //   id: 3,
  //   title: "Donate4Life",
  //   description:
  //     "This project is a Blood Donor Management System website designed to connect blood donors with those in need. It features a Find Blood Donor page for searching donors by location and blood group, and a Register as a Donor page for individuals to register themselves as donors.",
  //   image: DL,
  //   tags: [""],
  //   github: "https://github.com/thead76/Donate4Life",
  //   webapp: "https://www.friends2support.org/",
  // },
];
