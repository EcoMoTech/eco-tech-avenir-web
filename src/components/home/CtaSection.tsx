
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-eco-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à passer à l'énergie renouvelable ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour un devis gratuit et commencez votre transition vers un avenir plus durable et économique.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-eco-blue hover:bg-white/90 w-full sm:w-auto">
                Demander un devis
              </Button>
            </Link>
            <Link to="/calculatrice">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
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
