import React from 'react';
import data from '../data/data.json';

const Experience = () => {
  return (
    <div id='experience' className="bg-gray-800  p-20 px-8  shadow-md">
      <h2 className="text-3xl font-bold text-[#facc15] inline-block mb-6">
        Experience
      </h2>
      <ul className="space-y-6 relative z-10">
        {data.experience.map((exp, index) => (
          <li
            key={index}
            className="p-4 bg-gray-700 border border-gray-600 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {exp.company}
            </h3>
            <p className="text-gray-300">
              <strong className="text-gray-100">Role:</strong> {exp.role}
            </p>
            <p className="text-gray-300">
              <strong className="text-gray-100">Years:</strong> {exp.years}
            </p>
            <p className="text-gray-300">
              <strong className="text-gray-100">Description:</strong> {exp.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
