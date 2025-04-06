import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Architect of Eternal Wonders",
    company: "Giza Engineering Guild",
    date: "2600 BC – 2500 BC",
    responsibilities: [
      "Designed and led construction of the Great Pyramids using zero scaffolding and maximum drama.",
      "Managed over 20,000 laborers with no Slack, just vibes.",
      "Invented agile project management while riding a camel.",
      "Pioneered scalable stone architecture that still outperforms modern concrete.",
    ],
  },
  {
    job: "Head Artisan of Sacred Realms",
    company: "Petra Tech Collective",
    date: "1st Century AD",
    responsibilities: [
      "Carved full-blown temples into cliffs with pixel-perfect symmetry.",
      "Created hidden data chambers accessible only by ancient encryption (and horses).",
      "Introduced responsive design using sandstone and sunlight.",
      "Founded the first version control system using cave etchings.",
    ],
  },
  {
    job: "Global Lead – Mythical Systems Engineering",
    company: "Freelance / Web3 Order of the Pearl",
    date: "1631 AD – Present",
    responsibilities: [
      "Developing timeless experiences using React, TailwindCSS, and dark magic.",
      "Currently refactoring the Eiffel Tower to be serverless.",
      "Architected the Taj Mahal with pixel-perfect layout and bleeding-edge domes.",
      "On a mission to unify pyramids, Petra, Paris, and the blockchain.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
