library(shiny)
library(shinydashboard)
library(gapminder)
library(tidyverse)

ui <- dashboardPage(
  dashboardHeader(),
  dashboardSidebar(
    sidebarMenu(
      menuItem("Espérance de vie", tabName = "evol", icon = icon("chart-line")),
      menuItem("Données", tabName = "data", icon = icon("table"))
    )
  ),
  dashboardBody(
    tabItems(
      tabItem(
        tabName = "evol",
        box(title = "Evolution depuis 1952",
            plotOutput("life"))
      ),
      tabItem(
        tabName = "data"
      )
    )
  ),
  title = "Gapminder"
)

server <- function(input, output, session) {
  output$life = renderPlot({
    # epsérance de vie médiane depuis 1952
  })  
}

shinyApp(ui, server)
