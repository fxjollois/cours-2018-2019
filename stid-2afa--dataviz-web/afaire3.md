# Exercice JS, `d3`

Nous allons travailler sur les données issues du site [swapi](https://swapi.co/), permettant de récupérer les informations sur les films de la sage **Star Wars**.

Pour comprendre cette API, vous pouvez faire des essais sur le site. Le premier terme après l'URL `https://swapi.co/api/` est le type d'informations voulues (`people` pour les personnages, `planets`, `starships`, `vehicles`, `films`, `species`). Le second (optionnel) est pour spécifier une entité particulière (1 pour le premier objet, et ainsi de suite).

Par exemple, la requête <https://swapi.co/api/films/1/> permet de récupérer le premier film dans la liste, et la requête <https://swapi.co/api/films/> permet de tous les récupérer. L'objet retourné est bien un JSON, à lire par exemple avec la fonction `d3.json()`.

## Demande

- Créer une page web, avec les contraintes suivantes
    - Titre d'onglet : "Star wars viz"
    - Encodage en UTF-8
    - Titre de la page : "Star wars : dataviz"
    - Style de la page :
        - fond gris foncé, écriture en blanc
        - titre en jaune, centré, taille de `2em`, sur un fond noir
        - police d'écriture [`Roboto`](https://fonts.google.com/specimen/Roboto) pour toute la page
        - largeur de page d'environ 80% de la fenêtre
    - Prévoir les éléments suivants
        - un tableau listant les films (balise `table` donc)
        - un frise chronologique pointant chaque sortie de film (`div` ici)
        - un nuage de points détaillant les planètes (idem)
        - une heatmap croisant les personnages en lignes et les films en colonnes (idem)

- Créer le tableau ayant cette base
    - En-tête en gras, écrit en noir sur fond blanc
    - Couleurs alternées pour l'arrière-plan des lignes (gris très clair et gris clair)
    - Tableau centré dans la page

| # | Titre | Directeur | Producteur | Date de sortie |
|---|-------|-----------|------------|----------------|
| - | -     | -         | -          | -              |

- Créer une frise chronologique
    - (il n'y a que 7 films ici donc l'appel global renvoie tout)
    - Axe temporel des dates en $X$, tout sur le même plan en $Y$
    - Couleurs au choix
    - Marqueur (cercle par exemple) pour chaque film
        - Titre du film au dessus du marqueur
        - Action quand la souris passe sur le marqueur
            - Grossissement du point et changement de couleur
            - Affichage de la date de sortie
            - (bonus) défilement du texte d'ouverture (`opening_crawl`) dans le style Star Wars (si vous ne connaissez pas, aller faire un tour sur YT)

- Créer un nuage de points sur les planètes
    - (il y a 61 planètes, un appel global en renvoie 10, il faut donc faire 7 appels - cf `next`)
        - voici [un code](https://embed.plnkr.co/oyyZhkw1isvMwdX33zZ2/) pour vous aider
        - si vous n'y arrivez pas, n'oubliez qu'il existe les commandes Ctrl+C/Ctrl+V et des éditeurs de textes
    - Diamètre en $X$, et nombre d'habitants en $Y$ (`population` - prévoir une échelle logarithmique a priori)
    - Couleur en fonction de la part d'eau à la surface (`surface_water`)
    - (bonus) Taille du point en fonction de la gravité (première valeur trouvée uniquement)
    - Action quand la souris passe sur un point
        - Affichage des informations dans une bulle d'informations
            - Nom
            - Climat
            - Nombre de films où elle apparaît
            - Nombre de résidents connus dans la saga

- Créer une heatmap indiquant quel personnage est présent dans quel film
    - (idem que pour les planètes)
    - Personnages en $X$, films en $Y$ (les noms des deux doivent être bien lisibles)
    - Rectangle de couleur (jaune par exemple) si le personnage apparaît dans le film, et rien sinon
    - Action quand la souris passe sur un personnage
        - Fiche d'information avec 
            - Nom
            - Taille, poids, couleurs des yeux/cheveux/peau, genre
            - Planète d'origine
            - Espèce
    - (bonus) Quand la souris passe sur un film, mise en valeur (au choix) des personnages du film
