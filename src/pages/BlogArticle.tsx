import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  metaDescription: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

const articles: Record<string, Article> = {
  'palplans-nedir-cesitleri-kullanim-alanlari': {
    id: 'palplans-nedir-cesitleri-kullanim-alanlari',
    title: 'Palplanş Nedir? Çeşitleri ve Kullanım Alanları',
    metaDescription: 'Palplanş iksa sistemleri hakkında kapsamlı rehber. U tipi, Z tipi palplanş çeşitleri, teknik özellikleri ve inşaat projelerindeki kullanım alanları.',
    author: 'Naviga Mühendislik',
    date: '20 Aralık 2024',
    readTime: '12 dk',
    image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80',
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Palplanş Nedir?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Palplanş (Almanca: Spundwand, İngilizce: Sheet Pile), zemin iksa ve su yalıtımı amacıyla kullanılan
          çelik profil sistemleridir. Birbirine kenetlenen bu profiller, kazı alanlarının çevresinde güvenli
          bir duvar oluşturarak hem toprak kaymasını önler hem de yeraltı suyunun kazı alanına sızmasını engeller.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Modern inşaat sektöründe palplanş sistemleri, özellikle derin kazı gerektiren projelerde vazgeçilmez
          bir çözüm olarak öne çıkmaktadır. Metro istasyonları, liman yapıları, köprü temelleri ve yüksek
          katlı bina temel kazılarında yaygın olarak kullanılmaktadır.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Palplanş Çeşitleri</h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. U Tipi Palplanş (Larssen Tipi)</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          U tipi palplanşlar, kesit görünümü "U" harfine benzediği için bu isimle anılır. Larssen tipi olarak
          da bilinen bu profiller, en yaygın kullanılan palplanş türüdür.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Avantajları:</strong> Yüksek atalet momenti, kolay montaj, ekonomik çözüm</li>
          <li><strong>Kullanım Alanları:</strong> Geçici iksa, kalıcı duvar yapıları, liman rıhtımları</li>
          <li><strong>Yaygın Modeller:</strong> PU 12, PU 18, PU 22, PU 25, PU 32</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Z Tipi Palplanş</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Z tipi palplanşlar, kesit görünümü "Z" harfine benzediği için bu isimle anılır. U tipine göre daha
          yüksek mukavemet değerlerine sahiptir ve ağır yük koşullarında tercih edilir.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Avantajları:</strong> Çok yüksek atalet momenti, ağır zemin koşullarına uygun</li>
          <li><strong>Kullanım Alanları:</strong> Derin kazılar, yüksek su basıncı olan alanlar, kalıcı yapılar</li>
          <li><strong>Yaygın Modeller:</strong> AZ 12, AZ 18, AZ 26, AZ 36, AZ 48</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Düz (Flat) Palplanş</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Düz palplanşlar, hücresel yapılar ve dairesel kesonlar için kullanılır. Özellikle liman ve
          kıyı yapılarında tercih edilir.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Palplanş Kullanım Alanları</h2>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Başlıca Uygulama Alanları:</h4>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2">✓ Metro istasyonu kazıları</li>
            <li className="flex items-center gap-2">✓ Liman ve rıhtım yapıları</li>
            <li className="flex items-center gap-2">✓ Köprü ayak temelleri</li>
            <li className="flex items-center gap-2">✓ Derin temel kazıları</li>
            <li className="flex items-center gap-2">✓ Tünel giriş yapıları</li>
            <li className="flex items-center gap-2">✓ Sel ve taşkın koruma</li>
            <li className="flex items-center gap-2">✓ Yeraltı otoparkları</li>
            <li className="flex items-center gap-2">✓ Altyapı projeleri</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Palplanş Seçiminde Dikkat Edilecekler</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Doğru palplanş seçimi, projenin başarısı için kritik öneme sahiptir. Seçim yaparken şu faktörler
          göz önünde bulundurulmalıdır:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Zemin Koşulları:</strong> Zemin türü, su seviyesi, zemin taşıma kapasitesi</li>
          <li><strong>Kazı Derinliği:</strong> Derinlik arttıkça daha güçlü profiller gerekir</li>
          <li><strong>Yük Koşulları:</strong> Yanal toprak basıncı, su basıncı, yüzey yükleri</li>
          <li><strong>Proje Süresi:</strong> Geçici mi kalıcı mı kullanılacak</li>
          <li><strong>Bütçe:</strong> Satın alma vs kiralama karşılaştırması</li>
        </ol>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Sonuç</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Palplanş sistemleri, modern inşaat mühendisliğinin vazgeçilmez bir parçasıdır. Doğru tip ve boyut
          seçimi ile güvenli ve ekonomik zemin iksa çözümleri elde edilebilir. Profesyonel mühendislik desteği
          ve kaliteli malzeme kullanımı, başarılı bir uygulama için şarttır.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h4 className="font-semibold text-blue-900 mb-2">Profesyonel Destek Alın</h4>
          <p className="text-gray-700 mb-4">
            Projeniz için en uygun palplanş çözümünü belirlemek için uzman ekibimizle iletişime geçin.
            15+ yıllık tecrübemizle yanınızdayız.
          </p>
          <Link to="/iletisim" className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
            Teklif Alın
          </Link>
        </div>
      </>
    )
  },
  'palplans-kiralama-mi-satin-alma-mi': {
    id: 'palplans-kiralama-mi-satin-alma-mi',
    title: 'Palplanş Kiralama mı Satın Alma mı? Maliyet Karşılaştırması',
    metaDescription: 'Palplanş kiralama ve satın alma arasındaki farklar, maliyet analizi ve projenize en uygun seçeneği belirleme rehberi.',
    author: 'Naviga Mühendislik',
    date: '18 Aralık 2024',
    readTime: '10 dk',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Giriş</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          İnşaat projelerinde palplanş ihtiyacı doğduğunda karşılaşılan en önemli karar noktalarından biri,
          palplanşları kiralamak mı yoksa satın almak mı gerektiğidir. Bu karar, projenin bütçesini ve
          verimliliğini doğrudan etkiler. Bu makalede, her iki seçeneğin avantaj ve dezavantajlarını
          detaylı olarak inceleyeceğiz.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Palplanş Kiralama</h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kiralama Avantajları</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Düşük Başlangıç Maliyeti:</strong> Büyük bir sermaye yatırımı gerektirmez</li>
          <li><strong>Depolama Sorunu Yok:</strong> Proje bitiminde iade edilir, depo maliyeti olmaz</li>
          <li><strong>Bakım Sorumluluğu Yok:</strong> Bakım ve onarım kiralayan firmaya aittir</li>
          <li><strong>Esneklik:</strong> Farklı projelerde farklı tip ve boyutlarda kullanılabilir</li>
          <li><strong>Güncel Stok:</strong> Her zaman kaliteli ve bakımlı malzeme kullanımı</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Kiralama Dezavantajları</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Uzun Vadede Maliyet:</strong> Uzun süreli projelerde toplam maliyet yükselebilir</li>
          <li><strong>Minimum Süre:</strong> Genellikle minimum 2 ay kiralama zorunluluğu vardır</li>
          <li><strong>Stok Durumu:</strong> Yoğun dönemlerde istenen profil bulunamayabilir</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-gray-700">
            <strong>Not:</strong> Naviga Palplanş olarak minimum kiralama süremiz 2 aydır.
            Kısa süreli projeler için de uygun çözümler sunuyoruz.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Palplanş Satın Alma</h2>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Satın Alma Avantajları</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Uzun Vadede Ekonomik:</strong> Çok sayıda projede kullanılacaksa daha ekonomik</li>
          <li><strong>Sürekli Erişim:</strong> İhtiyaç anında hemen kullanılabilir</li>
          <li><strong>Yeniden Satış:</strong> Proje sonunda ikinci el olarak satılabilir</li>
          <li><strong>Tam Kontrol:</strong> Malzeme üzerinde tam kontrol ve esneklik</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Satın Alma Dezavantajları</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Yüksek Başlangıç Maliyeti:</strong> Önemli miktarda sermaye gerektirir</li>
          <li><strong>Depolama Maliyeti:</strong> Kullanılmadığı dönemlerde depolama gerekir</li>
          <li><strong>Bakım Sorumluluğu:</strong> Bakım ve onarım maliyetleri firmaya aittir</li>
          <li><strong>Değer Kaybı:</strong> Zamanla aşınma ve değer kaybı yaşanır</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Maliyet Karşılaştırması</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Kriter</th>
                <th className="border border-gray-300 p-3 text-left">Kiralama</th>
                <th className="border border-gray-300 p-3 text-left">Satın Alma</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Başlangıç Maliyeti</td>
                <td className="border border-gray-300 p-3 text-green-600">Düşük</td>
                <td className="border border-gray-300 p-3 text-red-600">Yüksek</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Uzun Vadeli Maliyet</td>
                <td className="border border-gray-300 p-3 text-red-600">Yüksek</td>
                <td className="border border-gray-300 p-3 text-green-600">Düşük</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Depolama</td>
                <td className="border border-gray-300 p-3 text-green-600">Gerekli Değil</td>
                <td className="border border-gray-300 p-3 text-red-600">Gerekli</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Bakım</td>
                <td className="border border-gray-300 p-3 text-green-600">Dahil</td>
                <td className="border border-gray-300 p-3 text-red-600">Ek Maliyet</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">Esneklik</td>
                <td className="border border-gray-300 p-3 text-green-600">Yüksek</td>
                <td className="border border-gray-300 p-3 text-yellow-600">Orta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Hangi Durumda Hangisi?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Kiralama Tercih Edilmeli:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Tek seferlik veya az sayıda proje</li>
              <li>• 6 aydan kısa süreli projeler</li>
              <li>• Sermaye kısıtı olan firmalar</li>
              <li>• Depolama imkanı olmayan firmalar</li>
              <li>• Farklı tip palplanş ihtiyacı</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Satın Alma Tercih Edilmeli:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Sürekli palplanş kullanan firmalar</li>
              <li>• Yılda 3+ proje yapan müteahhitler</li>
              <li>• Kalıcı yapı projeleri</li>
              <li>• Depolama imkanı olan firmalar</li>
              <li>• Uzun vadeli yatırım planı</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Sonuç</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Palplanş kiralama veya satın alma kararı, her projenin kendine özgü koşullarına göre değerlendirilmelidir.
          Genel olarak, kısa ve orta vadeli projeler için kiralama, uzun vadeli ve sürekli kullanım için satın alma
          daha ekonomik olacaktır. En doğru karar için detaylı maliyet analizi yapılmalıdır.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h4 className="font-semibold text-blue-900 mb-2">Ücretsiz Maliyet Analizi</h4>
          <p className="text-gray-700 mb-4">
            Projeniz için kiralama mı satın alma mı daha uygun? Uzman ekibimiz ücretsiz maliyet analizi yaparak
            size en ekonomik çözümü sunuyor.
          </p>
          <Link to="/iletisim" className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
            Ücretsiz Analiz İsteyin
          </Link>
        </div>
      </>
    )
  },
  'derin-kazi-projelerinde-palplans': {
    id: 'derin-kazi-projelerinde-palplans',
    title: 'Derin Kazı Projelerinde Palplanş İksa Sistemleri',
    metaDescription: 'Metro, tünel ve derin temel kazılarında palplanş iksa sistemlerinin uygulanması, tasarım kriterleri ve başarılı proje örnekleri.',
    author: 'Naviga Mühendislik',
    date: '15 Aralık 2024',
    readTime: '15 dk',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80',
    content: (
      <>
        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Derin Kazı Nedir?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Derin kazı, genel olarak 6 metreden daha derin yapılan kazı çalışmalarını ifade eder. Bu tür kazılar,
          özel iksa sistemleri gerektiren ve yüksek mühendislik bilgisi isteyen uygulamalardır. Metro istasyonları,
          yeraltı otoparkları, yüksek katlı bina temelleri ve altyapı tünelleri derin kazı gerektiren başlıca
          projelerdir.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Derin Kazılarda Palplanş Kullanımının Avantajları</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Su Yalıtımı:</strong> Kilitli bağlantılar sayesinde yeraltı suyuna karşı etkili bariyer</li>
          <li><strong>Hızlı Uygulama:</strong> Vibrasyonlu veya darbeli çakma ile hızlı montaj</li>
          <li><strong>Yeniden Kullanım:</strong> Geçici iksa olarak kullanıldığında sökülerek başka projelerde kullanılabilir</li>
          <li><strong>Dar Alanlarda Çalışma:</strong> İnce profil yapısı sayesinde dar alanlarda bile uygulanabilir</li>
          <li><strong>Maliyet Etkinliği:</strong> Betonarme perdeye göre daha ekonomik çözüm</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Tasarım Kriterleri</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Derin kazı projelerinde palplanş tasarımı, dikkatli mühendislik hesaplamaları gerektirir.
          Aşağıdaki faktörler tasarımda göz önünde bulundurulmalıdır:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Zemin Araştırması</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Zemin etüdü, palplanş tasarımının temelidir. Zemin türü, tabakalanma, yeraltı su seviyesi ve
          zemin parametreleri (kohezyon, içsel sürtünme açısı, birim hacim ağırlık) belirlenmelidir.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Yük Analizi</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Aktif toprak basıncı</li>
          <li>Pasif toprak direnci</li>
          <li>Hidrostatik su basıncı</li>
          <li>Yüzey yükleri (trafik, yapı vb.)</li>
          <li>Deprem yükleri</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Palplanş Profil Seçimi</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Hesaplanan momentlere göre uygun kesit modülüne sahip profil seçilir. Derin kazılarda genellikle
          yüksek kesit modülüne sahip Z tipi veya ağır U tipi profiller tercih edilir.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Derinliğe Göre Önerilen Profiller:</h4>
          <ul className="text-gray-700 space-y-2">
            <li><strong>6-10 m:</strong> PU 18, PU 22, AZ 18</li>
            <li><strong>10-15 m:</strong> PU 25, PU 32, AZ 26</li>
            <li><strong>15+ m:</strong> AZ 36, AZ 48 + ankraj sistemi</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Destek Sistemleri</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Derin kazılarda palplanş tek başına yeterli olmayabilir. Ek destek sistemleri kullanılır:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ankraj Sistemi</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Çelik halatlar veya çubuklar ile palplanş, kazı gerisindeki zemine ankre edilir.
          Bu yöntem, açık kazı alanı gerektiren projelerde tercih edilir.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Strut (Payanda) Sistemi</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Karşılıklı palplanş duvarları arasına çelik payandalar yerleştirilir.
          Dar alanlarda ve ankraj imkanı olmayan yerlerde kullanılır.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Uygulama Aşamaları</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-3">
          <li><strong>Zemin Etüdü:</strong> Sondaj ve laboratuvar deneyleri</li>
          <li><strong>Tasarım:</strong> Mühendislik hesapları ve profil seçimi</li>
          <li><strong>Çakma Çalışması:</strong> Vibrasyonlu veya darbeli çakma</li>
          <li><strong>Birinci Kademe Kazı:</strong> İlk destek seviyesine kadar kazı</li>
          <li><strong>Destek Montajı:</strong> Ankraj veya strut montajı</li>
          <li><strong>Kademeli Kazı:</strong> Destek sistemleri ile birlikte kademeli ilerleme</li>
          <li><strong>Temel İnşaatı:</strong> Kazı tabanında yapı inşaatı</li>
          <li><strong>Geri Dolgu:</strong> İnşaat tamamlandıktan sonra geri dolgu ve palplanş sökümü (geçici ise)</li>
        </ol>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Başarılı Proje Örnekleri</h2>

        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800">Ankara Metro İstasyonu</h4>
            <p className="text-gray-600 text-sm">Derinlik: 22m | Profil: AZ 26 | Süre: 8 ay</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800">İstanbul Liman Projesi</h4>
            <p className="text-gray-600 text-sm">Derinlik: 15m | Profil: PU 32 | Süre: 6 ay</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800">İzmir Yeraltı Otoparkı</h4>
            <p className="text-gray-600 text-sm">Derinlik: 12m | Profil: PU 25 | Süre: 4 ay</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Sonuç</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Derin kazı projelerinde palplanş iksa sistemleri, doğru tasarım ve uygulama ile güvenli ve ekonomik
          çözümler sunar. Deneyimli mühendislik ekibi ve kaliteli malzeme kullanımı, projenin başarısı için
          kritik öneme sahiptir.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h4 className="font-semibold text-blue-900 mb-2">Derin Kazı Projeniz mi Var?</h4>
          <p className="text-gray-700 mb-4">
            30+ başarılı derin kazı projesi tecrübemizle, projenize özel mühendislik çözümleri sunuyoruz.
            Ücretsiz keşif ve teknik danışmanlık için bize ulaşın.
          </p>
          <Link to="/iletisim" className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
            Ücretsiz Keşif Talep Et
          </Link>
        </div>
      </>
    )
  }
};

const BlogArticle = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articles[articleId] : null;

  if (!article) {
    return (
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Makale Bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığınız makale mevcut değil veya kaldırılmış olabilir.</p>
          <Link to="/blog" className="text-blue-900 font-medium hover:text-blue-700">
            ← Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <article className="max-w-4xl mx-auto px-4">
        {/* Geri Dön */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Blog'a Dön
        </Link>

        {/* Başlık */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6">{article.title}</h1>

        {/* Meta Bilgiler */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-6 border-b">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} okuma</span>
          </div>
        </div>

        {/* Ana Görsel */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />

        {/* İçerik */}
        <div className="prose prose-lg max-w-none">
          {article.content}
        </div>

        {/* Paylaş */}
        <div className="mt-12 pt-6 border-t">
          <div className="flex items-center gap-4">
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Bu makaleyi paylaşın:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Diğer Makaleler */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Diğer Makaleler</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(articles)
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map(a => (
                <Link
                  key={a.id}
                  to={`/blog/${a.id}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">{a.title}</h4>
                  <p className="text-sm text-gray-600">{a.readTime} okuma</p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;
