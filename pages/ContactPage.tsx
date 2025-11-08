import React from "react";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">

        <h1 className="text-5xl font-playfair font-bold text-brand-purple mb-10">
          Contact Us
        </h1>

        <div className="bg-purple-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-playfair font-bold mb-6">Contact Information</h2>

          <div className="space-y-8 text-lg text-gray-700">

            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-bold">Our Office</h4>
                <p>Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-bold">Email Us</h4>
                <a href="mailto:info@luxefiz.com" className="hover:text-brand-purple transition">info@luxefiz.com</a>
              </div>
            </div>

            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h4 className="font-bold">Call Us</h4>
                <a href="tel:+916382839617" className="hover:text-brand-purple transition">+91 63828 39617</a>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <h3 className="text-xl font-bold mt-12 mb-4">Connect With Us</h3>
          <div className="flex space-x-6 text-brand-purple">
            <a href="https://www.linkedin.com/company/luxefiz/" target="_blank" className="hover:opacity-70"><LinkedInIcon /></a>
            <a href="https://instagram.com/luxefiz" target="_blank" className="hover:opacity-70"><InstagramIcon /></a>
            <a href="https://api.whatsapp.com/send?phone=916382839617" target="_blank" className="hover:opacity-70"><WhatsAppIcon /></a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
