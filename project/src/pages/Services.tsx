import React from 'react';
import { Home, Building, PenTool, ClipboardList, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Creating beautiful homes that families will cherish for generations",
      features: [
        "Custom Home Design & Construction",
        "Luxury Villas & Mansions",
        "Traditional Kerala Homes",
        "Modern Contemporary Houses",
        "Apartment Buildings",
        "Home Renovations & Extensions"
      ],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Building spaces where businesses thrive and communities grow",
      features: [
        "Office Buildings & Corporate Headquarters",
        "Retail Spaces & Shopping Complexes",
        "Industrial Buildings & Warehouses",
        "Hotels & Hospitality Venues",
        "Educational Institutions",
        "Healthcare Facilities"
      ],
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: PenTool,
      title: "Design & Planning",
      description: "Comprehensive design services to bring your vision to life",
      features: [
        "Architectural Design & Planning",
        "Structural Engineering",
        "Interior Design Consultation",
        "3D Modeling & Visualization",
        "Building Permits & Approvals",
        "Cost Estimation & Budgeting"
      ],
      image: "https://images.pexels.com/photos/1023404/pexels-photo-1023404.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "Expert oversight ensuring your project stays on track and on budget",
      features: [
        "Timeline Management & Scheduling",
        "Quality Control & Inspections",
        "Vendor & Subcontractor Management",
        "Progress Reporting & Communication",
        "Budget Monitoring & Cost Control",
        "Risk Assessment & Mitigation"
      ],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, requirements, and budget to understand your project goals."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed plans and designs, incorporating your feedback and preferences."
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description: "We handle all necessary permits and regulatory approvals to ensure legal compliance."
    },
    {
      step: "04",
      title: "Construction Phase",
      description: "Skilled craftsmen bring your project to life with regular quality checks and updates."
    },
    {
      step: "05",
      title: "Final Inspection",
      description: "Thorough quality inspection and walk-through to ensure everything meets our standards."
    },
    {
      step: "06",
      title: "Project Handover",
      description: "Complete project delivery with documentation, warranties, and ongoing support."
    }
  ];

  const qualityFeatures = [
    "Premium quality materials sourced from trusted suppliers",
    "Skilled craftsmen with decades of experience",
    "Modern construction techniques and technology",
    "Rigorous quality control at every stage",
    "Environmentally sustainable practices",
    "Comprehensive warranty and after-sales support"
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
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto px-2">
            Comprehensive construction solutions for residential and commercial projects
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              What We Do Best
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              From dream homes to commercial landmarks, we provide end-to-end construction 
              services with unmatched quality and attention to detail.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="bg-primary-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-800" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-800 font-heading">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-accent-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-accent-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full h-64 sm:h-72 lg:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              Our Construction Process
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              A proven, systematic approach that ensures quality, efficiency, and 
              complete client satisfaction from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-primary-800 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-sm sm:text-lg mr-3 sm:mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-800">{step.title}</h3>
                </div>
                <p className="text-accent-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-secondary-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 font-heading">
                  Quality Assurance
                </h2>
              </div>
              <p className="text-base sm:text-lg text-accent-600 mb-4 sm:mb-6 leading-relaxed">
                Quality is not just a promise—it's our commitment. Every project undergoes 
                rigorous quality control measures to ensure it meets our exacting standards 
                and exceeds your expectations.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-accent-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality construction"
                className="rounded-xl shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg border-4 border-secondary-500">
                <div className="text-2xl sm:text-3xl font-bold text-primary-800 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-accent-600">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-heading px-2">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Let's discuss your construction needs and create something amazing together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              to="/contact"
              className="bg-secondary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-300 font-semibold text-sm sm:text-base"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;