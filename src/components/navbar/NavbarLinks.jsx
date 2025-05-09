import { Link } from "react-scroll";
import { useState, useEffect } from 'react';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ onItemClick }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      const nearBottom = scrollTop + windowHeight >= fullHeight - 50;

      if (nearBottom) {
        // Force contact active when at the bottom
        if (activeSection !== 'contact') setActiveSection('contact');
      } else if (activeSection === 'contact') {
        // If we were on contact but scrolled up, immediately force 'projects'
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-cy font-body lg:items-center sm:py-8 sm:px-4">
      {links.map((link) => (
        <li 
          key={link.section} 
          className="group transform hover:-translate-y-0.5 transition-transform duration-200"
          onClick={onItemClick}
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
