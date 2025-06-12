import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12 text-center"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-2">📧 saitejajaladi9849@gmail.com</p>
      <p className="text-gray-700">📞 +1-470-533-8444</p>
    </motion.section>
  );
}
