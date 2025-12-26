import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      category: "Genel Bilgiler",
      questions: [
        {
          question: "Palplanş nedir ve ne işe yarar?",
          answer: "Palplanş, çelik profil levhalardan oluşan, birbiri içine geçerek duvar oluşturan zemin destek sistemidir. Derin kazılarda toprağın kaymasını önler, su sızıntısını engeller ve geçici veya kalıcı istinat duvarları oluşturur. Metro istasyonları, köprü temelleri, rıhtım duvarları ve derin bodrum kazılarında yaygın olarak kullanılır."
        },
        {
          question: "U tipi ve Z tipi palplanş arasındaki fark nedir?",
          answer: "U tipi palplanş daha yüksek mukavemete sahiptir ve derin kazılarda, ağır yük koşullarında tercih edilir. Profil şekli U harfine benzer ve daha sağlam yapıdadır. Z tipi palplanş ise daha ekonomik ve hafiftir, orta derinlikteki uygulamalarda ve geçici yapılarda kullanılır. Projenin derinliğine, zemin koşullarına ve yüke göre mühendislik hesaplaması ile uygun tip belirlenir."
        },
        {
          question: "Ankara'da palplanş hizmeti veren firmalar arasında farkınız nedir?",
          answer: "Naviga Palplanş olarak satış, kiralama ve çakma hizmetlerinin üçünü de yapabiliyoruz. Çoğu firma sadece birinde uzmanlaşmıştır. İhtiyacınız ne olursa olsun - sadece satın almak, sadece kiralamak veya sadece çakma hizmeti - hepsini profesyonelce sunabiliyoruz. Bu size esneklik sağlar: bugün kiralarsınız, yarın başka projede satın alırsınız, aynı güvenilir firmadan. 15+ yıl tecrübe, geniş stok ve 24 saat içinde teklif garantisi sunuyoruz."
        },
        {
          question: "Hangi projelerde palplanş kullanılır?",
          answer: "Metro ve tünel inşaatları, derin bodrum kazıları, köprü ve viyadük temelleri, liman ve rıhtım duvarları, şev stabilizasyonu, su kanalları ve bent yapıları, geçici kazı destek sistemleri ve nehir/dere ıslahı projelerinde palplanş kullanılır."
        }
      ]
    },
    {
      category: "Fiyatlandırma ve Kiralama",
      questions: [
        {
          question: "Palplanş kiralama fiyatları nasıl belirlenir?",
          answer: "Kiralama fiyatı; kullanılacak palplanş tipi (U veya Z), toplam metrekare, kiralama süresi (aylık), proje lokasyonu ve sevkiyat mesafesine göre değişir. Minimum 2 ay kiralama yapılmaktadır. Uzun süreli kiralamalar için indirimli fiyatlandırma yapılır. Detaylı fiyat teklifi için proje bilgilerinizi paylaşın, 24 saat içinde size özel teklif hazırlayalım."
        },
        {
          question: "Satın almak mı kiralamanın mı daha avantajlı?",
          answer: "Her projenin ihtiyacı farklıdır. Eğer yıllık projelerinizin çoğunda palplanş kullanacaksanız ve uzun süreli büyük projelere sahipseniz satın alma daha ekonomiktir. Tek seferlik kullanımlar, kısa süreli projeler, sınırlı bütçe veya depolama alanı yoksa kiralama daha mantıklıdır. İyi haber: Biz her ikisini de yapıyoruz, bu projede kiralayabilir, sonraki projede satın alabilirsiniz. Size özel analiz yaparak en uygun seçeneği önerebiliriz."
        },
        {
          question: "Minimum kiralama süresi var mı?",
          answer: "Minimum kiralama süremiz 2 aydır. Ancak proje ihtiyacınıza göre esnek paketler sunuyoruz. Aylık kiralama seçeneklerimiz mevcuttur ve uzun süreli kiralamalar için indirimli fiyatlandırma yapılır."
        },
        {
          question: "Palplanş çakma m² fiyatı ne kadardır?",
          answer: "Çakma fiyatı; zemin yapısı (killi, kumlu, kayalık), derinlik, ulaşım koşulları, şantiye alanının genişliği ve ekipman seçimine göre değişir. Ortalama m² fiyatı için proje detaylarınızı paylaşmanız gerekir. Saha keşfi sonrası net fiyat teklifi sunuyoruz. Ücretsiz ön görüşme için 0542 370 4560 numarasından bize ulaşabilirsiniz."
        }
      ]
    },
    {
      category: "Uygulama ve Teknik",
      questions: [
        {
          question: "Palplanş çakma işlemi ne kadar sürer?",
          answer: "Süre; toplam metrekare, zemin sertliği, derinlik ve hava koşullarına bağlıdır. Standart bir şantiyede günlük 50-100 m² palplanş çakılabilir. Orta ölçekli bir proje (500 m²) yaklaşık 1-2 hafta sürer. Hızlı mobilizasyon ekibimizle acil projelerde daha kısa sürede tamamlayabiliriz."
        },
        {
          question: "Palplanş çakma için hangi ekipmanlar kullanılır?",
          answer: "Vibrasyonlu çakma makinesi (vibro), hidrolik çekiç (hidrolik hammer), dizel çekiç, vinç ve kılavuz sistemleri kullanılır. Zemin yapısına ve proje gereksinimlerine göre en uygun ekipman seçilir. Tüm ekipmanlarımız düzenli bakımlı ve sertifikalıdır."
        },
        {
          question: "Zemin etüdü gerekli mi?",
          answer: "Evet, kesinlikle gereklidir. Zemin etüdü sayesinde doğru palplanş tipi, derinlik ve çakma yöntemi belirlenir. Mühendislik danışmanlığı hizmetimiz kapsamında zemin raporlarınızı analiz eder ve optimum çözüm önerilir. Zemin etüdü yoksa biz de sağlayabiliriz."
        },
        {
          question: "Palplanş çakma sırasında titreşim ve gürültü olur mu?",
          answer: "Çakma işlemi sırasında titreşim ve gürültü oluşur, ancak modern ekipmanlarla bu etkiler minimize edilir. Yerleşim alanlarına yakın projelerde vibro sistem tercih edilerek gürültü azaltılır. İş güvenliği ve çevre düzenlemelerine tam uyum sağlanır. Komşu yapılara hasar vermemek için titreşim ölçümleri yapılır."
        }
      ]
    },
    {
      category: "Hizmet Süreci",
      questions: [
        {
          question: "Teklif süreci nasıl işler?",
          answer: "1) İletişim formunu doldurun veya 0542 370 4560'tan arayın. 2) Proje detaylarınızı (alan, derinlik, konum, süre) paylaşın. 3) 24 saat içinde detaylı fiyat teklifi alın. 4) Gerekirse ücretsiz saha keşfi yapılır. 5) Teklif onayı sonrası hızlı mobilizasyon başlar."
        },
        {
          question: "Türkiye'nin her yerine hizmet veriyor musunuz?",
          answer: "Evet, Türkiye genelinde hizmet veriyoruz. Merkez ofisimiz Ankara'da, depomuz Kocaeli'de bulunuyor. 30+ farklı şehirde proje tamamladık. Lojistik ağımız sayesinde hızlı sevkiyat yapabiliyoruz."
        },
        {
          question: "Acil projeler için ne kadar sürede başlayabilirsiniz?",
          answer: "Stokta bulunan malzemeler için 2-3 gün içinde mobilizasyon yapabiliriz. Acil durumlarda 24 saat içinde saha keşfi ve ön hazırlık başlatılır. Hızlı çözüm ihtiyaçlarınız için doğrudan 0542 370 4560 numaralı acil hattımızdan ulaşabilirsiniz."
        },
        {
          question: "Teknik destek ve danışmanlık hizmeti veriyor musunuz?",
          answer: "Evet, mühendislik danışmanlığı hizmetimiz kapsamında zemin analizi, statik hesaplama, uygulama projelendirmesi ve saha denetimi sağlıyoruz. 7/24 teknik destek hattımız aktiftir. Proje süresince yanınızdayız."
        }
      ]
    },
    {
      category: "Kalite ve Güvenlik",
      questions: [
        {
          question: "Palplanşlarınız sertifikalı mı?",
          answer: "Evet, tüm palplanşlarımız ISO 9001:2015, CE Belgesi, TSE Uygunluk Belgesi ve üretici test sertifikalarına sahiptir. S240GP, S270GP ve S355GP çelik kalitelerinde EN 10248-1 standardına uygun ürünler kullanıyoruz."
        },
        {
          question: "İş güvenliği önlemleriniz nelerdir?",
          answer: "Tüm ekibimiz İSG sertifikalıdır. İş güvenliği standartlarına tam uyum, düzenli ekipman bakımı, saha güvenlik analizi (risk assessment), kişisel koruyucu ekipman kullanımı zorunludur. Güvenlik prosedürlerimiz ile sıfır iş kazası hedefliyoruz."
        },
        {
          question: "Kiralamalarda hasar durumunda ne olur?",
          answer: "Normal kullanım aşınması beklenir ve kapsam dahilindedir. Ancak kötü kullanım veya proje dışı nedenlerden kaynaklanan hasarlar değerlendirilir. Kiralama sözleşmesinde hasar politikamız detaylı açıklanır. Geri alınan malzemeler kontrol edilir ve varsa hasar bedeli hesaplanır."
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionCounter = 0;

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-blue-900" />
            <h1 className="text-4xl font-bold text-blue-900">Sıkça Sorulan Sorular</h1>
          </div>
          <p className="text-lg text-gray-600">
            Palplanş satış, kiralama ve çakma hizmetleri hakkında merak ettikleriniz
          </p>
        </div>

        {/* Quick Contact Banner */}
        <div className="bg-blue-900 text-white rounded-lg p-6 mb-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Sorunuza Cevap Bulamadınız mı?</h2>
            <p className="mb-4">Uzman ekibimiz size yardımcı olmak için hazır!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905423704560"
                className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
              >
                📞 0542 370 4560
              </a>
              <Link
                to="/iletisim"
                className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                İletişim Formu
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => {
                const currentIndex = questionCounter++;
                const isOpen = openIndex === currentIndex;

                return (
                  <div
                    key={qIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleQuestion(currentIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-8">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Hızlı Teklif Almak İster misiniz?</h2>
          <p className="mb-6 text-lg">
            Projeniz için 24 saat içinde ücretsiz, detaylı teklif hazırlıyoruz
          </p>
          <Link
            to="/iletisim"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Ücretsiz Teklif Al →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
