# Leaflet

> Cartographie web

La librairie [`leaflet.js`](https://leafletjs.com/) est un des plus utilisées pour la création de cartes interactives sur des sites web. Elle permet de créer des cartes avec des fonds de différentes sources (voir des exemple [ici](https://leaflet-extras.github.io/leaflet-providers/preview/)), et d'y ajouter différentes informations (marqueurs, formes géométriques, contours de régions d'intérêt, ...).

Ce document est basé sur le [tutoriel officiel](https://leafletjs.com/examples/quick-start/), ainsi que sur d'autres éléments. Les exemples ci-dessous ont été réalisés sur [Plunker](https://plnkr.co/), mais un développement en local (éditeur + navigateur) peut aussi être très intéressant.

## Première carte

Pour réaliser une carte avec cette librairie, il faut suivre plusieurs étapes :

1. Ajouter un lien vers la feuille de style fournie par `leaflet` dans l'en-tête de la page:
```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css">
```
1. Après cette ligne, il faut ajouter un lien vers le script :
```
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
```
1. Dans le corps du fichier HTML, il faut créer une `div` qui va accueillir la carte, en lui donnant un identifiant :
```
<div id = "mapid"></div>
```
1. Il faut aussi imposer une hauteur à cette `div`, en CSS : 
```
#mapid { height: 180px; }
```
1. Enfin, dans un script à exécuter après la définition de la `div`, il réaliser les étapes suivantes
    1. Créer une variable qui va pointer vers cette carte
    ```
    var mymap = L.map('mapid');
    ```
    1. Définir le centre de la carte et le niveau de zoom (ici, l'IUT avec une vision du quartier)
    ```
    mymap.setView([48.8418565, 2.2683], 15);
    ```
    1. Enfin, on doit indiquer quel fournisseur de tuiles on désire et l'ajouter à la carte (ici, on choisit [OpenStreetMap](https://www.openstreetmap.org))
    ```
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
    ```

Voici donc l'exemple en action. Vous noterez qu'il y a un ajout de référence à OpenStreetMap, avec la licence. Puisque nous utilisons ce service pour les tuiles, il est obligatoire d'y faire référence.

<iframe style="width: 100%; height: 500px"
        src="http://embed.plnkr.co/BelU4zfd8NWHARM2?show=preview" frameborder="0"
        allowfullscreen="allowfullscreen">
  Loading plunk...
</iframe>

## Ajout de marqueurs et de formes géométriques

Pour ajouter des éléments à une carte, il faut les créer à partir de l'objet `L` créé par la librairie, et les ajouter à la carte (en passant par la fonction `.addTo()` avec comme paramètre la variable stockant la carte).

Il est préférable de stocker le résultat dans une variable pour pouvoir accéder à ces formes plus tard (pour y ajouter des pop-ups, ou autres).

Dans l'exemple ci-dessous, nous créons les éléments suivants :

- un marqueur sur l'IUT, avec la fonction `marker()`, qui prend en paramètre le point où ajouter celui-ci
- un cercle autour de l 'IUT, avec la fonction `circle()`, celle-ci prenant en paramètre le centre du cercle, et en option la couleur (bleu par défaut sinon - comme le polygone), et le rayon en mètres
- un polygone représentant approximativement l'IUT avec la fonction `polygon()`

<iframe style="width: 100%; height: 500px"
        src="http://embed.plnkr.co/69sgEX?show=preview" frameborder="0"
        allowfullscreen="allowfullscreen">
  Loading plunk...
</iframe>



## Ajout de pop-ups

> Une **pop-up** est un élément d'informations qui apparaît généralement lors d'un clic. Il y a en général une seule pop-up ouverte à la fois.

On peut ajouter des pop-ups sur les éléments précédemment créés (marqueur, cercle et polygone dans notre cas). Il faut utiliser la variable stockant le résultat, et utiliser sa fonction `bindPopup()`. On passe en paramètre le contenu de la pop-up (qui peut être du code HTML comme vous pouvez le voir dans l'exemple). On peut forcer l'ouverture en utilisant la fonction `.openPopup()`.

Il est aussi possible de créer une pop-up seule, en utilisant la fonction `L.popup()`. On doit ainsi définir sa position, son contenu et l'ouvrir au chargement de la carte.

<iframe style="width: 100%; height: 500px"
        src="http://embed.plnkr.co/pmXm18?show=preview" frameborder="0"
        allowfullscreen="allowfullscreen">
  Loading plunk...
</iframe>

## Gestion des événements

Il est bien évidemment possible de gérer les événements sur la page (clic sur la carte, souris passant sur un élément, ...) avec la librairie `leaflet`. Pour cela, on utilise la fonction `on()` sur l'élément. Cette fonction prend deux paramètres :

- l'évément à surveiller (`'click'`, `'mouseover'`, ...)
- la fonction à appliquer, celle-ci prenant comme seul paramètre les informations fournies sur la souris (position du clic entre autres)

Dans l'exemple ci-dessous, lorsque la souris passe au dessus du polygone représentant l'IUT, une pop-up apparaît. On gère aussi la sortie de la souris du polygone (en enlevant la pop-up). De plus, lorsque l'utilisateur clique sur la carte, n'importe où, la même pop-up apparaît avec les coordonnées GPS de la position du clic.

<iframe style="width: 100%; height: 500px"
        src="http://embed.plnkr.co/WnvjQ3?show=preview" frameborder="0"
        allowfullscreen="allowfullscreen">
  Loading plunk...
</iframe>

## Données GeoJSON

Enfin, puisqu'on travaille sur des cartes, il est naturel de vouloir intégrer des données de type [`GeoJSON`](http://geojson.org/). Pour cela, il faut utiliser la fonction `geoJSON()`, qui prend en paramètre un objet simple (de type `Feature`) ou un ensemble d'objets (`FeatureCollection`).

Il e st souvent nécessaire de charger les données présentes dans un fichier spécifique. Nous pouvons utiliser la librairie `d3` que nous avons déjà vu (avec la fonction `d3.json()`).

Dans l'exemple ci-dessous, nous chargeons les contours des arrondissements parisiens. Nous ajoutons pour chaque arrondissement (avec le paramètre `onEachFeature`) une pop-up contenant le nom de l'arrondissement (présent dans le champ `l_ar`). Et nous définissons un style en fonction des propriétés des éléments (ici, différenciation des arrondissements de l'ultra-centre - 1, 2, 3 et 4).

<iframe style="width: 100%; height: 600px"
        src="http://embed.plnkr.co/o3XKca?show=preview" frameborder="0"
        allowfullscreen="allowfullscreen">
  Loading plunk...
</iframe>

## A faire

En se basant sur les notions vu précédemment, sur le [tutoriel sur les cartes choroplèthes](https://leafletjs.com/examples/choropleth/) et sur la base ci-dessous (réalisé sur un échantillon de 100 IRIS), vous devez réaliser une carte du Grand Paris, avec des [informations au niveau des IRIS](https://public.opendatasoft.com/explore/dataset/iris-logement-habitat/information/). Voici les contraintes :

- Couleur des IRIS en fonction de la part de logements principaux (cf [définition des données](https://www.apur.org/open_data/INSEE_IRIS_VARIABLES.pdf))
- Légende des couleurs à ajouter
- Zoom à bloquer dans une certaine plage (on ne doit pas voir plus que le Grand Paris)
- Informations à afficher lorsque la souris est sur un IRIS :
    - Nom de l'IRIS (en gras)
    - Nom de l'arrondissement
    - Type de l'IRIS
    - Nombre de logements
    - Nombre de résidences principales
- Pour les plus motivés, on peut aussi faire :
    - choix de l'indice pour les couleurs (au choix)
    - diagramme circulaire dans l'information sur la répartition des types de résidences

<iframe style="width: 100%; height: 800px"
        src="http://embed.plnkr.co/gR1EdR?show=preview" frameborder="0"
        allowfullscreen="allowfullscreen">
  Loading plunk...
</iframe>


