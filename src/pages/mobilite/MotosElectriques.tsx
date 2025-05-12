
import React from 'react';
import { Bike, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MotosElectriques = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-eco-green via-eco-green/90 to-eco-green/80 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1632990641317-6972096e5e10?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4 animate-fade-in">
                Mobilité Électrique
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
                Motos <span className="text-white bg-eco-green/20 px-2 rounded-md">Électriques</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
                Performance et respect de l'environnement sur deux roues
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                <Button className="bg-white text-eco-green hover:bg-white/90">
                  Voir nos produits
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Des motos électriques performantes et écologiques</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Nos motos électriques combinent performance, autonomie et respect de l'environnement. Conçues pour les trajets urbains comme pour les escapades plus longues, elles offrent une expérience de conduite unique.
                </p>
                <div className="space-y-4">
                  {[
                    "Autonomie jusqu'à 150 km",
                    "Recharge complète en 4 heures",
                    "Moteur puissant et silencieux",
                    "Zéro émission de CO2",
                    "Coût d'entretien réduit"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center text-eco-green">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1632990641317-6972096e5e10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Moto électrique" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Catalog */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-eco-green/10 text-eco-green">Nos Produits</Badge>
              <h2 className="text-3xl font-bold mb-4">Motos électriques</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez notre gamme de motos électriques adaptées à tous les besoins
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Product Cards */}
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bike className="h-16 w-16 text-eco-green/20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-eco-green/10 text-eco-green">Urbaine</Badge>
                    <h3 className="text-xl font-semibold mb-2">EcoRide {item * 1000}</h3>
                    <p className="text-gray-600 mb-4">
                      Moto électrique urbaine avec une autonomie de {item * 50 + 50}km et une puissance de {item * 2000}W.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-eco-green">{(item * 1000) + 2999} €</span>
                      <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/10">
                        Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="bg-eco-green hover:bg-eco-green/90">
                  Contacter un conseiller
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MotosElectriques;
