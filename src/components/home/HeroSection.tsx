
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center hero-section">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Solutions énergétiques durables pour un avenir meilleur
          </h1>
          <p className="text-xl text-white mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Expertise et innovation en énergie solaire et mobilité électrique pour particuliers et professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/contact">
              <Button size="lg" className="bg-eco-green hover:bg-eco-green/90 text-white w-full sm:w-auto">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="bg-white/10 text-white backdrop-blur-sm border-white hover:bg-white/20 w-full sm:w-auto">
                Découvrir nos solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
