import React from 'react';
import WeatherWidget from '../components/GrisollesPadel/WeatherWidget';
import CourtInfo from '../components/GrisollesPadel/CourtInfo';
import Features from '../components/GrisollesPadel/Features';
import BookingCTA from '../components/GrisollesPadel/BookingCTA';
import ImageCarousel from '../components/ImageCarousel';

const grisollesImages = [
  {
    url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Terrain de padel"
  },
  {
    url: "https://images.unsplash.com/photo-1627627256672-027a4613d028?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Boîte à raquettes"
  },
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Système d'automatisation"
  }
];

const GrisollesPadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            Padel de Grisolles
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Découvrez notre terrain outdoor, conçu pour offrir une expérience unique 
            et conviviale aux amateurs de padel.
          </p>
          <ImageCarousel images={grisollesImages} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <CourtInfo />
          <WeatherWidget />
        </div>
        <Features />
        <BookingCTA />
      </div>
    </div>
  );
};

export default GrisollesPadel;