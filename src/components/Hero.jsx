import React from 'react';
import SocialMedia from './SocialMedia';
import data from '../data/data.json'

function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 py-24 bg-[#1a202c] text-[#fefcbf] items-center gap-10">      
      <div className="relative z-10 flex flex-col justify-center space-y-4" data-aos="fade-right">
        <p className="text-[#facc15] text-lg font-mono tracking-widest">Hi, my name is</p>
        <h1 className="text-[32px] md:text-6xl font-bold bg-gradient-to-r from-[#fefcbf] to-[#facc15] bg-clip-text text-transparent">
          {data.name}
        </h1>

        <SocialMedia />

        <p className="text-[#e2e8f0] text-lg text-justify max-w-lg mt-2">
          {data.profile}
        </p>
        <div className="flex gap-5 mt-5">
          <a href="#projects" className="bg-[#facc15] text-[#1a202c] px-6 py-3 rounded-md font-medium hover:shadow-lg transition">
            View My Work
          </a>
          <a
            href="/portfolio/assets/resume/resume.pdf" download='resume'
            className="border-2 border-[#facc15] text-[#facc15] px-6 py-3 rounded-md font-medium hover:bg-[#facc15] hover:text-[#1a202c] transition"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="relative z-10 flex justify-center items-center" data-aos="fade-left">
        <div className="relative  w-80 h-80 md:w-96 md:h-96">
          <img
            src={'/portfolio/assets' + data.profile_photo}
            alt={data.name}
            className="w-full relative z-10 h-full object-cover rounded-2xl shadow-lg transform transition hover:translate-y-[-10px]"
          />
          <div className="absolute inset-0 border-2 border-[#facc15] rounded-2xl transform translate-x-4 translate-y-4 transition hover:translate-x-2 hover:translate-y-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
