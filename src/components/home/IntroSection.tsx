
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const IntroSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-eco-lightgray to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll order-2 md:order-1">
            <div className="mb-6">
              <span className="bg-eco-green/10 text-eco-green px-4 py-1.5 rounded-full text-sm font-semibold inline-block">
                Notre Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Bienvenue chez <br />
              <span className="text-eco-green">EcoMoTech</span>
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              EcoMoTech est un leader français dans les solutions d'énergie renouvelable 
              solaire et la mobilité électrique, proposant des solutions complètes et 
              innovantes pour la transition énergétique et écologique.
            </p>
            <div className="flex items-center mt-8">
              <Link to="/a-propos" className="group">
                <span className="text-eco-blue font-semibold flex items-center transition-all hover:text-eco-green">
                  En savoir plus sur nous
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-on-scroll">
            <Card className="overflow-hidden rounded-2xl border-none shadow-xl shadow-gray-200/50">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Installations solaires" 
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <div className="text-white">
                    <p className="text-white/80 text-sm mb-2">Expertise technique</p>
                    <h3 className="text-3xl font-semibold mb-2">Solutions solaires avancées</h3>
                    <p className="text-white/90 max-w-md">
                      Nos installations sont conçues pour maximiser l'efficacité et la durabilité.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
