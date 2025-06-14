import React from 'react';
import { Award, Users, Building, Target, Eye, Heart, Shield, Clock, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, using only the finest materials and proven construction techniques."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Every decision we make is centered around exceeding our clients' expectations and building lasting relationships."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "We honor our commitments and deliver projects on time, every time, with transparent communication."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and methods while respecting traditional craftsmanship and architectural heritage."
    }
  ];

  const milestones = [
    { year: "1999", title: "Company Founded", description: "Started with a vision to build quality homes in Kerala" },
    { year: "2005", title: "First Commercial Project", description: "Expanded into commercial construction with great success" },
    { year: "2010", title: "100 Homes Milestone", description: "Completed 100 residential projects, establishing our reputation" },
    { year: "2015", title: "Sustainable Building", description: "Pioneered eco-friendly construction practices in the region" },
    { year: "2020", title: "Digital Innovation", description: "Integrated modern project management and design technologies" },
    { year: "2024", title: "500+ Happy Families", description: "Celebrating over 500 successful residential and commercial projects" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading">
            About Maria Constructions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto px-2">
            25 Years of Excellence in Building Dreams and Creating Landmarks
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-4 sm:mb-6 font-heading">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-accent-600 mb-4 sm:mb-6 leading-relaxed">
                Founded in 1999 in the heart of Changanassery, Kerala, Maria Constructions began 
                with a simple yet powerful vision: to build homes that families would cherish for 
                generations and commercial spaces that businesses would thrive in.
              </p>
              <p className="text-base sm:text-lg text-accent-600 mb-4 sm:mb-6 leading-relaxed">
                Over the past 25 years, we have evolved from a small local construction company 
                to one of Kerala's most trusted names in both residential and commercial construction. 
                Our journey has been marked by unwavering commitment to quality, innovation, and 
                customer satisfaction.
              </p>
              <p className="text-base sm:text-lg text-accent-600 leading-relaxed">
                Today, with over 500 completed projects and countless satisfied clients, we continue 
                to set new standards in construction excellence while staying true to our core values 
                of integrity, craftsmanship, and customer-first approach.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maria Constructions legacy"
                className="rounded-xl shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-secondary-500 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-primary-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary-800" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-800 font-heading">Our Mission</h3>
              </div>
              <p className="text-accent-600 leading-relaxed text-sm sm:text-base">
                To create exceptional residential and commercial spaces that exceed our clients' 
                expectations through innovative design, superior craftsmanship, and unwavering 
                commitment to quality. We strive to be Kerala's premier construction partner, 
                building lasting relationships while contributing to the architectural landscape 
                of our communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-secondary-100 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-800 font-heading">Our Vision</h3>
              </div>
              <p className="text-accent-600 leading-relaxed text-sm sm:text-base">
                To be recognized as the leading construction company in Kerala, known for 
                transforming dreams into reality through innovative construction solutions. 
                We envision a future where every project we undertake becomes a landmark 
                of excellence, sustainability, and architectural beauty that stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              These fundamental principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
              >
                <div className="bg-white rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 shadow-md">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-800" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-accent-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              Our Journey Through the Years
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              Key milestones that have shaped our growth and success over the past 25 years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-primary-200"></div>
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-8 text-right' : 'pl-4 sm:pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                      <div className="text-xl sm:text-2xl font-bold text-secondary-500 mb-1 sm:mb-2">{milestone.year}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-1 sm:mb-2">{milestone.title}</h3>
                      <p className="text-accent-600 text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 bg-secondary-500 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              Certifications & Expertise
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              Our commitment to excellence is backed by professional certifications and industry recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-accent-50 rounded-xl">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-primary-800 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-primary-800 mb-2">Licensed Contractor</h3>
              <p className="text-accent-600 text-sm sm:text-base">Fully licensed and insured construction contractor in Kerala</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-accent-50 rounded-xl">
              <Building className="h-10 w-10 sm:h-12 sm:w-12 text-primary-800 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-primary-800 mb-2">Quality Certified</h3>
              <p className="text-accent-600 text-sm sm:text-base">ISO quality management systems implementation</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-accent-50 rounded-xl">
              <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary-800 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-primary-800 mb-2">Safety Compliant</h3>
              <p className="text-accent-600 text-sm sm:text-base">Strict adherence to safety standards and regulations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;