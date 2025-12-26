import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

const CustomerPanel = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <LogIn className="w-12 h-12 text-blue-900" />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-8">
            {isLogin ? 'Müşteri Girişi' : 'Yeni Hesap Oluştur'}
          </h1>
          
          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Şifre
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
            >
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
            
            <div className="text-center mt-4">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-900 hover:underline"
              >
                {isLogin ? 'Yeni hesap oluştur' : 'Hesabın var mı? Giriş yap'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPanel;