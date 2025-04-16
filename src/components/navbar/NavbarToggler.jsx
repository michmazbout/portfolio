import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const NavbarToggler = ({ isOpen, onClick }) => {
  return (
    <button
      className="text-2xl p-2 text-white hover:text-glowingPink transition-all duration-300 transform hover:scale-110"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarToggler;