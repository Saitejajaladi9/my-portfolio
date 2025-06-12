import { motion } from "framer-motion";

const skills = [
  "C", "C++", "Python", "JavaScript", "React", "Node.js",
  "HTML", "CSS", "Bootstrap", "Tailwind CSS", "MySQL",
  "Git", "GitHub", "VS Code", "Java (basic)", "Python (basic)"
];

export default function Skills() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
