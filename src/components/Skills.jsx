import React from 'react';
import data from '../data/data.json'

function Skills() {
  return (
    <section id="skills" className="py-20 px-10 bg-[#1a202c] text-[#fefcbf]">
      <h2 className="text-3xl font-bold text-[#facc15] mb-8">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-[#2d3748] text-center relative z-10 py-3 rounded-md text-[#e2e8f0] hover:bg-[#facc15] hover:text-[#1a202c] transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
