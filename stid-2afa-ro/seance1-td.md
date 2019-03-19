# Exercices de programmation linéaire

Pour tous les exercices :
1. Etablir les (inégalités de) contraintes
1. Donner la fonction objectif
1. Présenter le programme sous forme canonique

Pour plus tard
1. Résoudre le problème graphiquement
1. Résoudre le problème par l'algorithme du simplexe


## On se sert la ceinture

Une entreprise fabrique deux sortes de ceintures : A et B.

Le bénéfice unitaire est de 20€ pour les ceintures de type A, 15€ pour les ceintures de type B. L'entreprise pourrait fabriquer 1000 ceintures de type B par jour, et le temps de fabrication pour une ceinture de type A est le double du temps de fabrication pour une ceinture de type B. L'approvisionnement en cuir, par jour, est suffisant pour fabriquer 800 ceintures (de type indifférent). L'approvisionnement en boucles permet de fabriquer 400 ceintures de type A et 700 ceintures de type B par jour.

Déterminer le nombre de ceintures de chaque type à fabriquer par jour de manière à maximiser le bénéfice. 

## A la diète

La nourriture d'un troupeau est formé de 3 produits P1, P2 et P3 de prix unitaire 340€, 2400€ et 560€. D'autre part, cette nourriture doit comporter une quantité minimale de protéines, lipides et de vitamines A.

| &nbsp; | seuil minimal|
|-|--------------|
| protéines | 1100 |
| lipides | 1400 |
| vitamines A | 1500 |

Le tableau suivant d'ecrit les apports d'une unité de chaque produit en protéines, lipides et de vitamines A.

| &nbsp; | protéines | lipides | vitamines A |
|-|-|-|-|
| P1 | 1 | 1 | 1 |
| P2 | 2 | 3 | 1 |
| P3 | 1 | 2 | 3 |

Déterminer les quantités x1, x2 et x3 des produits P1, P2 et P3 à incorporer à la nourriture pour qu'elle coûte le moins
possible et qui assure les seuils minimaux de protéines, lipides et de vitamine A.

## En voiture

Deux concessionnaires automobiles passent des commandes de voitures neuves auprès d'un constructeur. Les demandes sont fournies par le tableau suivant :

| &nbsp; | nombre d'autos |
|--------|----------------|
|concessionnaire 1 | 40 |
| concessionnaire 2 | 60 |

La compagnie possède 2 usines situées dans des villes différentes. La première usine a en stock 80 automobiles tandis que la deuxième dispose de 100 automobiles. Les coûts de transport pour acheminer une automobile vers les concessionnaires sont donnés par le tableau suivant :

| &nbsp; | concessionnaire 1 | concessionnaire 2 |
|--------|-------------------|-------------------|
| usine A | 20€ | 30€ |
| usine B | 30€ | 50€ |

Il s'agit de déterminer le nombre de voitures expédiées des usines vers les concessionnaires tout en minimisant les coûts de transport.
