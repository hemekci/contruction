import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mehmet Yılmaz",
      company: "Ankara Metro Projesi",
      role: "Proje Müdürü",
      text: "Naviga Palplanş ile çalışmak gerçekten keyifliydi. Satış, kiralama ve çakma hizmetlerini tek firmadan alabilmek koordinasyonu çok kolaylaştırdı. 24 saat içinde detaylı teklif aldık ve mobilizasyon çok hızlı oldu.",
      rating: 5,
      project: "Metro İstasyon Kazısı - 12,000 m²"
    },
    {
      name: "Ayşe Demir",
      company: "İnşaat Müteahhitlik A.Ş.",
      role: "Şantiye Şefi",
      text: "15 yıllık tecrübeleri sahada belli oluyor. Zemin koşulları zordu ama doğru palplanş tipi seçimi ve profesyonel uygulama sayesinde hiçbir sorun yaşamadık. Kesinlikle tavsiye ederim.",
      rating: 5,
      project: "Derin Bodrum Kazısı - Ankara"
    },
    {
      name: "Ali Kaya",
      company: "Geoteknik Mühendislik Ltd.",
      role: "Geoteknik Mühendis",
      text: "Kiralama sürecinde çok esnek davrandılar. Proje uzayınca ek süre için uygun fiyat verdiler. Malzemeler bakımlı ve kullanıma hazır geldi. Teknik destek ekibi her zaman ulaşılabilirdi.",
      rating: 5,
      project: "Şev Stabilizasyonu Projesi"
    },
    {
      name: "Fatma Özkan",
      company: "Büyükşehir Belediyesi",
      role: "İmar Müdürü",
      text: "Acil bir projemiz vardı, 48 saat içinde saha keşfi yaptılar ve 3 gün sonra çakma başladı. Bu hız bizim için çok önemliydi. Hem hızlı hem kaliteli hizmet aldık.",
      rating: 5,
      project: "Altyapı Çalışması - Kızılay"
    },
    {
      name: "Hasan Çelik",
      company: "Yapı İnşaat San. Tic.",
      role: "İnşaat Mühendisi",
      text: "Fiyat/performans oranı çok iyi. Başka firmalardan da teklif almıştık ama Naviga hem fiyat hem de hizmet kalitesi olarak öne çıktı. Satış, kiralama ve uygulama hizmetlerini tek çatıda bulabilmek büyük avantaj.",
      rating: 5,
      project: "Konut Projesi Temel Kazısı"
    },
    {
      name: "Zeynep Aydın",
      company: "Proje Yönetim Dan. Ltd.",
      role: "Proje Koordinatörü",
      text: "Mühendislik danışmanlığı hizmeti çok faydalı oldu. Zemin raporumuzu analiz edip en uygun palplanş tipini önerdiler. 7/24 teknik destek gerçekten işe yarıyor, saha sorunlarında hemen çözüm buluyorlar.",
      rating: 5,
      project: "Karma Kullanım Projesi"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-lg text-gray-600">
            30+ başarılı projede birlikte çalıştığımız firmalarımızın görüşleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-900 font-medium">{testimonial.company}</div>
                <div className="text-xs text-gray-500 mt-2">
                  📍 {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Müşteri Memnuniyeti</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">30+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">24s</div>
              <div className="text-gray-600">Teklif Süresi</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Siz de başarılı projelerimize katılmak ister misiniz?
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-semibold"
          >
            Ücretsiz Teklif Al →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
