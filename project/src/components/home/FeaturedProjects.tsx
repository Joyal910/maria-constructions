import React from 'react';
import { ArrowRight, MapPin, Calendar, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Kottayam",
      category: "Residential",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Kottayam, Kerala",
      area: "3,200 sq ft",
      completed: "2024",
      description: "A stunning modern villa with traditional Kerala architecture elements, featuring spacious interiors and eco-friendly design."
    },
    {
      id: 2,
      title: "Commercial Complex - Changanassery",
      category: "Commercial",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Changanassery, Kerala",
      area: "15,000 sq ft",
      completed: "2023",
      description: "A contemporary commercial complex housing retail spaces and offices, designed for maximum functionality and aesthetic appeal."
    },
    {
      id: 3,
      title: "Heritage Home - Alappuzha",
      category: "Residential",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Alappuzha, Kerala",
      area: "2,800 sq ft",
      completed: "2024",
      description: "A beautifully crafted home blending traditional Kerala design with modern amenities for a growing family."
    },
    {
      id: 4,
      title: "Corporate Office - Kochi",
      category: "Commercial",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Kochi, Kerala",
      area: "8,500 sq ft",
      completed: "2023",
      description: "A modern corporate office building with state-of-the-art facilities and sustainable design features."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Discover our latest residential and commercial masterpieces that showcase 
            our commitment to excellence and innovation in construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    project.category === 'Residential' 
                      ? 'bg-secondary-500 text-white' 
                      : 'bg-primary-800 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-accent-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-accent-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{project.completed}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 bg-primary-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold text-sm sm:text-base"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;