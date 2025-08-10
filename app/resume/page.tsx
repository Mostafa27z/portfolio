"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0f1624] text-white px-6 py-12 sm:px-12 lg:px-24">
      {/* العنوان */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-cyan-400"
      >
        My Resume
      </motion.h1>

      {/* زر التحميل */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-300 transition duration-300"
        >
          <FaDownload /> Download CV
        </a>
      </motion.div>

      {/* الملخص المهني */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-4xl">
          I’m a <span className="text-cyan-300">Full-Stack Web Developer</span> with
          1 year of experience building scalable Laravel back-ends and interactive
          front-ends using Angular and React.js. Specializing in RESTful APIs,
          responsive UI design, and CMS integration. Passionate about clean code
          and user-focused solutions, with notable work on the{" "}
          <span className="text-cyan-300">PSolve Training Platform</span> used by 10+
          ICPC student activity teams across Egypt.
        </p>
      </motion.section>

      {/* المهارات */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Technical Skills
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-gray-300">
          {[
            "PHP",
            "Laravel",
            "MySQL",
            "REST APIs",
            "Angular",
            "React.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Git & GitHub",
            "Postman",
            "Responsive Design",
          ].map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.03, duration: 0.3 }}
              className="bg-gray-800 px-4 py-2 rounded-lg text-center hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* الخبرات */}
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Professional Experience
        </h2>
        <div className="space-y-4">
          {[
            {
              role: "Front-End Developer, Stylac",
              date: "Mar 2025 – Apr 2025",
              desc: "Built responsive Angular front-end for a custom T-shirt shop with live product customization and integrated RESTful Laravel API.",
            },
            {
              role: "Front-End Developer, PSolve",
              date: "Jan 2025 – Mar 2025",
              desc: "Contributed to large Angular app for ICPC teams, built reusable components, routing, authentication, and API integrations.",
            },
            {
              role: "Front-End Developer, ICPC Sohag",
              date: "Aug 2024 – Nov 2024",
              desc: "Developed mentor management modules, ensured cross-browser support, and improved CI/CD workflow for training system.",
            },
          ].map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              className="bg-gray-800 p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.date}</span>
              <p className="text-gray-400 mt-2">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
