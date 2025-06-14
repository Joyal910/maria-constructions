import React from 'react';
import { Shield, Award, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Over two decades of excellence in both residential and commercial construction, delivering consistent quality and innovation."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We use premium materials and proven construction techniques, ensuring every project meets the highest standards of durability and aesthetics."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Our 100% customer satisfaction rate speaks to our commitment to exceeding expectations in every project we undertake."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
            Why Choose Maria Constructions?
          </h2>
          <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Our commitment to excellence, combined with decades of experience, makes us 
            Kerala's trusted partner for both residential and commercial construction projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-3 sm:mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-accent-600 text-center leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-800 mb-4 sm:mb-6 font-heading">
                Every Project Unique, Every Client Satisfied
              </h3>
              <p className="text-accent-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                At Maria Constructions, we believe that each project tells a unique story. 
                Whether you're building your dream home or establishing a commercial presence, 
                our personalized approach ensures your vision becomes reality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary-500 mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-accent-600">Quality Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary-500 mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-accent-600">Project Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction quality"
                className="rounded-xl shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-800 to-transparent opacity-30 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;