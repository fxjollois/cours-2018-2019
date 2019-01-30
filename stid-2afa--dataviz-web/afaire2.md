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
age = 37;
msg = msg + age;
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
  //recupération la valeur en euro
  var eu = document.formu.euro.value;
  //conversion et arrondi
  var fr = eu * 6.55957;
  fr = Math.round(fr * 100) / 100;
  //affichage du résultat
  document.formu.franc.value = fr;
}
</script>
<h1>Conversion Euro en Franc</h1><hr>
<form name="formu">
  <table>
    <tr>
      <td>Valeur en Euros :</td>
      <td><input name="euro" type="text" size="10"></td>
    </tr>
    <tr>
      <td>Valeur en Francs :</td>
      <td><input name="franc" type="text" size="10"></td>
    </tr>
    <tr>
      <td colspan="2"><input type="button" value="Convertir" onclick="conversion()"></td>
    </tr>
  </table>
</form>
```
- Vous venez de voir comment se servir d'un formulaire et d'un tableau
- Remplacez le code de la fonction `conversion()` (après la récupération du montant en euro) par :
```
if (isNaN(eu)) {
  alert("Entrer un nombre SVP !");
  document.formu.euro.value = "";
  document.formu.franc.value = "";		
}
else {
  //conversion et arrondi
  var fr = eu * 6.55957;
  fr = Math.round(fr * 100) / 100;
  //affichage du résultat
  document.formu.franc.value = fr;
}
```
- On peut gérer des alertes assez facilement
- Remplacez tout le contenu de la balise `<body>` par :
```
<table id = "montab">
  <tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
  </tr>
</table>
<input id = "ajout" type = "button" value = "Ajout d'une ligne" onclick = "ajoutligne()";>
Taille du tableau : <input id = "taille" type = "text" value = "0">
<script>
  document.getElementById("taille").value = document.getElementById('montab').rows.length;
  function ajoutligne () {
    var tab = document.getElementById("montab");
    var row = tab.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Nouvelle cellule 1";
    cell2.innerHTML = "Nouvelle cellule 2";
    document.getElementById("taille").value = document.getElementById('montab').rows.length;
  }
</script>
```
- Vous savez maintenant ajouter des lignes à un tableau et vous savez récupérer la taille du tableau (pour ajouter à la fin du tableau, il faut faire un `insertRow()` avec en paramètre la taille du tableau donc

Maintenant que vous savez faire un peu de JavaScript, vous allez devoir faire une page HTML permettant le calcul du montant obtenu après un investissement :

- Demander le capital initial, le taux d'intérêt du placement, le nombre d'années prévu (à faire dans un formulaire, éviter le tableau pour cette partie - c'est contre les recommandations HTML5 pour information)
- Créer la fonction qui va calculer les montants pour chaque année (et donc les gains), mais surtout qui va les ajouter dans le tableau
- Faires en sorte que la partie résultat ne s'affiche que lorsqu'on demande le calcul
- Réfléchir à la création d'un diagramme en barres (chaque barre représentant une année, la hauteur représentant la valeur obtenue) à l'aide de balise div
