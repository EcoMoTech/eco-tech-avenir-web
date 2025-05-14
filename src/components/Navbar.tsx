
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-eco-green font-montserrat">Eco<span className="text-eco-blue">Mo</span>Tech</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/energie" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              Solutions Énergétiques
            </Link>
            <Link to="/mobilite" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              Mobilité Électrique
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              Services
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              Actualités
            </Link>
            <Link to="/join-us" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              Rejoindre
            </Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-eco-green font-medium transition-colors">
              À Propos
            </Link>
            <Link to="/contact">
              <Button variant="default" className="bg-eco-green hover:bg-eco-green/90 text-white">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                Accueil
              </Link>
              <Link to="/energie" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                Solutions Énergétiques
              </Link>
              <Link to="/mobilite" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                Mobilité Électrique
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                Actualités
              </Link>
              <Link to="/join-us" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                Rejoindre
              </Link>
              <Link to="/a-propos" className="text-gray-700 hover:text-eco-green font-medium transition-colors" onClick={toggleMenu}>
                À Propos
              </Link>
              <Link to="/contact" onClick={toggleMenu}>
                <Button variant="default" className="bg-eco-green hover:bg-eco-green/90 text-white w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
