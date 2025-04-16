import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-lg font-bold font-body text-white relative overflow-hidden group border border-transparent hover:border-glowingPink transition-all duration-300">
      <span className="absolute inset-0 bg-gradient-to-r from-cy to-glowingPink opacity-100 group-hover:opacity-0 transition-opacity duration-500"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-glowingPink to-cy opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative z-10 flex items-center gap-1 transform group-hover:scale-105 transition-transform duration-300">
        <Link 
          spy={true} 
          smooth={true} 
          duration={500} 
          offset={-120} 
          to="contact"
          className="flex items-center gap-1"
        >
          Hire Me
          <span className="hidden md:inline-block">
            <LuArrowDownRight />
          </span>
        </Link>
      </span>
    </button>
  );
};

export default NavbarBtn;