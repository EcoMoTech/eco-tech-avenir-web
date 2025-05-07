
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Sun, Battery, CloudSun, LampFloor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SOLAR_PANELS, BATTERY_STORAGE } from '@/assets/placeholders';

const Energie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section avec animation améliorée */}
        <section className="relative overflow-hidden bg-gradient-to-br from-eco-blue via-eco-green/90 to-eco-blue/90 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1591301777326-0a3bffc5dd33?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4 animate-fade-in">
                Énergie Renouvelable
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
                Solutions <span className="text-eco-green bg-white/10 px-2 rounded-md">Énergétiques</span> Innovantes
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
                Des technologies solaires de pointe pour un avenir plus vert et plus durable.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                <Button className="bg-white text-eco-green hover:bg-white/90">
                  Découvrir nos solutions
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
          
          {/* Formes abstraites en arrière-plan */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-eco-green/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-eco-blue/20 rounded-full blur-3xl"></div>
        </section>

        {/* Section des solutions énergétiques avec tabs améliorés */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="bg-eco-green/10 text-eco-green border-eco-green/20 mb-2">
                Nos Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Solutions Solaires Complètes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez notre gamme complète de systèmes solaires adaptés aux besoins résidentiels, commerciaux et industriels.
              </p>
            </div>
            
            <Tabs defaultValue="home" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 bg-gray-100/50 p-1.5 rounded-xl">
                <TabsTrigger 
                  value="home" 
                  className="flex flex-col md:flex-row items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <Sun className="h-5 w-5 text-eco-green" />
                  <span>Systèmes Résidentiels</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="battery" 
                  className="flex flex-col md:flex-row items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <Battery className="h-5 w-5 text-eco-green" />
                  <span>Stockage d'Énergie</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="streets" 
                  className="flex flex-col md:flex-row items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <LampFloor className="h-5 w-5 text-eco-green" />
                  <span>Éclairage Solaire</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="pumps" 
                  className="flex flex-col md:flex-row items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <CloudSun className="h-5 w-5 text-eco-green" />
                  <span>Pompes Solaires</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="home" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                      <CardHeader className="pb-2">
                        <Badge className="w-fit mb-2 bg-eco-green/10 text-eco-green hover:bg-eco-green/20">Résidentiel</Badge>
                        <CardTitle className="text-2xl text-gray-800">Systèmes Solaires Résidentiels</CardTitle>
                        <CardDescription className="text-gray-600">Solutions complètes pour votre maison</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos systèmes solaires résidentiels sont conçus pour maximiser votre indépendance énergétique tout en réduisant vos factures d'électricité. Adaptés à tous types de toitures, ils s'intègrent parfaitement à votre habitat.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {[
                            "Panneaux photovoltaïques haute performance", 
                            "Systèmes connectés au réseau ou autonomes",
                            "Monitoring en temps réel de votre production",
                            "Installation clé en main par nos experts",
                            "Compatible avec stockage par batteries"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-eco-green flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="bg-eco-green hover:bg-eco-green/90">En savoir plus</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl h-[350px] transform transition-transform hover:scale-[1.02] duration-500">
                    <img 
                      src={SOLAR_PANELS}
                      alt="Installation solaire résidentielle" 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="battery" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] transform transition-transform hover:scale-[1.02] duration-500">
                    <img 
                      src={BATTERY_STORAGE}
                      alt="Système de stockage par batteries" 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                      <CardHeader className="pb-2">
                        <Badge className="w-fit mb-2 bg-eco-blue/10 text-eco-blue hover:bg-eco-blue/20">Stockage</Badge>
                        <CardTitle className="text-2xl text-gray-800">Solutions de Stockage d'Énergie</CardTitle>
                        <CardDescription className="text-gray-600">Maximisez votre autonomie énergétique</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos systèmes de stockage d'énergie par batteries vous permettent de stocker l'énergie solaire produite pendant la journée pour l'utiliser quand vous en avez besoin, y compris la nuit ou lors de coupures de courant.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {[
                            "Batteries lithium-ion dernière génération", 
                            "Systèmes évolutifs selon vos besoins",
                            "Onduleurs hybrides intelligents",
                            "Gestion automatisée de l'énergie",
                            "Garantie jusqu'à 10 ans"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-eco-blue flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="bg-eco-blue hover:bg-eco-blue/90">En savoir plus</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="streets" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                      <CardHeader className="pb-2">
                        <Badge className="w-fit mb-2 bg-eco-green/10 text-eco-green hover:bg-eco-green/20">Éclairage</Badge>
                        <CardTitle className="text-2xl text-gray-800">Éclairage Solaire Urbain</CardTitle>
                        <CardDescription className="text-gray-600">Solutions d'éclairage autonomes et écologiques</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos lampadaires et systèmes d'éclairage solaires représentent une alternative durable et économique pour l'éclairage public, les parkings, les parcs et les zones résidentielles.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {[
                            "Éclairage LED à haut rendement énergétique", 
                            "Batteries intégrées pour fonctionnement nocturne",
                            "Détection de mouvement et variation d'intensité",
                            "Installation sans tranchée ni raccordement électrique",
                            "Maintenance minimale et longue durée de vie"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-eco-green flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="bg-eco-green hover:bg-eco-green/90">En savoir plus</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl h-[350px] transform transition-transform hover:scale-[1.02] duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Éclairage solaire urbain" 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="pumps" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] transform transition-transform hover:scale-[1.02] duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Pompe à eau solaire" 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                      <CardHeader className="pb-2">
                        <Badge className="w-fit mb-2 bg-eco-blue/10 text-eco-blue hover:bg-eco-blue/20">Irrigation</Badge>
                        <CardTitle className="text-2xl text-gray-800">Pompes à Eau Solaires</CardTitle>
                        <CardDescription className="text-gray-600">Solutions d'irrigation et d'approvisionnement en eau</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          Nos pompes à eau alimentées par énergie solaire offrent une solution fiable et économique pour l'irrigation agricole, l'abreuvement du bétail et l'approvisionnement en eau dans les zones rurales ou isolées.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {[
                            "Pompes de surface et submersibles", 
                            "Débit adapté à différents besoins",
                            "Fonctionnement autonome sans carburant",
                            "Systèmes de filtration disponibles",
                            "Installation simple et maintenance réduite"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-eco-blue flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="bg-eco-blue hover:bg-eco-blue/90">En savoir plus</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Section CTA améliorée */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-eco-green/90 to-eco-blue/90 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          
          {/* Formes décoratives */}
          <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4">
                Passez à l'action
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                Prêt à transformer votre approvisionnement en énergie ?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                Nos experts sont là pour vous accompagner dans votre transition énergétique et vous proposer la solution idéale pour vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-eco-green hover:bg-white/90 shadow-lg">
                  Demander un devis gratuit
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contacter un conseiller
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section des avantages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-eco-green/10 text-eco-green">Pourquoi nous choisir</Badge>
              <h2 className="text-3xl font-bold mb-4">Avantages de nos solutions énergétiques</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez pourquoi des milliers de clients nous font confiance pour leurs besoins en énergie renouvelable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Économies substantielles",
                  description: "Réduisez vos factures d'électricité jusqu'à 70% et bénéficiez d'un retour sur investissement rapide.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: "Installation professionnelle",
                  description: "Une équipe d'experts qualifiés assure l'installation et la mise en service de votre système.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                },
                {
                  title: "Impact environnemental",
                  description: "Réduisez votre empreinte carbone et contribuez activement à la transition énergétique.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                },
                {
                  title: "Suivi et maintenance",
                  description: "Accédez à vos données de production en temps réel et bénéficiez d'un service après-vente réactif.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                }
              ].map((advantage, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Energie;
