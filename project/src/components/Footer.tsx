import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="bg-secondary-500 p-2 rounded-lg">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading">Maria Constructions</h2>
                <p className="text-primary-200 text-sm sm:text-base">Building Dreams Since 1999</p>
              </div>
            </div>
            <p className="text-primary-200 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              With over 25 years of excellence in construction, we specialize in creating 
              beautiful homes and commercial spaces that stand the test of time. Every project 
              is unique, every client is satisfied.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="bg-primary-800 p-2 sm:p-3 rounded-full hover:bg-primary-700 transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-800 p-2 sm:p-3 rounded-full hover:bg-primary-700 transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 font-heading">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-200 text-sm sm:text-base leading-relaxed">
                    Maria Constructions<br />
                    Changanassery, Kerala<br />
                    India - 686101
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-400 flex-shrink-0" />
                <a href="tel:+917012345678" className="text-primary-200 hover:text-white text-sm sm:text-base">
                  +91 70123 45678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-400 flex-shrink-0" />
                <a href="mailto:info@mariaconstructions.com" className="text-primary-200 hover:text-white text-sm sm:text-base break-all">
                  info@mariaconstructions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-primary-200 text-sm sm:text-base">
            © 2024 Maria Constructions. All rights reserved. | 25+ Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;