import React, { useEffect, useState } from 'react';
import { Award, Users, Building, Star } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    years: 0,
    families: 0,
    projects: 0,
    satisfaction: 0
  });

  const finalValues = {
    years: 25,
    families: 500,
    projects: 100,
    satisfaction: 100
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        setCounters({
          years: Math.floor(finalValues.years * progress),
          families: Math.floor(finalValues.families * progress),
          projects: Math.floor(finalValues.projects * progress),
          satisfaction: Math.floor(finalValues.satisfaction * progress)
        });
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Award,
      value: counters.years,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Decades of construction expertise'
    },
    {
      icon: Users,
      value: counters.families,
      suffix: '+',
      label: 'Happy Families',
      description: 'Satisfied homeowners and clients'
    },
    {
      icon: Building,
      value: counters.projects,
      suffix: '+',
      label: 'Commercial Projects',
      description: 'Successful business constructions'
    },
    {
      icon: Star,
      value: counters.satisfaction,
      suffix: '%',
      label: 'Customer Satisfaction',
      description: 'Quality guaranteed, always'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-accent-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
            Our Achievements Speak Volumes
          </h2>
          <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Over two decades of building trust, creating landmarks, and exceeding expectations
            in both residential and commercial construction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-800" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-800 mb-2 animate-counter">
                {stat.value}{stat.suffix}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-accent-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-accent-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;