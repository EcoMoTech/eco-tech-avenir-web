
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { Sun, Check, Shield, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MaintenanceCentrales = () => {
  return (
    <ServiceLayout
      title="Maintenance de Centrales Solaires"
      description="Services professionnels d'entretien et maintenance pour optimiser la performance de vos installations photovoltaïques"
      bgImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      icon={<Sun className="h-6 w-6" />}
    >
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Maximisez la rentabilité de vos installations solaires</h2>
              <p className="text-gray-600 mb-6">
                Une maintenance régulière et professionnelle est essentielle pour garantir la durabilité 
                et l'efficacité de votre centrale photovoltaïque. Nos équipes spécialisées assurent un suivi 
                rigoureux et des interventions rapides pour maintenir des performances optimales.
              </p>
              <div className="space-y-4">
                {[
                  "Maintenance préventive et corrective",
                  "Nettoyage spécialisé des panneaux",
                  "Contrôles électriques et thermographiques",
                  "Monitoring et rapports de performance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-eco-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Maintenance de centrales solaires" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services de Maintenance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Des services complets pour assurer la pérennité et l'efficacité de vos installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Maintenance Préventive",
                icon: <Shield className="h-8 w-8 text-eco-green" />,
                description: "Inspections régulières, nettoyage et vérifications pour prévenir les dysfonctionnements."
              },
              {
                title: "Maintenance Corrective",
                icon: <Wrench className="h-8 w-8 text-eco-green" />,
                description: "Interventions rapides en cas de panne ou de baisse de performance avec diagnostic précis."
              },
              {
                title: "Suivi de Performance",
                icon: <BarChart3 className="h-8 w-8 text-eco-green" />,
                description: "Monitoring continu, analyse des données et rapports détaillés sur le rendement."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="p-3 bg-eco-green/10 rounded-full w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi Choisir Notre Service</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre expertise technique et notre réactivité font la différence pour vos installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise Technique",
                description: "Équipe de techniciens certifiés avec une expertise approfondie des systèmes photovoltaïques."
              },
              {
                title: "Réactivité",
                description: "Service d'assistance disponible 7j/7 avec des délais d'intervention rapides."
              },
              {
                title: "Équipements Spécialisés",
                description: "Utilisation de technologies avancées pour diagnostics et interventions précises."
              },
              {
                title: "Contrats Personnalisés",
                description: "Formules adaptées à la taille et aux besoins spécifiques de votre installation."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-eco-green">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default MaintenanceCentrales;
