
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { LampFloor } from 'lucide-react';

const EclairageSolaire = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-eco-green via-eco-green/90 to-eco-green/80 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4 animate-fade-in">
                Éclairage Solaire
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
                Solutions d'<span className="text-white bg-eco-blue/20 px-2 rounded-md">Éclairage</span> Solaire
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
                Des lampadaires et systèmes d'éclairage autonomes et écologiques
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
        
        {/* Product Catalog Placeholder */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-eco-green/10 text-eco-green">Nos Produits</Badge>
              <h2 className="text-3xl font-bold mb-4">Gamme d'éclairage solaire</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions d'éclairage pour tous vos besoins extérieurs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Product Cards */}
              {[1, 2, 3, 4, 5].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LampFloor className="h-16 w-16 text-eco-green/20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-eco-green/10 text-eco-green">Éclairage</Badge>
                    <h3 className="text-xl font-semibold mb-2">Lampadaire Solaire EcoLight {item}00</h3>
                    <p className="text-gray-600 mb-4">
                      Lampadaire solaire LED avec détecteur de mouvement et variation d'intensité.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-eco-green">{(item * 200) + 299} €</span>
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

export default EclairageSolaire;
