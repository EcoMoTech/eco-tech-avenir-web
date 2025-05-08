
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { Sun, Check, BarChart3, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ConseilPhotovoltaique = () => {
  return (
    <ServiceLayout
      title="Conseil en Photovoltaïque"
      description="Expertise et accompagnement personnalisé pour optimiser votre projet solaire"
      bgImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      icon={<Sun className="h-6 w-6" />}
    >
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Expertise technique au service de votre projet</h2>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts vous accompagne dans toutes les étapes de votre projet photovoltaïque,
                de l'étude de faisabilité jusqu'à l'optimisation de votre installation. Nous vous aidons à prendre
                les meilleures décisions pour maximiser le rendement et la rentabilité de votre investissement.
              </p>
              <div className="space-y-4">
                {[
                  "Analyse approfondie de la faisabilité technique",
                  "Études de rentabilité et retour sur investissement",
                  "Optimisation de production et dimensionnement",
                  "Accompagnement administratif et réglementaire"
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
                src="https://images.unsplash.com/photo-1581091091825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Conseil en photovoltaïque" 
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services de Conseil</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour guider chaque aspect de votre projet solaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Études Techniques",
                icon: <Sun className="h-8 w-8 text-eco-green" />,
                description: "Analyse du site, étude d'ombrage, dimensionnement optimal et choix des équipements adaptés."
              },
              {
                title: "Analyse Financière",
                icon: <BarChart3 className="h-8 w-8 text-eco-green" />,
                description: "Estimation des coûts, calcul de rentabilité, identification des aides et subventions."
              },
              {
                title: "Assistance Administrative",
                icon: <FileText className="h-8 w-8 text-eco-green" />,
                description: "Accompagnement pour autorisations, raccordement réseau et démarches fiscales."
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

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Méthodologie de Conseil</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour vous accompagner vers la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Audit Initial",
                description: "Analyse des besoins, objectifs et contraintes spécifiques à votre situation."
              },
              {
                step: "2",
                title: "Étude Personnalisée",
                description: "Conception technique détaillée avec simulations de production et rentabilité."
              },
              {
                step: "3",
                title: "Recommandations",
                description: "Présentation des solutions optimales avec comparatif et scénarios d'investissement."
              },
              {
                step: "4",
                title: "Accompagnement",
                description: "Suivi de mise en œuvre et assistance continue jusqu'à la réalisation complète."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-eco-green/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-eco-green">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-eco-green/20 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ConseilPhotovoltaique;
