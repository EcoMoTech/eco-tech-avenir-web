
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="section-padding bg-eco-lightgray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Bienvenue chez <span className="text-eco-green">EcoMoTech</span>
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              EcoMoTech est un leader dans les solutions d'énergie renouvelable solaire et la mobilité électrique en France.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Notre mission est de proposer des solutions complètes et innovantes pour la transition énergétique et écologique, tant pour les particuliers que pour les entreprises.
            </p>
            <div className="flex items-center">
              <Link to="/a-propos" className="text-eco-blue font-semibold flex items-center group transition-all hover:text-eco-green">
                En savoir plus sur nous
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Installations solaires" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
