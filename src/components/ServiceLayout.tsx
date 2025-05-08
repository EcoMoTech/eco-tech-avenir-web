
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  bgImage?: string;
  icon?: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  children,
  bgImage,
  icon
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="py-24 md:py-32 relative overflow-hidden"
          style={{
            backgroundImage: bgImage 
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})` 
              : 'linear-gradient(to right, var(--eco-green), var(--eco-blue))',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-eco-green/90 to-eco-blue/80 opacity-90 z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6 space-x-3">
                {icon && (
                  <div className="p-3 bg-white rounded-full text-eco-green">
                    {icon}
                  </div>
                )}
                <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
              </div>
              <p className="text-xl text-white/90 mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-eco-green hover:bg-white/90">
                  <Link to="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        {children}
        
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

export default ServiceLayout;
