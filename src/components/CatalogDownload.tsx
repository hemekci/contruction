import React, { useState } from 'react';
import { Download, X, FileText, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface CatalogDownloadProps {
  catalogName?: string;
}

const CatalogDownload: React.FC<CatalogDownloadProps> = ({ catalogName = 'Palplanş Teknik Katalog' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const downloadPdf = () => {
    // PDF'i indir
    const link = document.createElement('a');
    link.href = '/katalog/naviga-palplans-katalog-2024.pdf';
    link.download = 'Naviga-Palplans-Teknik-Katalog-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        'service_x79wgmq',
        'template_8hf6ssm',
        {
          to_name: 'Naviga Palplanş',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: `Katalog İndirme - ${catalogName}`,
          message: `
KATALOG İNDİRME TALEBİ

Kişi Bilgileri:
- Ad Soyad: ${formData.name}
- E-posta: ${formData.email}
- Telefon: ${formData.phone}
- Firma: ${formData.company || 'Belirtilmedi'}

İndirilen Katalog: ${catalogName}
Tarih: ${new Date().toLocaleString('tr-TR')}
          `.trim(),
          reply_to: formData.email,
        },
        'X2olK5BZsTU9ehw3L'
      );

      setStatus({ submitting: false, submitted: true, error: false });

      // PDF'i indir
      setTimeout(() => {
        downloadPdf();
      }, 500);

      setFormData({ name: '', email: '', phone: '', company: '' });

    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatus({ submitting: false, submitted: false, error: false });
  };

  return (
    <>
      {/* İndirme Butonu */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md"
      >
        <Download className="w-5 h-5" />
        Teknik Katalog İndir
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {!status.submitted ? (
              <>
                <div className="p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Teknik Katalog</h3>
                      <p className="text-sm text-gray-500">PDF olarak indirin (8 sayfa)</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">Katalog içeriği:</p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>• Z tipi AZ serisi profil tabloları</li>
                    <li>• AZ / PZ-GPZ eşdeğerlik cetveli</li>
                    <li>• U tipi Larssen profilleri</li>
                    <li>• Çelik kaliteleri ve standartlar</li>
                  </ul>

                  <p className="text-gray-600 mb-4 text-sm">
                    Kataloğu indirmek için bilgilerinizi girin:
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ad Soyad *"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="E-posta *"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Telefon *"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Firma Adı (opsiyonel)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />

                    {status.error && (
                      <p className="text-red-500 text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status.submitting}
                      className={`w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-colors font-medium flex items-center justify-center gap-2 ${
                        status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {status.submitting ? 'Gönderiliyor...' : (
                        <>
                          <Download className="w-5 h-5" />
                          Kataloğu İndir
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Bilgileriniz gizli tutulacaktır.
                  </p>
                </div>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  PDF İndirildi!
                </h3>
                <p className="text-gray-600 mb-6">
                  Naviga Palplanş Teknik Katalog bilgisayarınıza indirildi.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Tamam
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogDownload;
