/*global d3*/
// Lecture des données
d3.csv(
    "monthly.csv",
    function(d) {
        return {
            year: parseInt(d.year),
            month: parseInt(d.month),
            median: parseFloat(d.median)
        }
    },
    function(erreur, donnees) {
    
        // création des marges et higheur/largeur
        var totalWidth = 1200, totalHeight = 300,
            margin = {top: 40, right: 20, bottom: 20, left: 30},
            width = totalWidth - margin.left - margin.right,
            height = totalHeight - margin.top - margin.bottom;
  
        // création des échelles
        var x = d3.scaleBand()
            .domain(d3.map(donnees, function(d) { return d.year; }).keys())
            .range([0, width]),
            y = d3.scaleBand()
            .domain(d3.map(donnees, function(d) { return d.month; }).keys())
            .range([0, height]),
            color = d3.scaleLinear()
            .domain(d3.extent(donnees, function(d) { return d.median; }).concat(0).sort())
            .range(["darkblue", "white", "darkred"]);
        
        // création du graphique
        var svg = d3.select("#heatmap").append("svg")
            .attr("width", totalWidth)
            .attr("height", totalHeight)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        // ajout d'un texte qui va nous permettre de donner la date et l'annomalie selon la souris
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", -margin.top / 2)
            .attr("class", "info")
            .html("Date :");
        svg.append("text")
            .attr("x", width / 2 + 50)
            .attr("y", -margin.top / 2)
            .attr("class", "info")
            .attr("id", "info_year")
            .html("00/0000");
        svg.append("text")
            .attr("x", width / 2 + 125)
            .attr("y", -margin.top / 2)
            .attr("class", "info")
            .html("Anomalie :");
        svg.append("text")
            .attr("x", width / 2 + 210)
            .attr("y", -margin.top / 2)
            .attr("class", "info")
            .attr("id", "info_anno")
            .html("?0.000");
        
        // ajout des données et de la ligne
        svg.selectAll("rect")
            .data(donnees)
            .enter()
            .append("rect")
            .attr("class", "anno")
            .attr("x", function(d) { return x(d.year); })
            .attr("y", function(d) { return y(d.month); })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .attr("fill", function(d) { return color(d.median); })
            .on("mouseover", function(d) {
                d3.selectAll(".info").style("visibility", "visible");
                d3.select("#info_year").html(d.month + "/" + d.year);
                d3.select("#info_anno").html(d.median);
            })
            .on("mouseout", function() {
                d3.selectAll(".info").style("visibility", "hidden");
            });
        
        // Ajout des axes
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickValues(x.domain().filter(function(d,i){ return !(i%10)})));
        svg.append("g")
            .call(d3.axisLeft(y));
        d3.selectAll(".domain").remove();
        
        // Ajout de la légende
        var legendLinear = d3.legendColor()
            .shapeWidth(30)
            .cells(10)
            .orient('horizontal')
            .scale(color);
        svg.append("g")
            .attr("class", "legendLinear")
            .attr("transform", "translate(0, -40)")
            .call(legendLinear);

  }
)