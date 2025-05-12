
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CloudSun } from 'lucide-react';

const PompesSolaires = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-eco-blue via-eco-blue/90 to-eco-blue/80 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4 animate-fade-in">
                Pompes Solaires
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
                Pompes à Eau <span className="text-white bg-eco-green/20 px-2 rounded-md">Solaires</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
                Solutions d'irrigation et d'approvisionnement en eau écologiques
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
        
        {/* Product Catalog Placeholder */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-eco-blue/10 text-eco-blue">Nos Produits</Badge>
              <h2 className="text-3xl font-bold mb-4">Pompes à eau solaires</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions d'irrigation et d'approvisionnement en eau pour tous vos besoins
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Product Cards */}
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CloudSun className="h-16 w-16 text-eco-blue/20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-eco-blue/10 text-eco-blue">Irrigation</Badge>
                    <h3 className="text-xl font-semibold mb-2">Pompe Solaire EcoPump {item * 50}W</h3>
                    <p className="text-gray-600 mb-4">
                      Pompe à eau solaire pour l'irrigation agricole et l'approvisionnement en eau.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-eco-blue">{(item * 300) + 199} €</span>
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

export default PompesSolaires;
