
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { Wrench, Check, Battery, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ReparationVehicules = () => {
  return (
    <ServiceLayout
      title="Réparation de Véhicules Électriques"
      description="Service spécialisé dans la maintenance et la réparation de tous types de véhicules électriques"
      bgImage="https://images.unsplash.com/photo-1621905251189-08b45249ff49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      icon={<Wrench className="h-6 w-6" />}
    >
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Expertise technique pour véhicules électriques</h2>
              <p className="text-gray-600 mb-6">
                Nos techniciens spécialisés disposent des compétences et des équipements nécessaires pour 
                diagnostiquer et résoudre tous les problèmes techniques liés à votre véhicule électrique. 
                Avec EcoMoTech, votre véhicule est entre les mains d'experts certifiés.
              </p>
              <div className="space-y-4">
                {[
                  "Techniciens formés spécifiquement pour les véhicules électriques",
                  "Équipements de diagnostic de dernière génération",
                  "Intervention sur toutes marques et modèles",
                  "Garantie sur les réparations effectuées"
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
                src="https://images.unsplash.com/photo-1581688226868-5ccd8ea24722?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Réparation de véhicule électrique" 
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services de Réparation</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour maintenir votre véhicule électrique en parfait état de fonctionnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnostic Complet",
                icon: <Zap className="h-8 w-8 text-eco-green" />,
                description: "Analyse approfondie des systèmes électriques et électroniques avec équipements spécialisés."
              },
              {
                title: "Maintenance Batteries",
                icon: <Battery className="h-8 w-8 text-eco-green" />,
                description: "Contrôle, entretien et remplacement des systèmes de batteries haute tension."
              },
              {
                title: "Réparations Mécaniques",
                icon: <Wrench className="h-8 w-8 text-eco-green" />,
                description: "Interventions sur les composants mécaniques spécifiques aux véhicules électriques."
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Processus d'Intervention</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique pour des réparations efficaces et transparentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Diagnostic Initial",
                description: "Analyse complète du véhicule pour identifier avec précision la source du problème."
              },
              {
                step: "2",
                title: "Devis Détaillé",
                description: "Proposition transparente détaillant les interventions nécessaires et leur coût."
              },
              {
                step: "3",
                title: "Réparation",
                description: "Intervention par nos techniciens qualifiés avec pièces d'origine ou équivalentes."
              },
              {
                step: "4",
                title: "Contrôle Qualité",
                description: "Vérification rigoureuse après réparation pour garantir sécurité et performance."
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

export default ReparationVehicules;
