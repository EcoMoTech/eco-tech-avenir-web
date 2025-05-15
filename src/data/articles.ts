import { articleData as solarArticle } from './articles/avantages-energie-solaire';
import { articleData as batteryArticle } from './articles/stockage-energie-batterie';
import { articleData as lightingArticle } from './articles/eclairage-solaire-rural';
import { articleData as mobilityArticle } from './articles/mobilite-electrique-guinee';
import { articleData as sustainableArticle } from './articles/avantages-mobilite-durable';

export const articles = {
  [solarArticle.id]: solarArticle,
  [batteryArticle.id]: batteryArticle,
  [lightingArticle.id]: lightingArticle,
  [mobilityArticle.id]: mobilityArticle,
  [sustainableArticle.id]: sustainableArticle
};
