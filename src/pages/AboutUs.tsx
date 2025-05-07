
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-eco-green py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">À Propos de Nous</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Découvrez EcoMoTech, notre histoire, nos valeurs et notre engagement pour un avenir durable grâce à l'énergie renouvelable et la mobilité électrique.
            </p>
          </div>
        </div>

        {/* Notre histoire */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
                <p className="text-gray-700 mb-4">
                  Fondée en 2010, EcoMoTech est née de la vision de deux ingénieurs passionnés par les énergies renouvelables et la mobilité durable. Convaincus que la transition énergétique est l'enjeu majeur de notre siècle, ils ont décidé d'unir leurs compétences pour développer des solutions accessibles et efficaces.
                </p>
                <p className="text-gray-700 mb-4">
                  Au fil des années, notre entreprise s'est développée pour devenir un acteur incontournable du secteur des énergies renouvelables et de la mobilité électrique en France. Notre expertise technique et notre engagement envers la qualité nous ont permis de gagner la confiance de milliers de clients, des particuliers aux grandes entreprises.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, EcoMoTech compte plus de 50 collaborateurs passionnés et experts dans leurs domaines, tous partageant la même vision : accélérer la transition vers un monde plus durable et respectueux de l'environnement.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="L'équipe EcoMoTech" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-16 px-4 bg-eco-lightgray">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Ces principes guident chacune de nos actions et décisions au quotidien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-eco-green text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-3">Durabilité</h3>
                <p className="text-gray-700">
                  Nous plaçons l'impact environnemental positif au cœur de nos préoccupations. Chaque solution que nous proposons vise à réduire l'empreinte carbone et à préserver les ressources naturelles.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-eco-green text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  La recherche constante de nouvelles technologies et approches nous permet de proposer des solutions toujours plus efficientes, accessibles et adaptées aux besoins de nos clients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-eco-green text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Engagement client</h3>
                <p className="text-gray-700">
                  Nous croyons en l'établissement de relations durables basées sur la confiance, la transparence et le respect mutuel. La satisfaction de nos clients est notre priorité absolue.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-eco-green text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-3">Excellence technique</h3>
                <p className="text-gray-700">
                  Notre expertise technique est au cœur de notre identité. Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos produits et services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-eco-green text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Responsabilité sociale</h3>
                <p className="text-gray-700">
                  Nous nous efforçons d'avoir un impact positif sur les communautés locales à travers nos projets, notre politique d'emploi et nos initiatives sociales.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-eco-green text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Économie circulaire</h3>
                <p className="text-gray-700">
                  Nous intégrons les principes de l'économie circulaire dans notre chaîne de valeur, de la conception à la fin de vie de nos produits, en favorisant la réutilisation et le recyclage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre équipe dirigeante</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Des experts passionnés qui mènent EcoMoTech vers l'avenir de l'énergie renouvelable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img
                    src="https://randomuser.me/api/portraits/men/42.jpg"
                    alt="Thomas Dupont"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Thomas Dupont</h3>
                <p className="text-eco-green">PDG & Co-fondateur</p>
              </div>

              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                    alt="Sophie Laurent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sophie Laurent</h3>
                <p className="text-eco-green">Directrice Technique & Co-fondatrice</p>
              </div>

              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Nicolas Martin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Nicolas Martin</h3>
                <p className="text-eco-green">Directeur Commercial</p>
              </div>

              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Marie Dubois"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Marie Dubois</h3>
                <p className="text-eco-green">Directrice Innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos engagements */}
        <section className="py-16 px-4 bg-eco-blue text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos engagements</h2>
              <p className="max-w-3xl mx-auto opacity-90">
                Au-delà de notre activité commerciale, nous nous engageons activement pour un avenir plus durable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Neutralité carbone</h3>
                <p className="opacity-90">
                  Nous nous sommes engagés à atteindre la neutralité carbone de nos opérations d'ici 2025, en réduisant nos émissions et en compensant celles que nous ne pouvons éviter.
                </p>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Éducation et sensibilisation</h3>
                <p className="opacity-90">
                  Nous organisons régulièrement des ateliers éducatifs dans les écoles et les communautés pour sensibiliser le public aux enjeux énergétiques et environnementaux.
                </p>
              </div>

              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Soutien à la recherche</h3>
                <p className="opacity-90">
                  Chaque année, nous allouons 5% de nos bénéfices au financement de projets de recherche dans le domaine des énergies renouvelables et de la mobilité durable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications et partenaires */}
        <section className="py-16 px-4 bg-eco-lightgray">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications et Partenaires</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Nous sommes fiers de travailler avec les meilleurs et de respecter les standards les plus exigeants de notre industrie.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {/* Logos des certifications et partenaires */}
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md h-24 w-full flex items-center justify-center">
                  <div className="text-gray-400 text-center">Logo {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
