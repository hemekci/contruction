import React from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NAVİGA PALPLANŞ</h3>
            <p className="text-gray-400">
              Zemin koruma ve geçici kazı sistemleri alanında uzmanlaşmış mühendislik çözümleri.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5" />
                <a href="tel:+905423704560" className="hover:text-blue-400 transition-colors">+90 542 370 4560</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@navigaai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Ankara, Türkiye</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Ana Sayfa</Link></li>
              <li><Link to="/urunler" className="hover:text-blue-400">Ürünler</Link></li>
              <li><Link to="/hizmetler" className="hover:text-blue-400">Hizmetler</Link></li>
              <li><Link to="/referanslar" className="hover:text-blue-400">Referanslar</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Teknik Kaynaklar</h4>
            <ul className="space-y-2">
              <li><Link to="/hizmetler" className="hover:text-blue-400">Uygulama Videoları</Link></li>
              <li><Link to="/hizmetler" className="hover:text-blue-400">Teknik Dökümanlar</Link></li>
              <li><Link to="/hizmetler" className="hover:text-blue-400">Sertifikalar</Link></li>
              <li><Link to="/hizmetler" className="hover:text-blue-400">Güvenlik Prosedürleri</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NAVİGA PALPLANŞ. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;