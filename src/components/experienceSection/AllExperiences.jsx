import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Research Assistant",
    company: "University of Lausanne",
    date: "Mar 2023 – Sep 2024",
    responsibilities: [
      "Analyzed 12 years of glacial elevation data from 6 glaciers to identify critical erosion points.",
      "Processed DEMs with QGIS/ArcGIS to remove ice/water layers and create high-integrity datasets.",
      "Led field data collection efforts with 8 scientists across the Thrift glaciers for climate modeling." 
    ],
  },
  {
    job: "Aquatic Ecology Technician",
    company: "Aquarius Umwelttechnik AG",
    date: "Aug 2023 – Sep 2023",
    responsibilities: [
      "Collected biological and biometric data on 800+ fish in the Neuchâtel rivers.",
      "Assisted in species health assessment and ecosystem strategy development for restoration plans.",
      "Contributed to sustainable fishing practices affecting 100+ communities."
    ],
  },
  {
    job: "Geophysical Technician",
    company: "Geo2x & geool",
    date: "Jan 2023 – Mar 2023",
    responsibilities: [
      "Executed DGPS-based geophone deployment and coordinated high-volume data acquisition.",
      "Installed, monitored, and collected over 5,000 geophones in challenging field environments.",
      "Collaborated with 15 geologists to gather data on geothermal reservoir potential."
    ],
  },
  {
    job: "Mechanical Engineering Technician",
    company: "DEMCO Steel",
    date: "May 2019 – Sep 2019",
    responsibilities: [
      "Conducted diagnostics on industrial machinery, improving performance by 25%.",
      "Reduced downtime by 150 hours/month via proactive troubleshooting and assembly work.",
      "Worked with over 50 industrial machines under a fast-paced production environment."
    ],
  },
  {
    job: "Engineering Technician (Elections)",
    company: "Koura General Election Center",
    date: "Apr 2018 – May 2018",
    responsibilities: [
      "Resolved technical faults in voting systems across polling centers.",
      "Trained 15+ support and data entry agents, increasing issue resolution rates by 20%.",
      "Ensured uninterrupted voter experience during sensitive election periods."
    ],
  },
  {
    job: "Judicial Guard",
    company: "Al Alam Impound",
    date: "Jun 2015 – Dec 2020",
    responsibilities: [
      "Enforced vehicle retrieval protocols for 700+ cars per summer in full compliance with regulations.",
      "Enhanced efficiency by 15% by optimizing inspection and release workflows.",
      "Maintained 100% adherence to safety and legal standards."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-y-8">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
