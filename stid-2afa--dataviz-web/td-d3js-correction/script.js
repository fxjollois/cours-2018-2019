/*global d3*/
// Lecture des données
d3.csv(
    "annual.csv",
    function(d) {
        return {
            year: parseInt(d.year),
            median: parseFloat(d.median),
            IC: [
                {low: parseFloat(d.i1low), high: parseFloat(d.i1high)},
                {low: parseFloat(d.i2low), high: parseFloat(d.i2high)},
                {low: parseFloat(d.i3low), high: parseFloat(d.i3high)},
                {low: parseFloat(d.i4low), high: parseFloat(d.i4high)},
                {low: parseFloat(d.i5low), high: parseFloat(d.i5high)}
            ]
        }
    },
    function(erreur, donnees) {
        // création des marges et higheur/largeur
        var totalWidth = 1100, totalHeight = 300,
            margin = {top: 10, right: 20, bottom: 20, left: 30},
            width = totalWidth - margin.left - margin.right,
            height = totalHeight - margin.top - margin.bottom;
  
        // création des échelles
        var x = d3.scaleLinear()
            .domain([1850, 2020])
            .range([0, width]),
            y = d3.scaleLinear()
            .domain([-.75, 1])
            .range([height, 0]);
      
        // création du graphique
        var svg = d3.select("#graph").append("svg")
            .attr("width", totalWidth)
            .attr("height", totalHeight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
        // ajout de la période de référence
        svg.append("rect")
            .attr("x", x(1961))
            .attr("y", 0)
            .attr("width", x(1990) - x(1961))
            .attr("height", height)
            .attr("fill", "#eee");
        svg.append("text")
            .attr("font-size", ".5em")
            .attr("fill", "#333")
            .attr("x", x(1961))
            .attr("dx", 5)
            .attr("y", height)
            .attr("dy", -5)
            .style("text-anchor", "start")
            .text("Période de référence");
    
        // ajout de la ligne de référence à 0
        svg.append("line")
            .attr("x1", 0)
            .attr("y1", y(0))
            .attr("x2", width)
            .attr("y2", y(0))
            .attr("stroke", "#bbb")
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", "10, 5");
      
        [0, 1, 2, 3, 4].forEach(function(i) {
            var intervale = d3.area()
                .x(function(d) { return x(d.year); })
                .y0(function(d) { return y(d.IC[i].low); })
                .y1(function(d) { return y(d.IC[i].high); });
            svg.append("path")
                .datum(donnees)
                .attr("class", "interval")
                .attr("id", "intervale" + (i+1))
                .attr("d", intervale);            
        });

        // ajout de l'interaction avec les intervalles
        d3.select("input").property("checked", true); // on force pour sélectionner le 1er (aucun intervale)
        d3.selectAll("input").on("change", function(){
            d3.selectAll(".interval").style("visibility", "hidden");
            d3.select("#intervale" + this.value).style("visibility", "visible");
        });
        
        // ajout des données et de la ligne
        var ligne = d3.line()
            .x(function (d) { return x(d.year); })
            .y(function (d) { return y(d.median); });
        svg.append("path")
            .datum(donnees)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", ligne);

        // Ajout des axes
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickFormat(d3.format("i")));
        svg.append("g")
            .call(d3.axisLeft(y));
        d3.selectAll(".domain").remove()
        
        // ajout d'une ligne en fonction de la souris
        var verticale = svg.append("line")
            .attr("y1", 0)
            .attr("y2", height)
            .attr("stroke", "#333")
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", "10, 5")
            .style("display", "none");
        var valeur = svg.append("text")
            .attr("dx", 5)
            .attr("y", 20)
            .attr("fill", "#333")
            .style("display", "none")
            .text("");
        
        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("mouseover", function() { 
                verticale.style("display", null); 
                valeur.style("display", null);
            })
            .on("mouseout", function() { 
                verticale.style("display", "none"); 
                valeur.style("display", "none")
            })
            .on("mousemove", function() {
                var xSouris = d3.mouse(this)[0],
                year = Math.floor(x.invert(xSouris)),
                search = d3.bisector(function(d) { return d.year;}).left,
                index = search(donnees, year, 1);
                verticale
                .attr("x1", xSouris)
                .attr("x2", xSouris);
                valeur
                .attr("x", xSouris)
                .attr("text-anchor", function() {
                    var anchor = "start";
                    if (x(year) > 600) {
                        anchor = "end";
                    } 
                    return anchor;
                })
                .attr("dx", function() {
                    var dx = 5;
                    if (x(year) > width / 2) {
                        dx = -5;
                    } 
                    return dx;
                })
                .text(year + " : " + donnees[index].median)
            });


}
)