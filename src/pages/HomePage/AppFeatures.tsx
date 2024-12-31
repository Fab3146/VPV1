import React from 'react';
import { Calendar, CreditCard, Lightbulb, Trophy, Download } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';

const appImages = [
  {
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Écran de réservation"
  },
  {
    url: "https://images.unsplash.com/photo-1611162616305-c69b3037f77d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Interface de paiement"
  },
  {
    url: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Classements et défis"
  }
];

const AppFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Une application au service des villageois</h2>
          <p className="text-gray-600 mb-8">
            L'application Village Padel est votre compagnon pour organiser vos parties 
            et profiter d'un terrain 100% automatisé.
          </p>
          <ImageCarousel images={appImages} />
        </div>

        {/* ... existing features grid ... */}

        <div className="text-center mt-12 flex justify-center space-x-4">
          <a
            href="#"
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition flex items-center"
          >
            <Download className="mr-2" />
            App Store
          </a>
          <a
            href="#"
            className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-brand-orange-dark transition flex items-center"
          >
            <Download className="mr-2" />
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;