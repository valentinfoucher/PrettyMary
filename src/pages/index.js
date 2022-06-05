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
