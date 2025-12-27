import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Building2, HardHat } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    emailjs.init("X2olK5BZsTU9ehw3L");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    serviceType: '',
    projectSize: '',
    startDate: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    errorMessage: ''
  });

  const cities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
    'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik',
    'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
    'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
    'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kilis',
    'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
    'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize',
    'Sakarya', 'Samsun', 'Şanlıurfa', 'Siirt', 'Sinop', 'Şırnak', 'Sivas', 'Tekirdağ',
    'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: false, errorMessage: '' });

    // Detaylı mesaj oluştur
    const detailedMessage = `
PROJE DETAYLARI:
- Firma: ${formData.company || 'Belirtilmedi'}
- Şehir: ${formData.city || 'Belirtilmedi'}
- Proje Tipi: ${formData.projectType || 'Belirtilmedi'}
- Hizmet İhtiyacı: ${formData.serviceType || 'Belirtilmedi'}
- Proje Büyüklüğü: ${formData.projectSize || 'Belirtilmedi'}
- Başlama Tarihi: ${formData.startDate || 'Belirtilmedi'}
- Bütçe Aralığı: ${formData.budget || 'Belirtilmedi'}

MESAJ:
${formData.message}
    `.trim();

    try {
      await emailjs.send(
        'service_x79wgmq',
        'template_8hf6ssm',
        {
          to_name: 'Naviga Palplanş',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: `Teklif Talebi - ${formData.projectType} - ${formData.city}`,
          message: detailedMessage,
          reply_to: formData.email,
        },
        'X2olK5BZsTU9ehw3L'
      );

      setStatus({ submitted: true, submitting: false, error: false, errorMessage: '' });
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        projectType: '',
        serviceType: '',
        projectSize: '',
        startDate: '',
        budget: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Form gönderme hatası:', error);
      setStatus({ submitted: false, submitting: false, error: true, errorMessage: error.text || error.message });
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <HardHat className="w-8 h-8 text-blue-900" />
          <h1 className="text-4xl font-bold text-blue-900">İletişim & Teklif Al</h1>
        </div>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Projeniz için detaylı bilgi vererek size özel teklif alın.
          24 saat içinde uzman ekibimiz sizinle iletişime geçecektir.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sol taraf: İletişim Bilgileri */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <a href="tel:+905423704560" className="text-gray-600 hover:text-blue-900 transition-colors">
                      +90 542 370 4560
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-medium">E-posta</h3>
                    <a href="mailto:info@navigapalplans.com" className="text-gray-600 hover:text-blue-900 transition-colors">
                      info@navigapalplans.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-medium">Adres</h3>
                    <p className="text-gray-600 text-sm">
                      Merkez: Ankara, Söğütözü Plaza<br />
                      Depo: Kocaeli, Gebze OSB
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-medium">Çalışma Saatleri</h3>
                    <p className="text-gray-600 text-sm">
                      Pzt - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-blue-900" />
                  <h3 className="font-medium text-blue-900">Hizmet Bölgesi</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Tüm Türkiye genelinde palplanş satış, kiralama ve çakma hizmeti veriyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Sağ taraf: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-2">Teklif Talep Formu</h2>
              <p className="text-gray-500 text-sm mb-6">* ile işaretli alanlar zorunludur</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Kişisel Bilgiler */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Kişisel Bilgiler</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Firma Adı
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Şirket veya kurum adı"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@firma.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Proje Detayları */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Proje Detayları</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Proje Şehri *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Şehir seçiniz</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Proje Tipi *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Proje tipi seçiniz</option>
                        <option value="Metro İstasyonu">Metro İstasyonu</option>
                        <option value="Bodrum Kat / Temel Kazısı">Bodrum Kat / Temel Kazısı</option>
                        <option value="Liman / Rıhtım">Liman / Rıhtım</option>
                        <option value="Köprü / Viyadük">Köprü / Viyadük</option>
                        <option value="Tünel Girişi">Tünel Girişi</option>
                        <option value="Yeraltı Otoparkı">Yeraltı Otoparkı</option>
                        <option value="Altyapı / Kanalizasyon">Altyapı / Kanalizasyon</option>
                        <option value="Sel / Taşkın Koruma">Sel / Taşkın Koruma</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hizmet İhtiyacınız *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Hizmet seçiniz</option>
                        <option value="Sadece Kiralama">Sadece Kiralama</option>
                        <option value="Sadece Satış">Sadece Satış</option>
                        <option value="Kiralama + Çakma">Kiralama + Çakma Hizmeti</option>
                        <option value="Satış + Çakma">Satış + Çakma Hizmeti</option>
                        <option value="Sadece Çakma Hizmeti">Sadece Çakma Hizmeti</option>
                        <option value="Danışmanlık">Teknik Danışmanlık</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Proje Büyüklüğü (m²)
                      </label>
                      <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Yaklaşık alan seçiniz</option>
                        <option value="500 m² altı">500 m² altı</option>
                        <option value="500 - 1.000 m²">500 - 1.000 m²</option>
                        <option value="1.000 - 5.000 m²">1.000 - 5.000 m²</option>
                        <option value="5.000 - 10.000 m²">5.000 - 10.000 m²</option>
                        <option value="10.000 m² üstü">10.000 m² üstü</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Projeye Başlama Zamanı
                      </label>
                      <select
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Zaman aralığı seçiniz</option>
                        <option value="Acil (1 ay içinde)">Acil (1 ay içinde)</option>
                        <option value="1-3 ay içinde">1-3 ay içinde</option>
                        <option value="3-6 ay içinde">3-6 ay içinde</option>
                        <option value="6 ay sonra">6 ay sonra</option>
                        <option value="Henüz belli değil">Henüz belli değil</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bütçe Aralığı (Opsiyonel)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Bütçe aralığı seçiniz</option>
                        <option value="100.000 TL altı">100.000 TL altı</option>
                        <option value="100.000 - 500.000 TL">100.000 - 500.000 TL</option>
                        <option value="500.000 - 1.000.000 TL">500.000 - 1.000.000 TL</option>
                        <option value="1.000.000 - 5.000.000 TL">1.000.000 - 5.000.000 TL</option>
                        <option value="5.000.000 TL üstü">5.000.000 TL üstü</option>
                        <option value="Belirtmek istemiyorum">Belirtmek istemiyorum</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Mesaj */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ek Bilgi ve Notlar
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Projeniz hakkında ek bilgi, özel istekler veya sorularınızı yazabilirsiniz..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                  <p>
                    <strong>Not:</strong> Minimum kiralama süresi 2 aydır. Teklif fiyatları proje
                    detaylarına göre belirlenir. Formu gönderdikten sonra 24 saat içinde
                    uzman ekibimiz sizinle iletişime geçecektir.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-colors font-medium text-lg ${
                    status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {status.submitting ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
                </button>

                {status.submitted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                    <strong>Teşekkürler!</strong> Teklif talebiniz başarıyla alındı.
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </div>
                )}

                {status.error && (
                  <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                    <strong>Hata!</strong> {status.errorMessage || 'Bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz veya bizi telefonla arayınız.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
