
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { Sun, Check, Zap, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InstallationPhotovoltaique = () => {
  return (
    <ServiceLayout
      title="Installation Photovoltaïque"
      description="Solutions solaires personnalisées pour réduire votre empreinte carbone et votre facture d'électricité"
      bgImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      icon={<Sun className="h-6 w-6" />}
    >
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Installation sur mesure adaptée à vos besoins</h2>
              <p className="text-gray-600 mb-6">
                Chez EcoMoTech, nous proposons une gamme complète d'installations photovoltaïques 
                adaptées à tous types de bâtiments : résidentiels, commerciaux ou industriels. 
                Notre équipe d'experts vous accompagne depuis l'étude de faisabilité jusqu'à la 
                mise en service de votre installation.
              </p>
              <div className="space-y-4">
                {[
                  "Étude personnalisée de votre projet",
                  "Démarches administratives et demandes de subventions",
                  "Installation par des professionnels certifiés",
                  "Garantie et service après-vente"
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
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Installation photovoltaïque" 
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Solutions Photovoltaïques</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez nos différentes solutions photovoltaïques pour répondre à tous vos besoins énergétiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Résidentiel",
                icon: <Zap className="h-8 w-8 text-eco-green" />,
                description: "Installations pour maisons individuelles, avec options d'autoconsommation ou de revente totale."
              },
              {
                title: "Commercial",
                icon: <ShieldCheck className="h-8 w-8 text-eco-green" />,
                description: "Solutions pour entreprises et commerces, optimisées pour réduire vos charges d'exploitation."
              },
              {
                title: "Agricole",
                icon: <Sun className="h-8 w-8 text-eco-green" />,
                description: "Installations adaptées au monde agricole, pour hangars, bâtiments d'élevage ou serres."
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Processus d'Installation</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet et transparent à chaque étape de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Étude & Conseil",
                description: "Analyse de vos besoins et de votre site pour une solution optimale."
              },
              {
                step: "2",
                title: "Conception & Devis",
                description: "Proposition technique détaillée et devis transparent."
              },
              {
                step: "3",
                title: "Installation",
                description: "Mise en œuvre par nos équipes certifiées selon les normes en vigueur."
              },
              {
                step: "4",
                title: "Suivi & Maintenance",
                description: "Service après-vente et maintenance pour garantir performance et durabilité."
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

export default InstallationPhotovoltaique;
