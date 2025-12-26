import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Shield, Award } from 'lucide-react';
import CatalogDownload from '../components/CatalogDownload';

const Products = () => {
  const products = [
    {
      type: 'U Tipi Palplanş (Larssen)',
      models: ['PU 6', 'PU 8', 'PU 12', 'PU 18', 'PU 22', 'PU 25', 'PU 32'],
      description: 'Yüksek mukavemetli U tipi (Larssen) palplanş profilleri. Geniş atalet momenti sayesinde derin kazılarda ve ağır yük koşullarında tercih edilir. Kilitleme sistemi su geçirmezlik sağlar.',
      specs: [
        'Genişlik: 600-750 mm',
        'Yükseklik: 180-450 mm',
        'Kalınlık: 6-24 mm',
        'Çelik Kalitesi: S240GP - S430GP'
      ],
      image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80'
    },
    {
      type: 'Z Tipi Palplanş',
      models: ['AZ 12', 'AZ 18', 'AZ 26', 'AZ 36', 'AZ 48'],
      description: 'Z tipi palplanş profilleri, yüksek kesit modülü ve optimum ağırlık oranı sunar. Kilitleme noktası kesit ekseninde olduğu için daha verimli moment dağılımı sağlar.',
      specs: [
        'Genişlik: 630-770 mm',
        'Yükseklik: 302-460 mm',
        'Kalınlık: 8.5-20 mm',
        'Çelik Kalitesi: S355GP - S430GP'
      ],
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-8 h-8 text-blue-900" />
          <h1 className="text-4xl font-bold text-blue-900">Ürün Kataloğu</h1>
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Stokumuzda bulunan U tipi (Larssen) ve Z tipi palplanş profilleri.
          Satış ve kiralama seçenekleriyle tüm Türkiye'ye hizmet veriyoruz.
        </p>

        {/* Katalog İndirme Bölümü */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-1">Teknik Katalog</h2>
            <p className="text-blue-100 text-sm">
              Tüm palplanş profilleri, ölçü tabloları ve teknik özellikler tek PDF'de.
            </p>
          </div>
          <CatalogDownload catalogName="Naviga Palplanş Teknik Katalog 2024" />
        </div>

        {/* Ürün Kartları */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.type}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{product.type}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Teknik Özellikler */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Teknik Özellikler:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>
                </div>

                {/* Modeller */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Stokta Bulunan Modeller:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.models.map((model, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/iletisim"
                  className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors inline-block"
                >
                  Fiyat Teklifi Al
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Teknik Özellikler ve Kalite */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-900" />
            Kalite Standartları
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Üretim Yöntemi</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Sıcak Haddeleme:</strong> EN 10248-1 standardına uygun</li>
                <li><strong>Soğuk Şekillendirme:</strong> EN 10249-1 standardına uygun</li>
                <li>Tüm profiller fabrika test sertifikalıdır</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Kalite Belgeleri</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ISO 9001:2015 Kalite Yönetim Sistemi</li>
                <li>• CE Belgesi (EN 10248 / EN 10249)</li>
                <li>• TSE Uygunluk Belgesi</li>
                <li>• 3.1 Mill Test Sertifikaları</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Çelik Kaliteleri</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>S240GP:</strong> Standart uygulamalar</li>
                <li><strong>S270GP:</strong> Orta mukavemet</li>
                <li><strong>S355GP:</strong> Yüksek mukavemet</li>
                <li><strong>S430GP:</strong> Ağır koşullar için</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hizmet Seçenekleri */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-900" />
            Hizmet Seçenekleri
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Satış</h3>
              <p className="text-gray-600 mb-4">
                Yeni ve ikinci el palplanş satışı. Büyük stok avantajı ile hızlı teslimat.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rekabetçi fiyatlar</li>
                <li>• Nakliye dahil seçeneği</li>
                <li>• Toplu alımlarda indirim</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Kiralama</h3>
              <p className="text-gray-600 mb-4">
                Minimum 2 ay kiralama süresi. Proje bitiminde teslim alıyoruz.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Aylık kira sistemi</li>
                <li>• Minimum süre: 2 ay</li>
                <li>• Hasar sigortası opsiyonu</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Çakma Hizmeti</h3>
              <p className="text-gray-600 mb-4">
                Vibrasyonlu veya darbeli çakma. Profesyonel ekip ve ekipman.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Deneyimli operatörler</li>
                <li>• Modern çakma ekipmanları</li>
                <li>• Söküm hizmeti dahil</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/iletisim"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium"
            >
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
