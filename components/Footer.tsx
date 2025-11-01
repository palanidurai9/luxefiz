// FIX: Create the Footer component, which was missing.
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="col-span-1">
            <Link to="/">
                <div className="font-playfair font-black text-3xl">
                    <span className="text-white">Luxe</span>
                    <span className="text-brand-pink">fiz</span>
                </div>
            </Link>
            <p className="mt-4 text-gray-400">
              Marketing with Class, Easy on Cash. Luxury-quality digital marketing, web, and SaaS solutions made affordable.
            </p>
            <p className="mt-4 text-gray-400">
              Contact us: <a href="mailto:luxefiz@gmail.com" className="text-brand-pink hover:underline">luxefiz@gmail.com</a>
            </p>

          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/luxefiz/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition"><LinkedInIcon /></a>
              <a href="https://instagram.com/luxefiz" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition"><InstagramIcon /></a>
              <a href="https://www.youtube.com/@luxefiz" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition"><YouTubeIcon /></a>
              <a href="https://api.whatsapp.com/send?phone=6282839617" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition"><WhatsAppIcon /></a>
            </div>
            <br></br>
            <p className="text-gray-400">Follow us on social media for updates!</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luxefiz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
