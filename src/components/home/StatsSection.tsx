
import React, { useState, useEffect, useRef } from 'react';

const stats = [
  {
    id: 1,
    startValue: 0,
    endValue: 2500,
    suffix: '+',
    label: "Installations réalisées",
    icon: "📊"
  },
  {
    id: 2,
    startValue: 0,
    endValue: 15000,
    suffix: '+',
    label: "Tonnes de CO2 économisées",
    icon: "🌿"
  },
  {
    id: 3,
    startValue: 0,
    endValue: 98,
    suffix: '%',
    label: "Clients satisfaits",
    icon: "🌟"
  },
  {
    id: 4,
    startValue: 0,
    endValue: 10,
    suffix: '+',
    label: "Années d'expertise",
    icon: "⏱️"
  }
];

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(stat => stat.startValue));
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const easeOutQuad = (t: number) => t * (2 - t);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // Animation duration in milliseconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      
      const currentValues = stats.map((stat, index) => {
        const value = Math.round(stat.startValue + (stat.endValue - stat.startValue) * progress);
        return value > stat.endValue ? stat.endValue : value;
      });
      
      setCounters(currentValues);
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/90 to-eco-blue/90 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOC0xLjc5LTQtNC00cy00IDEuNzkyLTQgNCAyLjc5MiA0IDQgNGMyLjIxIDAgNC0xLjc5MiA0LTR6bTAtNGMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre Impact Environnemental</h2>
          <div className="h-1 w-20 mx-auto bg-white/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
