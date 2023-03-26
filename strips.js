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
      document.getElementById("paso2-cont").innerHTML =
          nn + " de " + m;
          nn++;
      document.getElementById("paso2-1").innerHTML =
      result.routes[0].legs[0].start_address+
      " y ";
      document.getElementById("paso2-2").innerHTML =
      result.routes[0].legs[0].end_address;
      document.getElementById("paso2-d").innerHTML ="es: "+d+ " metros"
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


  function transformM(m){
    var rowData1=[],rowData2=[];
    var dato=[],m1=[],m2=[];
    for (var i = 0; i < locations.length; i++) {
      for (var j = 0; j < locations.length; j++) {
        dato=m.pop();
        if (dato[2].distance.value==0) {
          rowData1.push(999999)
          rowData2.push(999999)
        }else{
          rowData1.push(dato[2].distance.value)
          rowData2.push(dato[2].duration.value)
        }

      }
      m1.push(rowData1)
      m2.push(rowData2)
     // console.log(cDis*rowData.distance.value+cTie*rowData.duration.value)
      rowData1=[];rowData2=[];
    }
    console.table(m1)
    algoritmoKruskal(m1);
    console.table(m2)
    algoritmoKruskal(m2);
    /*var m1Prim=[], m1Krus=[], m2Prim=[], m2Krus;

    m1Prim= algoritmoPrim(m1);
    m1Krus=algoritmoKruskal(m1);
    m2Prim=algoritmoPrim(m2);
    m2Krus=algoritmoKruskal(m2);

    console.log('distancia')
    console.table(m1Prim)
    console.table(m1Krus)
    var optimoD=[], optimoT=[];
    if (m1Krus[0]<m1Prim[0]) {
      optimoD=m1Prim[1]
    }else{
      optimoD=m1Krus[1]
    }
    console.log('tiempo')
    console.table(m2Prim)
    console.table(m2Krus)
    if (m2Krus[0]<m2Prim[0]) {
      optimoT=m2Prim[1]
    }else{
      optimoT=m2Krus[1]
    }
    console.log(optimoD)
    console.log(optimoT)
    //return m1
  */
  }



var nodo=[];
function cambiar() {
  //funcion del select selectBox
  //poner aqui todo lo que cambie el select
    nodo=[];
    var selectBox = document.getElementById("select");
    //var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    locationsT=locations[selectBox.selectedIndex-1]
    ordenOptimoT=ordenOptimo[selectBox.selectedIndex-1]
    console.log(locationsT)
}

var x=0;
var renderers=[];
function mostrarP(){
/*if (renderers=!null) {
  for (var i = 0; i < renderers.length; i++) {
    renderers[i].setMap(null);
    renderers[i]=null
  }
  renderers=[];
}*/

for (var j = 0; j < locationsT.length; j++) {
    nodo[ordenOptimoT[j]]=locationsT[j];
}
console.log(nodo);
pintarPrim();
}
function pintarPrim(){
  intervalID = window.setInterval(googlePrim, 500);

}
function googlePrim(){
  console.log('aa ')

renderer = new google.maps.DirectionsRenderer();
console.log(renderer)
console.log(renderers)
renderers.push(renderer);
console.log(renderers)
//renderers[renderers.length].setMap(map)
//renderer.setPanel(document.getElementById('directionsPanel'));
directionsService.route({
  origin: nodo[x],
  destination: nodo[x+1],
  travelMode: 'DRIVING'
}, function(response, status) {
  if (status === 'OK') {
    renderers[renderers.length].setDirections(response);
  } else {
    window.alert('Directions request failed due to ' + status);
  }
});

x++;
console.log(x)
if(x==locationsT.length-1){
  clearInterval(intervalID);
  console.log('listo!')
}
}


var suma=0;
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

console.log(suma)
console.log(nodo)
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

if(suma==locations.length){
  clearInterval(intervalID);
  console.log('listo!')
}

}


var array1=[],array2=[],a,b,c=0; temp=0;//para manejar los pesos de la matriz 20 mas abajo
for (var i = 0; i < krusarr1.length; i++) {
  array1=krusarr1[i]
  a=array1[0];
  b=array1[1];
  if (a==0) {
    array2.push(array1)
  }else{
    //array1(a,b)
    for (var j = 0; j < array2.length; j++) {
      array3=array2[j];
      //array[i]
      if(array3[array3.length-1]==a){
        array3.push(b)
      }else{
        for (var k = 1; k < array3.length-1; k++) {
          if (array3[k]==a) {
            array3.splice(k+2,0,b)
          }
        }
      }
      array2[j]=array3;
    }
  }
}

<button type="button" id="btn3" onclick="calcularOrden(costMatrixlv9)">calcular</button>
