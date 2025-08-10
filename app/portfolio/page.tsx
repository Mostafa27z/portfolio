"use client";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = [
  {
    name: "Student Results Portal",
    tech: "Angular, XLSX, Angular Material",
    desc: "Web app for displaying student results from Excel files, reducing printing costs by 50%.",
    link: "https://el-shawaka.netlify.app/",
  },
  {
    name: "ICPC Sohag System",
    tech: " Angular, REST APIs",
    desc: "Mentor management and training system for ICPC Sohag, with responsive design and improved CI/CD workflows.",
    link: "https://isc-app.netlify.app/",
  },
  {
    name: "PSolve Training Platform",
    tech: "Angular, REST APIs",
    desc: "Training management platform used by 10+ ICPC teams for tasks, competitions, and role-based dashboards.",
    link: "https://psolve.net/",
  },
];

  return (
    <div className="min-h-screen bg-[#0f1624] text-white px-4 sm:px-6 lg:px-24 py-12">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-cyan-400"
      >
        Portfolio
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-cyan-500/20 transition"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-sm text-gray-400 mb-3">{p.tech}</p>
              <p className="text-gray-300 text-sm">{p.desc}</p>
            </div>
            <a
              href={p.link}
              className="mt-4 inline-block bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition text-center"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
