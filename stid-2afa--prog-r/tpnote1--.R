library(tidyverse)
library(jsonlite)

comm = fromJSON("commercesparis.json", simplifyVector = FALSE)
comm = comm[-83443]

#  1. Afficher le premier commerce de la liste
comm[[1]]

#  2. Afficher le commerce `86181` (cf champ `ordre`)
comm %>%
  keep(~ .x$fields$ordre == 86181)

#  3. Afficher le (ou les) commerces situés au `"137 AV VERSAILLES"` 
# (champ `adresse_complete`)
comm %>%
  keep(~ .x$fields$adresse_complete == "137 AV VERSAILLES") 

#  4. Afficher le nombre de commerces de l'avenue de Versailles 
# (le libellé de la voie doit être égal à `"VERSAILLES"`)
comm %>%
  keep(~ .x$fields$libelle_voie == "VERSAILLES") %>%
  length()

#  5. Créer un `tibble` à partir de la liste de tous les commerces, avec comme colonnes :
    # - `ordre`, `codact`, `libact`, 
    # - `adresse_complete`, `num`, `type_voie`, `libelle_voie`
    # - `iris`, `ilot`, `quartier`, `arro`
    # - longitude et latitude (`xy` - *attention* valeurs `NULL` présentes)
    # - Si vous ne réussissez pas à créer cette table, la [voici](tpnote1-tab.RData) au format `RData`
tab = comm %>%
  map("fields") %>%
  map_dfr(function(e) {
    if (!is.null(e$xy)) {
      lat = e$xy[[1]]
      lon = e$xy[[2]]
    } else {
      lat = lon = NA
    }
    attach(e, warn.conflicts = FALSE)
    t = tibble(ordre, codact, libact, 
               adresse_complete, num, type_voie, libelle_voie, 
               iris, ilot, qua, arro, lon, lat)
    detach(e)
    return(t)
  })
save(tab, file = "tpnote1-tab.RData")

#  6. Quelles sont les dix types de commerces les plus présents ? 
# (à représenter numériquement ET graphiquement)
df6 = tab %>%
  group_by(libact) %>%
  summarise(nb = n()) %>%
  arrange(desc(nb)) %>%
  slice(1:10)
df6

ggplot(df6, aes(nb, fct_reorder(libact, nb, .desc = FALSE), col = nb)) +
  geom_point(size = 2) +
  scale_color_continuous(low = "gray50", high = "gray10") +
  theme_minimal() +
  xlim(0, max(df6$nb)) +
  theme(axis.title = element_blank(), legend.position = "none")

#  7. Combien y-a-t'il de commerces et de types de commerces 
# par arrondissement ? (idem, table + graphique)
df7 = tab %>%
  group_by(arro) %>%
  summarise(
    nb_commerces = n(),
    nb_types = n_distinct(codact)
  ) %>%
  mutate(arro = str_sub(arro, 4, 5))
df7

ggplot(df7, aes(arro, nb_commerces, fill = nb_commerces)) +
  geom_bar(stat = "identity") +
  scale_fill_gradient(low = "gray50", high = "gray10") +
  theme_minimal() +
  labs(caption = "Nombre de commerces par arrondissement") +
  theme(axis.title = element_blank(), legend.position = "none")
ggplot(df7, aes(arro, nb_types, fill = nb_types)) +
  geom_bar(stat = "identity") +
  scale_fill_gradient(low = "gray50", high = "gray10") +
  theme_minimal() +
  labs(caption = "Nombre de types de commerces par arrondissement") +
  theme(axis.title = element_blank(), legend.position = "none")

#  8. Réaliser une carte de Paris avec un point pour chaque commerce
# avec un fond de carte au choix
library(ggmap)

paris = c(left = min(tab$lon, na.rm = TRUE) - .01, 
          bottom = min(tab$lat, na.rm = TRUE) - .01, 
          right = max(tab$lon, na.rm = TRUE) + .02, 
          top = max(tab$lat, na.rm = TRUE) + .01)

carte = get_stamenmap(paris, zoom = 11, maptype = "toner-lite")

ggmap(carte) +
  theme_void() +
  geom_point(data = tab, aes(lon, lat))
ggmap(carte) +
  theme_void() +
  stat_density_2d(data = tab, aes(lon, lat, fill = stat(level)),
                  geom = "polygon") +
  scale_fill_gradient(low = "gray50", high = "gray10")

#  9. Représenter l'emplacement des commerces des dix types les plus 
# fréquents graphiquement
ggmap(carte) +
  theme_void() +
  geom_point(data = tab %>% semi_join(df6), 
             aes(lon, lat, col = libact)) +
  facet_wrap("libact") +
  theme(legend.position = "none")
ggmap(carte) +
  theme_void() +
  stat_density_2d(data = tab %>% semi_join(df6), 
                  aes(lon, lat, fill = stat(level)),
                  geom = "polygon") +
  scale_fill_gradient(low = "gray50", high = "gray10") +
  facet_wrap("libact") +
  theme(legend.position = "none")

# 10. Utiliser les contours des arrondissements disponible 
# [ici](https://opendata.paris.fr/explore/dataset/arrondissements/map/?location=12,48.85889,2.34692) 
# pour représenter, toujours sur un fond de carte de Paris, le 
# nombre de commerces par arrondissements
library(geojsonio)
arr = geojson_read("arrondissements.geojson", what = "sp")
arr_f = fortify(arr, region = "c_ar")
arr_fj = arr_f %>%
  inner_join(df7 %>% mutate(id = as.character(as.numeric(arro))))

ggmap(carte) +
  geom_polygon(data = arr_fj, 
               aes(long, lat, group = group, fill = nb_commerces), 
               color = "white", alpha = .8) +
  theme_void() +
  scale_fill_gradient(low = "gray50", high = "gray10")

# 11. Représenter graphiquement, pour chaque des dix types de commerces
# les plus présents, comment ils sont répartis dans les différents 
# arrondissements
df11 = tab %>%
  semi_join(df6) %>%
  count(libact, arro) %>%
  group_by(libact) %>%
  mutate(prop = n / sum(n))%>%
  mutate(id = as.character(as.numeric(str_sub(arro, 4, 5))))
df11_fj = arr_f %>%
  inner_join(df11)

ggmap(carte) +
  geom_polygon(data = df11_fj, 
               aes(long, lat, group = group, fill = prop), 
               color = "white", alpha = .8) +
  theme_void() +
  scale_fill_gradient(low = "gray50", high = "gray10") +
  facet_wrap("libact")


