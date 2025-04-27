import data from '../data/data.json';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-[#1a202c] bg-opacity-95 py-5 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-5">
        <div className="text-[#facc15] text-2xl font-bold md:w-[50%]">{data.name}</div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#ccd6f6]">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          onClick={() => setMenuOpen(false)}
          className={`${menuOpen ? 'flex' : 'hidden'
            } flex-col absolute top-16 left-0 w-full bg-[#1a202c] md:static md:flex md:flex-row md:justify-end md:gap-8 md:bg-transparent rounded-b-lg`}
        >
          <a href="#about" className="text-[#fefcbf] hover:text-[#facc15] transition py-2 px-5 md:py-0">
            About
          </a>
          <a href="#experience" className="text-[#fefcbf] hover:text-[#facc15] transition py-2 px-5 md:py-0">
            Experience
          </a>
          <a href="#certification" className="text-[#fefcbf] hover:text-[#facc15] transition py-2 px-5 md:py-0">
            Certifications
          </a>
          <a href="#projects" className="text-[#fefcbf] hover:text-[#facc15] transition py-2 px-5 md:py-0">
            Projects
          </a>
          <a href="#contact" className="text-[#fefcbf] hover:text-[#facc15] transition py-2 px-5 md:py-0">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
