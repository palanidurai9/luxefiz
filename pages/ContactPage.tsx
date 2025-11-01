import React, { useState } from 'react';

// adjust path if needed
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://luxefizz.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-brand-charcoal mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-6">Send us a Message</h2>
            {isSubmitted ? (
              <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg">
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple transition"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-purple focus:border-brand-purple transition"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-10 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-brand-purple to-brand-pink hover:shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-playfair font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-lg text-gray-700">

              {/* Office */}
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <h4 className="font-bold">Our Office</h4>
                  <p>Mannargudi, Tamil Nadu, India - 614001</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <a href="mailto:luxefiz@gmail.com" className="hover:text-brand-purple transition">luxefiz@gmail.com</a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <a href="tel:+916382839617" className="hover:text-brand-purple transition">+91 63828 39617</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="h-6 w-6 text-brand-purple mr-4 mt-1 flex-shrink-0"><WhatsAppIcon /></div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <a href="https://api.whatsapp.com/send?phone=+916382839617" target="_blank" className="hover:text-brand-purple transition">
                    +91 63828 39617
                    </a>
                  </div>
                </div>

              {/* Instagram */}
              <div className="flex items-start">
                <div className="h-6 w-6 text-brand-purple mr-4 mt-1 flex-shrink-0"><InstagramIcon /></div>
                <div>
                  <h4 className="font-bold">Instagram</h4>
                  <a href="https://instagram.com/luxefiz" target="_blank" className="hover:text-brand-purple transition">@luxefiz</a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="h-6 w-6 text-brand-purple mr-4 mt-1 flex-shrink-0"><LinkedInIcon /></div>
                <div>
                  <h4 className="font-bold">LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/luxefiz/" target="_blank" className="hover:text-brand-purple transition">Luxefiz</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
