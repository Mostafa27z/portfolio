"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-[#0f1624] text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Right Section - Image (يكون أول حاجة في الموبايل) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-72 h-80 flex items-center justify-center">
            <Image
              src="/personal.png"
              alt="Mostafa Osama"
              width={280}
              height={280}
              className="object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_25px_#06b6d4]"
              priority
            />
          </div>
        </motion.div>

        {/* Left Section - Text */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 order-2 md:order-1"
        >
          <p className="text-lg text-gray-400">Hello, It's Me</p>
          <h1 className="text-5xl font-bold">
            Mostafa <span className="text-cyan-400">Osama</span>
          </h1>
          <h2 className="text-2xl font-semibold">
            And I'm a <span className="text-cyan-400">Full Stack Developer</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            I'm a Full-Stack Web Developer specializing in Laravel, Angular, and React.
            I create scalable backends, interactive UIs, and seamless digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 pt-2">
            <a
              href="https://linkedin.com/in/mustafa-osama-318617225"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Mostafa27z"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:mostafaweb27@gmail.com"
              className="p-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          {/* CV Button */}
          <Link
            href="/resume"
            className="inline-block mt-4 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-300 transition duration-300"
          >
            Download CV
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
