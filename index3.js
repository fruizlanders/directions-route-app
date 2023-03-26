//matrices
var locations1 = [
  {lng: -77.032111, lat: -12.086065},
{lng: -77.035111, lat: -12.099182},
{lng: -77.033743, lat: -12.081563},
{lng: -77.038185, lat: -12.088379},
{lng: -77.045470, lat: -12.091132},
{lng: -77.045728, lat: -12.095985},
{lng: -77.030384, lat: -12.083434},
{lng: -77.039499, lat: -12.081045},
{lng: -77.033319, lat: -12.084821},
{lng: -77.037293, lat: -12.082182},
{lng: -77.035526, lat: -12.091527}];/*-12.074411, -77.030571*/
var locations2 = [
{lng: -77.032111, lat: -12.086065},
{lng: -77.028878, lat: -12.066245},
{lng: -77.019522, lat: -12.065154},
{lng: -77.024400, lat: -12.062953},
{lng: -77.026106, lat: -12.068182},
{lng: -77.026465, lat: -12.072900},
{lng: -77.026158, lat: -12.063372},
{lng: -77.025854, lat: -12.066087},
{lng: -77.029424, lat: -12.062229},
{lng: -77.021185, lat: -12.068572},
{lng: -77.016553, lat: -12.072848}];

var directionsService;
var directionsRenderer;
var coords =  {lng: -77.032111, lat: -12.086065};
var marker=[];
var intervalID;
initMap = function (){
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center:coords
  });
  directionsRenderer.setMap(map);


  }
const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 1.5,
  };
  var job=[],l=0;
function addMarker(list) {
  for (var i = 0; i < marker.length; i++) {
    marker[i].setMap(null)
  }
  for (var i = 0; i < list.length; i++) {
    marker[i] = new google.maps.Marker({
      position: list[i],
      map: map,
      icon: svgMarker
    });
  }
  
}

var lugar2=[], costo1=0, costo2=0;
  function interComparar(lugar, reco){
    
    for (var i = 0; i < lugar.length; i++) {
      lugar2.push(lugar[reco[i]])
    }
    renderer = new google.maps.DirectionsRenderer();
    renderer.setMap(null)
    intervalID = window.setInterval(comparar, 451);
  }
  var conta2=0;
  
  function comparar() {
    console.log("a")
    renderer = new google.maps.DirectionsRenderer();
    renderer.setMap(map);
      directionsService.route({
        origin: lugar2[conta2],
        destination: lugar2[conta2+1],
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          renderer.setDirections(response);
          costo1=costo1+response.routes[0].legs[0].duration.value;
          costo2=costo2+response.routes[0].legs[0].distance.value;
          
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
      if (conta2==lugar2.length-2) {
        clearInterval(intervalID);
        console.log(costo1)
        console.log(costo2)
        costo1=0;costo2=0;
        lugar2=[];
        
      }
      conta2++;
      
  }
