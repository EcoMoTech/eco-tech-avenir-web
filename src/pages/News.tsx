import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const blogPosts = [
  {
    id: 'avantages-energie-solaire',
    title: "Les Avantages de l'Énergie Solaire en Afrique de l'Ouest",
    excerpt: "Découvrez comment l'énergie solaire transforme l'accès à l'électricité et stimule le développement économique en Guinée et dans toute l'Afrique de l'Ouest.",
    date: new Date('2024-05-10'),
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Énergie Solaire",
    readTime: "5 min"
  },
  {
    id: 'stockage-energie-batterie',
    title: "Stockage d'Énergie par Batterie : Solutions pour Zones Rurales et Urbaines",
    excerpt: "Le stockage d'énergie par batterie offre des solutions adaptées aux besoins spécifiques des communautés urbaines et rurales, assurant une alimentation électrique fiable et continue.",
    date: new Date('2024-04-28'),
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Stockage d'Énergie",
    readTime: "7 min"
  },
  {
    id: 'eclairage-solaire-rural',
    title: "L'Éclairage Solaire : Sécurité et Développement pour les Zones Rurales",
    excerpt: "L'installation de lampadaires solaires dans les zones reculées améliore la sécurité, prolonge les heures d'activité économique et transforme la vie des communautés.",
    date: new Date('2024-04-15'),
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    category: "Éclairage Public",
    readTime: "4 min"
  },
  {
    id: 'mobilite-electrique-guinee',
    title: "Mobilité Électrique en Guinée : Vers un Transport Plus Propre",
    excerpt: "Les véhicules électriques représentent une solution durable pour réduire la pollution urbaine, diminuer la dépendance aux carburants importés et créer de nouvelles opportunités économiques.",
    date: new Date('2024-03-22'),
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    category: "Mobilité Électrique",
    readTime: "6 min"
  },
  {
    id: 'avantages-mobilite-durable',
    title: "Les Avantages de la Mobilité Durable pour le Développement",
    excerpt: "La mobilité durable offre des solutions de transport qui respectent l'environnement tout en améliorant l'accès aux services essentiels et en stimulant l'économie locale.",
    date: new Date('2024-03-10'),
    imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "Développement Durable",
    readTime: "5 min"
  }
];

const News = () => {
  return (
    <>
      <Helmet>
        <title>Actualités | EcoMoTech</title>
        <meta name="description" content="Découvrez les dernières actualités et articles sur l'énergie renouvelable et la mobilité électrique en Guinée et en Afrique de l'Ouest." />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Actualités</h1>
          <p className="text-xl text-gray-600">
            Restez informés sur les dernières nouvelles concernant l'énergie renouvelable 
            et la mobilité électrique en Guinée et en Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/news/${post.id}`} className="block">
                <AspectRatio ratio={16/9} className="bg-gray-100">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </Link>
              <CardHeader>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span className="bg-eco-green/10 text-eco-green px-2 py-1 rounded">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">
                  <Link to={`/news/${post.id}`} className="hover:text-eco-green transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                <span>{format(post.date, 'dd MMMM yyyy', { locale: fr })}</span>
                <Link to={`/news/${post.id}`} className="text-eco-green hover:underline">
                  Lire plus
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
