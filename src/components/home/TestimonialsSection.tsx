
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "Grâce à EcoMoTech, j'ai réduit ma facture d'électricité de 70%. L'installation a été rapide et professionnelle.",
    author: "Marie L.",
    position: "Propriétaire, Résidence à Lyon",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    quote: "Notre entreprise a fait le choix de panneaux solaires EcoMoTech. Un an plus tard, l'investissement est déjà rentable.",
    author: "Philippe D.",
    position: "Directeur, PME à Nantes",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "Le service client est exceptionnel. De la conception à l'installation, EcoMoTech nous a accompagnés pas à pas.",
    author: "Camille T.",
    position: "Gérante, Boutique à Paris",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    quote: "Nous avons équipé notre flotte avec des véhicules électriques EcoMoTech. Un vrai plus pour notre image et notre budget.",
    author: "Thomas B.",
    position: "Responsable logistique, Marseille",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-eco-lightgray">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce que nos clients disent</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de ceux qui ont adopté nos solutions d'énergie renouvelable et de mobilité électrique.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto animate-on-scroll"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full border-none shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <blockquote className="text-gray-700 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-4 pt-4 border-t flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.position}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative inset-0 translate-y-0 mr-2" />
            <CarouselNext className="relative inset-0 translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
