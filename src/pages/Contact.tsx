import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Globe, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de traitement du formulaire
    alert("Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.");
  };

  const globalOffices = [
    {
      country: "Chine",
      address: "888 Nanjing Road, Shanghai",
      email: "china@ecomosol.com",
      phone: "+86 21 1234 5678",
      link: "https://bamamou.github.io/EcoMoTechWeb",
      flagImage: "/ecomotech-guinea/images/flags/china.png"
    },
    {
      country: "Tanzanie",
      address: "123 Uhuru Street, Dar es Salaam",
      email: "tanzania@ecomosol.com",
      phone: "+255 22 123 4567",
      link: "#",
      flagImage: "/ecomotech-guinea/images/flags/tanzania.webp" 
    },
    {
      country: "Gambie",
      address: "45 Independence Drive, Banjul",
      email: "gambia@ecomosol.com",
      phone: "+220 123 4567",
      link: "#",
      flagImage: "/ecomotech-guinea/images/flags/the gambia.webp"
    },
    {
      country: "RD Congo",
      address: "78 Boulevard du 30 Juin, Kinshasa",
      email: "drc@ecomosol.com",
      phone: "+243 99 123 4567",
      link: "#",
      flagImage: "/ecomotech-guinea/images/flags/drc.webp" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-eco-green py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contactez-nous</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Besoin d'informations ou d'un devis ? Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>

        {/* Contact form and info */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Écrivez-nous</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                    <Input id="firstName" placeholder="Votre prénom" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                    <Input id="lastName" placeholder="Votre nom" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                  <Input id="phone" placeholder="Votre numéro de téléphone" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="panneaux">Panneaux solaires</SelectItem>
                      <SelectItem value="vehicules">Véhicules électriques</SelectItem>
                      <SelectItem value="recharge">Bornes de recharge</SelectItem>
                      <SelectItem value="commercial">Solutions commerciales</SelectItem>
                      <SelectItem value="service">Service après-vente</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" rows={5} required />
                </div>

                <Button type="submit" className="bg-eco-green hover:bg-eco-green/90 w-full">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                <p className="text-gray-600 mb-6">
                  N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire. Notre équipe est à votre disposition pour répondre à toutes vos questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-eco-green mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@ecomosol.fr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-eco-green mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-eco-green mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue de l'Innovation<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-eco-green mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Heures d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Samedi: 10h00 - 16h00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-eco-green hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-eco-green hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-eco-green hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Global Presence Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Présence Mondiale</h2>
              <div className="flex justify-center items-center">
                <Globe className="h-6 w-6 text-eco-green mr-2" />
                <p className="text-lg text-gray-600">Découvrez nos bureaux à travers le monde</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalOffices.map((office, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full mr-3 border border-gray-200 flex-shrink-0">
                        <img 
                          src={office.flagImage} 
                          alt={`Drapeau ${office.country}`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-2">
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold">Ecomotech {office.country}</h3>
                        </div>
                        <div className="mt-1 flex items-center">
                          <span className="text-sm text-gray-500">Bureau {index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-1" />
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-gray-500 mr-2" />
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-500 mr-2" />
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                    </div>
                    <a 
                      href={office.link} 
                      className="inline-flex items-center text-eco-green hover:text-eco-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visiter le site <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
