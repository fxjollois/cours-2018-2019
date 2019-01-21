name: inverse
layout: true
class: center, middle, inverse

---
# HTML et CSS pour la dataviz

Premiers éléments du web, dans un contexte visualisation de données

---
layout: false
.left-column[
## HTML
]
.right-column[
- Comme Python, R et SQL, il est **interprété**

- Indépendant de la plateforme (type de machine, système d’exploitation, version, ...)

- Différent des langages de type `VB` par exemple car il est **à balises**

- Deux types de balises
    -   des balises qui englobent un texte : `<balise> ... </balise>` ;
    -   des balises uniques : `<balise ... >` (il est souvent nécessaire d’ajouter des paramètres à cette balise)
    
- **Idée générale** : séparer les éléments
    - Contenu (HTML)
    - Contenant (CSS pour la forme)
    - Fonctionnalités supplémentaires (Javascript)
    
- Langage permissif : nécessité (dans l'idéal) de valider le code via un validateur
    - W3C (<http://validator.w3.org/>) 
    - Autre (par exemple <http://html5.validator.nu/>)
]
 
---
.left-column[
## Première page web
]
.right-column[
Structure type :
```html
<!doctype html>
<html>
    <head></head>
    <body></body>
</html>
```

1ère ligne : Déclaration du type de son contenu avec `<!doctype ...>` (ici, du code HTML5 donc)

- si absence de cette déclaration, le navigateur utilisera sa propre procédure de traitement

Toute balise ouvrante (`<balise>`) a sa version fermante (`</balise>`)

- Attention à l’imbrication des balises (éviter  `<a>...<b>... </a>...</b>`)

Deux parties importantes :

- l’**en-tête** (balise `head`) : informations sur la page
- le **corps** (`body`) : contenu de la page
]

---
.left-column[
## En-tête du document
]
.right-column[
- A déclarer dans la balise `<head> .. </head>`

- Informations relatives au document :
    -   **Titre** dans la balise `<title> ... </title>` (dans la barre de titre du navigateur et/ou des onglets);
    -   Déclarations de style CSS ;
    -   Fonctions Javascript ;
    -   Informations pour le référencement de la page ;
    -   L'encodage du document (idéalement UTF-8) avec la balise `<meta charset="encodage">` ;
    -   ...

- Nouveau code
```html
<!doctype html>
<html>
    <head>
        <title>Première page web</title>
        <meta charset="utf-8">
    </head>
    <body></body>
</html>
```
]

---
.left-column[
## Structuration du texte

.footnote[*Nous abordons ici seulement quelques éléments de structuration du texte, utiles pour la dataviz.*]
]
.right-column[
**Idée globale** :

- Texte structuré dans le code HTML (paragraphe, liste, tableau, ...)
- Mise en forme (couleur, police, placement, ...) dans le code CSS

Balises spécifiques permettant de donner un sens au contenu de celles-ci 

2 type d’éléments (ou de divisions) en HTML :

-   Divisions en bloc, qui par défaut prennent la largeur complète de la page et se placent les unes au-dessous des autres, qu’on peut définir avec `<div> ... </div>` (ou d'autres ayant un comportement similaire) ;
-   Divisions en ligne qui se mettent sur la même ligne, qu’on définit avec `<span> ... </span>` (idem).

<style>
    .encadre { border: 1px solid black; padding: 10px; margin: 0px; }
    span.encadre { padding: 5px; margin: 5px; }
</style>

<div class="encadre">
    div
    <div class="encadre">
        div avec un <span class="encadre">span</span> dans la ligne
    </div>
</div>

Il faut bien noter que ces comportements peuvent être totalement modifiés à l'aide du CSS, comme nous le verrons plus tard.
]

---
.left-column[
## Quelques balises
]
.right-column[
Un <strong>mot</strong> très important, un <em>autre</em> moins
```html
Un <strong>mot</strong> très important, un <em>autre</em> moins
```

Un <a href="http://fxjollois.github.io">lien</a> vers un super site
```html
Un <a href="http://fxjollois.github.io">lien</a> vers un super site
```

<ul>
    <li>Premier élément d'une liste non ordonnée</li>
    <li>Deuxième, avec une sous-liste ordonnée par contre
        <ol>
            <li>1er truc</li>
            <li>2eme truc</li>
        </ol>
    </li>
</ul>
```html
<ul>
    <li>Premier élément d'une liste non ordonnée</li>
    <li>Deuxième, avec une sous-liste ordonnée par contre
        <ol>
            <li>1er truc</li>
            <li>2eme truc</li>
        </ol>
    </li>
</ul>
```
]

---
.left-column[
## Quelques balises
]
.right-column[
<table>
    <tr>
        <th>Truc</th>
        <th>Bidule</th>
    </tr>
    <tr>
        <td>A</td>
        <td>21</td>
    </tr>
    <tr>
        <td>B</td>
        <td>12</td>
    </tr>
    <tr>
        <td>C</td>
        <td>11</td>
    </tr>
</table>
```html
<table>
    <tr>
        <th>Truc</th>
        <th>Bidule</th>
    </tr>
    <tr>
        <td>A</td>
        <td>21</td>
    </tr>
    <tr>
        <td>B</td>
        <td>12</td>
    </tr>
    <tr>
        <td>C</td>
        <td>11</td>
    </tr>
</table>
```
]

---
.left-column[
## Quelques balises
]
.right-column[
<svg width = 400 height = 100>
    <rect x = 0 y = 0 width = 100 height = 100 fill = "orange"></rect>
    <rect x = 100 y = 0 width = 300 height = 100 fill = "steelblue"></rect>
    <g transform="translate(50, 50)">
        <rect x = 0 y = 0 width = 50 height = 50 fill = "red"></rect>
    </g>
</svg>
```html
<svg width = 400 height = 100>
    <rect x = 0 y = 0 width = 100 height = 100 fill = "orange"></rect>
    <rect x = 100 y = 0 width = 300 height = 100 fill = "steelblue"></rect>
    <g transform="translate(50, 50)">
        <rect x = 0 y = 0 width = 50 height = 50 fill = "red"></rect>
    </g>
</svg>
```
]

---
.left-column[
## CSS
]
.right-column[
Langage de déclaration de style :

-   directement dans certaines balises dans le corps du fichier avec le paramètre `style = "declaration de style"`, mais ceci n’est pas à conforme à l’esprit de HTML

-   pour une déclaration globale directement dans l’en-tête du document :

        <style>
        declaration de style
        </style>

-   pour l’utilisation d’un fichier CSS :

        <link rel ="stylesheet" href = "fichier.css">
]


---
.left-column[
## CSS
]
.right-column[
On modifie une propriété avec une commande du style `propriete: valeur;`, où

-   `propriete` : propriété qu’on souhaite modifier (couleur, alignement, bordure, ...)

-   `valeur` : valeur qu’on souhaite affecter à la propriété (mot-clé, pourcentage, valeur numérique)

-   Attention au `:` et au `;`

<style>
    strong { color: red; }
    em { color: slategrey; }
</style>
Voici un <strong>exemple</strong> de changement de <em>style</em>.
```html
<style>
    strong { color: red; font-size: 20pt; }
    em { text-decoration: underline overline; }
</style>
Voici un <strong>exemple</strong> de changement de <em>style</em>.
```
]

---
.left-column[
## Sélecteurs
]
.right-column[
Modifications possibles pour les balises HTML et aussi pour ce qu’on appelle des sélecteurs

Définition de **classes** : pour attribuer un style à un sous-ensemble d’éléments 

- Par exemple, texte en rouge
    - HTML : `<balise class="texte_rouge">Mon texte</balise>`
    - CSS :
```css
.texte_rouge {
    color: red;
}
```

Définition d'**identifiants** : ne concerne qu'**un seul** élément (normalement)

- Même exemple
    - HTML : `<balise id="montexte">Mon texte</balise>`
    - CSS :
```css
#montexte {
    color: red;
}
```
]

---
## Quelques propriétés usuelles (parmi beaucoup) :

-   `color` : couleur

-   `background` : déclaration globale pour toutes les propriétés de l’arrière-plan

-   `background-color` : couleur d’arrière-plan

-   `position` : type de position (`static / relative / absolute / fixed`), qu’on pourra utiliser conjointement avec `left / top / right / bottom`

-   `width / height` : largeur et hauteur (en pixels, en cm ou en mm)

-   `z-index` : ordre d’affichage de l’élément (un élément est au-dessus d’un autre si son z-index est supérieur), ne fonctionne que sur les éléments positionnés (`position:absolute`, `position:relative`, ou `position:fixed`).

-   `visibility` : élément visible ou non

-   `text-align` : alignement (centré, justifié, à droite, à gauche)

-   `font` : déclaration globale pour toutes les propriétés des polices d’écriture

-   `font-family` : police à utiliser

-   `font-size` : taille de la police

---
.left-column[
## Javascript (JS)
]
.right-column[
Langage classique : le seul utilisable pour une page web

Trois possibilités de déclaration de commandes `JavaScript` :

-   dans le document (partie `<head>` ou `<body>`) :

        <script>
        ...
        </script>

-   dans un fichier :

        <script src="fichier.js"></script>
    
    - le fichier peut être distant (c'est le cas pour les librairies)
]

---
.left-column[
## Javascript (JS)
]
.right-column[
- Typage faible et portée classique : 
    - type défini lors de la création ou de l'affectation
    - dans une fonction, si pas d'utilisation du mot-clé `var` : variable globale

- Syntaxe complète disponible  sur [cette page](https://fr.wikipedia.org/wiki/Syntaxe_JavaScript) (entre autres)

- Notion d’objet : ensemble de propriétés (variables avec valeurs) et de méthodes (fonctions ou procédures) regroupées dans une même entité

- Quelques objets particuliers :
    - `document` : la page lue
    - `window` : la fenêtre du navigateur
    
- Gestion des événements en `JavaScript` :
    - Définition d'interaction
    - Evénements courants : `onclick`, `onload`, `ondblclick`, `onchange`, `onmouseover`, `onreset`, `onselect`, ...
]

    