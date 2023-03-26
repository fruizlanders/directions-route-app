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

var locations3 = [
  {lng: -77.032111, lat: -12.086065},
  {lng: -77.049149, lat: -12.096461},
  {lng: -77.036009, lat: -12.093629},
  {lng: -77.031235, lat: -12.093231},
  {lng: -77.036707, lat: -12.095371},
  {lng: -77.035376, lat: -12.098896},
  {lng: -77.030548, lat: -12.102777},
  {lng: -77.030521, lat: -12.097400},
  {lng: -77.024819, lat: -12.098686},
  {lng: -77.026621, lat: -12.094322}
  ];
//distancia y tiempo sirven para diferentes tipos de negocio*
  var locations4 = [
    {lng: -77.032111, lat: -12.086065},
    {lng: -77.023103, lat: -12.095204},
    {lng: -77.036174, lat: -12.123327},
    {lng: -77.07377, lat: -12.094417},
    {lng: -77.065669, lat: -12.052322},
    {lng: -77.071139, lat: -12.030482},
    {lng: -77.026876, lat: -12.036124}
    ];

    var locations5 = [
      {lng: -77.032111, lat: -12.086065},
      {lng: -77.031235, lat: -12.093231},
      {lng: -77.035376, lat: -12.098896},
      {lng: -77.036707, lat: -12.095371},
      {lng: -77.030548, lat: -12.102777},
      {lng: -77.024819, lat: -12.098686},
      {lng: -77.017226, lat: -12.090916}];

var map, map1, zz=0,z=0, n, locations=[], ordenOptimo=[];
//muestras
var directionsService, directionsService1;
var directionsRenderer, directionsRenderer1;
var coords =  {lng: -76.973139, lat: -12.084556};
var matriz=[];
var l=0,q,av=[];
var/*const*/ marker=[];
var intervalID,matriz1=[];

initMap = function (){
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
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
  var job=[];
function addMarker(list) {
  locations=list;
  n=locations.length;
  for (var i = 0; i < marker.length; i++) {
    marker[i].setMap(null)
  }
  for (var i = 0; i < locations.length; i++) {
    marker[i] = new google.maps.Marker({

      position: locations[i],
      map: map,
      icon: svgMarker
    });
  }
  for (var i=0;i<locations.length;i++){
    for (var j=0;j<locations.length;j++){
        job[l]=[locations[i],locations[j],i,j];
        l++;
    }
  }
}
var myarr=[],myarr2=[],jobData=[],myarr3=[],myarr4=[];
function alpha4(){
  intervalID = window.setInterval(calcPeso, 2500);
}
var nn=1, pintaGoogleA=[], pintaGoogle;

function calcPeso() {
  var m=n*n;
    pintaGoogle = new google.maps.DirectionsRenderer()
    pintaGoogleA.push(pintaGoogle);
    pintaGoogle.setMap(map);
    jobData=job.pop();
  myarr.push(jobData[2])
  myarr.push(jobData[3])
  var request = {
    origin: jobData[0],
    destination: jobData[1],
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
    d = result.routes[0].legs[0].distance.value
      myarr.push(d)
      console.log(myarr)
      myarr2.push(myarr);
      myarr=[];
      pintaGoogle.setDirections(result);

    }
  });

  if(job.length==0){
    clearInterval(intervalID);
    intervalID=null;
  }
  jobData=[];

}
function mostrarMatriz(){
  var jok1=[],jok=[];
  var cont=0
  for (var e = 0; e < n; e++) {
    for (var f = 0; f < n; f++) {
      jok1=myarr2.pop()
      if (jok1[0]==jok1[1]) {
          jok.push(999999)
          document.getElementById("matrix").innerHTML=
          document.getElementById("matrix").innerHTML+
          " " +99999
      }else{
          jok.push(jok1[2])
          document.getElementById("matrix").innerHTML=
          document.getElementById("matrix").innerHTML+
          " " +jok1[2]
      }
      jok1=[]


    }
    matriz.push(jok)
    jok=[];
    document.getElementById("matrix").innerHTML=
    document.getElementById("matrix").innerHTML+ "<br/>";
  }
  //algoritmoPrim();
  console.log(matriz)
}
function pickMat(muestra){
  document.getElementById("matriz2").innerHTML=null;
  matriz=muestra;
  if(muestra==muestra1){
    locations=locations1
    } else if (muestra==muestra2) {
    locations=locations2
    }else if (muestra==muestra3) {
    locations=locations3
    }else if (muestra==muestra4) {
    locations=locations4
  }
  n=matriz.length;
  for (var i = 0; i < pintaGoogleA.length; i++) {
    pintaGoogleA[i].setMap(null);
  }
  for (var i = 0; i < marker.length; i++) {
    marker[i].setMap(null)
  }
  for (var i = 0; i < locations.length; i++) {
    marker[i] = new google.maps.Marker({

      position: locations[i],
      map: map,
      icon: svgMarker
    });
  }
  var jok2=[];
  for (var e = 0; e < n; e++) {
      jok2=muestra[e];
    for (var f = 0; f < n; f++) {
      document.getElementById("matriz2").innerHTML=
      document.getElementById("matriz2").innerHTML+
        " " +jok2[f];
      }
      jok2=[]
      document.getElementById("matrix").innerHTML=
      document.getElementById("matrix").innerHTML+ "<br/>";
    }

  }


function algoritmoPrim(m){
  n=m.length;
  var visited=[1];
  for (var i = 1; i < n; i++) {
    visited.push(0)
  }
  var min = -1;
  var u = 0;
  var v = 0;
  var total=0;
  while (a < n-1) {
    min=9999999;
    for(var i=0;i<n;i++){
      if(visited[i]==1){
        for(var j=1;j<n;j++){
          if(visited[j]==0){
            if(min>m[i][j]){
              min=m[i][j];
              u=i;
              v=j;
            }
          }
        }
      }
    }

    visited[v]=1;
    visited[u]=2;
    total=total+min;

    console.log("vert: "+u+"->"+v+":"+min);
    ordenOptimo.push(u)
    if(ordenOptimo.length==n-1){
      ordenOptimo.push(v)
    }
    a++;
  }
  console.log(total)
  crearNodo();
}
var arrekru1 =[], arrekru2 =[];
var renderer1,renderer2;

function algoritmoKruskal(m){
  n=m.length;
  var visited=[1];
  for (var i = 1; i < n; i++) {
    visited.push(0)
  }
  var min = -1;
  var u = 0;
  var v = 0;
  var total=0;
  while (a < n-1) {
    min=9999999;
    for(var i=0;i<n;i++){
      if(visited[i]==1){
        for(var j=1;j<n;j++){
          if(visited[j]==0){
            if(min>m[i][j]){
              min=m[i][j];
              u=i;
              v=j;
            }
          }
        }
      }
    }

    visited[v]=1;
    visited[u]=1;
    total=total+min;
    arrekru1.push(locations[u])
    arrekru1.push(locations[v])
     console.log("vert: "+u+"->"+v+":"+min);
    arrekru2.push(arrekru1)
    arrekru1=[];
    a++;
  }
  console.log(arrekru2)
  console.log(arrekru2)
}

var ordenO1=[0, 7, 2, 8, 6, 3, 9, 4, 5, 1];
var ordenO2=[0, 4, 1, 7, 5, 3, 2, 8, 6, 9];
var ordenO3=[0, 4, 6, 2, 3, 8, 5, 9, 1, 7];

var suma=0;
function crearNodo(loca, orden){
  for (var j = 0; j < loca.length; j++) {
      nodo[orden[j]]=loca[j]
  }
}
function alpha5(){

  intervalID = window.setInterval(rutasDisplay, 500);
}

function beta6(){

  intervalID = window.setInterval(krukalDisplay, 500);
}
var arrekru3=[], krusk1, sumak=0;
function krukalDisplay(){
  n=arrekru2.length;
  renderer1 = new google.maps.DirectionsRenderer();
  renderer1.setMap(map);
  directionsService.route({
    origin: arrekru2[sumak][0],
    destination: arrekru2[sumak][1],
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      renderer1.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
  arrekru3=[]

  if(arrekru2.length==0){
    clearInterval(intervalID);
    console.log('listo!')
  }
  sumak++;
}
/*function alpha6(){
  for (var i = 0; i < locations.length-1; i++) {
    directionsService.route(
    {  origin: locations[i],
      destination: locations[i+1],
      travelMode: 'DRIVING'
    }
      , function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  }
}*/
var keeper=[]
var renderer;
var nodo=[]
function rutasDisplay(){
  renderer = new google.maps.DirectionsRenderer();
  renderer.setMap(map)
  //keeper.push(renderer)
  directionsService.route({
    origin: nodo[suma],
    destination: nodo[suma+1],
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      renderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

  suma++;

  if(suma==locations.length-1){
    clearInterval(intervalID);
    console.log('listo!')
  }

}
