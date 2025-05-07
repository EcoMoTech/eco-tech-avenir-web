
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Solutions Résidentielles",
    description: "Systèmes photovoltaïques, batteries et onduleurs pour votre maison.",
    image: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/energie/residentiel"
  },
  {
    id: 2,
    title: "Solutions Commerciales",
    description: "Installations sur mesure pour entreprises et optimisation énergétique.",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/energie/commercial"
  },
  {
    id: 3,
    title: "Mobilité Électrique",
    description: "Véhicules électriques et infrastructures de recharge adaptées à vos besoins.",
    image: "https://images.unsplash.com/photo-1593941707882-a56bba8b4b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/mobilite"
  },
  {
    id: 4,
    title: "Services & Maintenance",
    description: "Installation, maintenance et conseil pour toutes vos installations.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/services"
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Solutions & Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de solutions d'énergie renouvelable et de mobilité électrique adaptées à tous vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter className="border-t p-4 pt-3">
                  <Link 
                    to={service.link} 
                    className="text-eco-blue font-medium flex items-center group transition-all hover:text-eco-green"
                  >
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
