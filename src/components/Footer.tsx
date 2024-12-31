import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-extrabold mb-4">Village Padel</h3>
            <p className="text-gray-300 font-medium">
              La solution innovante pour le développement du padel en France.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4">Contact</h3>
            <p className="text-gray-300 font-medium">
              Email: contact@villagepadel.fr
            </p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold mb-4">Télécharger</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition font-medium">
                App Store
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition font-medium">
                Google Play
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 font-medium">
          <p>&copy; {new Date().getFullYear()} Village Padel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;