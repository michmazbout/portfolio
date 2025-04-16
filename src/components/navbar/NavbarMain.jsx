import { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import NavbarToggler from './NavbarToggler';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Close menu on scroll or when clicking links
  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${loaded ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'py-1 bg-black/95 shadow-xl' : 'py-2 bg-black/90'} backdrop-blur-md border-b border-glowingPink/20`}>
      <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <NavbarToggler 
              isOpen={menuOpen} 
              onClick={() => setMenuOpen(!menuOpen)} 
            />
          </div>
          <NavbarLogo />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <NavbarLinks />
          <div className="ml-4">
            <NavbarBtn />
          </div>
        </div>

        <div className="lg:hidden">
          <NavbarBtn />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${menuOpen ? 'bg-black/80 backdrop-blur-sm' : 'pointer-events-none bg-transparent'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div 
          className={`absolute top-20 left-0 right-0 bg-black/95 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <NavbarLinks onItemClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;