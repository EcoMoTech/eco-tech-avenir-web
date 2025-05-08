
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-blue/90 to-eco-blue/80 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full border border-white/10"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full border border-white/10"></div>
        <div className="absolute top-[30%] right-[15%] w-40 h-40 rounded-full border-2 border-white/10"></div>
        
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute top-[20%] right-[10%] w-60 h-60 bg-white/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm mb-6">
              Prêt à Agir ?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Passez à l'énergie renouvelable dès aujourd'hui
            </h2>
            <p className="text-xl mb-10 opacity-90 text-white max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et commencez votre transition vers un avenir plus durable et économique.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-eco-blue hover:bg-white/90 w-full sm:w-auto font-medium text-base px-8 h-14 rounded-full shadow-lg shadow-black/5 transition-all hover:shadow-xl">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </Link>
            <Link to="/calculatrice">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto font-medium text-base px-8 h-14 rounded-full">
                Calculer vos économies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
