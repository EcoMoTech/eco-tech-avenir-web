
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Home, Building2, Battery, Wrench } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Solutions Résidentielles",
    description: "Systèmes photovoltaïques, batteries et onduleurs pour votre maison.",
    image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/energie/residentiel",
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Solutions Commerciales",
    description: "Installations sur mesure pour entreprises et optimisation énergétique.",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/energie/commercial",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Mobilité Électrique",
    description: "Véhicules électriques et infrastructures de recharge adaptées à vos besoins.",
    image: "https://images.unsplash.com/photo-1593941707882-a56bba8b4b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/mobilite",
    icon: <Battery className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Services & Maintenance",
    description: "Installation, maintenance et conseil pour toutes vos installations.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services",
    icon: <Wrench className="w-6 h-6" />
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-eco-blue/10 text-eco-blue px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
            Nos Offres
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Solutions & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de solutions d'énergie renouvelable et de mobilité électrique adaptées à tous vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={service.id} className="group">
              <div className="animate-on-scroll h-full" style={{animationDelay: `${index * 0.1}s`}}>
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
