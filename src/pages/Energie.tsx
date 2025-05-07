
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SolarPanel, Battery, Water, LampFloor } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Energie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* En-tête de page */}
        <section className="bg-gradient-to-r from-eco-green to-eco-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Solutions Énergétiques</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Des solutions solaires innovantes pour répondre à tous vos besoins en énergie propre et renouvelable.
            </p>
          </div>
        </section>

        {/* Section des solutions énergétiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Solutions Solaires</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez notre gamme complète de systèmes solaires adaptés aux besoins résidentiels, commerciaux et industriels.
              </p>
            </div>
            
            <Tabs defaultValue="home" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                <TabsTrigger value="home" className="flex flex-col md:flex-row items-center gap-2">
                  <SolarPanel className="h-5 w-5" />
                  <span>Systèmes Résidentiels</span>
                </TabsTrigger>
                <TabsTrigger value="battery" className="flex flex-col md:flex-row items-center gap-2">
                  <Battery className="h-5 w-5" />
                  <span>Stockage d'Énergie</span>
                </TabsTrigger>
                <TabsTrigger value="streets" className="flex flex-col md:flex-row items-center gap-2">
                  <LampFloor className="h-5 w-5" />
                  <span>Éclairage Solaire</span>
                </TabsTrigger>
                <TabsTrigger value="pumps" className="flex flex-col md:flex-row items-center gap-2">
                  <Water className="h-5 w-5" />
                  <span>Pompes Solaires</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="home" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Systèmes Solaires Résidentiels</CardTitle>
                        <CardDescription>Solutions complètes pour votre maison</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos systèmes solaires résidentiels sont conçus pour maximiser votre indépendance énergétique tout en réduisant vos factures d'électricité. Adaptés à tous types de toitures, ils s'intègrent parfaitement à votre habitat.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Panneaux photovoltaïques haute performance</li>
                          <li>Systèmes connectés au réseau ou autonomes</li>
                          <li>Monitoring en temps réel de votre production</li>
                          <li>Installation clé en main par nos experts</li>
                          <li>Compatible avec stockage par batteries</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Installation solaire résidentielle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="battery" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Système de stockage par batteries" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Solutions de Stockage d'Énergie</CardTitle>
                        <CardDescription>Maximisez votre autonomie énergétique</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos systèmes de stockage d'énergie par batteries vous permettent de stocker l'énergie solaire produite pendant la journée pour l'utiliser quand vous en avez besoin, y compris la nuit ou lors de coupures de courant.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Batteries lithium-ion dernière génération</li>
                          <li>Systèmes évolutifs selon vos besoins</li>
                          <li>Onduleurs hybrides intelligents</li>
                          <li>Gestion automatisée de l'énergie</li>
                          <li>Garantie jusqu'à 10 ans</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="streets" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Éclairage Solaire Urbain</CardTitle>
                        <CardDescription>Solutions d'éclairage autonomes et écologiques</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos lampadaires et systèmes d'éclairage solaires représentent une alternative durable et économique pour l'éclairage public, les parkings, les parcs et les zones résidentielles.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Éclairage LED à haut rendement énergétique</li>
                          <li>Batteries intégrées pour fonctionnement nocturne</li>
                          <li>Détection de mouvement et variation d'intensité</li>
                          <li>Installation sans tranchée ni raccordement électrique</li>
                          <li>Maintenance minimale et longue durée de vie</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Éclairage solaire urbain" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="pumps" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Pompe à eau solaire" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Pompes à Eau Solaires</CardTitle>
                        <CardDescription>Solutions d'irrigation et d'approvisionnement en eau</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos pompes à eau alimentées par énergie solaire offrent une solution fiable et économique pour l'irrigation agricole, l'abreuvement du bétail et l'approvisionnement en eau dans les zones rurales ou isolées.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Pompes de surface et submersibles</li>
                          <li>Débit adapté à différents besoins</li>
                          <li>Fonctionnement autonome sans carburant</li>
                          <li>Systèmes de filtration disponibles</li>
                          <li>Installation simple et maintenance réduite</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Vous souhaitez en savoir plus sur nos solutions énergétiques ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour une étude personnalisée de votre projet et découvrez comment nos solutions peuvent répondre à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-eco-green hover:bg-eco-green/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Demander un devis gratuit
              </a>
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-50 text-eco-blue border border-eco-blue font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contacter un conseiller
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Energie;
