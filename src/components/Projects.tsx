import { motion } from "framer-motion";

const projects = [
  {
    title: "Twitter Spam Detection",
    description:
      "Implemented a machine learning model using classification techniques and SVMs to detect spam in Twitter posts.",
  },
  {
    title: "Smart City Management (IoT)",
    description:
      "Built an IoT platform to monitor urban data using sensors, enabling real-time alerts and automation.",
  },
  {
    title: "Home Automation (IoT)",
    description:
      "Used various sensors to control home appliances over the internet, providing automation through IoT.",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
