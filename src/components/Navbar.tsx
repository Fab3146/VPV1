import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, QrCode, MoreVertical } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  showQR: boolean;
  setShowQR: (show: boolean) => void;
  setShowGrisolles: (show: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  showQR, 
  setShowQR,
  setShowGrisolles 
}) => {
  const navItems = [
    { label: 'Accueil', to: '/' },
    { label: 'Notre Solution', to: '/#solution' },
    { label: 'Tout sur le Padel', to: '/padel-info' },
    { label: 'Padel de Grisolles', to: '/grisolles' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-brand-blue">
              Village Padel
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-gray-700 hover:text-brand-orange transition font-bold"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setShowQR(!showQR)}
              className="bg-brand-orange text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-brand-orange-dark transition font-bold"
            >
              <QrCode size={20} />
              <span>{showQR ? 'Scannez-moi' : "Télécharger l'app"}</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block px-3 py-2 text-gray-700 hover:text-brand-orange transition font-bold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showQR && (
        <div className="absolute right-4 top-20 bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://villagepadel.fr/app"
            alt="QR Code"
            className="w-32 h-32"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;