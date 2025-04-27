import data from "../data/data.json";

function Education() {
  return (
    <section id="education" className="py-20 px-10 bg-[#1a202c] text-[#fefcbf]">
      <h2 className="text-3xl font-bold text-[#facc15] mb-8">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          data.education.map((edu, index) => (
            <div key={index} className="relative z-10 p-6 hover:scale-105 duration-150 bg-[#2d3748] rounded-lg border border-[#facc15]/20">
              <h3 className="text-xl font-semibold text-[#facc15] mb-2">{edu.degree}</h3>
              <p className="text-[#e2e8f0]">{edu.institution}</p>
              <p className="text-[#e2e8f0] italic">{edu.year} | {edu.type}: <span className="text-[#facc15]">{edu.marks}</span></p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Education;
