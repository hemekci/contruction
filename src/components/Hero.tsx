import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="text-sm uppercase tracking-wider text-gray-300 mb-4 font-semibold">
              Naviga Palplanş Zemin Teknolojileri
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Palplanş Tedarik ve Uygulama Çözümleri
            </h1>
            <p className="text-xl mb-4 leading-relaxed text-gray-200">
              Satış, kiralama ve profesyonel uygulama hizmetleri. Altyapı projeleriniz için eksiksiz mühendislik desteği ve güvenilir çözümler.
            </p>
            <div className="border-l-4 border-blue-500 pl-4 mb-8 bg-black/30 py-4">
              <p className="text-lg">
                15 yılı aşkın sektör deneyimi • Türkiye genelinde 30+ tamamlanmış proje
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/iletisim"
                className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Teklif Talep Edin
              </Link>
              <Link
                to="/hizmetler"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;