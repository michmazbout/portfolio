import { Link } from "react-scroll";
import { useState } from 'react';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ onItemClick }) => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-cy font-body lg:items-center sm:py-8 sm:px-4">
      {links.map((link) => (
        <li 
          key={link.section} 
          className="group transform hover:-translate-y-0.5 transition-transform duration-200"
          onClick={onItemClick} // This closes the mobile menu when clicked
        >
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer block py-2 lg:py-0 transition-all duration-300 ${activeSection === link.section ? 'text-glowingPink' : 'text-white hover:text-glowingPink'}`}
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-glowingPink w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;