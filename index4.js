var image=[
  'number-0.png',
  'number-1.png',
  'number-2.png',
  'number-3.png',
  'number-4.png',
  'number-5.png',
  'number-6.png',
  'number-7.png',
  'number-8.png',
  'number-9.png',
  'number-10.png',

  ];


//matrices
var locations=[];
var marker=[],matrix1=[
  [999999, 618, 218, 397, 511, 703, 494, 152, 370, 422],
   [467, 999999, 527, 568, 580, 397, 810, 456, 686, 510],
   [174, 655, 999999, 406, 505, 695, 284, 224, 160, 430],
   [325, 461, 384, 999999, 210, 421, 439, 314, 398, 188],
   [483, 535, 543, 300, 999999, 419, 451, 472, 395, 290],
   [561, 280, 621, 431, 299, 999999, 679, 550, 615, 373],
   [343, 608, 320, 282, 357, 568, 999999, 402, 95, 334],
   [100, 572, 70, 386, 476, 675, 354, 999999, 230, 410],
   [363, 607, 367, 281, 356, 567, 241, 400, 999999, 333],
   [360, 471, 420, 215, 254, 506, 569, 349, 522, 999999]]

  var matrix2=[
     [999999, 555, 753, 685, 468, 671, 577, 644, 596, 695],
 [613, 999999, 291, 163, 210, 141, 215, 89, 315, 518],
 [763, 419, 999999, 268, 425, 319, 324, 413, 140, 253],
 [791, 372, 199, 999999, 388, 209, 291, 223, 222, 425],
 [456, 222, 497, 356, 999999, 341, 248, 311, 340, 439],
 [758, 382, 325, 196, 381, 999999, 267, 190, 348, 552],
 [645, 227, 255, 127, 226, 93, 999999, 203, 267, 482],
 [887, 541, 542, 400, 541, 398, 466, 999999, 572, 762],
 [632, 308, 221, 195, 314, 246, 213, 340, 999999, 229],
 [595, 438, 390, 412, 329, 467, 374, 527, 217, 999999]
  ]

  var matrix3=[
     [999999, 599, 509, 541, 312, 582, 366, 801, 458, 519],
 [486, 999999, 397, 276, 325, 234, 387, 406, 195, 305],
 [592, 476, 999999, 215, 387, 459, 391, 768, 342, 530],
 [406, 303, 337, 999999, 252, 286, 313, 595, 134, 357],
 [254, 369, 429, 373, 999999, 352, 221, 661, 228, 423],
 [399, 326, 574, 485, 288, 999999, 366, 446, 364, 72],
 [491, 375, 208, 317, 285, 358, 999999, 667, 267, 429],
 [623, 444, 741, 620, 471, 438, 549, 999999, 539, 302],
 [332, 239, 360, 277, 130, 222, 192, 531, 999999, 293],
 [342, 304, 538, 428, 252, 156, 330, 456, 342, 999999]

  ];

  var matrix4=[
     [999999, 11232, 7475, 6248, 7777, 1909, 6539],
 [10291, 999999, 8591, 8939, 3199, 11609, 15237],
 [7566, 6840, 999999, 9913, 6151, 8884, 12512],
 [6346, 9064, 21403, 999999, 7108, 13576, 6397],
 [7034, 3244, 7163, 5783, 999999, 9847, 11698],
 [2363, 12248, 8491, 13413, 8793, 999999, 4093],
 [4880, 16742, 13139, 7806, 14786, 5312, 999999]
  ];

  var matrix5=[

     [999999, 2292, 2821, 3563, 1192, 2305, 2295],
 [2119, 999999, 1728, 1212, 1447, 834, 3011],
 [2540, 1915, 999999, 998, 1660, 1928, 1748],
 [1976, 1351, 1585, 999999, 1298, 1364, 2902],
 [1013, 1228, 1450, 1422, 999999, 1241, 1940],
 [1768, 1065, 2387, 2040, 1201, 999999, 2502],
 [3708, 2931, 1793, 2665, 3179, 2944, 999999]

  ]
var locations1 = [
{lng: -77.032111, lat: -12.086065},
{lng: -77.033319, lat: -12.084821},
{lng: -77.033743, lat: -12.081563},
{lng: -77.037293, lat: -12.082182},
{lng: -77.039499, lat: -12.081045},
{lng: -77.038185, lat: -12.088379},
{lng: -77.035526, lat: -12.091527},
{lng: -77.045470, lat: -12.091132},
{lng: -77.045728, lat: -12.095985},
{lng: -77.035111, lat: -12.099182}



];

var locations2 = [
{lng: -77.032111, lat: -12.086065},
{lng: -77.026465, lat: -12.072900},
{lng: -77.016553, lat: -12.072848},
{lng: -77.021185, lat: -12.068572},
{lng: -77.019522, lat: -12.065154},
{lng: -77.024400, lat: -12.062953},
{lng: -77.026158, lat: -12.063372},
{lng: -77.025854, lat: -12.066087},
{lng: -77.028878, lat: -12.066245},
{lng: -77.029424, lat: -12.062229}

];

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

//var matrix1=; var matrix2=;
var locations=[];
var ordenO1=[0, 7, 2, 8, 6, 3, 9, 4, 5, 1];
var ordenO2=[0, 4, 1, 7, 5, 3, 2, 8, 6, 9];
var ordenO3=[0, 4, 6, 2, 3, 8, 5, 9, 1, 7];
var ordenO4=[0, 5, 6, 3, 4, 1, 2];
var ordenO5=[0, 4, 1, 5, 3, 2, 6];
var directionsService, directionsRenderer ;
var coords={lng: -77.032111, lat: -12.086065};
initMap = function (){
  directionsService = new google.maps.DirectionsService();

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center:coords
  });

}

var lugar2=[], costo1=0, costo2=0,conta2=0, nodo=[];

  function crearNodo(sitios){
    var sumaDis=0, sumaDur=0;

  /*for (var i = 0; i < sitios.length; i++) {
    marker[i] = new google.maps.Marker({
      position: sitios[i],
      map: map,
      icon:
            {
        url: image[i],
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    }

         });
  }*/

    for (var index = 0; index < sitios.length-1; index++) {
      var request = {
        origin: sitios[index],
        destination: sitios[index+1],
        travelMode: 'DRIVING'
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
         //a las coordenadas se suma el resultado
         directionsRenderer = new google.maps.DirectionsRenderer();
         directionsRenderer.setMap(map);
         directionsRenderer.setDirections(result)

          sumaDis=result.routes[0].legs[0].distance.value+sumaDis;
          sumaDur=result.routes[0].legs[0].duration.value+sumaDur;

          console.log(sumaDis)
          console.log(sumaDur)
        }
      });
    }
  }



    var l=0;
var job=[],job1=[];
    function addMarker(list) {
      locations=list;
      for (var i=0;i<list.length;i++){
        for (var j=0;j<list.length;j++){
            job1=[list[i],list[j],i,j];
            job.push(job1)
            l++;
        }
      }
    }
    var myarr=[],myarr2=[],jobData=[],myarr3=[],myarr4=[];

function alpha4(){
  intervalID = window.setInterval(calcPeso,2500);
}

function calcPeso() {
  if (job.length>0){
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
      myarr.push(result.routes[0].legs[0])
      myarr2.push(myarr);
      console.log(myarr)

      myarr=[];
    }
  });
}

  if(myarr2.length==l){
    clearInterval(intervalID);
    //intervalID=null;
    transformM(myarr2);
  }

  jobData=[];
}


function transformM(m){
  var rowData1=[];
  var dato=[],m1=[];
  for (var i = 0; i < locations.length; i++) {
    for (var j = 0; j < locations.length; j++) {
      dato=m.pop();
      if (dato[2].distance.value==0) {
        rowData1.push(999999)
      }else{
        rowData1.push(dato[2].duration.value)
      }

    }
    m1.push(rowData1)
   // console.log(cDis*rowData.distance.value+cTie*rowData.duration.value)
    rowData1=[];
  }
  console.log(m1)
  console.table(m1)
  matrixPlus(m1)
}


function algoritmoPrim(m){
  console.log("prim")
var a=0, ordenOptimo=[];
  var n=m.length;
  //-console.log(n)
  var visited=[1];
  for (var i = 1; i < n; i++) {
    visited.push(0)
  }
  var min = -1;
  var u = 0;
  var v = 0;
  var pesoTotal=0;
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
    pesoTotal=pesoTotal+min;
    console.log("vert: "+u+"->"+v+":"+min);
    ordenOptimo.push(u)
    if(ordenOptimo.length==n-1){
      ordenOptimo.push(v)
    }

    a++;
  }
  visited=[];
  var results=[ordenOptimo,pesoTotal]
  return results;
}
function algoritmoKruskal(m){
  var krusarr=[];
  console.log("kruskal");
   var krusarr1=[], arrtotal=[];
  a=0;
  var n=m.length;
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
    arrtotal.push(min)
    console.log("vert: "+u+"->"+v+":"+min);
     krusarr=[];
     krusarr.push(u);
     krusarr.push(v);
     krusarr1.push(krusarr);
    a++;


  }
  var array1=[],array2=[],a,b,c=0; temp=0;//para manejar los pesos de la matriz 20 mas abajo
    array2=krusarr1[0]
  for (var i = 1; i < krusarr1.length; i++) {
    array1=krusarr1[i]
    b=array1[1];
      array2.push(b);
    }
  }
