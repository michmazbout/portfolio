import { useState } from "react";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaReact,
  FaChartLine,       
  FaMapMarkedAlt,    
  FaCogs,           
  FaCube,           
  FaCode,           
  FaFire,           
  FaProjectDiagram,  
  FaRobot,          
  FaWater,          
  FaRecycle,        
  FaMicrochip       
} from "react-icons/fa";

const skillCategories = {
  Programming: [
    { text: "Python", icon: FaPython },
    { text: "MATLAB", icon: FaChartLine },
    { text: "R", icon: FaChartLine },
    { text: "Java", icon: FaJava },
    { text: "JavaScript", icon: FaCode },
    { text: "TypeScript", icon: FaCode },
    { text: "C++", icon: FaCode },
    { text: "Git", icon: FaGitAlt },
  ],
  Frontend: [
    { text: "ReactJS", icon: FaReact },
    { text: "NextJS", icon: FaCode },
    { text: "TailwindCSS", icon: FaCode },
    { text: "Framer Motion", icon: FaCode },
  ],
  "CAD & Engineering": [
    { text: "AutoCAD", icon: FaCube },
    { text: "SolidWorks", icon: FaCube },
    { text: "ArcGIS", icon: FaMapMarkedAlt },
    { text: "QGIS", icon: FaMapMarkedAlt },
    { text: "Ansys", icon: FaCogs },
    { text: "LabVIEW", icon: FaCode },
    { text: "Thermodynamics", icon: FaFire },
    { text: "Statics", icon: FaProjectDiagram },
    { text: "Dynamics", icon: FaProjectDiagram },
    { text: "Materials Science", icon: FaMicrochip },
    { text: "FEM Analysis", icon: FaProjectDiagram },
    { text: "CFD", icon: FaWater },
  ],
  "AI & Data": [
    { text: "Machine Learning", icon: FaRobot },
    { text: "AI Tools", icon: FaRobot },
    { text: "Remote Sensing", icon: FaMicrochip },
    { text: "3D Modeling", icon: FaCube },
    { text: "LiDAR Processing", icon: FaMicrochip },
  ],
  Environmental: [
    { text: "EIA", icon: FaRecycle },
    { text: "LCA", icon: FaRecycle },
    { text: "Sustainability", icon: FaRecycle },
  ],
};

const AllSkills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-cyan text-wt"
                : "bg-cyan text-black hover:bg-purple-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {skillCategories[activeCategory].map((item, index) => (
          <motion.div
            key={`${item.text}-${index}`}
            variants={fadeIn("up", index * 0.02)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <SingleSkill text={item.text} imgSvg={<item.icon size={20} />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;