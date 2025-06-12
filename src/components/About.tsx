import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700">
        I'm a self-motivated and adaptable full stack developer with foundational experience in building responsive web applications using modern front-end and back-end technologies. I recently completed my Master’s in Computer Science from the University of Texas at Arlington, specializing in Software Engineering, with courses in Data Mining, AI, and Algorithms.
      </p>
    </motion.section>
  );
}
