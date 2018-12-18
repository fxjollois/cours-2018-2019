---
title: HTML et CSS
subtitle: Premiers éléments du web
---

Nous allons voir ici une introduction aux éléments suivants :

-   `HTML`5 : pour la description du contenu des pages ;
-   `CSS`3 : pour la description de la mise en forme des pages.

`HTML`5 est différent des langages de type `VB` par exemple, car il est **interprété** : le script est lu est directement *exécuté* (si on peut dire), sans passer par une phase de compilation. Ceci a pour avantage immédiat qu’il est donc indépendant de la plateforme (type de machine, système d’exploitation, version, ...) sur laquelle on l’utilise. Il a pour inconvénient d’être moins rapide à être exécuter. Voici d’autres exemples de langages interprétés que vous serez amenés à rencontrer : `SAS`, `R`, `SQL`, `VBA` (sous Excel ou Access).

Ensuite, `HTML`5 est différent des langages de type `VB` car il est **à balises** : les commandes sont définies dans des balises et servent à caractériser du texte, soit sur la forme qu'il doit prendre (gras, italique, ...), soit sur ce qu’il représente (titre, paragraphe, ...). Elles servent aussi à intégrer des objets (image, formulaire de saisie, ...). Ces balises sont reconnues par les navigateurs par les symboles `<` et `>`. On a alors deux types de balises

-   des balises qui englobent un texte : `<balise> ... </balise>` ;
-   des balises uniques : `<balise ... >` (il est souvent nécessaire d’ajouter des paramètres à cette balise)

Bien qu’il soit possible de tout faire dans un seul code `HTML`, l’idée général est de maintenant séparé le contenu (dans le script `HTML`) et le contenant (dans le script `CSS`pour la forme, et dans les scripts pour les fonctionnalités supplémentaires `JavaScript`ou autre). Cela a pour but de pouvoir adapter l’affichage à toutes les interfaces possibles (ordinateur classique, tablette, téléphone), et à toutes les contraintes possibles (affichage particulier pour déficients visuels par exemple).

Donc pour une page web, on aura un fichier avec le code `HTML`, une ou plusieurs feuilles de style `CSS` pour définir les choix de couleurs, tailles et autres, et un ou plusieurs scripts `JavaScript` pour les fonctionnalités supplémentaires si besoin.

La représentation visuelle de votre page n’est pas l’unique moyen de vérifier son code. Il est nécessaire de le faire valider via un validateur tel que celui du W3C (<http://validator.w3.org/>) ou autre (par exemple <http://html5.validator.nu/>, sur lequel est basé celui du W3C). Par ce biais, vous aurez de plus un retour sur les erreurs ou les avertissements rencontrés lors de la validation.

## Première page web

Une page web simple a une structure de ce type :

```
<!doctype html>
<html>
    <head></head>
    <body></body>
</html>
```

Le document commence sur la première ligne par la déclaration du type de son contenu avec `<!doctype ...>` (ici, du code `HTML`5 donc). En l’absence de cette déclaration sur la première ligne (avec par exemple une ligne vide), le navigateur utilisera sa propre procédure de traitement des commandes `HTML` et cela pourrait affecter grandement le rendu visuel et opérationnel de la page.

Toute balise ouvrante (`<balise>`) a sa version fermante (`</balise>`). Même si certains navigateurs sont plutôt permissifs, il est primordial de faire en sorte de respecter ces règles, afin d’éviter d’avoir des mauvaises surprises lors de la visualisation de votre page sur un navigateur non permissif. Il faut faire attention à l’imbrication des balises et éviter les chevauchement (i.e. `<a>...<b>... </a>...</b>`).

La balise `html` indique le début et la fin du code `HTML`. Il y a deux parties importantes dans un document `HTML` : 

- l’en-tête (déclarée via la balise `head`, et qui va donner des informations sur la page)
- le corps (déclarée par la balise `body`, et qui va donner le contenu de la page).

### En-tête du document

Comme indiqué ci-dessus, la balise `<head> .. </head>` sert à définir ce qu’on appelle l’en-tête de la page. Dans celui-ci sera défini une série d’informations relatives au document :

-   Le titre dans la balise `<title> ... </title>` ;
-   Des déclarations de style `CSS`, ou un appel à une feuille de style `CSS`, que nous verrons par la suite ;
-   Des fonctions `JavaScript`, ou un appel à un script `JavaScript`, que nous verrons aussi par la suite ;
-   Des informations utiles pour le référencement de la page par les moteurs de recherche ;
-   Des informations utiles pour le traitement de la page par les navigateurs ;
-   ...

Le titre est celui qui va s’afficher dans la barre de titre du navigateur et/ou des onglets. C’est la seule balise obligatoire d’une page web. Elle est utilisée par les moteurs de recherche.

Il est possible aussi de définit l’encodage du document. C’est un point souvent problématique que ce soit sur les pages internet ou sur les courriels par exemple (qui n’a jamais eu de courriel avec des signes étranges de type Å&copy;). Ceci est particulièrement vrai pour le français avec les caractères accentués. Il existe différents encodages : `ASCII`, `windows-1252`, `ISO-8859-1`, `ISO-8859-15`, `UTF-8`, ... L’encodage d’un document est donc assez primordial en `HTML`, et se déclare avec la balise `<meta charset="encodage">`. Préférez si possible l’`UTF-8` ou le `ISO-8859-1` pour un maximum de compatibilité.

Notre code va donc ressembler à ceci après ajout des informations telles que titre et encodage :

```
<!doctype html>
<html>
    <head>
        <title>Première page web</title>
        <meta charset="utf-8">
    </head>
    <body></body>
</html>
```

Vous remarquerez que le titre est affiché dans la barre de titre du navigateur, mais que le contenu est toujours vide.

### Structuration du texte

L'idée globale en HTML5 est d'avoir le texte structuré dans le code HTML (paragraphe, liste, tableau, ...), et la mise en forme (couleur, police, placement, ...) dans le code CSS. Il existe des balises permettant de donner un sens au contenu de celles-ci (`<nav>` pour un menu, `<header>` pour un en-tête de page/section/article, ...). Nous abordons ici seulement quelques éléments de structuration du texte, utiles pour la dataviz.

Globalement, il existe 2 type d’éléments (ou de divisions) en `HTML` :

-   Les divisions en bloc, qui par défaut prennent la largeur complète de la page et se placent les unes au-dessous des autres, qu’on peut définir avec `<div> ... </div>` (ou d'autres ayant un comportement similaire) ;
-   Et les divisions en ligne qui se mettent sur la même ligne, qu’on définit avec `<span> ... </span>` (idem).

Il faut bien noter que ces comportements peuvent être totalement modifiés à l'aide du CSS, comme nous le verrons plus tard.

Dans ce [fichier](exemple1.html) (à ouvrir dans un navigateur + dans un éditeur de texte), nous voyons différents élements décrits ci-dessous :

- `<header> ... </header>` : en-tête de page ou de section
- `<nav> ... </nav>` : navigation
- `<hx> ... </hx>` (avec x = 1, 2, …, 6) : permet de définir un titre ou un sous-titre (important pour le référencement) ;
- `<ul> ... </ul>` : permet de définir une liste non-ordonnée (`<ol>` pour une liste ordonnée)
    - `<li> ... </li>` : permet de définir les éléments d’une liste (ordonnée ou non) ;
- `<a href = ""> ... </a>` : lien hypertexte (sur une autre URL - page web ou fichier - ou un élément de la page)
- `<section> ... </section>` : section d'une page
- `<table> ... </table>` : tableau
    - `<tr> ... </tr>` : ligne d'un tableau
    - `<th> ... </th>` : en-tête d'une colonne d'un tableau
    - `<td> ... </td>` : cellule d'un tableau
- `<svg> ... </svg>` : graphique vectoriel
    - `<rect> ... </rect>` : rectangle 

