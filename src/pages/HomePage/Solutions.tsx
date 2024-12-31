import React from 'react';
import { Key, Sun, Wrench, HandshakeIcon } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';

const solutionImages = [
  {
    url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Terrain de padel automatisé"
  },
  {
    url: "https://images.unsplash.com/photo-1627627256672-027a4613d028?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Système de réservation"
  },
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Installation de terrain"
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nos solutions principales</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Solution 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Modernisez vos terrains avec notre solution d'automatisation complète
            </h3>
            <div className="mb-6">
              <ImageCarousel images={solutionImages} />
            </div>
            <p className="text-gray-600 mb-6">
              Notre technologie rend vos terrains 100% autonomes. Grâce à l'application Village Padel, 
              les joueurs bénéficient de :
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Key className="text-brand-orange mr-2" />
                <span>Accès au terrain (porte déverrouillée via smartphone)</span>
              </li>
              <li className="flex items-center">
                <Sun className="text-brand-orange mr-2" />
                <span>Allumage automatique de l'éclairage</span>
              </li>
              <li className="flex items-center">
                <Wrench className="text-brand-orange mr-2" />
                <span>Accès aux raquettes et balles via une boîte sécurisée</span>
              </li>
            </ul>
            <button className="mt-8 bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition">
              En savoir plus sur l'automatisation
            </button>
          </div>

          {/* Solution 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ajoutez un terrain de padel à votre club sans investissement initial
            </h3>
            <div className="mb-6">
              <ImageCarousel images={solutionImages} />
            </div>
            <p className="text-gray-600 mb-6">
              Village Padel installe gratuitement un terrain de padel outdoor dans votre complexe sportif :
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Wrench className="text-brand-orange mr-2" />
                <span>Construction clé en main, sans frais pour le club</span>
              </li>
              <li className="flex items-center">
                <HandshakeIcon className="text-brand-orange mr-2" />
                <span>Gestion via un bail emphytéotique ou une convention d'occupation</span>
              </li>
              <li className="flex items-center">
                <Sun className="text-brand-orange mr-2" />
                <span>Maintenance et exploitation gérées par nos soins</span>
              </li>
            </ul>
            <button className="mt-8 bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition">
              Voir un exemple de terrain installé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;