//import { polygon } from "./leaflet/leaflet-src.esm";

/*var map = L.map('map', {
    center: [45.3138959, 9.503263],                 //Imposta latitudine e longitudine del centro della mappa(obbligatorio)    
    zoom: 10                                        //Imposta il livello di zoom iniziale,valori 0-18,dove 0 � il ingrandito(obbligatorio)
});

L.control.scale().addTo(map);


//Crea un Title Layer e lo aggiunge alla mappa
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);*/

/*var searchControl = new
    L.esri.Controls.Geosearch().addTo(map);

var results = new L.LayerGroup().addTo(map);

searchControl.on('results', function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
    }
});*/




//setTimeout(function () { $('.pointer').fadeOut('slow'); }, 3400);

/**/


// ---------- LOCALIZZAZIONE --------------- //

// ---------- LOCALIZZAZIONE --------------- //

function checkPassword() {
    let psw = document.getElementById("psw").value;
    let pswr = document.getElementById("psw-repeat").value;

    console.log("psw: " + psw.toString() + "pswr: " + pswr.toString());

    
    if (psw.localeCompare(pswr) == 0) alert("Le password coincidono");
    else alert("le password non coincidono");
}


function setPos(pos) {
    var myIcon = L.icon({
        iconUrl: 'leaflet/images/ZipPointer.png',
        iconSize: [85, 70],
        iconAnchor: [43, 68],
    });

    let latitude = pos.lat, longitude = pos.long; // 45.3138959 - 9.503263
    var marker = L.marker([0, 0], {icon: myIcon}).addTo(map);
    marker.setLatLng([latitude, longitude]);
}


function geolocalizza() {
    let pos;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            setPos(pos);

        })
    }
    else alert("il tuo browser non supporta la geolocalizzazione");
}
    



var stages = []; // array contenente le tappe
var free = 0;

function search() {

    //let city = "Lodi";
    let city = document.getElementById("searchStart").value;
    createMarker(city);

    city = document.getElementById("searchFinish").value;
    createMarker(city);

    for(let i = 1; i <= nTappe; i++){
        city = document.getElementById("Tappa" + i).value;
        createMarker(city);
    }
    

    document.getElementById('search').value = "";
}

function createMarker(city){
    try {
        let pos = {
            lat: cities[city.toLowerCase()]["lat"],
            long: cities[city.toLowerCase()]["long"]
        }
        setPos(pos);

        stages.push(pos);   // memorizzo i luoghi cercati
        free++;
        

    } catch (error) {
        console.log(error);
        for (let i = 0; i < city.length; i++)   // controlla se la parola è vuota
            if (city[i] == "") {
                continue;
            } else {
                alert("Citta' non trovata. Assicurarsi di aver inserito correttamente il nome");
                break;                                                                                  // è inutile restare, l'utente ha scritto qualcosa
            }
    }    
}

// IMPLEMENTATA ALLE ORE 22:20. PERCHÈ LA SERA SI È PIÙ PRODUTTIVIII. YEEE!


let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [45.3138959, 9.503263],
    zoom: 12
});
    

    function runDirection(start, end, canAdd) {  // canRemove = booleano che indica se si sta indirizzando una tappa o no
        
        // ricreo la mappa dopo averla rimossa
        if(canAdd)
          map = L.map('map', {
              layers: MQ.mapLayer(),
              center: [45.3138959, 9.503263],
              zoom: 12
          });
        
        var dir = MQ.routing.directions();

        dir.route({
            locations: [
                start,
                end
            ]
        });
    
        CustomRouteLayer = MQ.Routing.RouteLayer.extend({
            createStartMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: 'leaflet/images/ZipPointer.png',
                    iconSize: [85, 70],
                    iconAnchor: [43, 68],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            },

            createEndMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: 'leaflet/images/ZipPointer.png',
                    iconSize: [85, 70],
                    iconAnchor: [43, 68],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);
                return marker;
            }
        });
        
        map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: true
        }));
    }


// function that runs when form submitted
function submitForm() {

  for(let i = 0; i < nTappe; i++){

  }

  map.remove();
  map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [45.3138959, 9.503263],
    zoom: 12
});


  if(nTappe > 0){   // se non ci sono tappe

    start = document.getElementById("searchStart").value;
    end = document.getElementById("Tappa1").value;
    runDirection(start, end, false);

    for(let i = 1; i <= nTappe; i++){
      start = document.getElementById("Tappa" + i.toString()).value;
      try{
        end = document.getElementById("Tappa" + (i + 1).toString()).value;
      }catch(error){
        end = document.getElementById("searchFinish").value;
      }

      //console.log("Value: " + start);
      if(start == null || start == "") alert("Tappa " + nTappe + " mancante!");

      if(start.toLowerCase() == "lodi") start = "san fereolo";
      if(end.toLowerCase() == "lodi") end = "san fereolo";

      runDirection(start, end, false);      
    }

// se non ci sono tappe
  }else{
     map.remove();

    start = document.getElementById("searchStart").value;
    end = document.getElementById("searchFinish").value;

  // lodi non la trova. Sad :(
    if(start.toLowerCase() == "lodi") start = "san fereolo";
    if(end.toLowerCase() == "lodi") end = "san fereolo";

    // calcola il percorso
    runDirection(start, end, true);

  }

   
    //document.getElementById("form").reset();
}

// asign the form to form variable
//const form = document.getElementById('form');

// call the submitForm() function when submitting the form
//form.addEventListener('submit', submitForm);