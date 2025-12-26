import React from 'react';
import { ShoppingCart, Key, Wrench, Calculator, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Palplanş Satış",
      description: "U ve Z tipi palplanşların satışı, teknik danışmanlık ve tedarik çözümleri.",
      features: [
        "Geniş ürün yelpazesi",
        "Hızlı teslimat",
        "Teknik destek",
        "Uygun fiyat garantisi"
      ]
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "Palplanş Kiralama",
      description: "Esnek kiralama seçenekleri, bakımlı ekipman ve hızlı teslimat.",
      features: [
        "Esnek kiralama süreleri",
        "Bakımlı ekipman",
        "Lojistik destek",
        "Uygun fiyatlandırma"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Palplanş Çakma",
      description: "Uzman ekip ve modern ekipmanlarla profesyonel uygulama hizmeti.",
      features: [
        "Deneyimli ekip",
        "Modern ekipman",
        "Hızlı uygulama",
        "Güvenli çalışma"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Mühendislik Danışmanlığı",
      description: "Proje hesaplamaları ve teknik destek hizmetleri"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Lojistik Hizmetler",
      description: "Şantiye sevkiyat ve mobilizasyon çözümleri"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Teknik Destek",
      description: "7/24 saha destek ve danışmanlık hizmeti"
    }
  ];

  const buyingAdvantages = [
    "Şirket portföyünüzü güçlendiren bir varlık",
    "10'dan fazla projede kullanım imkanı",
    "Uzun vadede daha ekonomik",
    "Atıl durumdayken kiralama geliri",
    "Piyasa dalgalanmalarından korunma",
    "İstediğiniz zaman kullanım esnekliği",
    "Malzeme tanıma ve verimlilik artışı"
  ];

  const rentingAdvantages = [
    "Düşük başlangıç maliyeti",
    "Öngörülebilir periyodik ödemeler",
    "En iyi malzemelere erişim",
    "Depolama maliyeti yok",
    "Özel projeler için uygun çözüm",
    "Amortisman endişesi yok"
  ];

  const whenToChoose = [
    {
      title: "Ne Zaman Satın Almalı?",
      conditions: [
        "Projelerin %50'sinden fazlasında kullanım",
        "Uzun süreli büyük projeler",
        "Piyasada tedarik sorunu varsa",
        "Fiyat artışı bekleniyorsa"
      ]
    },
    {
      title: "Ne Zaman Kiralamalı?",
      conditions: [
        "Tek seferlik kullanımlar",
        "Sınırlı finansal kapasite",
        "Depolama alanı yoksa",
        "Özel proje gereksinimleri"
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Hizmetlerimiz</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-900 mb-6">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/iletisim" className="mt-8 text-blue-900 font-medium hover:text-blue-700 inline-block">
                Detaylı Bilgi →
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8">Ek Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8">Satın Alma vs Kiralama: Doğru Seçimi Yapın</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Satın Alma Avantajları</h3>
              <ul className="space-y-3">
                {buyingAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Kiralama Avantajları</h3>
              <ul className="space-y-3">
                {rentingAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">•</span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whenToChoose.map((choice, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{choice.title}</h3>
                <ul className="space-y-3">
                  {choice.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">İhtiyacınıza En Uygun Çözüm İçin</h2>
            <p className="mb-6">
              Proje detaylarınızı paylaşın, size en uygun satın alma veya kiralama seçeneğini önerelim.
            </p>
            
            <Link 
              to="/iletisim" 
              className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block"
            >
              Teklif Talep Et
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;