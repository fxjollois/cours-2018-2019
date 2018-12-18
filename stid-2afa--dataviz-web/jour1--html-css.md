

CSS
===

Trois possibilités de déclaration de style :

-   directement dans certaines balises dans le corps du fichier avec le paramètre `style = "declaration de style"`, mais ceci n’est pas à conforme à l’esprit de `HTML`5

-   pour une déclaration globale directement dans l’en-tête du document :

        <style>
        declaration de style
        </style>

-   pour l’utilisation d’un fichier CSS :

        <link rel="stylesheet" href="fichier.css">

On modifie une propriété avec une commande du style `propriete: valeur;`, où

-   `propriete` : propriété qu’on souhaite modifier (couleur, alignement, bordure, …)

-   `valeur` : valeur qu’on souhaite affecter à la propriété (mot-clé, pourcentage, valeur numérique)

-   Attention au `:` et au `;`

Ces modifications doivent être faite pour ce qu’on appelle des sélecteurs :

-   on peut définir des classes lorsqu’on souhaite attribuer un style à un sous-ensemble d’éléments de la même balise (mais pas tous). Par exemple, on souhaite spécifier pour certains textes dans les balises `strong` que celui-ci sera en rouge. Dans le fichier `HTML`, on indiquera `<strong class="texte_rouge">Mon texte</strong>`, et dans le `CSS`, on aura :

        .texte_rouge {
            color: red;
        }

-   on peut aussi définir des identifiants, avec un concept proche des classes, mais avec la possibilité d’accéder au contenu de la balise via du code `JavaScript`, comme on le verra par la suite. Pour un effet de même type que l’exemple précédent, dans le fichier `HTML`, on aura `<strong id="str1">Mon texte</strong>`, et dans le `CSS`, on aura :

        #str1 {
            color: red;
        }

Quelques propriétés usuelles (parmi beaucoup) :

-   `color` : couleur

-   `background` : déclaration globale pour toutes les propriétés de l’arrière-plan

-   `background-color` : couleur d’arrière-plan

-   `background-image` : image d’arrière-plan

-   `position` : type de position (`static / relative / absolute / fixed`), qu’on pourra utiliser conjointement avec `left / top / right / bottom`

-   `width / height` : largeur et hauteur (en pixels, en cm ou en mm)

-   `z-index` : ordre d’affichage de l’élément (un élément est au-dessus d’un autre si son z-index est supérieur), ne fonctionne que sur les éléments positionnés (`position:absolute`, `position:relative`, ou `position:fixed`).

-   `visibility` : élément visible ou non

-   `text-align` : alignement (centré, justifié, à droite, à gauche)

-   `font` : déclaration globale pour toutes les propriétés des polices d’écriture

-   `font-family` : police à utiliser

-   `font-size` : taille de la police

-   …




