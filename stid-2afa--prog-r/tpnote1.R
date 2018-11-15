# TP noté de NOM Prénom

# Importation
library(jsonlite)
comm = fromJSON("/home/jollois/STID 2AFA - Prog Stat R/commercesparis.json",
                simplifyVector = FALSE)
# On supprime un commerce pour lequel il manque toutes les informations
comm = comm[-83443]

# Question 1
... ... ...

...

