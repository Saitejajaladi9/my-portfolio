import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="space-y-4 text-gray-700">
        <li>
          <strong>MS in Computer Science</strong> – University of Texas at Arlington<br />
          GPA: 3.6/4.0
        </li>
        <li>
          <strong>B.Tech in Computer Science</strong> – SRM Institute of Science and Technology<br />
          Score: 85%
        </li>
        <li>
          <strong>Senior Secondary (MPC)</strong> – Sri Chaitanya<br />
          Score: 953/1000
        </li>
        <li>
          <strong>High School</strong> – Vignan High School<br />
          CGPA: 9.7/10
        </li>
      </ul>
    </motion.section>
  );
}
