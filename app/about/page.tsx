"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f1624] text-white px-4 sm:px-6 lg:px-24 py-12">
      {/* Title */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-cyan-400"
      >
        About Me
      </motion.h1>

      {/* Professional Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-5xl">
          I’m a <span className="text-cyan-400">Full-Stack Web Developer</span> with 1 year
          of experience building scalable Laravel back-ends and interactive front-ends
          using Angular and React.js. I specialize in RESTful APIs and responsive UI design.
          <br /><br />
          I’m passionate about clean, maintainable code and user-focused solutions.
          One of my key projects is the{" "}
          <span className="text-cyan-300">PSolve Training Platform</span>,
          actively used by 10 ICPC student activity teams across different universities.
          I thrive in Agile environments and have strong Git/version control skills.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">Technical Skills</h2>
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
            "Responsive Design"
          ].map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
              className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-center hover:bg-cyan-400 hover:text-black transition duration-300 text-sm sm:text-base"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">Key Projects</h2>
        <div className="space-y-5">
          {[
            {
              title: "Student Results Portal",
              desc: "Angular-based web app for El-Shawaka Preparatory School to display student results from Excel files, reducing printing costs by 50%.",
            },
            {
              title: "Stylac – Custom T-Shirt Shop",
              desc: "Full-stack e-commerce platform (Laravel + Angular) with product customization, cart, admin dashboard, and REST API integration.",
            },
            {
              title: "Customer Billing Management System",
              desc: "Laravel billing system for telecom providers with automated invoices, bulk Excel import/export, and multi-language support.",
            },
            {
              title: "PSolve Training Platform",
              desc: "Angular training management platform used by 10+ ICPC teams with role-based access, task tracking, and competition scheduling.",
            },
          ].map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
              className="bg-gray-800 p-4 sm:p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">Professional Experience</h2>
        <div className="space-y-4">
          {[
            {
              role: "Front-End Developer, Stylac",
              date: "Mar 2025 – Apr 2025",
              desc: "Built responsive Angular front-end for e-commerce T-shirt platform with live customization tool and role-based admin dashboard.",
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
              transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
              className="bg-gray-800 p-4 sm:p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-base sm:text-lg font-semibold">{exp.role}</h3>
              <span className="text-xs sm:text-sm text-gray-400">{exp.date}</span>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-base sm:text-lg">BSc in Information Technology</h3>
            <p className="text-gray-400 text-sm sm:text-base">Sohag University — GPA: 3.4 / 4.0</p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg">Full-Stack Web Development Diploma</h3>
            <p className="text-gray-400 text-sm sm:text-base">Instant Academy (Nov 2022 – Nov 2023)</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
