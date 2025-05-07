
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation observer pour les éléments "animate-on-scroll"
  useEffect(() => {
    const animatedElems = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElems.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElems.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
