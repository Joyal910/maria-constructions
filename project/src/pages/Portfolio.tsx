import React, { useState } from 'react';
import { MapPin, Calendar, Square, Filter, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Kottayam",
      category: "residential",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Kottayam, Kerala",
      area: "3,200 sq ft",
      completed: "2024",
      description: "A stunning modern villa with traditional Kerala architecture elements, featuring spacious interiors and eco-friendly design.",
      features: ["4 Bedrooms", "Modern Kitchen", "Swimming Pool", "Landscaped Garden"]
    },
    {
      id: 2,
      title: "Commercial Complex - Changanassery",
      category: "commercial",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Changanassery, Kerala",
      area: "15,000 sq ft",
      completed: "2023",
      description: "A contemporary commercial complex housing retail spaces and offices, designed for maximum functionality and aesthetic appeal.",
      features: ["Retail Spaces", "Office Units", "Ample Parking", "Modern Facilities"]
    },
    {
      id: 3,
      title: "Heritage Home - Alappuzha",
      category: "residential",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Alappuzha, Kerala",
      area: "2,800 sq ft",
      completed: "2024",
      description: "A beautifully crafted home blending traditional Kerala design with modern amenities for a growing family.",
      features: ["Traditional Design", "Modern Amenities", "Courtyard", "Wooden Interiors"]
    },
    {
      id: 4,
      title: "Corporate Office - Kochi",
      category: "commercial",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Kochi, Kerala",
      area: "8,500 sq ft",
      completed: "2023",
      description: "A modern corporate office building with state-of-the-art facilities and sustainable design features.",
      features: ["Conference Rooms", "Open Workspace", "Cafeteria", "Green Building"]
    },
    {
      id: 5,
      title: "Luxury Apartment Complex",
      category: "residential",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Thiruvalla, Kerala",
      area: "25,000 sq ft",
      completed: "2023",
      description: "A premium apartment complex offering modern living with luxury amenities and beautiful landscaping.",
      features: ["24 Units", "Gym & Pool", "Children's Play Area", "Security Systems"]
    },
    {
      id: 6,
      title: "Retail Shopping Center",
      category: "commercial",
      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Pala, Kerala",
      area: "12,000 sq ft",
      completed: "2022",
      description: "A vibrant shopping center with diverse retail spaces and modern facilities for businesses and customers.",
      features: ["Multiple Retail Units", "Food Court", "Escalators", "Customer Parking"]
    },
    {
      id: 7,
      title: "Contemporary Family Home",
      category: "residential",
      image: "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Kottayam, Kerala",
      area: "2,400 sq ft",
      completed: "2024",
      description: "A sleek contemporary home designed for modern family living with smart home features and energy efficiency.",
      features: ["Smart Home Tech", "Energy Efficient", "Open Floor Plan", "Private Garden"]
    },
    {
      id: 8,
      title: "Industrial Warehouse",
      category: "commercial",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Ernakulam, Kerala",
      area: "20,000 sq ft",
      completed: "2022",
      description: "A large-scale industrial warehouse with modern logistics facilities and efficient storage solutions.",
      features: ["High Ceilings", "Loading Docks", "Office Space", "Security Systems"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'residential', name: 'Residential', count: projects.filter(p => p.category === 'residential').length },
    { id: 'commercial', name: 'Commercial', count: projects.filter(p => p.category === 'commercial').length }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading">
            Our Portfolio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto px-2">
            Showcasing our finest residential and commercial construction projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 bg-accent-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${
                  activeFilter === category.id
                    ? 'bg-primary-800 text-white shadow-lg'
                    : 'bg-white text-accent-700 hover:bg-primary-50 hover:text-primary-800'
                }`}
              >
                <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{category.name}</span>
                <span className="bg-primary-100 text-primary-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-primary-800 p-2 sm:p-3 rounded-full hover:bg-primary-50 transition-colors">
                        <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      project.category === 'residential' 
                        ? 'bg-secondary-500 text-white' 
                        : 'bg-primary-800 text-white'
                    }`}>
                      {project.category === 'residential' ? 'Residential' : 'Commercial'}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-accent-600 mb-3 sm:mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-primary-50 text-primary-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-primary-200 text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">25+</div>
              <div className="text-primary-200 text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">100%</div>
              <div className="text-primary-200 text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-primary-200 text-sm sm:text-base">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              Real feedback from satisfied clients who trusted us with their construction dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <p className="text-accent-600 mb-3 sm:mb-4 italic text-sm sm:text-base">
                "Maria Constructions transformed our vision into reality. Their attention to detail 
                and commitment to quality is unmatched. Our new home is everything we dreamed of."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-primary-800 font-bold text-sm sm:text-base">RK</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-800 text-sm sm:text-base">Rajesh Kumar</div>
                  <div className="text-xs sm:text-sm text-accent-500">Luxury Villa - Kottayam</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <p className="text-accent-600 mb-3 sm:mb-4 italic text-sm sm:text-base">
                "Professional, reliable, and exceptional quality work. They delivered our commercial 
                project on time and within budget. Highly recommended for any construction needs."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-primary-800 font-bold text-sm sm:text-base">SA</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-800 text-sm sm:text-base">Suresh Abraham</div>
                  <div className="text-xs sm:text-sm text-accent-500">Commercial Complex - Changanassery</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg md:col-span-2 lg:col-span-1">
              <p className="text-accent-600 mb-3 sm:mb-4 italic text-sm sm:text-base">
                "From design to completion, Maria Constructions exceeded our expectations. 
                Their team's expertise and dedication made our dream home a beautiful reality."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-primary-800 font-bold text-sm sm:text-base">MP</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-800 text-sm sm:text-base">Maya Pillai</div>
                  <div className="text-xs sm:text-sm text-accent-500">Heritage Home - Alappuzha</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;