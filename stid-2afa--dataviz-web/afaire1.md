# Exercices HTML, CSS, JS

Nous allons utiliser le site [codepen.io](https://codepen.io) pour créer nos pages web. Si vous souhaitez vous amuser avec les couleurs, vous pouvez visiter ce [site](http://www.colors.commutercreative.com/) pour connaître les noms des couleurs nommées (sinon, vous pouvez toujours utiliser le code hexadécimal, cf cette [page](https://www.hexcolortool.com/))

## HTML

1. Créer un nouveau **pen**
1. Ajouter "Essai en HTML, CSS et JS" comme titre de niveau 1 (balise `<h1>` avec comme identifiant `titre`)
1. Ecrire un paragraphe (baliste `<p>`) expliquant le motif du document et dans lequel vous précisez le lien vers cette page
    - Idéalement, le lien doit s'ouvrir dans une autre page (cf le paramètre `target`)
1. Ecrire une liste ordonnée des semestres du DUT et dans chaque semestre, une liste non ordonnée des UEs (en vous aidant de cette [page](http://stid-france.fr/?page_id=20) si besoin)
1. Ecrire un autre titre de niveau 1 ("Volume horaire")
1. Ecrire les informations précédentes sous la forme d'un tableau (idéalement avec les volums horaires de chaque UE - avec ce [document](http://cache.media.enseignementsup-recherche.gouv.fr/file/24/23/5/PPN_STID_255235.pdf))

## CSS

1. Modifier, pour toute la page, la couleur du texte (en blanc) et du fond (en `darkslategray`)
1. Modifier, pour le titre de niveau 1 : 
    - les marges (`margin`) à 10 pixels (toutes)
    - la couleur (en `lightgray`)
1. Pour les liens URL, 
    - supprimer le soulignement (`text-decoration`)
    - changer la couleur (en `lightgray`)
    - mettre en gras (`font-weight`)
    - changer la couleur quand on passe la souris dessus (en `gray`)
1. Pour les listes ordonnées,
    - changer les numéros pour les chiffres romains (I, II, III, ... - voir `list-style-type`)
    - mettre un fond de couleur (en `gray`)
1. Pour les listes non ordonnées,
    - changer les puces pour ne pas en avoir
    - mettre un fond de couleur (en `black`)
1. Pour tous les items de liste
    - mettre une marge à gauche de 10 pixels (`margin-left`)
1. Pour le tableau
    - le centrer sur la page (cf `margin`)
    - lui donner une largeur de 600 pixels (`width`)
    - mettre une couleur de fond (en `lightslategray`)
    - mettre une autre couleur de fond pour la première ligne d'en-tête (en `slategray`)
    - aligner à droite la dernière colonne (regarder `last-child` d'une part et `text-align`)
    - changer la couleur de fond des lignes (en `darkgrey` pour les paires et `dimgrey` les impaires - regarder `nth-child`)
    - mettre une bordure (`border` - 1 pixel et noire) lorsque la souris passe au dessus d'une cellule

## JS

1. Créer une variable `a`, lui affecter une valeur (5) et l'afficher dans la console (`console.log()`)
1. Sélectionner le premier titre de niveau 1 (`document.getElementById()`) et afficher son contenu dans la console (`innerHTML`)
1. Sélectionner maintenant tous les titres de niveau 1 (`document.getElementsByTagName()`)
    - afficher la taille du tableau obtenu (`length`)
    - faire une boucle pour afficher le contenu HTML de chaque titre (`for`)
1. Créer un suivi d'évènements (`addEventListener()`) sur le premier titre, qui affiche "clic" dans la console lorsqu'on clique dessus
1. Ajouter un titre ("Logiciels") et une liste non ordonnée en fin de partie HTML, avec comme identifiant "logiciels" (elle est vide pour le moment)
1. Créer un tableau avec les valeurs suivantes : "R", "SAS", "python", "explore-data", "Tableau", "SPAD", "SQL"
1. Faire une boucle sur chaque élément du tableau (`forEach()`) dans laquelle vous allez créer un item de liste (`document.createElement()`), lui donner valeur le nom du logiciel et l'ajouter à la liste (`appendChild()`)
    - Modifier le CSS pour que les noms soit en noir sur blanc, centrés et avec une bordure en `darkred` (`border`)
    - Il faut aussi que les éléments soient les uns à côté des autres (`display`) et de largeur fixe pour qu'il y en ait 4 par ligne
