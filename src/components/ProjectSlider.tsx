import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSlider = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80",
      title: "Kabataş-Mecidiyeköy Metro İstasyonu",
      location: "İstanbul"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      title: "Alsancak Limanı Genişletme",
      location: "İzmir"
    },
    {
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80",
      title: "Başakşehir Şehir Hastanesi",
      location: "İstanbul"
    }
  ];

  return (
    <div className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Referans Projelerimiz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.location}</p>
                <Link to="/referanslar" className="mt-4 text-blue-900 font-medium hover:text-blue-700 inline-block">
                  Tüm Projeler →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;