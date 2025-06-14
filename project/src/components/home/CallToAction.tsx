import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-heading px-2">
            Ready to Start Your Construction Journey?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto px-2 leading-relaxed">
            From dream homes to commercial landmarks, let's bring your vision to life. 
            Get in touch today for a free consultation and discover why we're Kerala's 
            trusted construction partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Residential CTA */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white border-opacity-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Planning Your Dream Home?
            </h3>
            <p className="text-primary-100 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Let us help you create a beautiful, functional space that reflects your 
              unique style and meets your family's needs.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-secondary-500 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
              >
                <span>Plan Your Dream Home</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-300 text-center font-semibold text-sm sm:text-base"
              >
                View Residential Projects
              </Link>
            </div>
          </div>

          {/* Commercial CTA */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white border-opacity-20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Need a Commercial Space?
            </h3>
            <p className="text-primary-100 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              From office buildings to retail complexes, we deliver commercial 
              construction projects that drive business success.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-secondary-500 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
              >
                <span>Discuss Commercial Project</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-300 text-center font-semibold text-sm sm:text-base"
              >
                View Commercial Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Get Free Consultation</h4>
              <p className="text-primary-100 text-sm sm:text-base">
                Talk to our experts and get personalized advice for your project
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <a
                href="tel:+917012345678"
                className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:text-secondary-400 transition-colors"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">+91 70123 45678</span>
              </a>
              <a
                href="mailto:info@mariaconstructions.com"
                className="flex items-center justify-center sm:justify-start space-x-2 text-white hover:text-secondary-400 transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">Email Us</span>
              </a>
            </div>

            <div className="text-center md:text-right">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary-800 px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-300 font-bold text-sm sm:text-base"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;