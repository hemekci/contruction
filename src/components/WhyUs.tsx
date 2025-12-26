import React from 'react';
import { Clock, Shield, PenTool as Tool, Users } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "15+ Yıl Tecrübe",
      description: "Altyapı sektöründe 15 yılı aşkın saha ve proje tecrübesi."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "30+ Başarılı Proje",
      description: "Türkiye genelinde 30'dan fazla başarılı proje tamamlama."
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: "Geniş Stok",
      description: "Yüzlerce ton palplanş stoğuyla hızlı teslimat imkanı."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Hızlı Çözüm",
      description: "24 saat içinde detaylı teklif ve çevik saha mobilizasyonu."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Neden Naviga Palplanş?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-900 mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;