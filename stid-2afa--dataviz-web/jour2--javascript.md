---
title: JavaScript
subtitle: Programmation web
---

Trois possibilités de déclaration de commandes
`JavaScript` dans l’en-tête :

-   pour une déclaration dans le document (partie
    `<head>` ou `<body>`)

        <script>
        ...
        </script>

-   pour une déclaration globale directement dans l’en-tête du document
    :

        <script src="fichier.js"></script>

-   Dans une URL : exécution du code `JavaScript` lors de
    l’activation de l’URL :

        <a href="javascript: window.alert('Bonjour');">Cliquez ici</a>

Exemple tout simple :

    <!DOCTYPE html>
    <html>
    <head>
    ...
        <script>
        /* Commentaires
            sur
            plusieurs
            lignes */
        var x = 5;
        // Commentaires sur une ligne
        </script>
    ...
    </head>
    <body>
    ...
        <script>
        document.write("<p>La valeur de x est : " + x + "<br>");
        </script>
    ...
    </body>
    </html>

Eléments de programmation en `JavaScript` :

-   Typage faible : lors de la création de la variable

-   Traitement conditionnel

        if (condition) {
        }
        else {
        }
        ...
        switch(variable) {
            case valeur1: instructions
                break;
            case valeur2: instructions
                break;
            default: instructions
            break;
        }

-   Traitement itératif

        while (condition) {
        }
        ...
        do {
        } while (condition)
        ...
        for (initiation; condition; incrementation) {
        }
        ...
        for (variable in liste) {
        }

-   Création d’une fonction

        function NomFct (parametres) {
            ...
            return expression;
        }

-   Notion d’objet : ensemble de propriétés (variables avec valeurs) et
    de méthodes (fonctions ou procédures) regroupées dans une même
    entité

        function rectangle(a, b) {
            this.largeur = a;
            this.longueur = b;
            this.perimetre = a * b;
            this.surface = function () { return this.largeur * this.longueur; }
        }

        var r = new Rectangle (2, 5);
        document.write("<b>Largeur</b> : " + r.largeur + "<br>");
        document.write("<b>Longueur</b> : " + r.longueur + "<br>");
        document.write("<b>Perimetre</b> : " + r.perimetre + "<br>");
        document.write("<b>Surface</b> : " + r.surface() + "<br>");

-   Tableau en `JavaScript`

            var tt = [];
            var t = new Array();
            t[0] = "FX";
            t[5] = "5eme element";
            t["val"] = "coucou";
            for (i = 0; i <t.length; i++) 
                document.write("Element " + i + " : " + t[i] + "<br>");

Gestion des événements en `JavaScript`

-   Interception d’un événement

        <h1 onclick = "window.alert('coucou');">Cliquez-ici</h1>

-   Evénements courants : `onclick`, `onload`,
    `ondblclick`, `onchange`,
    `onmouseover`, `onreset`,
    `onselect`, …