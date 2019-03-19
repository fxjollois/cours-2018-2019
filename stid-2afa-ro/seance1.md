name: inverse
layout: true
class: center, middle, inverse

---
# Recherche opérationnelle

Premiers éléments 

---
layout: false

## Qu'est-ce que c'est ?

Les entreprises et les gouvernements veulent toujours prendre les meilleures décisions dans des situations complexes soit pour
maximiser les profits ou encore pour satisfaire la clientèle, l'électorat, ...

La **recherche opérationnelle** se veut un ensemble de méthodes rationnelles qui cherche à **optimiser** la prise de **décision**.

L'*être humain* n’est pas seul à vouloir optimiser :

- la *nature* : les lois de la physique dérivent souvent de principes variationnels (mécanique de Lagrange et d'Hamilton), principes de moindres actions, minimum d'énergie, ...
- Le *système biologique* : évolution, code génétique, ...

---
## Définition

**Approche scientifique** pour la résolution de problèmes de **gestion de systèmes complexes**

- *Scientifique* : utilise les mathématiques, la statistique, les probabilités, l'algorithmique, l'informatique, les graphes

- *Gestion* : problèmes d'optimisation

- *Systèmes complexes* : economie, dans l'entreprise, dans le domaine militaire

---
## Plus exactement

Il s'agit toujours d'**optimiser** une fonction d'utilité ou fonction objectif

- Maximisation s'il s'agit d'une fonction de profit, 
- Minimisation s'il s'agit d'une fonction de coût, 

- Sous contraintes matérielles,

- Avec éventuellement des problématiques de combinatoire (trop de solutions), d'aléa, de concurrence, ...

---
## Programmation linéaire

Ce cours porte uniquement sur la partie déterministe et plus spécifiquement sur l'optimisation linéaire ou **programmation linéaire** (PL). 

Les applications sont nombreuses :

- en administration, 
- management,
- organisation du travail, 
- génie industriel,
- industries automobiles, pétrolières, 
- ...

---
## Historique de la programmation linéaire

**Programme** : terme militaire pour planification

Lié à l'invention du radar à la deuxième guerre mondiale :

- Comment installer un réseau optimal d’antennes ?

La programmation linéaire a été inventée par George Dantzig, John von Neumann et Leonid Kantorovich vers 1940

La méthode de base est la **méthode du simplexe** crée par George Dantzig (1947)

Elle a connu un immense succès grâce à l’informatique

---
## Exemple simple

<!--
<iframe src="https://www.desmos.com/calculator/9szlum8f9g?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
-->

Considérons une petite entreprise familiale qui désire fabriquer de la crème glacée et du beurre à partir du lait produit par leurs vaches. 

La production hebdomadaire des vaches est de 22 litres.

--

### Question ?

Quelles sont les quantités de crème glacée et de beurre qu’il faut produire pour maximiser les profits ?

- dépend des contraintes et du profit

---
## Contraintes

- Pour faire 1 Kg de beurre, il faut 2 litres de lait tandis que pour faire 1 litre de crème glacée, cela exige 3 litres de lait.

- On entrepose les produits dans un réfrigérateur qui ne peut contenir plus que 6 litres de crème glacée.

- Il faut 1 heure pour produire de 4 litres de crème glacée et 1 Kg de beurre. La famille dispose d’au plus 6 heures par semaine.

--

## Profit

- Les prix sont fixés à 5€ par litre de crème glacée et 4€ par Kg de beurre.


---
## Formulation mathématique

- $x$ : quantité (en Litres) de crème glacée
- $y$ : quantité (en Kg) de beurre

--

Fonction objective de profit

$$
    z = 5x + 4y
$$

--

Contraintes

- Production : $3x+2y \le 22$
- Capacité du réfrigérateur : $x \le 6$
- Temps : $x / 4 + y \le 6$
- Quantités positives (ou nulles) : $x \ge 0, y\ge 0$


---
## Formulation mathématique

Le problème s'énonce donc ainsi :

$$
\max 5x + 4y
$$

$$\left(\begin{eqnarray}
3x + 2y           & \le & 22 \\\\
x                 & \le & 6 \\\\
\frac{x}{4} + y   & \le & 6 \\\\
x                 & \ge & 0 \\\\
y                 & \ge & 0 \\\\
\end{eqnarray}\right.$$

---
## Résolution graphique

<div id="ggb-lait-creme"></div> 

---
## Solution optimale

Pour optimiser la production, la famille doit donc produire 

- **$x = 4$** Litres de crème glacée
- **$y = 5$** Kg de beurre

Ils auront ainsi un profit égal à

- **$z = 40$** €

---
## Les problèmes les plus connus

- **Gestion des stocks** : minimiser le coût de gestion d'un stock, compte tenu de la demande,
du coût de stockage, du coût de réapprovisionnement, du coût de pénurie, ...

- **Files d'attente** : il s'agit de minimiser le temps d'attente, selon la stratégie
de ceux qui attendent. 
    - Application à la gestion des hot lines, des files d'attentes aux caisses des
supermarchés, des péages d'autoroute.

- **Programmation linéaire** : c'est l'objet de ce cours.

- **Théorie des jeux** : modélisation de situations économiques ou politiques de concurrence ou
de collaboration par des jeux (jeux à somme nulle , ...)
    - [Dilemme des prisonniers](https://fr.wikipedia.org/wiki/Dilemme_du_prisonnier)


---

- **Circulation** (ou de flot maximal): maximiser le flot dans un réseau de routes, de canalisations, de transport, de cables

- **Ordonnancement** : organisation de multiples tâches dans le temps, soumises à des contraintes (de succession, de date, de simultanéité ou de non-simultanéité...) dans le but de minimiser la durée du projet

- **Transport** : acheminer des marchandises de $m$ origines vers $n$ destinations au moindre coût, connaissant les coûts unitaires de transport
    
- [**Voyageur de commerce**](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_voyageur_de_commerce) : minimiser son temps de trajet, ou le coût total, visitant toutes les villes d'une liste de
villes et revenant à son point de départ
    
- **Affectation** : maximiser une fonction de satisfaction (par ex : affecter des fonctionnaires sur des postes)

- **Choix multicritères** : faire le meilleur choix entre plusieurs actions comparées selon plusieurs critères

---
## Programmation linéaire

La PL permet de modéliser des problèmes dans lesquels les effets sont proportionnels aux causes, par
exemple :
- si la quantité de matières premières est multipliée par 2, la quantité produite est multipliée par
2
- si les heures travaillées sont multipliées par 5, la quantité produite est multipliée par 5
- si la quantité de matières premières est multipliée par 2 et les heures travaillées sont multipliées
par 5, la quantité produite est multipliée par 10

Dans ces problème, la fonction objectif à maximiser ou à minimiser est une combinaison linéaire des va-
riables.

> **Proportionnel = linéaire**

---
## Formulation d'un problème PL

Minimiser le coût / maximiser le profit
$$ \min / \max c_1x_1 + c_2x_2 + \ldots + c_nx_n $$

Satisfaire la demande
$$ a_1x_1 + a_2x_2 + \ldots + a_nx_n \ge b_1 $$

Avec des ressources limitées
$$ a'_1x_1 + a'_2x_2 + \ldots + a'_nx_n \le b'_1 $$

Quantités produites
$$ x_1, x_2, \ldots, x_n \ge 0 $$

---
## Forme canonique de type max

$$
\max c_1x_1 + c_2x_2 + \ldots + c_nx_n 
$$

$$
\left(
\begin{align}
a_1^1x_1 + a_1^2x_2 + \ldots + a_1^nx_n &\le& b_1 \\\\
a_2^1x_1 + a_2^2x_2 + \ldots + a_2^nx_n &\le& b_2 \\\\
\ldots & & \ldots \\\\
a_n^1x_1 + a_n^2x_2 + \ldots + a_n^nx_n &\le& b_n \\\\
x_1, x_2, \ldots, x_n &\ge& 0 \\\\
\end{align}
\right.
$$

Sous forme plus compacte
$$ \max c^t x $$
$$
\left(
\begin{align}
Ax &\le& b\\\\
x &\ge& 0
\end{align}
\right.
$$


