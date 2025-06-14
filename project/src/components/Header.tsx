import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-primary-800 p-1.5 sm:p-2 rounded-lg">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-800 font-heading">
                Maria Constructions
              </h1>
              <p className="text-xs sm:text-sm text-accent-600 hidden sm:block">Building Dreams Since 1999</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-accent-700 hover:text-primary-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+917012345678"
              className="bg-secondary-500 text-white px-4 py-2 xl:px-6 xl:py-2 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center space-x-2 text-sm xl:text-base"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-accent-700 hover:text-primary-800 transition-colors p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in border-t border-accent-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 px-2 rounded transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-primary-800 bg-primary-50'
                      : 'text-accent-700 hover:text-primary-800 hover:bg-accent-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+917012345678"
                className="bg-secondary-500 text-white px-4 py-3 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center space-x-2 w-fit mt-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;