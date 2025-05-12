
import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Recycle, Plug, Battery, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Mobilite = () => {
  // Mobility solutions data
  const mobilitySolutions = [
    {
      title: "Motos Électriques",
      description: "Découvrez nos motos électriques performantes et écologiques",
      icon: <Bike className="h-10 w-10 text-white" />,
      color: "from-eco-green to-eco-green/70",
      link: "/mobilite/motos-electriques"
    },
    {
      title: "Tricycles Électriques",
      description: "Des solutions de transport stables et pratiques pour tous",
      icon: <Recycle className="h-10 w-10 text-white" />,
      color: "from-eco-blue to-eco-blue/70",
      link: "/mobilite/tricycles-electriques"
    },
    {
      title: "Chargeurs Domestiques",
      description: "Solutions de recharge personnelles pour votre domicile",
      icon: <Plug className="h-10 w-10 text-white" />,
      color: "from-eco-green to-eco-green/70",
      link: "/mobilite/chargeurs-domestiques"
    },
    {
      title: "Stations de Recharge",
      description: "Infrastructures de recharge pour entreprises et collectivités",
      icon: <Battery className="h-10 w-10 text-white" />,
      color: "from-eco-blue to-eco-blue/70",
      link: "/mobilite/stations-recharge"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
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

        {/* Solutions section with grid layout */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {mobilitySolutions.map((solution, index) => (
                <Link 
                  key={index} 
                  to={solution.link}
                  className="transform transition-transform hover:scale-[1.02]"
                >
                  <Card className="h-full overflow-hidden border-none shadow-xl">
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-br ${solution.color} p-8 flex justify-between items-center`}>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                          <p className="text-white/90">{solution.description}</p>
                        </div>
                        <div className="bg-white/10 p-5 rounded-full">
                          {solution.icon}
                        </div>
                      </div>
                      <div className="p-6 bg-white flex justify-between items-center">
                        <span className="font-medium">Découvrir</span>
                        <ArrowRight className="h-5 w-5 text-eco-green" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
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
