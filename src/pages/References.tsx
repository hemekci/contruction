import React from 'react';
import { Link } from 'react-router-dom';

const References = () => {
  const projects = [
    {
      name: 'Kabataş-Mecidiyeköy Metro Hattı İstasyon İnşaatı',
      location: 'İstanbul',
      description: '32 metre derinliğinde palplanş uygulaması ile metro istasyonu kazı destek sistemi.',
      image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80',
      details: ['12,000 m² palplanş uygulama alanı', '4 ay tamamlanma süresi', 'Özel ankraj sistemi']
    },
    {
      name: 'Alsancak Limanı Genişletme Projesi',
      location: 'İzmir',
      description: 'Konteyner terminali genişletme projesi kapsamında rıhtım duvarı uygulaması.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      details: ['1500 metre rıhtım duvarı', 'Deniz yapıları uygulaması', 'Kombine palplanş sistemi']
    },
    {
      name: 'Başakşehir Şehir Hastanesi Temel Kazısı',
      location: 'İstanbul',
      description: 'Hastane kompleksi temel kazısı için geçici destek sistemi.',
      image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80',
      details: ['8500 m² palplanş uygulama', '28 metre derinlik', 'Çok seviyeli ankraj']
    },
    {
      name: 'Ankara-Sivas YHT Tünel Yaklaşım Yapıları',
      location: 'Ankara',
      description: 'Yüksek hızlı tren tüneli giriş yapıları için istinat sistemi.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
      details: ['Geçici destek sistemi', '22 metre derinlik', 'Hızlı uygulama']
    },
    {
      name: 'Mersin Uluslararası Limanı Genişletme',
      location: 'Mersin',
      description: 'Liman genişletme projesi kapsamında palplanş rıhtım duvarı.',
      image: 'https://images.unsplash.com/photo-1584463699037-2ddf73f432d7?auto=format&fit=crop&q=80',
      details: ['2000 metre rıhtım', 'Deniz yapısı', 'Kombine sistem']
    },
    {
      name: 'Gebze-Darıca Metro Hattı İstasyonları',
      location: 'Kocaeli',
      description: 'Metro istasyonları için derin kazı destek sistemi.',
      image: 'https://images.unsplash.com/photo-1589451359791-f9c33af612b7?auto=format&fit=crop&q=80',
      details: ['6 istasyon uygulaması', '25-30m derinlik', 'Kentsel alan']
    },
    {
      name: 'İzmir Körfez Geçişi Viyadük Temelleri',
      location: 'İzmir',
      description: 'Körfez geçiş projesi viyadük ayakları için geçici çevrelem.',
      image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80',
      details: ['Deniz içi uygulama', 'Dairesel palplanş', 'Özel tasarım']
    },
    {
      name: 'Ankara Etlik Şehir Hastanesi Temel Kazısı',
      location: 'Ankara',
      description: 'Hastane kompleksi derin temel kazısı istinat sistemi.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      details: ['15,000 m² alan', '24m derinlik', 'Eğimli arazi']
    },
    {
      name: 'Filyos Limanı Rıhtım Duvarları',
      location: 'Zonguldak',
      description: 'Yeni liman projesi rıhtım duvarları uygulaması.',
      image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80',
      details: ['2500m rıhtım', 'Ağır yük tasarımı', 'Derin su yapısı']
    },
    {
      name: 'İstanbul Havalimanı Yakıt Çiftliği',
      location: 'İstanbul',
      description: 'Havalimanı yakıt depolama tesisi kazı destek yapısı.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
      details: ['Dairesel palplanş', 'Sızdırmaz sistem', 'Özel koruma']
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Referans Projelerimiz</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {project.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {detail}
                    </div>
                  ))}
                </div>
                <Link to="/iletisim" className="mt-4 text-blue-900 font-medium hover:text-blue-700 inline-block">
                  Detaylı İncele →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Sektörel Dağılım</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Metro ve Tünel', count: 15 },
              { title: 'Liman ve Rıhtım', count: 12 },
              { title: 'Hastane ve AVM', count: 8 },
              { title: 'Endüstriyel Tesis', count: 10 }
            ].map((sector, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  {sector.count}+
                </div>
                <div className="text-gray-600">{sector.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;