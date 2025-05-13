import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Sun, Battery, Wrench, Leaf, BatteryCharging, Building, Home, Factory, Car } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

// Solutions data
const solutions = [
  {
    id: 1,
    title: "Solutions résidentielles",
    description: "Systèmes photovoltaïques et solutions énergétiques pour les particuliers.",
    image: "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/residentiel",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Solutions commerciales",
    description: "Installations solaires et gestion énergétique pour les entreprises et commerces.",
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/commercial",
    icon: <Building className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Solutions industrielles",
    description: "Centrales photovoltaïques et systèmes de stockage pour l'industrie.",
    image: "https://images.unsplash.com/photo-1638845271677-5234be842685?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/industriel",
    icon: <Factory className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Véhicules électriques",
    description: "Gamme complète de motos et tricycles électriques pour une mobilité durable.",
    image: "https://images.unsplash.com/photo-1610963196817-7d1415647029?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/vehicules-electriques",
    icon: <Car className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Infrastructure de recharge",
    description: "Bornes et stations de recharge pour tous types de véhicules électriques.",
    image: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/infrastructure-recharge",
    icon: <BatteryCharging className="w-6 h-6" />
  }
];

// Services data
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

// Card component to reuse for both solutions and services
const CardItem = ({ item, index }) => (
  <Link to={item.link} key={item.id} className="group">
    <div className="animate-on-scroll h-full" style={{animationDelay: `${index * 0.1}s`}}>
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-none shadow-lg group-hover:shadow-xl rounded-xl">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <div className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-eco-green">
              {item.icon}
            </div>
          </div>
        </div>
        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-eco-green transition-colors">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
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
    </div>
  </Link>
);

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        {/* Solutions Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-eco-green/10 text-eco-green px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
            Nos Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Solutions Énergétiques
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos solutions personnalisées pour répondre à tous vos besoins en énergie renouvelable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((solution, index) => (
            <CardItem key={solution.id} item={solution} index={index} />
          ))}
        </div>

        <Separator className="my-16" />

        {/* Services Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-eco-blue/10 text-eco-blue px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Services Professionnels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une équipe d'experts à votre disposition pour tous vos projets d'énergie renouvelable et de mobilité électrique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <CardItem key={service.id} item={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
