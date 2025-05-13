
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Plug, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CHARGING_STATION } from '@/assets/placeholders';

const InfrastructureRecharge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-eco-blue via-eco-blue/90 to-eco-green/80 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1562666956-0a2e05318f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4 animate-fade-in">
                Mobilité Électrique
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
                Infrastructure de <span className="text-white bg-eco-blue/20 px-2 rounded-md">Recharge</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
                Solutions complètes pour la recharge de tous types de véhicules électriques
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
              <div>
                <h2 className="text-3xl font-bold mb-6">Solutions de recharge pour tous vos besoins</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Nos infrastructures de recharge s'adaptent à tous les environnements, du domicile privé aux grandes stations publiques. Nous proposons des solutions durables, intelligentes et évolutives.
                </p>
                <div className="space-y-4">
                  {[
                    "Bornes de recharge domestiques et professionnelles",
                    "Stations de recharge rapide et ultrarapide",
                    "Systèmes intelligents de gestion d'énergie",
                    "Compatibilité avec tous types de véhicules",
                    "Installation et maintenance professionnelles"
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
              <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img 
                  src={CHARGING_STATION}
                  alt="Infrastructure de recharge" 
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
              <Badge className="mb-2 bg-eco-blue/10 text-eco-blue">Nos Produits</Badge>
              <h2 className="text-3xl font-bold mb-4">Solutions de recharge</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez notre gamme complète de solutions de recharge
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Cards */}
              {[
                {name: "EcoCharge Home", type: "Domestique", price: "899"},
                {name: "EcoCharge Pro", type: "Professionnel", price: "2499"},
                {name: "EcoStation Rapid", type: "Station", price: "Sur devis"}
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Plug className="h-16 w-16 text-eco-blue/20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-eco-blue/10 text-eco-blue">{item.type}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">
                      Solution de recharge {item.type.toLowerCase()} fiable et intelligente pour véhicules électriques.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-eco-blue">{item.price}</span>
                      <Button variant="outline" className="border-eco-blue text-eco-blue hover:bg-eco-blue/10">
                        Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/mobilite/chargeurs-domestiques">
                  <Button className="bg-eco-blue hover:bg-eco-blue/90">
                    Voir les chargeurs domestiques
                  </Button>
                </Link>
                <Link to="/mobilite/stations-recharge">
                  <Button variant="outline" className="border-eco-blue text-eco-blue hover:bg-eco-blue/10">
                    Voir les stations de recharge
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InfrastructureRecharge;
