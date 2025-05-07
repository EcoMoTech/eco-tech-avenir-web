
import React from 'react';

const stats = [
  {
    id: 1,
    value: "2,500+",
    label: "Installations réalisées",
    icon: "📊"
  },
  {
    id: 2,
    value: "15,000+",
    label: "Tonnes de CO2 économisées",
    icon: "🌿"
  },
  {
    id: 3,
    value: "98%",
    label: "Clients satisfaits",
    icon: "🌟"
  },
  {
    id: 4,
    value: "10+",
    label: "Années d'expertise",
    icon: "⏱️"
  }
];

const StatsSection = () => {
  return (
    <section className="bg-eco-green text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="animate-on-scroll">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
