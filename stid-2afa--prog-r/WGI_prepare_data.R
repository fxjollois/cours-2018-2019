library(tidyverse)

# Lecture des données
wgi.m = read.table("WGIData.csv", 
                   stringsAsFactors = FALSE,
                   quote = '"', header = T, sep = ",") %>%
  as_tibble() %>%
  select(-end) %>%
  rename_at(vars(starts_with("X")) , function(e) str_replace(e, "X", "Y")) %>%
  rename_at(vars(contains(".")) , function(e) str_remove(e, "\\.")) %>%
  mutate(SerieCode = str_sub(IndicatorCode, 1, 2),
         SerieName = str_sub(str_extract(IndicatorName, "[^:]+:"),end = -2),
         TypeCode = str_sub(IndicatorCode, 4),
         TypeName = str_sub(str_extract(IndicatorName, ":.+"), start = 3))
wgi.m %>% select(IndicatorCode, SerieCode, TypeCode) %>% distinct()
wgi.m %>% select(IndicatorName, SerieName, TypeName) %>% distinct()


# Table des pays
wgi.m %>% select(CountryCode, CountryName) %>% distinct() %>%
  write.table("WGICountry.csv", sep = ";", row.names = FALSE)
readLines("WGICountry.csv", 10)

# Table des types d'indicateurs à découper en deux
wgi.m %>% select(SerieCode, SerieName) %>% distinct() %>%
  write.table("WGISerie.csv", sep = ";", row.names = FALSE)
readLines("WGISerie.csv", 10)

wgi.m %>% select(TypeCode, TypeName) %>% distinct() %>%
  write.table("WGIType.csv", sep = ";", row.names = FALSE)
readLines("WGIType.csv", 10)

# Table des valeurs
wgi.m %>% select(CountryCode, SerieCode, TypeCode, starts_with("Y")) %>% 
  write.table("WGIValues.csv", sep = ";", row.names = FALSE)
readLines("WGIValues.csv", 10)



# une année par ligne
wgi.m %>% 
  select(CountryCode, SerieCode, TypeCode, starts_with("Y")) %>%
  gather(Year, Value,-CountryCode, -SerieCode, -TypeCode)
