import data from '../data/data.json'
import { FaSquareGithub } from "react-icons/fa6";

function Projects() {

  return (
    <section id="projects" className="py-20 px-10 bg-[#1a202c] text-[#fefcbf]">
      <h2 className="text-3xl font-bold text-[#facc15] mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2d3748] p-6 rounded-lg border border-[#facc15]/20 hover:shadow-lg hover:scale-105 transition relative"
          >
            <h3 className="text-xl font-semibold text-[#facc15] mb-4">{project.name}</h3>
            <p className="text-[#e2e8f0]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#facc15]/10 text-[#facc15] text-sm px-2 py-1 rounded-md border border-[#facc15]/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link &&
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 bg-[#facc15] hover:underline rounded-tr-sm rounded-bl-sm">
                <FaSquareGithub className='text-3xl text-black' />
              </a>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
