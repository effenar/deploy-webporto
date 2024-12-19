"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your form submission logic here
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 pt-32 pb-28 bg-black text-white space-y-10 md:pt-32 md:pb-32">
      <div className="container pl-10 pr-10 mx-auto">
        <div className="">
          <img
            src="Contacts.png"
            className="w-96 h-auto" />
        </div>
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Contact Form */}
            <div className=" w-auto md:pl-48 md:w-[1000px]">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className='space-y-4'>
                  <label htmlFor="name" className="block font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white text-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className='space-y-4'>
                  <label htmlFor="name" className="block font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white text-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className='space-y-4'>
                  <label htmlFor="name" className="block font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3  bg-white text-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-e"
                >
                  Send Message
                </button>
              </form>
                {formSubmitted && (
                  <p className="mt-4 text-center text-green-500">Your message has been sent!</p>
                )}
            </div>

            {/* Contact Information */}          
            <div className='w-96'>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-4">
                  <a className="flex items-center justify-center bg-white text-black p-3 rounded-full transition duration-200">
                    <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                  </a>
                  <a href="mailto:fuatnurafrillah@gmail.com" className="text-white hover:text-blue-500">
                    fuatnurafrillah@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <a className="flex items-center justify-center bg-white text-black p-3 rounded-full transition duration-200" href="https://wa.me/087738577300">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                  </a>
                  <a href="tel:+1234567890" className="text-white hover:text-blue-500">
                    Contact me via Whatsapp!
                  </a>
                </p>
                <ul className="flex gap-2">
                  <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://discordapp.com/users/Faprillah#2165">
                    <FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />
                  </a>
                  <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://x.com/Furillah">
                    <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
                  </a>
                  <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://www.instagram.com/fn.april/">
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                  </a>
                  <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://github.com/effenar">
                    <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                  </a>
                  <a className="flex items-center justify-center bg-black text-white p-3 rounded-full hover:bg-slate-100 hover:text-black transition duration-200" href="https://www.linkedin.com/in/fuat-nur-afrillah/">
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
                  </a>
                </ul>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;