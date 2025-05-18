import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/HeroSection.module.css';

const HeroSection = () => {
  const images = [
    {
      src: "/ecomotech-guinea/images/Accueil/commercial App.jpg",
      alt: "Solar Panel"
    },
    {
      src:  "/ecomotech-guinea/images/Accueil/charger design.png",
      alt: "Electric Car"
    },
    {
      src: "/ecomotech-guinea/images/Accueil/Solar PV commercial.jpg",
      alt: "Maintenance"
    },
    {
      src:  "/ecomotech-guinea/images/Accueil/alrendo.jpg",
      alt: "Sustainable Tech"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`${styles.backgroundImage} ${
              index === currentImageIndex ? styles.active : ''
            }`}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Abstract shape elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-eco-green/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-eco-blue/20 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-40 h-40 bg-yellow-400/10 rounded-full blur-[80px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0 md:ml-12 lg:ml-24">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white mb-6 animate-fade-in">
                EcoMoTech — Solutions Innovantes
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{textShadow: "0 1px 2px rgba(0,0,0,0.1)"}}>
                Solutions énergétiques <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">durables pour un avenir meilleur</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl animate-fade-in" style={{animationDelay: '0.2s', textShadow: "0 1px 1px rgba(0,0,0,0.1)"}}>
                Expertise et innovation en énergie solaire et mobilité électrique pour particuliers et professionnels.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link to="/contact">
                <Button size="lg" className="bg-eco-green hover:bg-eco-green/90 text-white w-full sm:w-auto font-medium text-base px-8 h-14 rounded-full shadow-lg shadow-eco-green/20 transition-all hover:shadow-xl hover:shadow-eco-green/30">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                </Button>
              </Link>
              <Link to="/energie">
                <Button variant="outline" size="lg" className="bg-white/5 text-white backdrop-blur-md border-white/30 hover:bg-white/10 w-full sm:w-auto font-medium text-base px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Découvrir nos solutions
                </Button>
              </Link>
            </div>
            
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
              <div className="w-10 h-16 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
