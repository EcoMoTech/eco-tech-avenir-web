
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BriefcaseBusiness, Leaf, Lightbulb, Zap, PanelTop, BarChart } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

const jobOffers = [
  {
    title: "Ingénieur en Systèmes Photovoltaïques",
    icon: <PanelTop className="h-8 w-8 text-eco-green mb-2" />,
    description: "Conception, installation et maintenance de systèmes photovoltaïques pour nos clients résidentiels et commerciaux.",
    requirements: [
      "Diplôme en génie électrique ou énergies renouvelables",
      "Expérience minimum de 2 ans dans le solaire photovoltaïque",
      "Maîtrise des logiciels de conception PV (PVsyst, HelioScope)",
      "Connaissances des normes électriques internationales",
      "Français et anglais professionnels"
    ],
    fullDescription: `
      <h4 class="font-semibold mb-3">À propos du poste:</h4>
      <p class="mb-4">En tant qu'Ingénieur en Systèmes Photovoltaïques chez EcoMoTech, vous jouerez un rôle clé dans la conception, l'installation et la maintenance de systèmes solaires pour nos clients en Guinée et dans la région.</p>
      
      <h4 class="font-semibold mb-2">Responsabilités principales:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Réaliser des études techniques et dimensionner des systèmes photovoltaïques adaptés aux besoins des clients</li>
        <li>Superviser les installations sur le terrain et assurer la qualité des travaux</li>
        <li>Effectuer les mises en service et tests de performance des systèmes</li>
        <li>Assurer le suivi et la maintenance préventive/corrective des installations</li>
        <li>Former les clients sur l'utilisation optimale de leurs systèmes</li>
        <li>Documenter les installations et rédiger des rapports techniques</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Formation et expérience:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Diplôme en génie électrique ou énergies renouvelables</li>
        <li>Expérience minimum de 2 ans dans le solaire photovoltaïque</li>
        <li>Maîtrise des logiciels de conception PV (PVsyst, HelioScope)</li>
        <li>Connaissances des normes électriques internationales</li>
        <li>Français et anglais professionnels</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Ce que nous offrons:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Salaire compétitif et avantages sociaux</li>
        <li>Opportunités de formation continue et de développement professionnel</li>
        <li>Environnement de travail dynamique dans un secteur en pleine croissance</li>
        <li>Mission d'impact positif sur l'environnement et le développement énergétique de la Guinée</li>
      </ul>
    `,
    location: "Conakry, Guinée",
    type: "Temps plein",
    salary: "Compétitif, selon l'expérience"
  },
  {
    title: "Ingénieur en Systèmes de Stockage d'Énergie (BESS)",
    icon: <Lightbulb className="h-8 w-8 text-eco-blue mb-2" />,
    description: "Développement et implémentation de solutions de stockage d'énergie par batterie pour applications on-grid et off-grid.",
    requirements: [
      "Master en génie électrique ou équivalent",
      "Expérience avec les technologies de batteries Li-Ion, LFP",
      "Connaissance des systèmes BMS (Battery Management System)",
      "Compétences en dimensionnement de systèmes hybrides",
      "Français et anglais courants"
    ],
    fullDescription: `
      <h4 class="font-semibold mb-3">À propos du poste:</h4>
      <p class="mb-4">En tant qu'Ingénieur en Systèmes de Stockage d'Énergie, vous serez responsable du développement et de l'implémentation de solutions de batterie innovantes adaptées au contexte africain.</p>
      
      <h4 class="font-semibold mb-2">Responsabilités principales:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Concevoir des systèmes de stockage d'énergie par batterie pour applications on-grid et off-grid</li>
        <li>Sélectionner et dimensionner les composants des systèmes hybrides (PV-batteries-générateurs)</li>
        <li>Développer des systèmes de gestion de batterie (BMS) adaptés aux conditions locales</li>
        <li>Assurer l'intégration des systèmes de stockage avec les installations solaires existantes</li>
        <li>Optimiser les performances et la durée de vie des batteries</li>
        <li>Collaborer avec l'équipe technique pour le déploiement sur le terrain</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Formation et expérience:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Master en génie électrique ou équivalent</li>
        <li>Expérience avec les technologies de batteries Li-Ion, LFP</li>
        <li>Connaissance des systèmes BMS (Battery Management System)</li>
        <li>Compétences en dimensionnement de systèmes hybrides</li>
        <li>Français et anglais courants</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Ce que nous offrons:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Salaire compétitif et avantages sociaux</li>
        <li>Environnement de travail stimulant dans une entreprise en croissance</li>
        <li>Contribution directe à l'amélioration de l'accès à l'énergie en Afrique</li>
        <li>Possibilités d'évolution professionnelle</li>
      </ul>
    `,
    location: "Conakry, Guinée",
    type: "Temps plein",
    salary: "Compétitif, selon l'expérience"
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
    ],
    fullDescription: `
      <h4 class="font-semibold mb-3">À propos du poste:</h4>
      <p class="mb-4">En tant qu'Ingénieur Produit, vous serez au cœur du développement de notre gamme d'offres en énergie renouvelable et mobilité électrique, adaptée spécifiquement aux besoins du marché guinéen et ouest-africain.</p>
      
      <h4 class="font-semibold mb-2">Responsabilités principales:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Piloter le développement de nouveaux produits d'énergie renouvelable et mobilité électrique</li>
        <li>Collecter et analyser les besoins des clients pour définir les spécifications des produits</li>
        <li>Coordonner avec les équipes techniques pour assurer la faisabilité et la qualité des produits</li>
        <li>Gérer le cycle de vie complet des produits, de la conception à la mise sur le marché</li>
        <li>Établir des roadmaps produit et suivre les KPIs de performance</li>
        <li>Assurer une veille technologique et concurrentielle continue</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Formation et expérience:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Formation d'ingénieur avec spécialisation en développement produit</li>
        <li>Expérience en gestion de cycle de vie produit</li>
        <li>Capacité à traduire besoins du marché en spécifications techniques</li>
        <li>Connaissance des énergies renouvelables</li>
        <li>Excellentes compétences en communication</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Ce que nous offrons:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Rôle clé dans une entreprise innovante en pleine croissance</li>
        <li>Opportunité d'avoir un impact direct sur le développement durable en Guinée</li>
        <li>Environnement de travail collaboratif et dynamique</li>
        <li>Package salarial attractif et perspectives d'évolution</li>
      </ul>
    `,
    location: "Conakry, Guinée",
    type: "Temps plein",
    salary: "Compétitif, selon l'expérience"
  },
  {
    title: "Expert Marketing en Énergies Renouvelables",
    icon: <BarChart className="h-8 w-8 text-eco-blue mb-2" />,
    description: "Élaboration et mise en œuvre de stratégies marketing pour promouvoir nos solutions d'énergie durable et de mobilité électrique.",
    requirements: [
      "Diplôme en marketing ou communication",
      "Expérience dans le secteur des énergies renouvelables",
      "Maîtrise des outils de marketing digital",
      "Capacité à développer du contenu technique accessible",
      "Expérience en organisation d'événements"
    ],
    fullDescription: `
      <h4 class="font-semibold mb-3">À propos du poste:</h4>
      <p class="mb-4">En tant qu'Expert Marketing en Énergies Renouvelables, vous serez responsable de développer et mettre en œuvre des stratégies marketing innovantes pour positionner EcoMoTech comme leader dans le secteur des énergies renouvelables et de la mobilité électrique en Guinée.</p>
      
      <h4 class="font-semibold mb-2">Responsabilités principales:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Élaborer et exécuter des stratégies marketing adaptées au marché local</li>
        <li>Créer du contenu pertinent et éducatif sur les énergies renouvelables et la mobilité électrique</li>
        <li>Gérer les campagnes digitales et traditionnelles pour générer des leads qualifiés</li>
        <li>Organiser des événements de promotion et des démonstrations de produits</li>
        <li>Développer des partenariats stratégiques pour renforcer la visibilité de la marque</li>
        <li>Analyser les résultats des actions marketing et ajuster les stratégies en conséquence</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Formation et expérience:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Diplôme en marketing ou communication</li>
        <li>Expérience dans le secteur des énergies renouvelables</li>
        <li>Maîtrise des outils de marketing digital</li>
        <li>Capacité à développer du contenu technique accessible</li>
        <li>Expérience en organisation d'événements</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Ce que nous offrons:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Opportunité de contribuer à la transition énergétique en Afrique de l'Ouest</li>
        <li>Environnement de travail créatif et challengeant</li>
        <li>Budget marketing dédié pour des initiatives innovantes</li>
        <li>Package salarial compétitif avec bonus basés sur la performance</li>
      </ul>
    `,
    location: "Conakry, Guinée",
    type: "Temps plein",
    salary: "Compétitif, selon l'expérience"
  },
  {
    title: "Ingénieur en Mobilité Électrique",
    icon: <Zap className="h-8 w-8 text-eco-green mb-2" />,
    description: "Conception et implémentation de solutions de mobilité électrique adaptées au contexte africain, y compris les infrastructures de recharge.",
    requirements: [
      "Formation en génie électrique ou mécanique",
      "Connaissance des technologies de véhicules électriques",
      "Expérience en conception d'infrastructures de recharge",
      "Familiarité avec les normes de sécurité électrique",
      "Capacité à travailler dans des environnements divers"
    ],
    fullDescription: `
      <h4 class="font-semibold mb-3">À propos du poste:</h4>
      <p class="mb-4">En tant qu'Ingénieur en Mobilité Électrique, vous serez à l'avant-garde du développement de solutions de transport durable adaptées aux défis spécifiques du contexte africain.</p>
      
      <h4 class="font-semibold mb-2">Responsabilités principales:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Concevoir et adapter des solutions de mobilité électrique pour le marché africain</li>
        <li>Développer des infrastructures de recharge résilientes et adaptées aux contraintes locales</li>
        <li>Mener des études de faisabilité pour le déploiement de véhicules électriques</li>
        <li>Assurer la conformité des solutions aux normes de sécurité internationales</li>
        <li>Collaborer avec les partenaires locaux et internationaux pour le transfert de technologies</li>
        <li>Former les équipes techniques locales sur les technologies de mobilité électrique</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Formation et expérience:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Formation en génie électrique ou mécanique</li>
        <li>Connaissance des technologies de véhicules électriques</li>
        <li>Expérience en conception d'infrastructures de recharge</li>
        <li>Familiarité avec les normes de sécurité électrique</li>
        <li>Capacité à travailler dans des environnements divers</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Ce que nous offrons:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Rôle pionnier dans le développement de la mobilité électrique en Afrique</li>
        <li>Projets variés et challengeants avec un impact environnemental positif</li>
        <li>Collaboration avec des partenaires internationaux</li>
        <li>Conditions salariales attractives et possibilités d'évolution</li>
      </ul>
    `,
    location: "Conakry, Guinée",
    type: "Temps plein",
    salary: "Compétitif, selon l'expérience"
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
    ],
    fullDescription: `
      <h4 class="font-semibold mb-3">À propos du poste:</h4>
      <p class="mb-4">En tant que Technicien Support Vente et Après-Vente, vous serez l'interface technique essentielle entre EcoMoTech et nos clients, assurant une expérience client optimale avant et après l'achat.</p>
      
      <h4 class="font-semibold mb-2">Responsabilités principales:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Fournir un support technique aux clients sur nos produits d'énergie renouvelable et mobilité électrique</li>
        <li>Accompagner les clients dans le choix des solutions adaptées à leurs besoins</li>
        <li>Réaliser des démonstrations de produits et formations pour les clients</li>
        <li>Assurer le service après-vente et la résolution des problèmes techniques</li>
        <li>Effectuer des visites de maintenance préventive chez les clients</li>
        <li>Recueillir les retours clients pour améliorer continuellement nos produits et services</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Formation et expérience:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Formation technique en électricité ou équivalent</li>
        <li>Excellentes compétences en service client</li>
        <li>Connaissance des produits solaires et de mobilité électrique</li>
        <li>Capacité à former les clients sur l'utilisation des produits</li>
        <li>Permis de conduire obligatoire</li>
      </ul>
      
      <h4 class="font-semibold mb-2">Ce que nous offrons:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Formation approfondie sur nos gammes de produits</li>
        <li>Environnement de travail dynamique et collaboratif</li>
        <li>Opportunités d'évolution au sein de l'entreprise</li>
        <li>Package salarial motivant avec primes de performance</li>
      </ul>
    `,
    location: "Conakry, Guinée",
    type: "Temps plein",
    salary: "Compétitif, selon l'expérience"
  }
];

const JoinUs = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = React.useState<(typeof jobOffers)[0] | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openJobDetails = (job: (typeof jobOffers)[0]) => {
    setSelectedJob(job);
    setDialogOpen(true);
  };

  const handleApply = () => {
    setDialogOpen(false);
    toast({
      title: "Candidature initiée",
      description: "Vous allez être redirigé vers le formulaire de contact.",
    });
    
    // Short timeout to allow the toast to be seen before redirecting
    setTimeout(() => {
      navigate('/contact');
    }, 1500);
  };

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
                  <Button 
                    className="bg-eco-green hover:bg-eco-green/90 w-full"
                    onClick={() => openJobDetails(job)}
                  >
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
          <Button 
            className="bg-eco-blue hover:bg-eco-blue/90"
            onClick={() => navigate('/contact')}
          >
            Candidature Spontanée
          </Button>
        </div>
      </main>
      <Footer />

      {/* Job Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  {selectedJob.icon}
                  <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                </div>
                <DialogDescription>
                  <div className="flex flex-wrap gap-4 text-sm mt-2">
                    <div className="bg-gray-100 px-3 py-1 rounded-full">
                      📍 {selectedJob.location}
                    </div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">
                      🕒 {selectedJob.type}
                    </div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">
                      💰 {selectedJob.salary}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="my-4">
                <div dangerouslySetInnerHTML={{ __html: selectedJob.fullDescription }} />
              </div>
              <DialogFooter>
                <Button 
                  className="w-full bg-eco-green hover:bg-eco-green/90"
                  onClick={handleApply}
                >
                  Postuler à cette offre
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JoinUs;
