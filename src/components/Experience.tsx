import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="bg-white shadow p-4 rounded-lg">
        <h3 className="text-xl font-semibold">DXC Technology</h3>
        <p className="text-gray-600">Proposal Manager & Service Delivery Coordinator (July 2020 – July 2023)</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Managed project lifecycle: scope, solutioning, proposals, delivery.</li>
          <li>Coordinated public sector bids for UKI tenders.</li>
          <li>Worked across SAP, ITO, Salesforce, and delivery teams.</li>
          <li>Facilitated technical triage, customer response, and handover.</li>
        </ul>
      </div>
    </motion.section>
  );
}
