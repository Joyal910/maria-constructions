import React from 'react';
import { ArrowRight, Award, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 z-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center py-8">
        <div className="animate-slide-up">
          {/* Enhanced text container with better background */}
          <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-white border-opacity-20">
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-heading leading-tight">
  Building Dreams,
  <span className="block text-secondary-400">
    Creating Landmarks
  </span>
</h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-0 max-w-3xl mx-auto leading-relaxed px-2 font-medium drop-shadow-lg"
               style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              25 Years of Excellence in Residential & Commercial Construction
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto bg-secondary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-secondary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl backdrop-blur-sm bg-white bg-opacity-10"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-2">
            <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg p-4 sm:p-6 hover:bg-opacity-25 transition-all duration-300 border border-white border-opacity-20 shadow-lg">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-400 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">25+</div>
              <div className="text-white text-sm sm:text-base font-medium drop-shadow-md">Years Experience</div>
            </div>
            <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg p-4 sm:p-6 hover:bg-opacity-25 transition-all duration-300 border border-white border-opacity-20 shadow-lg">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-400 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">500+</div>
              <div className="text-white text-sm sm:text-base font-medium drop-shadow-md">Happy Families</div>
            </div>
            <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg p-4 sm:p-6 hover:bg-opacity-25 transition-all duration-300 sm:col-span-1 col-span-1 border border-white border-opacity-20 shadow-lg">
              <Building className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-400 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">100+</div>
              <div className="text-white text-sm sm:text-base font-medium drop-shadow-md">Commercial Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;