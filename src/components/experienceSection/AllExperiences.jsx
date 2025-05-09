import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";

const experiences = [
  {
    job: "Research Assistant",
    company: "University of Lausanne",
    date: "Mar 2023 – Sep 2024",
    responsibilities: [
      "Analyzed 12 years of glacial elevation data from 6 glaciers to identify critical erosion points.",
      "Processed DEMs with QGIS/ArcGIS to remove ice/water layers and create high-integrity datasets.",
      "Led field data collection efforts with 8 scientists across the Thrift glaciers for climate modeling.",
    ],
  },
  {
    job: "Aquatic Ecology Technician",
    company: "Aquarius Umwelttechnik AG",
    date: "Aug 2023 – Sep 2023",
    responsibilities: [
      "Collected biological and biometric data on 800+ fish in the Neuchâtel rivers.",
      "Assisted in species health assessment and ecosystem strategy development for restoration plans.",
      "Contributed to sustainable fishing practices affecting 100+ communities.",
    ],
  },
  {
    job: "Geophysical Technician",
    company: "Geo2x & geool",
    date: "Jan 2023 – Mar 2023",
    responsibilities: [
      "Executed DGPS-based geophone deployment and coordinated high-volume data acquisition.",
      "Installed, monitored, and collected over 5,000 geophones in challenging field environments.",
      "Collaborated with 15 geologists to gather data on geothermal reservoir potential.",
    ],
  },
  {
    job: "Mechanical Engineering Technician",
    company: "DEMCO Steel",
    date: "May 2019 – Sep 2019",
    responsibilities: [
      "Conducted diagnostics on industrial machinery, improving performance by 25%.",
      "Reduced downtime by 150 hours/month via proactive troubleshooting and assembly work.",
      "Worked with over 50 industrial machines under a fast-paced production environment.",
    ],
  },
  {
    job: "Engineering Technician (Elections)",
    company: "Koura General Election Center",
    date: "Apr 2018 – May 2018",
    responsibilities: [
      "Resolved technical faults in voting systems across polling centers.",
      "Trained 15+ support and data entry agents, increasing issue resolution rates by 20%.",
      "Ensured uninterrupted voter experience during sensitive election periods.",
    ],
  },
  {
    job: "Judicial Guard",
    company: "Al Alam Impound",
    date: "Jun 2015 – Dec 2020",
    responsibilities: [
      "Enforced vehicle retrieval protocols for 700+ cars per summer in full compliance with regulations.",
      "Enhanced efficiency by 15% by optimizing inspection and release workflows.",
      "Maintained 100% adherence to safety and legal standards.",
    ],
  },
];

const AllExperiences = () => {
  // Animation variants for fade-in effect
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
  });

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg Grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.job + index} // Using job + index for unique key
            variants={fadeIn("up", index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full"
          >
            <SingleExperience experience={experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllExperiences;