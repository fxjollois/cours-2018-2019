/*global L,d3*/
var mymap = L.map('mapid');
mymap.setView([48.83, 2.345], 10);
L.tileLayer(
    'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', 
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    })
    .addTo(mymap);

// Type d'IRIS : habitat (H), activité (A), divers (D), Autre (Z)
function typeColor (type) {
    var color = "black";
    switch(type) {
        case "H": color = "green"; break;
        case "A": color = "yellow"; break;
        case "D": color = "red"; break;
        case "Z": color = "purple";
    } 
    return color;
}
function typeLabel (type) {
    var label = "unkown";
    switch(type) {
        case "H": label = "Habitat"; break;
        case "A": label = "Activité"; break;
        case "D": label = "Divers"; break;
        case "Z": label = "Autre";
    } 
    return label;
}

d3.json("iris-logement-habitat.geojson", function(error, data) {
    console.log(data.features[0].properties);
    var geojson = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.l_ir + " (" + typeLabel(feature.properties.typ_iris) + ")");
        },
        style: function (feature) {
            return {
                color: "white",
                weight: 1,
                fillColor: typeColor(feature.properties.typ_iris)
            };
        }
    });
    geojson.addTo(mymap);
});