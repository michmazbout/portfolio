import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Assessing Tributary Effects on Sediment Composition in the Dam-Regulated Dixence River.",
    year: "2025",
    align: "right",
    image: "/images/grande_dixence.webp",
    link: "https://github.com/michmazbout/Dixence_Study/tree/main",
  },
  {
    name: "Studying the Effects of Global Warming on Swiss Glaciers Using GIS & Remote Sensing",
    year: "2023-2024",
    align: "left",
    image: "/images/glacier1.jpeg",
    link: "https://zenodo.org/records/14823571",
  },
  {
    name: "Ocean Surface Oil Spill Detection with Machine Learning",
    year: "2023",
    align: "right",
    image: "/images/oil.jpeg",
    link: "https://wp.unil.ch/dawn/files/2023/02/Elias_Al_Alam_ML_Project.pdf",
  },
  {
    name: "Mapping Glacier Retreat Over 35 Years using Google Earth Engine, Landsat Imagery and Python",
    year: "2023",
    align: "left",
    image: "/images/glacier2.jpeg",
    link: "https://github.com/michmazbout/Remote-Sensing-Project",
  },
  {
    name: "Geophysical Mapping using DGPS",
    year: "2023",
    align: "right",
    image: "/images/geo.webp",
    link: "https://www.geo2x.com/index.html",
  },
  {
    name: "Mechanical Engineering Technician",
    year: "2019",
    align: "left",
    image: "/images/demco.jpeg",
    link: "https://www.demcosteel.com/index.php",
  },
  {
    name: "IT Systems Technician",
    year: "2018",
    align: "right",
    image: "/images/it.webp",
    link: "https://www.ndi.org/sites/default/files/Lebanon%202018%20Parliamentary%20Elections_Final%20Report%20(v.3).pdf",
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
