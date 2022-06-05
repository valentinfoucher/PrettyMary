<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Barcadia V2 Starter
</h1>

[Version 2 Release Notes](https://www.morganbaker.dev/journal/barcadia-v2-release-notes)

Barcadia is a GatsbyJS starter theme that uses Contentful for content management. It includes the main configuration files found in Gatsby.

## Getting started

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the Barcadia starter.

    ```shell
    # create a new Gatsby site using the barcadia starter
    gatsby new my-barcadia-starter https://github.com/bagseye/barcadia
    ```

2.  **Before running Gatsby Develop**

    You'll need to setup a free account with Contentful [Here](https://www.contentful.com/) and create a space ID and access token for your new site.

    Once these are generated create a new file in the site root called `.env.development` and populate it with the following information:

    ```
    CONTENTFUL_SPACE_ID={YOUR SPACE ID}
    CONTENTFUL_ACCESS_TOKEN={YOUR ACCESS TOKEN}
    ```

    **NOTE** - Ensure this file has been added to your `.gitignore` to prevent it from being tracked

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-barcadia-starter/
    gatsby develop
    ```

4.  **Import Content-model.json on Contentful**
    Make a Json file(e.g. example-config.json) with the following content.

    ```
    {
      "spaceId": "SPACE_ID",
      "managementToken": "Generate a management token from the APIs Tab on contentful dashboard",
      "contentFile": "content-model.json"
     }
    ```

    Important Note: you need contentful globally installed(`npm i -g contentful-cli`) before the next step
    Then Run this Command from your terminal:
    `contentful space import --config example-config.json`

5.  **Open your site**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-barcadia-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

6.  **Build your site**

    When you are ready to build your production site, you will need to create a `.env.production` file that will contain the `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` environment variables. After that is set up, you can run `npm run build` or `gatsby build` and Gatsby will build your site.

## CMS Content Model

    Follow the steps for importing data with Contentful [Here](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export) using the example file `content-model.json`, found in the site root.

## 🧐 What's inside?

A quick look at the top-level files and directories
.
├── node_modules
├── src
├── .gitignore
├── .prettierignore
├── .prettierrc
├── content-model.json
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->

#### Photo Credits

[Ales Nesetril](https://unsplash.com/@alesnesetril)
[Josh Rose](https://unsplash.com/@joshsrose)
[Cat Han](https://unsplash.com/@figmentprints)
[Martin Sanchez](https://unsplash.com/@martinsanchez)
[Onur Binay](https://unsplash.com/@onurbinay)
[Torsten Dettlaff](https://www.pexels.com/@tdcat)
[Nick Demou](https://www.pexels.com/@nick-demou-365778)
[Little John](https://unsplash.com/@joao_freire)



LE PASSÉ :

Pretty Mary a été dessiné et construit en 1947 par le chantier JOUET à Sartrouville, sur des
plans Sparkman et Stephens (New-York / USA). Jean Castel, roi des nuits parisiennes et
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
depuis 2013

LE FUTUR :

Pretty-Mary s’est depuis des années endormi dans le vieux port de Menton.
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
Mât (18 mètres) et bôme : Spruce

TRAVAUX A EFFECTUER :

- Sortie de l’eau et démâtage pour transport au chantier
- Réparation du mât, changement des barres se flèche et de l’accastillage de mât.
- Raccourcissement de la bôme et changement de son accastillage.
- Dépose du cockpit actuel pour réparation de la quille.
- Changement du moteur.
- Réparation d’une vingtaine de nervures de coque.
- Reconstruction du cockpit suivant les plans d’origine et le modèle OHO
- Rétablissement d’une barre franche.
- Rétablissement du plan de pont d’origine.
- Intégration des équipements de navigation.
- Réfection totale de l’électricité.
- Aménagements intérieurs

CONTACTEZ-NOUS :
Si vous disposez de photos, plans, documents, informations ou anecdotes concernant Pretty
Mary (ou Lotte II), nous vous saurions infiniment gré de nous contacter.
Adresse mail : ???

ACTUALITÉ :
Pretty Mary est encore visible avant son départ en chantier quai de l’Impératrice Eugénie sur
le vieux port de Menton à la place Y54
(photo de pretty Mary à sa place de port)
A bord de OHO (petite vidéo)