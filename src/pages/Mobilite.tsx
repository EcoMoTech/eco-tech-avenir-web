import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Recycle, Plug, Battery } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Mobilite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* En-tête de page */}
        <section className="bg-gradient-to-r from-eco-green to-eco-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Mobilité Électrique</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Découvrez nos solutions de mobilité électrique innovantes pour un transport plus propre et plus durable.
            </p>
          </div>
        </section>

        {/* Section des solutions de mobilité électrique */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Solutions de Mobilité</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre gamme complète de véhicules électriques et d'infrastructures de recharge pour répondre à tous vos besoins de mobilité durable.
              </p>
            </div>
            
            <Tabs defaultValue="motorcycles" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                <TabsTrigger value="motorcycles" className="flex flex-col md:flex-row items-center gap-2">
                  <Bike className="h-5 w-5" />
                  <span>Motos Électriques</span>
                </TabsTrigger>
                <TabsTrigger value="tricycles" className="flex flex-col md:flex-row items-center gap-2">
                  <Recycle className="h-5 w-5" />
                  <span>Tricycles Électriques</span>
                </TabsTrigger>
                <TabsTrigger value="homechargers" className="flex flex-col md:flex-row items-center gap-2">
                  <Plug className="h-5 w-5" />
                  <span>Chargeurs Domestiques</span>
                </TabsTrigger>
                <TabsTrigger value="stations" className="flex flex-col md:flex-row items-center gap-2">
                  <Battery className="h-5 w-5" />
                  <span>Stations de Recharge</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="motorcycles" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Motos Électriques</CardTitle>
                        <CardDescription>Performance et durabilité sur deux roues</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos motos électriques combinent performance, autonomie et respect de l'environnement. Conçues pour les trajets urbains comme pour les escapades plus longues, elles offrent une alternative écologique aux motos traditionnelles.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Autonomie jusqu'à 150 km</li>
                          <li>Recharge complète en 4 heures</li>
                          <li>Moteur puissant et silencieux</li>
                          <li>Zéro émission de CO2</li>
                          <li>Coût d'entretien réduit</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1632990641317-6972096e5e10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Moto électrique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tricycles" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1573566779956-22867e5e3d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Tricycle électrique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Tricycles Électriques</CardTitle>
                        <CardDescription>Stabilité, confort et praticité</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos tricycles électriques sont parfaits pour les déplacements urbains et le transport de petites charges. Leur stabilité en fait une solution idéale pour tous les âges et toutes les situations.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Grande stabilité et facilité de conduite</li>
                          <li>Capacité de charge jusqu'à 120 kg</li>
                          <li>Autonomie de 80 km</li>
                          <li>Idéal pour la ville et les courtes distances</li>
                          <li>Options personnalisables selon vos besoins</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="homechargers" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Chargeurs Domestiques</CardTitle>
                        <CardDescription>Solutions de recharge pour votre domicile</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos chargeurs domestiques vous permettent de recharger facilement votre véhicule électrique à la maison. Installation simple, sécurisée et adaptée à tous types de logements.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Installation par des techniciens certifiés</li>
                          <li>Compatible avec tous les véhicules électriques</li>
                          <li>Recharge jusqu'à 7 fois plus rapide qu'une prise standard</li>
                          <li>Programmation intelligente pour optimiser vos coûts</li>
                          <li>Garantie de 5 ans incluse</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1558965513-b010c9c0621c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Chargeur domestique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="stations" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden h-[350px]">
                    <img 
                      src="https://images.unsplash.com/photo-1593941707882-a5bfb1801833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Station de recharge" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Stations de Recharge</CardTitle>
                        <CardDescription>Infrastructure de recharge pour entreprises et collectivités</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos stations de recharge sont conçues pour les espaces publics, les entreprises et les commerces. Elles permettent de recharger rapidement plusieurs véhicules simultanément.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Solutions de 22 kW à 150 kW de puissance</li>
                          <li>Recharge rapide (80% en 30 minutes)</li>
                          <li>Système de paiement intégré</li>
                          <li>Surveillance et maintenance à distance</li>
                          <li>Installation clé en main et service après-vente</li>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Intéressé par nos solutions de mobilité électrique ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour découvrir comment nos solutions peuvent transformer votre façon de vous déplacer ou pour équiper votre espace avec des infrastructures de recharge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-eco-green hover:bg-eco-green/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Demander une démo
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

export default Mobilite;
