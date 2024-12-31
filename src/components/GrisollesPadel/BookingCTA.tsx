import React from 'react';
import { Calendar } from 'lucide-react';

const BookingCTA = () => {
  return (
    <div className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">
        Réservez votre créneau dès maintenant !
      </h2>
      
      <button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto transition-colors">
        <Calendar className="h-6 w-6" />
        Réserver via l'application
      </button>
      
      <p className="mt-4 text-gray-600">
        Téléchargez l'application Village Padel pour accéder à toutes nos fonctionnalités
      </p>
    </div>
  );
};

export default BookingCTA;