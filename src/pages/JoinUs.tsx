
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, Leaf, LightBulb, Electric, SolarPanel, ChartBar } from 'lucide-react';

const jobOffers = [
  {
    title: "Ingénieur en Systèmes Photovoltaïques",
    icon: <SolarPanel className="h-8 w-8 text-eco-green mb-2" />,
    description: "Conception, installation et maintenance de systèmes photovoltaïques pour nos clients résidentiels et commerciaux.",
    requirements: [
      "Diplôme en génie électrique ou énergies renouvelables",
      "Expérience minimum de 2 ans dans le solaire photovoltaïque",
      "Maîtrise des logiciels de conception PV (PVsyst, HelioScope)",
      "Connaissances des normes électriques internationales",
      "Français et anglais professionnels"
    ]
  },
  {
    title: "Ingénieur en Systèmes de Stockage d'Énergie (BESS)",
    icon: <LightBulb className="h-8 w-8 text-eco-blue mb-2" />,
    description: "Développement et implémentation de solutions de stockage d'énergie par batterie pour applications on-grid et off-grid.",
    requirements: [
      "Master en génie électrique ou équivalent",
      "Expérience avec les technologies de batteries Li-Ion, LFP",
      "Connaissance des systèmes BMS (Battery Management System)",
      "Compétences en dimensionnement de systèmes hybrides",
      "Français et anglais courants"
    ]
  },
  {
    title: "Ingénieur Produit",
    icon: <BriefcaseBusiness className="h-8 w-8 text-eco-green mb-2" />,
    description: "Développement et amélioration de notre gamme de produits d'énergie renouvelable et de mobilité électrique.",
    requirements: [
      "Formation d'ingénieur avec spécialisation en développement produit",
      "Expérience en gestion de cycle de vie produit",
      "Capacité à traduire besoins du marché en spécifications techniques",
      "Connaissance des énergies renouvelables",
      "Excellentes compétences en communication"
    ]
  },
  {
    title: "Expert Marketing en Énergies Renouvelables",
    icon: <ChartBar className="h-8 w-8 text-eco-blue mb-2" />,
    description: "Élaboration et mise en œuvre de stratégies marketing pour promouvoir nos solutions d'énergie durable et de mobilité électrique.",
    requirements: [
      "Diplôme en marketing ou communication",
      "Expérience dans le secteur des énergies renouvelables",
      "Maîtrise des outils de marketing digital",
      "Capacité à développer du contenu technique accessible",
      "Expérience en organisation d'événements"
    ]
  },
  {
    title: "Ingénieur en Mobilité Électrique",
    icon: <Electric className="h-8 w-8 text-eco-green mb-2" />,
    description: "Conception et implémentation de solutions de mobilité électrique adaptées au contexte africain, y compris les infrastructures de recharge.",
    requirements: [
      "Formation en génie électrique ou mécanique",
      "Connaissance des technologies de véhicules électriques",
      "Expérience en conception d'infrastructures de recharge",
      "Familiarité avec les normes de sécurité électrique",
      "Capacité à travailler dans des environnements divers"
    ]
  },
  {
    title: "Technicien Support Vente et Après-Vente",
    icon: <Leaf className="h-8 w-8 text-eco-blue mb-2" />,
    description: "Support technique pour nos clients avant et après l'achat de solutions d'énergie renouvelable et de mobilité électrique.",
    requirements: [
      "Formation technique en électricité ou équivalent",
      "Excellentes compétences en service client",
      "Connaissance des produits solaires et de mobilité électrique",
      "Capacité à former les clients sur l'utilisation des produits",
      "Permis de conduire obligatoire"
    ]
  }
];

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Rejoignez-Nous | EcoMoTech</title>
        <meta name="description" content="Rejoignez EcoMoTech et participez à la transition énergétique en Guinée. Découvrez nos offres d'emploi." />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Rejoignez Notre Équipe</h1>
          <p className="text-xl text-gray-600">
            EcoMoTech recherche des talents passionnés par les énergies renouvelables et la mobilité durable pour accompagner notre croissance en Guinée et en Afrique de l'Ouest.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nos Offres d'Emploi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOffers.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    {job.icon}
                    <CardTitle className="ml-2">{job.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Compétences requises :</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                  <Button className="bg-eco-green hover:bg-eco-green/90 w-full">
                    Postuler
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre profil?</h3>
          <p className="mb-6">
            Nous sommes toujours à la recherche de personnes talentueuses et passionnées. 
            Envoyez-nous votre CV et expliquez-nous comment vous pourriez contribuer à notre mission.
          </p>
          <Button className="bg-eco-blue hover:bg-eco-blue/90">
            Candidature Spontanée
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JoinUs;
