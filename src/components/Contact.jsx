import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import data from '../data/data.json';

function Contact() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function sendData(e) {
    e.preventDefault();
    var formattedBody = `Name: ${formData.name} \nEmail: ${formData.email} \nComment: ${formData.message}`;
    var mailToLink =
      'mailto:' +
      data.email +
      '?subject=Message From Portfolio👋&body=' +
      encodeURIComponent(formattedBody);
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="py-20 md:px-10 px-5 bg-[#1a202c] text-[#fefcbf]">
      <h2 className="text-3xl font-bold text-[#facc15] mb-4">Get In Touch</h2>
      <hr className="border-t border-[#fefcbf] mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg text-[#facc15] mb-4">Let's Connect</p>
          <h3 className="text-4xl font-bold mb-4">Have a project in mind?</h3>
          <p className="text-[#e2e8f0] text-lg mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-4 text-xl">
              <p className="mb-4">{data.email}</p>
            </div>
            <SocialMedia />
          </div>
        </div>
        <form
          onSubmit={sendData}
          className="bg-[#2d3748] md:p-8 p-2 py-3 rounded-lg border border-[#facc15]/20 relative z-10"
        >
          <div className="mb-6">
            <label className="block text-[#fefcbf] mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 bg-[#1a202c] border border-[#facc15]/20 rounded-md text-[#fefcbf] focus:outline-none focus:ring-2 focus:ring-[#facc15]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#fefcbf] mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 bg-[#1a202c] border border-[#facc15]/20 rounded-md text-[#fefcbf] focus:outline-none focus:ring-2 focus:ring-[#facc15]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#fefcbf] mb-2">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full p-3 bg-[#1a202c] border border-[#facc15]/20 rounded-md text-[#fefcbf] focus:outline-none focus:ring-2 focus:ring-[#facc15]"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#facc15] text-[#1a202c] rounded-md font-medium transition cursor-pointer hover:bg-[#000000] hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
