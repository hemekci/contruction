import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import ProjectSlider from '../components/ProjectSlider';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Hakkımızda</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Naviga Palplanş, zemin koruma ve geçici kazı sistemleri alanında uzmanlaşmış bir mühendislik girişimi olarak doğdu. Şirketimiz, altyapı sektöründeki 15 yılı aşkın saha ve proje tecrübesinin birikimiyle, palplanş tedariki, kiralaması ve uygulamasında bütüncül çözümler sunmak amacıyla kuruldu.
            </p>
            <p className="text-lg mb-4">
              Her şey, büyük bir altyapı projesinde yaşanan kritik bir gecikmeyle başladı: Proje sahasına zamanında palplanş temin edilememesi, sadece işin değil, tüm takvimin kaymasına neden oldu. Bu deneyimden yola çıkarak, sektörde hızlı ve teknik açıdan güçlü bir çözüm sağlayıcısına ihtiyaç olduğu ortaya çıktı.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Kuruluşumuzdan bu yana:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Yüzlerce ton palplanş stoğuyla hızlı kiralama ve satış süreçleri oturttuk.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Türkiye genelinde 30'dan fazla şantiyeye doğrudan uygulama hizmeti verdik.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Geoteknik mühendislik ofisleriyle çözüm ortaklıkları kurduk.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Kiralama modelini sektöre kazandırarak maliyet avantajı sunduk.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Tüm hizmetlerimizi tek bir çatı altında sunarak işleri kolaylaştırdık.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hizmet Avantajlarımız</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Entegre 3'lü Hizmet Paketi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Uzman Mühendislik Desteği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Hızlı ve Etkin Süreç Yönetimi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">🔹</span>
                    Esnek Kiralama Çözümleri
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <ProjectSlider />
      <Testimonials />
      <WhyUs />
    </div>
  );
};

export default Home;