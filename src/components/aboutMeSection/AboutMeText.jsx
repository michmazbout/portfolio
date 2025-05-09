import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-glowingPink mb-10">About Me</h2>
      <p className="text-wt">
        I'm Elias Al Alam — a multidisciplinary engineer driven by curiosity and built on resilience. With a foundation in mechanical engineering and a master's in environmental science, I've worked across disciplines to build tribometers, analyze glaciers, optimize irrigation, and detect oil spills using machine learning.
        <br /><br />
        I don’t just build systems — I design smarter ways to live, monitor, and sustain. Whether it’s through code, hardware, or climate data, my mission is to merge creativity and science into tools that leave real impact.
      </p>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="inline-flex w-auto min-h-[48px] z-10 border border-glowingPink rounded-full py-2 px-4 text-lg gap-2 items-center mt-10 hover:bg-glowingPink transition-all duration-500 cursor-pointer text-white hover:text-darkBackground mx-auto md:mx-0"
      >
        My Projects
      </Link>



    </div>
  );
};

export default AboutMeText;
