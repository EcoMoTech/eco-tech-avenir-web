import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';

const Article = () => {
  const { id } = useParams();
  const article = id ? articles[id] : null;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | EcoMoTech</title>
        <meta name="description" content={article.title} />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>{format(article.date, 'dd MMMM yyyy', { locale: fr })}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <img 
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
