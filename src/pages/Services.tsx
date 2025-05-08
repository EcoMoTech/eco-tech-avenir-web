
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Battery, Wrench, Leaf, BatteryCharging } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Installation Photovoltaïque",
    description: "Solutions photovoltaïques sur mesure pour votre maison ou entreprise.",
    image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services/installation-photovoltaique",
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Maintenance de Centrales Solaires",
    description: "Services de maintenance et d'entretien pour installations photovoltaïques à grande échelle.",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services/maintenance-centrales",
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Installation de Bornes de Recharge",
    description: "Solutions de recharge pour véhicules électriques adaptées à votre domicile ou entreprise.",
    image: "https://images.unsplash.com/photo-1593941707882-a56bba8b4b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services/bornes-recharge",
    icon: <BatteryCharging className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Réparation de Véhicules Électriques",
    description: "Service de réparation et maintenance pour tous types de véhicules électriques.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services/reparation-vehicules",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Conseil en Photovoltaïque",
    description: "Services d'expertise et de conseil pour optimiser votre projet photovoltaïque.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services/conseil-photovoltaique",
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Audit d'Efficacité Énergétique",
    description: "Évaluations détaillées et recommandations pour améliorer l'efficacité énergétique.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services/audit-efficacite",
    icon: <Leaf className="w-6 h-6" />
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative bg-gradient-to-r from-eco-green to-eco-blue overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-eco-green/90 to-eco-blue/80 opacity-90 z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Nos Services</h1>
              <p className="text-xl text-white/90 mb-8">
                Découvrez notre gamme complète de solutions d'énergie renouvelable et de mobilité électrique adaptées à tous vos besoins.
              </p>
              <Button asChild size="lg" className="bg-white text-eco-green hover:bg-white/90">
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link to={service.link} key={service.id} className="group">
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-none shadow-lg group-hover:shadow-xl rounded-xl">
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <div className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-eco-green">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <CardContent className="flex-grow p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-eco-green transition-colors">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                    <CardFooter className="border-t p-4 pt-3">
                      <span 
                        className="text-eco-blue font-medium flex items-center group-hover:text-eco-green transition-all"
                      >
                        Découvrir
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-eco-green to-eco-blue p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Besoin d'assistance pour votre projet ?</h3>
                  <p className="text-white/90">Nos experts sont à votre disposition pour répondre à toutes vos questions.</p>
                </div>
                <Button asChild size="lg" className="bg-white text-eco-green hover:bg-white/90 whitespace-nowrap">
                  <Link to="/contact">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
