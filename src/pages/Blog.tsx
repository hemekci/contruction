import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Video, FileText, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 'palplans-nedir-cesitleri-kullanim-alanlari',
      title: 'Palplanş Nedir? Çeşitleri ve Kullanım Alanları',
      excerpt: 'Palplanş iksa sistemleri hakkında kapsamlı rehber. U tipi, Z tipi palplanş çeşitleri, teknik özellikleri ve inşaat projelerindeki kullanım alanları.',
      image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80',
      readTime: '12 dk',
      date: '20 Aralık 2024',
      featured: true
    },
    {
      id: 'palplans-kiralama-mi-satin-alma-mi',
      title: 'Palplanş Kiralama mı Satın Alma mı? Maliyet Karşılaştırması',
      excerpt: 'Palplanş kiralama ve satın alma arasındaki farklar, maliyet analizi ve projenize en uygun seçeneği belirleme rehberi.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      readTime: '10 dk',
      date: '18 Aralık 2024',
      featured: false
    },
    {
      id: 'derin-kazi-projelerinde-palplans',
      title: 'Derin Kazı Projelerinde Palplanş İksa Sistemleri',
      excerpt: 'Metro, tünel ve derin temel kazılarında palplanş iksa sistemlerinin uygulanması, tasarım kriterleri ve başarılı proje örnekleri.',
      image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80',
      readTime: '15 dk',
      date: '15 Aralık 2024',
      featured: false
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  const resources = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Uygulama Videoları',
      description: 'Palplanş çakma ve montaj süreçlerini anlatan detaylı video içerikleri',
      link: '/hizmetler'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Teknik Dökümanlar',
      description: 'Palplanş profil katalogları ve teknik şartnameler',
      link: '/urunler'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Vaka Çalışmaları',
      description: 'Başarıyla tamamlanmış proje örnekleri ve detaylı analizler',
      link: '/referanslar'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-900" />
          <h1 className="text-4xl font-bold text-blue-900">Teknik Blog</h1>
        </div>

        <p className="text-gray-600 mb-12 max-w-3xl">
          Palplanş iksa sistemleri, zemin güçlendirme teknikleri ve derin kazı projeleri hakkında
          güncel teknik makaleler. Mühendislik bilgi birikiminizi artırın.
        </p>

        {/* Öne Çıkan Makale */}
        {featuredArticle && (
          <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Öne Çıkan
                </span>
                <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime} okuma</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${featuredArticle.id}`}
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Makaleyi Oku →
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Diğer Makaleler */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tüm Makaleler</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${article.id}`}
                  className="text-blue-900 font-medium hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Devamını Oku →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* SEO İçerik Bloğu */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Palplanş Hakkında</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              <strong>Palplanş</strong> (İngilizce: Sheet Pile), zemin iksa ve su yalıtımı amacıyla kullanılan
              çelik profil sistemleridir. İnşaat sektöründe özellikle derin kazı gerektiren metro istasyonları,
              liman yapıları, köprü temelleri ve yüksek katlı bina projelerinde yaygın olarak kullanılmaktadır.
            </p>
            <p>
              Naviga Palplanş olarak 15+ yıllık tecrübemizle Türkiye genelinde palplanş satış, kiralama ve
              çakma hizmetleri sunuyoruz. Stoklarımızda U tipi (Larssen) ve Z tipi palplanş profilleri
              bulunmaktadır. Minimum kiralama süremiz 2 aydır.
            </p>
          </div>
        </div>

        {/* Teknik Kaynaklar */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-8">Teknik Kaynaklar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="text-blue-900 mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  to={resource.link}
                  className="text-blue-900 font-medium hover:text-blue-700"
                >
                  İncele →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
