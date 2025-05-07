
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
        {/* Hero section with modern gradient background */}
        <section className="bg-gradient-to-r from-eco-green to-eco-blue py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Mobilité Électrique <span className="text-white/80">Innovante</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Découvrez nos solutions de mobilité électrique pour un transport plus propre, plus silencieux et plus durable.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#solutions" 
                  className="bg-white text-eco-green hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  Explorer nos solutions
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent text-white border-2 border-white/70 hover:border-white px-8 py-3 rounded-full font-medium transition-all"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions section with enhanced tabs */}
        <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-eco-green font-semibold tracking-wider uppercase text-sm mb-3 inline-block">Nos Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mobilité Électrique Pour Tous</h2>
              <div className="h-1 w-20 bg-eco-green mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre gamme complète de véhicules et d'infrastructures de recharge pour répondre à tous vos besoins de mobilité durable.
              </p>
            </div>
            
            <Tabs defaultValue="motorcycles" className="w-full max-w-6xl mx-auto">
              <div className="mb-12 bg-white p-2 rounded-full shadow-md">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                  <TabsTrigger value="motorcycles" className="flex flex-col md:flex-row items-center gap-2 py-3 data-[state=active]:bg-eco-green data-[state=active]:text-white rounded-full transition-all">
                    <Bike className="h-5 w-5" />
                    <span>Motos Électriques</span>
                  </TabsTrigger>
                  <TabsTrigger value="tricycles" className="flex flex-col md:flex-row items-center gap-2 py-3 data-[state=active]:bg-eco-green data-[state=active]:text-white rounded-full transition-all">
                    <Recycle className="h-5 w-5" />
                    <span>Tricycles Électriques</span>
                  </TabsTrigger>
                  <TabsTrigger value="homechargers" className="flex flex-col md:flex-row items-center gap-2 py-3 data-[state=active]:bg-eco-green data-[state=active]:text-white rounded-full transition-all">
                    <Plug className="h-5 w-5" />
                    <span>Chargeurs Domestiques</span>
                  </TabsTrigger>
                  <TabsTrigger value="stations" className="flex flex-col md:flex-row items-center gap-2 py-3 data-[state=active]:bg-eco-green data-[state=active]:text-white rounded-full transition-all">
                    <Battery className="h-5 w-5" />
                    <span>Stations de Recharge</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="motorcycles" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden h-[400px] shadow-xl transform hover:scale-[1.02] transition-transform">
                    <img 
                      src="https://images.unsplash.com/photo-1632990641317-6972096e5e10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Moto électrique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <Card className="border-0 shadow-xl">
                      <CardHeader className="pb-2">
                        <div className="bg-eco-green/10 w-fit p-3 rounded-full mb-4">
                          <Bike className="h-6 w-6 text-eco-green" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">Motos Électriques</CardTitle>
                        <CardDescription className="text-lg">Performance et durabilité sur deux roues</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 text-lg">
                          Nos motos électriques combinent performance, autonomie et respect de l'environnement. Conçues pour les trajets urbains comme pour les escapades plus longues.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Autonomie jusqu'à 150 km",
                            "Recharge complète en 4 heures",
                            "Moteur puissant et silencieux",
                            "Zéro émission de CO2",
                            "Coût d'entretien réduit"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center text-eco-green">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tricycles" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1 flex items-center">
                    <Card className="border-0 shadow-xl">
                      <CardHeader className="pb-2">
                        <div className="bg-eco-blue/10 w-fit p-3 rounded-full mb-4">
                          <Recycle className="h-6 w-6 text-eco-blue" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">Tricycles Électriques</CardTitle>
                        <CardDescription className="text-lg">Stabilité, confort et praticité</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 text-lg">
                          Nos tricycles électriques sont parfaits pour les déplacements urbains et le transport de petites charges. Leur stabilité en fait une solution idéale pour tous.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Grande stabilité et facilité de conduite",
                            "Capacité de charge jusqu'à 120 kg",
                            "Autonomie de 80 km",
                            "Idéal pour la ville et les courtes distances",
                            "Options personnalisables selon vos besoins"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="h-6 w-6 rounded-full bg-eco-blue/20 flex items-center justify-center text-eco-blue">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2 rounded-xl overflow-hidden h-[400px] shadow-xl transform hover:scale-[1.02] transition-transform">
                    <img 
                      src="https://images.unsplash.com/photo-1573566779956-22867e5e3d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Tricycle électrique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="homechargers" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden h-[400px] shadow-xl transform hover:scale-[1.02] transition-transform">
                    <img 
                      src="https://images.unsplash.com/photo-1558965513-b010c9c0621c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Chargeur domestique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <Card className="border-0 shadow-xl">
                      <CardHeader className="pb-2">
                        <div className="bg-eco-green/10 w-fit p-3 rounded-full mb-4">
                          <Plug className="h-6 w-6 text-eco-green" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">Chargeurs Domestiques</CardTitle>
                        <CardDescription className="text-lg">Solutions de recharge pour votre domicile</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 text-lg">
                          Nos chargeurs domestiques vous permettent de recharger facilement votre véhicule électrique à la maison. Installation simple et sécurisée.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Installation par des techniciens certifiés",
                            "Compatible avec tous les véhicules électriques",
                            "Recharge jusqu'à 7 fois plus rapide qu'une prise standard",
                            "Programmation intelligente pour optimiser vos coûts",
                            "Garantie de 5 ans incluse"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center text-eco-green">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="stations" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1 flex items-center">
                    <Card className="border-0 shadow-xl">
                      <CardHeader className="pb-2">
                        <div className="bg-eco-blue/10 w-fit p-3 rounded-full mb-4">
                          <Battery className="h-6 w-6 text-eco-blue" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold">Stations de Recharge</CardTitle>
                        <CardDescription className="text-lg">Infrastructure pour entreprises et collectivités</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6 text-lg">
                          Nos stations de recharge sont conçues pour les espaces publics, les entreprises et les commerces. Elles permettent de recharger rapidement plusieurs véhicules.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Solutions de 22 kW à 150 kW de puissance",
                            "Recharge rapide (80% en 30 minutes)",
                            "Système de paiement intégré",
                            "Surveillance et maintenance à distance",
                            "Installation clé en main et service après-vente"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="h-6 w-6 rounded-full bg-eco-blue/20 flex items-center justify-center text-eco-blue">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2 rounded-xl overflow-hidden h-[400px] shadow-xl transform hover:scale-[1.02] transition-transform">
                    <img 
                      src="https://images.unsplash.com/photo-1593941707882-a5bfb1801833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Station de recharge" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Enhanced CTA section */}
        <section className="py-24 bg-gradient-to-r from-eco-blue/90 to-eco-green/90 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à passer à la mobilité électrique?</h2>
              <p className="text-xl mb-10 text-white/90">
                Contactez-nous pour découvrir comment nos solutions peuvent transformer votre façon de vous déplacer ou pour équiper votre espace avec des infrastructures de recharge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-eco-green hover:bg-white/90 px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  Demander une démo
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent text-white border-2 border-white/70 hover:border-white px-8 py-4 rounded-full font-medium text-lg transition-all"
                >
                  Contacter un conseiller
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mobilite;
