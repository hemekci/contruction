import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/urunler', label: 'Ürünler' },
    { path: '/hizmetler', label: 'Hizmetler' },
    { path: '/referanslar', label: 'Referanslar' },
    { path: '/blog', label: 'Blog' },
    { path: '/sss', label: 'SSS' },
    { path: '/iletisim', label: 'İletişim' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900">NAVİGA PALPLANŞ</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-blue-900 font-semibold'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/musteri-paneli"
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              Müşteri Paneli
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 ${
                  isActive(item.path)
                    ? 'text-blue-900 font-semibold'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/musteri-paneli"
              className="block px-3 py-2 bg-blue-900 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Müşteri Paneli
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;