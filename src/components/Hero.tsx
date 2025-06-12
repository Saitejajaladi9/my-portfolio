import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-4xl font-bold mb-4">J V V L Sai Teja</h1>
      <p className="text-xl mb-4">Full Stack Developer | ML & IoT Enthusiast</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/veera-venkata-lakshmi-sai-teja-jaladi-3aa223269/" target="_blank"><FaLinkedin /></a>
        <a href="mailto:saitejajaladi9849@gmail.com"><FaEnvelope /></a>
      </div>
    </motion.section>
  );
}
