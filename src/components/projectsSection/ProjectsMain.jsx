import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Pyramids of Giza",
    year: "2600 BC",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Taj Mahal",
    year: "1631 AD",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Petra",
    year: "369 BC",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Eiffel Tower",
    year: "1889 AD",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
