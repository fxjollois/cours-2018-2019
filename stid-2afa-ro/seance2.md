name: inverse
layout: true
class: center, middle, inverse

---
# Programmation linéaire

Méthode du simplex

---
layout: false

## Généralités

**Théorème** : 

Soit $f$ une fonction continue définie sur un domaine $K \subset \mathbb{R}^n$ fermé et borné, alors il existe des valeurs minimale et maximale pour $f$ :

`$$
\exists x_{max}, x_{min} \in K \mbox{ tel que } f(x_{max}) = \max_{x \in K} f(x) \mbox{ et } f(x_{min}) = \min_{x \in K} f(x)
$$`

Toutefois, ce théorème sera d'une importance limitée car il arrivera souvent que la région admissible $K$ n'est pas bornée.

---
**Définition** : 

Un ensemble $K \subset \mathbb{R}^n$ est convexe s'il vérifie la propriété

$$
\forall x, y \in K \mbox{ et } \forall t \in [0; 1] \rightarrow (1 - t)x + ty \in K
$$

Autrement dit, si $x, y$ sont 2 points dans $K$, alors le segment de droite $[xy]$ est inclus dans $K$.

La propriété suivante sera souvent utile par la suite.

**Proposition** :

L’intersection $ \cap_{i=1}^N K_i$ d'une famille d'ensembles convexes $K_i$ est aussi convexe.

---
## Calcul algébrique des sommets

Reprenons l'exemple de la petite entreprise familiale produisant du lait et de la crème glacée

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
## Solution graphique

<div id="ggb-lait-creme"></div> 

--- 
## Calcul algébrique des sommets

**Solution** : un des sommets de l'ensemble des solutions admissibles $K$

Comment faire sans passer par un graphique ?


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


---
## Variable d'écart

Pour toute contrainte de type $x_{n+1}$

$$
a_1^1x_1 + a_1^2x_2 + \ldots + a_1^nx_n \le b_1
$$

On peut ajouter une **variable d'écart** permettant d'écrire la contrainte sous la forme

`$$
a_1^1x_1 + a_1^2x_2 + \ldots + a_1^nx_n + x_{n+1} \le b_1
$$`

---
## Forme standard

Ajoute de variables d'écart à toutes contraintes (pas de modification de la fonction objectif)

`$$
\left(
\begin{align}
a_1^1x_1 + a_1^2x_2 + \ldots + a_1^nx_n + x_{n+1} &=& b_1 \\\\
a_2^1x_1 + a_2^2x_2 + \ldots + a_2^nx_n + x_{n+2} &=& b_2 \\\\
\ldots & & \ldots \\\\
a_n^1x_1 + a_n^2x_2 + \ldots + a_n^nx_n + x_{n+n} &=& b_n \\\\
x_1, x_2, \ldots, x_{n+n} &\ge& 0 \\\\
\end{align}
\right.
$$`

$$
\left(
\begin{align}
Ax &=& b\\\\
x &\ge& 0
\end{align}
\right.
$$

---
## Algorithme du simplex

