import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/bblu.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-14 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            variants={item}
            className="text-sm sm:text-base font-semibold tracking-widest text-gray-400 uppercase"
          >
            Welcome to my portfolio
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-3"
          >
            Bablu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Vishwakarma
            </span>
          </motion.h2>

          <motion.h3
            variants={item}
            className="text-lg sm:text-2xl md:text-3xl font-semibold mt-5 text-[#a855f7]"
          >
            <span className="text-gray-200">I am a </span>
            <ReactTypingEffect
              text={["Android", "& IOS App Developer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#a855f7]">{cursor}</span>
              )}
            />
          </motion.h3>

          {/* Glass Card */}
          <motion.div
            variants={item}
            className="mt-8 p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I’m a React Native Developer with 7+ years of experience in
              building and maintaining high-quality Android & iOS applications.
              I specialize in creating scalable, performance-optimized mobile
              apps using React Native, along with experience in Flutter and
              native Android development. I have worked on multiple real-world
              projects including Government Public Grievance Redressal Systems
              (PGRS) and public service applications, handling complete
              development cycles such as UI implementation, API integration,
              database management, testing, debugging, and Play Store/App Store
              deployment. I focus on writing clean and reusable code, delivering
              smooth user experiences, and building secure applications with
              reliable backend communication and cloud services.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1GkdF-uAbfNOtWTAJfR9A2yXgCRHj8PWu/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold
              bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_25px_rgba(168,85,247,0.45)]"
            >
              VIEW RESUME
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="inline-flex items-center justify-center text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold
              border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              VIEW PROJECTS
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Tilt
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] rounded-full p-[3px]
            bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_50px_rgba(168,85,247,0.35)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full bg-[#0b0b14] p-2">
              <motion.img
                src={profileImage}
                alt="Bablu Vishwakarma"
                className="w-full h-full rounded-full object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
