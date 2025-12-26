import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import CustomerPanel from './pages/CustomerPanel';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/905423704560?lang=tr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium">Acil Teklif Al</span>
        </a>
      </div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<Products />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/referanslar" element={<References />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:articleId" element={<BlogArticle />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/musteri-paneli" element={<CustomerPanel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;