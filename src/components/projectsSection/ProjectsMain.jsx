import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Riverbed Sediment Study - Swiss Rivers",
    year: "2023",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://wp.unil.ch/glace/team/",
  },
  {
    name: "Oil Spill Detection via ML",
    year: "2023",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Glacial Elevation Change Analysis",
    year: "2023-2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://wp.unil.ch/glace/team/",
  },
  {
    name: "Fish Health & Ecosystem Survey - Neuchâtel",
    year: "2023",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Geophysical Mapping using DGPS",
    year: "2023",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Tribometer Design & Manufacturing",
    year: "2019",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Smart Home & Irrigation System",
    year: "2019",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Industrial Machinery Diagnostics",
    year: "2019",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Election Equipment Tech Support",
    year: "2018",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Vehicle Impound Compliance Protocols",
    year: "2015-2020",
    align: "left",
    image: "/images/website-img-1.jpg",
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
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
