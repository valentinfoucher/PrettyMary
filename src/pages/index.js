import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Pretty Mary"
          subTitle="Un plan Sparkman & Stephens de 1947 basé à Menton"
        />
        <BasicTextModule
          title="Un plan Sparkman & Stephens de 1947 basé à Menton"
          content="Pretty Mary a été dessiné et construit en 1947 par le chantier JOUET à Sartrouville, sur des
          plans Sparkman et Stephens (New-York / USA). 
          Jean Castel, roi des nuits parisiennes et
          azuréennes, pour qui le bateau fût initialement construit l’avait alors baptisé « Lotte II » du
          prénom de sa première épouse.
          
          La conception générale de Pretty Mary, sa carène, son gréement, son plan de voilure, le
          destinent tout particulièrement à la régate. Jean Castel décide, dès l’origine de la
          construction, de doter Lotte II d’un « beaupré » de deux mètres, pour qu’il puisse porter plus
          de toile, contre l’avis de Olin Stephens, ce qui occasionnera des frictions entre les différentes
          parties au projet (propos recueillis par Yves Bosio auprès de Jean Castel)
          Aucune photo ou archive de cette époque ne sont parvenues jusqu’à nous, nous ignorons
          également à quelle date et dans quelles conditions, Jean Castel, futur propriétaire de Sincerity,
          se séparera de Lotte II
          Lotte II, refait surface dans les années 1970, dans le port de Menton, son mât a été raccourci
          de 6 mètres, il est en piètre état. Il est la propriété d’un jeune couple ayant investi dans un
          hôtel à restaurer dans l’arrière-pays. Yves Bosio, artiste emblématique mentonnais, en fera
          l’acquisition en 1988 et le rebaptisera Pretty Mary du prénom de son épouse, rallongera son
          mât et le préservera en état de fonctionnement jusqu’en 2022 où il le cèdera à ses nouveaux
          propriétaires.
          Pretty Mary est un petit bijou de l’histoire maritime française et plus spécifiquement
          mentonnaise. Il figure en bonne place depuis une cinquantaine d’année dans le vieux port de
          Menton.
          
          Pretty Mary est classé Bateau d’intérêt patrimonial par arrêté du ministère de la culture
          depuis 2013."
          
          //link="/products"
          //linkText="View Products"

        />
        <BasicTextModule
          content="Pretty-Mary s’est depuis des années endormi dans le vieux port de Menton.
          Son futur proche va consister en une rénovation totale destinée à lui rendre un lustre
          proche de ce qui était le sien en 1947.
          Nous espérons pouvoir naviguer à nouveau dans des conditions de sécurité satisfaisantes
          dès l’automne 2022.
          Nous aimerions participer aux régates classiques en méditerranée au cours de la saison
          2023.
          Nous disposons pour ce faire de l’exemple de OHO, sistership de Pretty Mary construit au
          Canada en 1948, qui après avoir été rénové dans les années 2000 en méditerranée, navigue
          dorénavant à Brouwershaven aux Pays-Bas. OHO est en excellent état de conservation.
          Marc et Karin leurs propriétaires nous ont gentiment invités à leur bord pour mesurer,
          photographier, dessiner, en bref pour documenter notre dossier de travaux à effectuer.
          Pretty Mary en quelques mots et chiffres :
          Longueur de coque hors tout : 12 mètres
          Longueur à la flottaison : 9,10 mètres
          Maître bau : 2,46 mètres
          Tirant d’eau : 1,90 mètres
          Quille : Chêne
          Nervures : Acacia
          Bordées : Teck
          Pont : Teck sur barreaux
          Mât (18 mètres) et bôme : Spruce"
        />
        <BasicTextModule
          content=" 
          Si vous disposez de photos, plans, documents, informations ou anecdotes concernant Pretty
Mary (ou Lotte II), nous vous saurions infiniment gré de nous contacter.valentinfoucher93+prettymary@gmail.com"
        />
        {/* <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule> */}
        {/* <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        /> */}
        {/* <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        /> */}
      </Layout>
    </>
  )
}

export default Index
