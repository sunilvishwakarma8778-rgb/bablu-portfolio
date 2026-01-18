// Skills Section Logo's
import figma from "./assets/tech_logo/react.png";
import xd from "./assets/tech_logo/flutter.png";
import framer from "./assets/tech_logo/icons8-javascript-48.png";
import sketch from "./assets/tech_logo/icons8-android-48.png";
import canva from "./assets/tech_logo/vscode.png";
import ps from "./assets/tech_logo/icons8-typescript-48.png";
import vscode from "./assets/tech_logo/icons8-node-js-48.png";
import react from "./assets/tech_logo/icons8-html-64.png";
import github from "./assets/tech_logo/icons8-mongo-db-64.png";
import pr from "./assets/tech_logo/icons8-html-64.png";
import gpt from "./assets/tech_logo/icons8-rest-api-64.png";
import miro from "./assets/tech_logo/icons8-postman-inc-24.png";

// Experience Section Logo's
import HCLogo from "./assets/company_logo/HC_logo.jpeg";
import PWskills from "./assets/company_logo/PW_logo.jpeg"
import Rama from "./assets/company_logo/rama.png"
import Kaldunga from "./assets/company_logo/kaldunga.png"
import Singsys from "./assets/company_logo/singsys_pte_ltd_logo.jpeg"
import Ping from "./assets/company_logo/ping.jpeg"
import Inevitable from "./assets/company_logo/inevitable_infotech_logo.jpeg"
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
    role: "JSM Infotech Pvt Ltd",
    company: "Android Developer",
    date: "05/2018 – 12/2018 (~7 months)",
    desc: "Worked as an Android Developer, developing mobile app features using Java and integrating APIs. Contributed to building user-focused modules, fixing bugs, and improving app performance for production use.",
  },
  {
    id: 1,
    img: PWskills,
    role: "Alcanzar Software Solution Pvt Ltd",
    company: "Android Developer",
    date: "04/2019 – 01/2021 (~1.9 years)",
    desc: "Worked on multiple mobile projects using Android Java, along with Cordova and Xamarin. Built and maintained app modules, integrated backend APIs, and ensured smooth performance through testing, debugging, and feature enhancements.",
  },
  {
    id: 1,
    img: Rama,
    role: "Rama Infotech Pvt Ltd",
    company: "React Native Developer",
    date: "02/2021 – 09/2025 (~4 years)",
    desc: "Developed and maintained cross-platform iOS & Android applications using React Native. Worked on complete app development including UI implementation, REST API integration, Firebase services, performance optimization, and Play Store/App Store deployment.",
  },
   {
    id: 1,
    img: Kaldunga,
    role: "Kaldunga Pvt Ltd",
    company: "Reelance",
    date: "02/2021 – 09/2025 (~4 years)",
    desc: "Developed and maintained cross-platform iOS & Android applications using React Native. Worked on complete app development including UI implementation, REST API integration, Firebase services, performance optimization, and Play Store/App Store deployment.",
  },
  {
    id: 1,
    img: Singsys,
    role: "Singsys Pvt Ltd",
    company: "Software Engineer",
    date: "02/2021 – 09/2025 (~4 years)",
    desc: "Developed and maintained cross-platform iOS & Android applications using React Native. Worked on complete app development including UI implementation, REST API integration, Firebase services, performance optimization, and Play Store/App Store deployment.",
  },
  {
    id: 1,
    img: Ping,
    role: "Ping Pong Entertainment",
    company: "Mobile App Developer",
    date: "02/2021 – 09/2025 (~4 years)",
    desc: "Developed and maintained cross-platform iOS & Android applications using React Native. Worked on complete app development including UI implementation, REST API integration, Firebase services, performance optimization, and Play Store/App Store deployment.",
  },
  {
    id: 1,
    img: Inevitable,
    role: "Inevitable Infotech",
    company: "Freelance",
    date: "02/2021 – 09/2025 (~4 years)",
    desc: "Developed and maintained cross-platform iOS & Android applications using React Native. Worked on complete app development including UI implementation, REST API integration, Firebase services, performance optimization, and Play Store/App Store deployment.",
  },
];

export const education = [
  {
    id: 0,
    img: bit,
    school: "Subharti University (Delhi)",
    date: "Year: 2017",
    degree: "MCA (Master of Computer Applications)",
  },
  {
    id: 1,
    img: hr,
    school: "Vinayaka Mission University (Delhi)",
    date: "Year: 2015",
    degree: "PGDCA ",
  },
  {
    id: 2,
    img: hr,
    school: "Janata Inter College School",
    date: "Year: 2010",
    degree: "12th (Math & Science) ",
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
