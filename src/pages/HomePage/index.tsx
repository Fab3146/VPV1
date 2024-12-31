import React from 'react';
import Hero from './Hero';
import Solutions from './Solutions';
import PadelRules from './PadelRules';
import AppFeatures from './AppFeatures';
import Testimonials from './Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Solutions />
      <PadelRules />
      <AppFeatures />
      <Testimonials />
    </div>
  );
};

export default HomePage;