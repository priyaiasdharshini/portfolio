import data from '../data/data.json';
function Footer() {
  return (
    <footer className="bg-[#25313efa] py-10 text-center ">
      <div className="text-[#facc15] text-2xl mb-2 font-bold">{data.name}</div>
      <p className="text-[#e2e8f0] text-sm">Designed & Built by {data.name}</p>
      <div className="mt-5 relative z-10">
        <a
          href="#about"
          className="text-[#fefcbf] mx-3 hover:text-[#facc15] transition"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[#fefcbf] mx-3 hover:text-[#facc15] transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[#fefcbf] mx-3 hover:text-[#facc15] transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
