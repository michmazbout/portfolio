import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGitAlt, FaChartLine, FaMapMarkedAlt, FaCogs, FaCube, FaCode, FaFire, FaProjectDiagram, FaRobot, FaWater, FaRecycle, FaMicrochip } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skillCategories = {
  Programming: [
    { skill: "Python", icon: FaPython },
    { skill: "MATLAB", icon: FaChartLine },
    { skill: "R", icon: FaChartLine },
    { skill: "Java", icon: FaJava },
    { skill: "JavaScript", icon: IoLogoJavascript },
    { skill: "TypeScript", icon: SiTypescript },
    { skill: "C++", icon: FaCode },
    { skill: "Git", icon: FaGitAlt },
  ],
  Frontend: [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3Alt },
    { skill: "JavaScript", icon: IoLogoJavascript },
    { skill: "TypeScript", icon: SiTypescript },
    { skill: "ReactJS", icon: FaReact },
    { skill: "Redux", icon: SiRedux },
    { skill: "NextJS", icon: SiNextdotjs },
    { skill: "TailwindCSS", icon: RiTailwindCssFill },
  ],
  "CAD & Engineering": [
    { skill: "AutoCAD", icon: FaCube },
    { skill: "SolidWorks", icon: FaCube },
    { skill: "ArcGIS", icon: FaMapMarkedAlt },
    { skill: "QGIS", icon: FaMapMarkedAlt },
    { skill: "Ansys", icon: FaCogs },
    { skill: "LabVIEW", icon: FaCode },
    { skill: "Thermodynamics", icon: FaFire },
    { skill: "Statics", icon: FaProjectDiagram },
    { skill: "Dynamics", icon: FaProjectDiagram },
    { skill: "Materials Science", icon: FaMicrochip },
    { skill: "FEM Analysis", icon: FaProjectDiagram },
    { skill: "CFD", icon: FaWater },
  ],
  "AI & Data": [
    { skill: "Machine Learning", icon: FaRobot },
    { skill: "AI Tools", icon: FaRobot },
    { skill: "Remote Sensing", icon: FaMicrochip },
    { skill: "3D Modeling", icon: FaCube },
    { skill: "LiDAR Processing", icon: FaMicrochip },
  ],
  Environmental: [
    { skill: "EIA", icon: FaRecycle },
    { skill: "LCA", icon: FaRecycle },
    { skill: "Sustainability", icon: FaRecycle },
  ],
};

const AllSkillsSM = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");

  return (
    <div className="my-8 px-4">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="w-full max-w-xs mx-auto block mb-6 p-3 rounded-md bg-lavenderMist text-darkBackground focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        {Object.keys(skillCategories).map((category) => (
          <option key={category} value={category} className="bg-lavenderMist text-darkBackground">
            {category}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
        {skillCategories[activeCategory].map((item, index) => (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-5xl text-lavenderMist" />
            <p className="text-center mt-2 text-sm text-lavenderMist">{item.skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkillsSM;