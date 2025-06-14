import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default Home;