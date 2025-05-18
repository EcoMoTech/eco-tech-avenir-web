
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Grâce à EcoMoTech, j'ai réduit ma facture d'électricité de 70%. L'installation a été rapide et professionnelle.",
    author: "Marie L.",
    position: "Propriétaire, Résidence à Mamou",
    image: "/ecomotech-guinea/images/Accueil/customer.webp",
    rating: 5
  },
  {
    id: 2,
    quote: "Notre entreprise a fait le choix de panneaux solaires EcoMoTech. Un an plus tard, l'investissement est déjà rentable.",
    author: "Moussa D.",
    position: "Directeur, PME à Kindia",
    image:  "/ecomotech-guinea/images/Accueil/cust.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "Le service client est exceptionnel. De la conception à l'installation, EcoMoTech nous a accompagnés pas à pas.",
    author: "Camille T.",
    position: "Gérante, Boutique à Conakry",
    image:  "/ecomotech-guinea/images/Accueil/customers.webp",
    rating: 5
  },
  {
    id: 4,
    quote: "Nous avons équipé notre flotte avec des véhicules électriques EcoMoTech. Un vrai plus pour notre image et notre budget.",
    author: "Thomas B.",
    position: "Responsable logistique, Kamsar",
    image: "/ecomotech-guinea/images/Accueil/custom.jpg",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-eco-lightgray">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-eco-green/10 text-eco-green px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                <Card className="h-full border-none shadow-lg rounded-xl bg-white overflow-hidden">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 flex-grow text-lg italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="mt-6 pt-6 border-t flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-eco-green p-0.5">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.position}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0 mr-4 border border-gray-200 bg-white hover:bg-gray-100" />
            <CarouselNext className="relative inset-0 translate-y-0 ml-4 border border-gray-200 bg-white hover:bg-gray-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
