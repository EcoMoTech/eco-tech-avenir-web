
import React from 'react';
import { Battery, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StationsRecharge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-eco-blue via-eco-blue/90 to-eco-blue/80 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593941707882-a5bfb1801833?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4 animate-fade-in">
                Infrastructure de Recharge
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
                Stations de <span className="text-white bg-eco-blue/20 px-2 rounded-md">Recharge</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
                Solutions professionnelles pour entreprises et collectivités
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                <Button className="bg-white text-eco-blue hover:bg-white/90">
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
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px] order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1593941707882-a5bfb1801833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Station de recharge" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Infrastructures de recharge professionnelles</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Nos stations de recharge sont conçues pour les espaces publics, les entreprises et les commerces. Elles permettent de recharger rapidement plusieurs véhicules et sont adaptées à tous types d'établissements.
                </p>
                <div className="space-y-4">
                  {[
                    "Solutions de 22 kW à 150 kW de puissance",
                    "Recharge rapide (80% en 30 minutes)",
                    "Système de paiement intégré",
                    "Surveillance et maintenance à distance",
                    "Installation clé en main et service après-vente"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="h-6 w-6 rounded-full bg-eco-blue/20 flex items-center justify-center text-eco-blue">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Catalog */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-eco-blue/10 text-eco-blue">Nos Produits</Badge>
              <h2 className="text-3xl font-bold mb-4">Stations de recharge</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions professionnelles adaptées à chaque type d'établissement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Product Cards */}
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Battery className="h-16 w-16 text-eco-blue/20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-eco-blue/10 text-eco-blue">Professionnel</Badge>
                    <h3 className="text-xl font-semibold mb-2">ProCharge {item * 22}</h3>
                    <p className="text-gray-600 mb-4">
                      Station de recharge {item * 22}kW avec {item + 1} points de charge, système de paiement intégré.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-eco-blue">À partir de {(item * 2000) + 3999} €</span>
                      <Button variant="outline" className="border-eco-blue text-eco-blue hover:bg-eco-blue/10">
                        Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="bg-eco-blue hover:bg-eco-blue/90">
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

export default StationsRecharge;
