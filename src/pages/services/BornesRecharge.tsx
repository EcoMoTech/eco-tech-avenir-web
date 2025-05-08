
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { BatteryCharging, Check, Home, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BornesRecharge = () => {
  return (
    <ServiceLayout
      title="Installation de Bornes de Recharge"
      description="Solutions de recharge pour véhicules électriques adaptées à votre domicile ou entreprise"
      bgImage="https://images.unsplash.com/photo-1593941707882-a56bba8b4b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      icon={<BatteryCharging className="h-6 w-6" />}
    >
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Solutions de recharge adaptées à vos besoins</h2>
              <p className="text-gray-600 mb-6">
                EcoMoTech vous propose l'installation de bornes de recharge pour véhicules électriques
                dans les environnements résidentiels et professionnels. Nos solutions sont conçues pour
                répondre à vos besoins spécifiques tout en optimisant le temps de charge et la sécurité.
              </p>
              <div className="space-y-4">
                {[
                  "Étude technique personnalisée",
                  "Installation conforme aux normes de sécurité",
                  "Compatibilité avec tous types de véhicules électriques",
                  "Service après-vente et maintenance"
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
                src="https://images.unsplash.com/photo-1558427400-bc691467a84a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Borne de recharge pour véhicule électrique" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of installations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Solutions de Recharge</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme de bornes de recharge adaptées à différents contextes d'utilisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Résidentiel",
                icon: <Home className="h-8 w-8 text-eco-green" />,
                description: "Bornes de recharge pour maisons individuelles et copropriétés, installation simple et sécurisée."
              },
              {
                title: "Professionnel",
                icon: <Building2 className="h-8 w-8 text-eco-green" />,
                description: "Solutions pour entreprises, commerces et parkings publics avec options de gestion et facturation."
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Les Avantages de Nos Bornes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi nos solutions de recharge font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Recharge Rapide",
                description: "Nos bornes offrent des temps de charge optimisés adaptés aux besoins quotidiens."
              },
              {
                title: "Sécurité Maximale",
                description: "Systèmes dotés de protections électriques contre les surtensions et courts-circuits."
              },
              {
                title: "Connectivité Avancée",
                description: "Pilotage à distance, programmation et suivi de consommation via application mobile."
              },
              {
                title: "Durabilité",
                description: "Matériaux résistants aux intempéries et conception robuste pour une longue durée de vie."
              },
              {
                title: "Design Élégant",
                description: "Esthétique soignée s'intégrant harmonieusement dans tous les environnements."
              },
              {
                title: "Installation Professionnelle",
                description: "Mise en service par des techniciens certifiés avec diagnostic électrique préalable."
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

export default BornesRecharge;
