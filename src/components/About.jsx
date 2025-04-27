import data from '../data/data.json'

function About() {
  return (
    <section id="about" className="py-24 px-10 md:px-24 bg-[#2d3748] text-[#fefcbf]">
      <h2 className="text-4xl font-bold text-[#facc15] mb-10">About Me</h2>
      <p className="text-[#e2e8f0] text-xl relative z-10">
        {data.about}
      </p>
    </section>
  );
}

export default About;
