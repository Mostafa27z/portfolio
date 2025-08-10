"use client";

import { motion } from "framer-motion";
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f1624] text-white px-6 py-12 sm:px-12 lg:px-24">
      {/* العنوان */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-cyan-400"
      >
        Contact Me
      </motion.h1>

      {/* معلومات الاتصال */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        {/* رقم الهاتف */}
        <motion.a
          href="tel:+201129274930"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
        >
          <FaPhone className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-gray-400">+20 112 927 4930</p>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/mustafa-osama-318617225"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
        >
          <FaLinkedin className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-lg font-semibold">LinkedIn</p>
            <p className="text-gray-400 break-all">
              linkedin.com/in/mustafa-osama-318617225
            </p>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Mostafa27z"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
        >
          <FaGithub className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-lg font-semibold">GitHub</p>
            <p className="text-gray-400 break-all">github.com/Mostafa27z</p>
          </div>
        </motion.a>

        {/* البريد الإلكتروني */}
        <motion.a
          href="mailto:mostafaweb27@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition"
        >
          <FaEnvelope className="text-cyan-400 text-2xl" />
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-gray-400 break-all">mostafaweb27@gmail.com</p>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
