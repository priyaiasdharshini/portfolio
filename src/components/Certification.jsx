import React from 'react';
import data from '../data/data.json'
import { TbExternalLink } from "react-icons/tb";

function Certification() {

  return (
    <section id="certification" className="py-20 px-10 bg-[#1a202c] text-[#fefcbf]">
      <h2 className="text-3xl font-bold text-[#facc15] mb-10 flex items-center gap-4">
        Certifications
        <span className="flex-1 h-px bg-[#e2e8f0]"></span>
      </h2>
      <div className="space-y-8 grid md:grid-cols-3 gap-10 grid-cols-1">
        {
          data.certifications.map((cert, index) => (
            <div
              key={index}
              className="relative p-6 bg-[#2d3748] rounded-lg border border-[#facc15]/20 flex flex-col md:flex-row items-center gap-6 h-full"
            >
              {/* {
                cert.image &&
                <img
                  src={'/assets/certificates/' + cert.image}
                  alt="CCNA Certification"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-md shadow-lg"
                />
              } */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold mt-2 mb-2">{cert.name}</h3>
                  <p className="text-[#facc15] mb-2">{cert.institution}</p>
                  <section className='flex gap-2 align-middle mb-2'>
                    {
                      cert.id &&
                      <p>
                        Credential Id: <span className='text-[#facc15] '>
                          {cert.id}  </span>
                      </p>
                    }
                    <a href="">
                      <TbExternalLink className='text-2xl text-[#facc15] ' />
                    </a>
                  </section>
                </div>
                {
                  cert.year &&
                  <p className="absolute top-0 right-0 bg-[#facc15]/10 text-[#facc15] text-md px-2 py-1 rounded-tr-md border border-[#facc15]/50"> {cert.year}</p>
                }
                {
                  cert.description &&
                  <p className="text-[#e2e8f0]">
                    {cert.description}
                  </p>
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Certification;
