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
        "Geniş ürün yelpazesi (U, Z ve Köşe profilleri)",
        "Stoktan hızlı teslimat imkanı",
        "Teknik destek ve danışmanlık",
        "Proje özelinde optimum profil seçimi",
        "Sertifikalı ürün garantisi",
        "Rekabetçi fiyatlandırma"
      ]
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "Palplanş Kiralama",
      description: "Esnek kiralama seçenekleri, bakımlı ekipman ve hızlı teslimat.",
      features: [
        "Aylık esnek kiralama (min. 2 ay)",
        "Bakımlı ve kullanıma hazır stok",
        "Proje süresine uyarlanabilir planlar",
        "Lojistik destek hizmeti",
        "Teknik danışmanlık desteği",
        "Uygun fiyatlandırma"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Palplanş Çakma",
      description: "Uzman ekip ve modern ekipmanlarla profesyonel uygulama hizmeti.",
      features: [
        "Deneyimli operatör ekibi",
        "Modern çakma ekipmanları",
        "Saha süpervizörlüğü",
        "İş güvenliği standartlarına uyum",
        "Hızlı mobilizasyon",
        "7/24 teknik destek"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Mühendislik Danışmanlığı",
      description: "Zemin etüdü analizi, statik hesaplamalar, uygulama projelendirmesi"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Lojistik Hizmetler",
      description: "Şantiye sevkiyat planlaması, yükleme-boşaltma ve depolama çözümleri"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Teknik Destek",
      description: "Saha denetimi, uygulama kontrolü ve sorun giderme hizmetleri"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Hizmetlerimiz</h1>

        <div className="bg-gray-50 border-l-4 border-blue-900 p-8 mb-12">
          <p className="text-lg text-gray-800 mb-4 font-medium">
            Palplanş tedarik, kiralama ve uygulama hizmetlerini eksiksiz mühendislik desteği ile sunuyoruz.
          </p>
          <p className="text-gray-700">
            Projenizin gereksinimlerine göre satış, kiralama veya profesyonel uygulama hizmetlerinden yararlanabilirsiniz. Her hizmet alanında deneyimli kadromuz ve geniş ekipman parkurumuz ile altyapı projelerinize güvenilir çözümler sağlıyoruz.
          </p>
        </div>

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

        <div className="bg-blue-900 text-white p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projeniz İçin Teknik Destek</h2>
            <p className="mb-8 text-lg text-gray-200">
              Proje gereksinimlerinizi değerlendirmek ve detaylı teknik teklif sunmak için ekibimiz hazır.
            </p>
            <Link
              to="/iletisim"
              className="bg-white text-blue-900 px-10 py-4 hover:bg-gray-100 transition-colors inline-block font-semibold text-lg"
            >
              Teklif Talep Formu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;