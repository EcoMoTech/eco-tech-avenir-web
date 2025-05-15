import styles from '@/styles/avantages-energie-solaire.module.css';

export const articleData = {
  id: 'avantages-energie-solaire',
  title: "Les Avantages de l'Énergie Solaire en Afrique de l'Ouest",
  date: new Date('2024-05-10'),
  category: "Énergie Solaire",
  readTime: "5 min",
  imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
  content: /*html*/`
    <article class="${styles.articleContent}">
      <section class="${styles.introduction}">
        <p class="${styles.lead}">
          L'Afrique de l'Ouest bénéficie d'un ensoleillement exceptionnel tout au long de l'année. Cette ressource naturelle abondante positionne la région comme un terrain idéal pour le développement de l'énergie solaire. Face aux défis énergétiques croissants — accès limité à l'électricité, dépendance aux énergies fossiles importées, réseaux électriques instables — l'énergie solaire s'impose comme une solution propre, durable et économiquement viable.
        </p>
      </section>

      <section class="${styles.advantages}">
        <h2 class="${styles.sectionTitle}">
          <span class="${styles.icon}">☀️</span> Une Ressource Abondante et Gratuite
        </h2>
        <p>L'Afrique de l'Ouest reçoit en moyenne entre 5 et 6 kWh/m²/jour d'ensoleillement, ce qui la classe parmi les régions les plus ensoleillées du monde. Cette abondance d'énergie solaire permet de produire de l'électricité localement, de manière renouvelable, sans dépendre des importations ou des combustibles fossiles coûteux.</p>

        <h2 class="${styles.sectionTitle}">
          <span class="${styles.icon}">⚡</span> Un Meilleur Accès à l'Électricité
        </h2>
        <p>Dans de nombreux pays ouest-africains, l'accès à l'électricité reste un défi, notamment dans les zones rurales. L'énergie solaire permet de décentraliser la production électrique grâce à des solutions telles que :</p>
        <ul class="${styles.featureList}">
          <li>Les mini-réseaux solaires</li>
          <li>Les systèmes solaires domestiques (kits solaires)</li>
          <li>Les centrales photovoltaïques connectées au réseau</li>
        </ul>

        <h2 class="${styles.sectionTitle}">
          <span class="${styles.icon}">💰</span> Réduction des Coûts Énergétiques
        </h2>
        <p>Malgré un coût initial plus élevé, les systèmes solaires présentent des avantages économiques significatifs :</p>
        <ul class="${styles.featureList}">
          <li>Coûts d'exploitation très faibles</li>
          <li>Source d'énergie gratuite et renouvelable</li>
          <li>Prix des équipements en baisse constante</li>
          <li>Rentabilité supérieure aux solutions traditionnelles</li>
        </ul>
      </section>

      <section class="${styles.conclusion}">
        <h2 class="${styles.sectionTitle}">
          <span class="${styles.icon}">🔋</span> Vers un Avenir Solaire
        </h2>
        <p>L'essor de l'énergie solaire en Afrique de l'Ouest est en marche, porté par des politiques publiques, des investissements croissants et l'engagement du secteur privé.</p>
        
        <div class="${styles.highlightBox}">
          <p class="${styles.highlightText}">L'énergie solaire n'est pas seulement une option. C'est une opportunité — pour l'Afrique, pour ses peuples, pour son avenir.</p>
        </div>
      </section>

      <section class="${styles.ctaSection}">
        <div class="${styles.ctaBox}">
          <h3>Prêt à passer à l'énergie solaire ?</h3>
          <p>Découvrez nos solutions adaptées à vos besoins</p>
          <a href="/contact" class="${styles.ctaButton}">Contactez-nous</a>
        </div>
      </section>
    </article>
  `
};
