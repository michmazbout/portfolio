import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Elias Elias Al Alam, at first people worshiped the pagan gods, then came the prophets, then jesus and now it's me. 
        But fear not for it is not your worship I seek from. NEY!! I come before you as but a servant humble and contrite,
        ready to make all your dreams come true ... for a fee ... of course ... you know ... A man gotta eat.
        <span className="ml-2 text-xl hover:scale-150 transition-transform duration-300 ease-in-out inline-block">😢</span>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
