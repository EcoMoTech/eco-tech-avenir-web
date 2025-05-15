import styles from '@/styles/eclairage-solaire-rural.module.css';

export const articleData = {
  id: 'eclairage-solaire-rural',
  title: "L'Éclairage Solaire : Sécurité et Développement pour les Zones Rurales",
  date: new Date('2024-04-15'),
  category: "Éclairage Public",
  readTime: "4 min",
  imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  content: /*html*/ `
    <article class="${styles.newsArticle} ${styles.eclairageSolaire}">
      <header class="${styles.articleHeader}">
        <p class="${styles.articleMeta}">Publié le <time datetime="2024-05-15">15 mai 2025</time> par <span class="${styles.author}">Ecomotech</span></p>
      </header>

      <section class="${styles.articleIntroduction}">
        <p>
          Dans les zones rurales, l’absence d’éclairage public ou domestique constitue un frein majeur au développement
          social et économique. L’éclairage solaire, grâce à sa simplicité d’installation et à son autonomie, représente
          une solution durable pour améliorer les conditions de vie, renforcer la sécurité et stimuler l’activité locale.
        </p>
      </section>

      <section class="${styles.articleSection} ${styles.defis}">
        <h2 class="${styles.sectionTitle}">Les Défis de l’Obscurité Rurale</h2>
        <p>
          L’obscurité affecte de nombreuses dimensions de la vie rurale : insécurité nocturne, limitation des activités
          économiques après le coucher du soleil, difficultés pour les enfants à étudier le soir, et restrictions sur les
          services de santé. Ces contraintes nuisent à l’autonomisation des communautés.
        </p>
      </section>

      <section class="${styles.articleSection} ${styles.avantages}">
        <h2 class="${styles.sectionTitle}">Les Avantages de l’Éclairage Solaire</h2>
        <p>
          L’éclairage solaire offre une réponse immédiate et efficace à ces défis. Il se distingue par :
        </p>
        <ul class="${styles.articleList}">
          <li>Son indépendance vis-à-vis du réseau électrique</li>
          <li>Sa faible maintenance et sa longue durée de vie</li>
          <li>Sa capacité à améliorer la sécurité des routes, écoles, marchés et habitations</li>
          <li>Sa contribution à la réduction des émissions de gaz à effet de serre</li>
        </ul>
      </section>

      <section class="${styles.articleSection} ${styles.casPratiques}">
        <h2 class="${styles.sectionTitle}">Cas Pratiques d’Impact</h2>
        <p>
          De nombreux villages ayant bénéficié de l’installation de lampadaires solaires ont constaté :
        </p>
        <ul class="article-list">
          <li>Une baisse des vols et agressions pendant la nuit</li>
          <li>Une augmentation des heures d’ouverture des commerces</li>
          <li>Un meilleur accès aux soins d’urgence dans les centres de santé</li>
          <li>Un climat plus favorable à l’éducation des enfants</li>
        </ul>
      </section>

      <section class="${styles.articleSection} ${styles.approcheEmotech}">
        <h2 class="${styles.sectionTitle}">Notre Approche chez Emotech</h2>
        <p>
          Chez <strong>Emotech</strong>, nous développons des solutions d’éclairage solaire adaptées aux réalités des
          communautés rurales. Nos lampadaires solaires intelligents sont autonomes, robustes, et conçus pour résister aux
          conditions climatiques locales.
        </p>
        <p>
          Nous accompagnons les collectivités, ONG et gouvernements dans la mise en œuvre de projets d’éclairage solaire à
          fort impact social.
        </p>
      </section>

      <section class="${styles.articleSection} ${styles.developpementDurable}">
        <h2 class="${styles.sectionTitle}">Un Outil pour le Développement Durable</h2>
        <p>
          L’éclairage solaire contribue à plusieurs Objectifs de Développement Durable (ODD), notamment :
        </p>
        <ul class="${styles.articleList}">
          <li>ODD 7 : Énergie propre et d’un coût abordable</li>
          <li>ODD 11 : Villes et communautés durables</li>
          <li>ODD 13 : Lutte contre le changement climatique</li>
        </ul>
        <p>
          Il s’agit donc d’un levier essentiel pour un avenir plus inclusif et résilient.
        </p>
      </section>

      <section class="${styles.articleSection} ${styles.conclusion}">
        <h2 class="${styles.sectionTitle}">Conclusion</h2>
        <p>
          L’éclairage solaire est bien plus qu’une solution technologique : c’est un catalyseur de transformation sociale.
          En améliorant la sécurité, en prolongeant les activités quotidiennes et en favorisant l’apprentissage, il offre
          une lumière nouvelle sur les perspectives de développement rural.
        </p>
      </section>

      <footer class="${styles.articleFooter}">
        <p>
          Vous souhaitez équiper votre communauté en éclairage solaire&nbsp;? <a href="/contact" class="${styles.linkContact}">Contactez-nous</a>
          pour découvrir nos solutions.
        </p>
      </footer>
    </article>
  `
};
