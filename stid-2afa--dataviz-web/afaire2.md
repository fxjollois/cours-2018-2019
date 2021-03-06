# Formulaire de calcul

On va commencer par créer un fichier HTML de base, mais vide dans la partie `body`. Ce qui fera comme base :

```
<!doctype html>
  <html>
    <head>
      <title>TP2</title>
      <meta charset = "UTF-8">
    </head>
    <body>
    </body>
</html>
```

- Insérer dans le corps du document une balise `<div>`, dont l'identifiant sera "mondiv", et sans aucun contenu.

- Ensuite, dans l'en-tête, ajouter une balise `<script>`, et mettre le code suivant dedans :

```
document.getElementById("mondiv").innerHTML = "J'ajoute du<br>code <b>HTML</b>";
```

- Maintenant, déplacer la balise `<script>` et son contenu après la déclaration du `<div>`. 

- Dans la partie script, mettre le code suivant (en supprimant le précédent) :

```
var msg = "Code ajouté";
document.getElementById("mondiv").innerHTML = msg;
```

- Dans une autre balise `<script>` située après la première (et donc distincte), ajoutez ce code :

```
age = 41;
msg = msg + " : " + age;
document.getElementById("mondiv").innerHTML = msg;
```

- Entre les deux balises `<script>` (mais en dehors de celles-ci), ajoutez un élément de type button comme ceci :

```
<input id = "prenom" value = "Votre prénom" type = "button" onclick = "AffichePrenom();">
```

- Enfin, modifiez le code de la deuxième balise avec le code :

```
function AffichePrenom() {
  prenom = prompt("Quel est votre prénom ?", "Ecrire votre prénom ici"); 
  msg = document.getElementById("mondiv").innerHTML + " " + prenom;
  document.getElementById("mondiv").innerHTML = msg; 
  document.getElementById("prenom").value = "On retente ?";
}
```

- Vous venez d'apprendre à vous servir des événements (`onclick`) et des fonctions

- Remplacez le contenu de la balise `<body>` par :

```
<script>
function conversion() {
  // recupération la distance en mètres en pieds
  var metres = document.formu.metres.value;
  // conversion et arrondi
  var pieds = metres * 3.28084;
  pieds = Math.round(pieds * 100) / 100;
  //affichage du résultat
  document.formu.pieds.value = pieds;
}
</script>
<h1>Conversion mètres en pieds</h1><hr>
<form name="formu">
  <table>
    <tr>
      <td>Valeur en mètres :</td>
      <td><input name="metres" type="text" size="10"></td>
    </tr>
    <tr>
      <td>Valeur en pieds :</td>
      <td><input name="pieds" type="text" size="10"></td>
    </tr>
    <tr>
      <td colspan="2"><input type="button" value="Convertir" onclick="conversion()"></td>
    </tr>
  </table>
</form>
```

- Vous venez de voir comment se servir d'un formulaire et d'un tableau

- Remplacez le code de la fonction `conversion()` (après la récupération de la distance en mètres) par :

```
if (isNaN(metres)) {
  alert("Entrer un nombre SVP !");
  document.formu.metres.value = "";
  document.formu.pieds.value = "";		
}
else {
  //conversion et arrondi
  // ... même code que précédemment
}
```

- On peut gérer des alertes assez facilement

- Remplacez tout le contenu de la balise `<body>` par :

```
<table id = "montab">
  <tr>
    <th>Ligne</th>
    <th>Cellule 1</th>
    <th>Cellule 2</th>
  </tr>
</table>
<input id = "ajout" type = "button" value = "Ajout d'une ligne" onclick = "ajoutligne()";>
Taille du tableau : <input id = "taille" type = "text" value = "0">
<script>
  document.getElementById("taille").value = document.getElementById('montab').rows.length;
  function ajoutligne () {
    var tab = document.getElementById("montab");
    var row = tab.insertRow(1); // 1 correspond à insérer après la 1ère ligne

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    cell0.innerHTML = "Ligne " + document.getElementById("taille").value;
    cell1.innerHTML = "Nouvelle cellule 1";
    cell2.innerHTML = "Nouvelle cellule 2";
    document.getElementById("taille").value = document.getElementById('montab').rows.length;
  }
</script>
```

- Vous savez maintenant ajouter des lignes à un tableau et vous savez récupérer la taille du tableau (pour ajouter à la fin du tableau, il faut faire un `insertRow()` avec en paramètre la taille du tableau donc).


##  A faire

Maintenant que vous savez faire un peu de JavaScript, vous allez devoir faire une page HTML permettant le calcul du montant obtenu après un investissement :

- Demander le capital initial, le taux d'intérêt du placement, le nombre d'années prévu (à faire dans un formulaire)
- Créer la fonction qui va calculer les montants pour chaque année (et donc les gains), mais surtout qui va les ajouter dans un tableau
- Faires en sorte que la partie résultat ne s'affiche que lorsqu'on demande le calcul
- Réfléchir à la création d'un diagramme en barres (chaque barre représentant une année, la hauteur représentant la valeur obtenue) à l'aide de balises div
- Ajouter un bouton de remise à zéro (des valeurs et des résultats)

Si vous avez fini, réaliser le graphique (ou un autre de type série temportelle) à l'aide de ces différentes :

- [Chart.js](https://www.chartjs.org/)
- [plotly](https://plot.ly/javascript/)
- [Google Charts](https://developers.google.com/chart/)

