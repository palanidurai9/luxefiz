// FIX: Create the Header component, which was missing.
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from '../assets/logo';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

const NavLinks: React.FC<{ className?: string, onLinkClick?: () => void }> = ({ className, onLinkClick }) => (
    <nav className={className}>
      <NavLink to="/about" onClick={onLinkClick} className={({ isActive }) => `px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-brand-purple font-bold' : 'hover:bg-purple-50'}`}>About</NavLink>
      <NavLink to="/services" onClick={onLinkClick} className={({ isActive }) => `px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-brand-purple font-bold' : 'hover:bg-purple-50'}`}>Services</NavLink>
      <NavLink to="/portfolio" onClick={onLinkClick} className={({ isActive }) => `px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-brand-purple font-bold' : 'hover:bg-purple-50'}`}>Portfolio</NavLink>
      <NavLink to="/testimonials" onClick={onLinkClick} className={({ isActive }) => `px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-brand-purple font-bold' : 'hover:bg-purple-50'}`}>Testimonials</NavLink>
      <NavLink to="/process" onClick={onLinkClick} className={({ isActive }) => `px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-brand-purple font-bold' : 'hover:bg-purple-50'}`}>Process</NavLink>
      <NavLink to="/contact" onClick={onLinkClick} className="ml-0 md:ml-4 mt-4 md:mt-0 px-6 py-2 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-pink transition-colors duration-300">Contact Us</NavLink>
    </nav>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu}>
          <Logo />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <NavLinks />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <NavLinks className="flex flex-col items-center py-4 space-y-2" onLinkClick={closeMenu}/>
      </div>
    </header>
  );
};

export default Header;
