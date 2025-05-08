
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { Leaf, Check, LineChart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AuditEfficacite = () => {
  return (
    <ServiceLayout
      title="Audit d'Efficacité Énergétique"
      description="Évaluations détaillées et recommandations pour optimiser votre consommation d'énergie"
      bgImage="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      icon={<Leaf className="h-6 w-6" />}
    >
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Optimisez votre consommation énergétique</h2>
              <p className="text-gray-600 mb-6">
                Notre service d'audit énergétique vous permet d'identifier les sources d'inefficacité
                et de mettre en œuvre des solutions concrètes pour réduire votre consommation. 
                Que vous soyez un particulier ou une entreprise, nous vous aidons à réaliser des économies
                substantielles tout en réduisant votre impact environnemental.
              </p>
              <div className="space-y-4">
                {[
                  "Analyse complète des consommations et équipements",
                  "Identification des sources de déperdition énergétique",
                  "Recommandations personnalisées et hiérarchisées",
                  "Estimation des économies potentielles et retour sur investissement"
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Audit d'efficacité énergétique" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of audits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Types d'Audits</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les profils et besoins énergétiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit Résidentiel",
                icon: <Lightbulb className="h-8 w-8 text-eco-green" />,
                description: "Évaluation complète pour maisons et appartements avec analyse thermique et électrique."
              },
              {
                title: "Audit Commercial",
                icon: <LineChart className="h-8 w-8 text-eco-green" />,
                description: "Solutions pour bureaux, commerces et PME avec analyse des coûts d'exploitation."
              },
              {
                title: "Audit Industriel",
                icon: <Leaf className="h-8 w-8 text-eco-green" />,
                description: "Analyse approfondie pour sites industriels avec optimisation des processus énergétiques."
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Processus d'Audit</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une méthodologie rigoureuse pour des résultats concrets et mesurables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Collecte des Données",
                description: "Analyse des factures, équipements et habitudes de consommation."
              },
              {
                step: "2",
                title: "Diagnostic Complet",
                description: "Inspection sur site avec équipements de mesure spécialisés."
              },
              {
                step: "3",
                title: "Analyse & Rapport",
                description: "Synthèse détaillée avec hiérarchisation des actions à mener."
              },
              {
                step: "4",
                title: "Plan d'Action",
                description: "Recommandations concrètes et accompagnement dans leur mise en œuvre."
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Les Avantages de Notre Audit</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              De réels bénéfices économiques et environnementaux à court et long terme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Réduction des Coûts",
                description: "Économies substantielles sur vos factures d'énergie, avec un retour sur investissement rapide."
              },
              {
                title: "Impact Environnemental",
                description: "Réduction significative de votre empreinte carbone et contribution au développement durable."
              },
              {
                title: "Confort Amélioré",
                description: "Optimisation des systèmes pour un meilleur confort thermique et acoustique."
              },
              {
                title: "Valorisation du Patrimoine",
                description: "Augmentation de la valeur immobilière grâce à une meilleure performance énergétique."
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

export default AuditEfficacite;
