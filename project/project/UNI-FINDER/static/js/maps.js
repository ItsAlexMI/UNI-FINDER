let map;
let infomarker = [];
const UNI = {
  //NORTE
  //12.13352570969774, -86.2685046835467
  //SUR
  //12.127678382247053, -86.26865343065815
  //OESTE
  //12.130943179808762, -86.2748883959427
  //ESTE
  //12.131215852621285, -86.26299482482366
  north: 12.13352570969774,
  south: 12.127678382247053,
  west: -86.2748883959427,
  east: -86.26299482482366,
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.13046, lng: -86.26912 },
    restriction: {
      latLngBounds: UNI,
      strictBounds: false,
    },
    zoom: 17,
    mapId: "93d57b58f8c8f308",
  });
  const infomarker1 = new google.maps.InfoWindow({
    content: marker1content,
  });
  infomarker.push(infomarker1);
  const infomarker2 = new google.maps.InfoWindow({
    content: marker2content,
  });
  infomarker.push(infomarker2);
  const infomarker3 = new google.maps.InfoWindow({
    content: marker3content,
  });
  infomarker.push(infomarker3);
  const infomarker4 = new google.maps.InfoWindow({
    content: marker4content,
  });
  infomarker.push(infomarker4);
  const infomarker5 = new google.maps.InfoWindow({
    content: marker5content,
  });
  infomarker.push(infomarker5);
  const infomarker6 = new google.maps.InfoWindow({
    content: marker6content,
  });
  infomarker.push(infomarker6);
  const infomarker7 = new google.maps.InfoWindow({
    content: marker7content,
  });
  infomarker.push(infomarker7);
  const infomarker8 = new google.maps.InfoWindow({
    content: marker8content,
  });
  infomarker.push(infomarker8);
  const infomarker9 = new google.maps.InfoWindow({
    content: marker9content,
  });
  infomarker.push(infomarker9);
  const infomarker10 = new google.maps.InfoWindow({
    content: marker10content,
  });
  infomarker.push(infomarker10);
  const infomarker11 = new google.maps.InfoWindow({
    content: marker11content,
  });
  infomarker.push(infomarker11);
  const infomarker12 = new google.maps.InfoWindow({
    content: marker12content,
  });
  infomarker.push(infomarker12);
  const infomarker13 = new google.maps.InfoWindow({
    content: marker13content,
  });
  infomarker.push(infomarker13);
  const infomarker14 = new google.maps.InfoWindow({
    content: marker14content,
  });
  infomarker.push(infomarker14);
  const infomarker15 = new google.maps.InfoWindow({
    content: marker15content,
  });
  infomarker.push(infomarker15);
  const infomarker16 = new google.maps.InfoWindow({
    content: marker16content,
  });
  infomarker.push(infomarker16);
  const infomarker17 = new google.maps.InfoWindow({
    content: marker17content,
  });
  infomarker.push(infomarker17);
  const infomarker18 = new google.maps.InfoWindow({
    content: marker18content,
  });
  infomarker.push(infomarker18);
  const infomarker19 = new google.maps.InfoWindow({
    content: marker19content,
  });
  infomarker.push(infomarker19);
  const infomarker20 = new google.maps.InfoWindow({
    content: marker20content,
  });
  infomarker.push(infomarker20);
  const infomarker21 = new google.maps.InfoWindow({
    content: marker21content,
  });
  infomarker.push(infomarker21);
  const infomarker22 = new google.maps.InfoWindow({
    content: marker22content,
  });
  infomarker.push(infomarker22);
  const infomarker23 = new google.maps.InfoWindow({
    content: marker23content,
  });
  infomarker.push(infomarker23);
  const infomarker24 = new google.maps.InfoWindow({
    content: marker24content,
  });
  infomarker.push(infomarker24);
  const infomarker25 = new google.maps.InfoWindow({
    content: marker25content,
  });
  infomarker.push(infomarker25);
  const infomarker26 = new google.maps.InfoWindow({
    content: marker26content,
  });
  infomarker.push(infomarker26);
  const infomarker27 = new google.maps.InfoWindow({
    content: marker27content,
  });
  infomarker.push(infomarker27);
  const infomarker28 = new google.maps.InfoWindow({
    content: marker28content,
  });
  infomarker.push(infomarker28);
  const infomarker29 = new google.maps.InfoWindow({
    content: marker29content,
  });
  infomarker.push(infomarker29);
  infomarker.push(infomarker1);
  //Marcador prueba
  const marker1 = new google.maps.Marker({
    //12.131459251823115, -86.2689132347133
    position: { lat: 12.131459251823115, lng: -86.2689132347133 },
    map,
    title: "Cancha Volleyball",
  });
  marker1.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker1.open({
      anchor: marker1,
      map,
      shouldFocus: false,
    });
  });
  const marker2 = new google.maps.Marker({
    //12.129049980027052, -86.27035303016667
    position: { lat: 12.129049980027052, lng: -86.27035303016667 },
    map,
    title: "Entrada y Salida",
  });
  marker2.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker2.open({
      anchor: marker2,
      map,
      shouldFocus: false,
    });
  });
  const marker3 = new google.maps.Marker({
    //12.131378463825136, -86.27114121646156
    position: { lat: 12.131378463825136, lng: -86.27114121646156 },
    map,
    title: "Entrada y Salida",
  });

  marker3.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker3.open({
      anchor: marker3,
      map,
      shouldFocus: false,
    });
  });
  const marker4 = new google.maps.Marker({
    //12.132850159195991, -86.26890397952701
    position: { lat: 12.132850159195991, lng: -86.26890397952701 },
    map,
    title: "Entrada y Salida",
  });

  //contenido del marcador
  marker4.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker4.open({
      anchor: marker4,
      map,
      shouldFocus: false,
    });
  });
  marker5 = new google.maps.Marker({
    //12.131872206634169, -86.26977775828158
    position: { lat: 12.131872206634169, lng: -86.26977775828158 },
    map,
    title: "Edificio Rigoberto Lopez Perez (UNI)",
  });
  marker5.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker5.open({
      anchor: marker5,
      map,
      shouldFocus: false,
    });
  });
  const marker6 = new google.maps.Marker({
    //12.132152615643133, -86.26989539648712
    position: { lat: 12.132152615643133, lng: -86.26989539648712 },
    map,
    title: "CS50xNI",
  });
  marker6.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker6.open({
      anchor: marker6,
      map,
      shouldFocus: false,
    });
  });
  const marker7 = new google.maps.Marker({
    //12.13107907342103, -86.27013497669438
    position: { lat: 12.13107907342103, lng: -86.27013497669438 },
    map,
    title: "UNI Postgrado",
  });
  marker7.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker7.open({
      anchor: marker7,
      map,
      shouldFocus: false,
    });
  });
  marker8 = new google.maps.Marker({
    //12.128745042405784, -86.27008112891069
    position: { lat: 12.128745042405784, lng: -86.27008112891069 },
    map,
    title: "ATM Banpro",
  });
  marker8.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker8.open({
      anchor: marker8,
      map,
      shouldFocus: false,
    });
  });
  const marker9 = new google.maps.Marker({
    //12.129721534781785, -86.26987832385483
    position: { lat: 12.129721534781785, lng: -86.26987832385483 },
    map,
    title: "CLUB ESCUELA DE NATACIÓN LOS TRITONES MANAGUA",
  });
  marker9.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker9.open({
      anchor: marker9,
      map,
      shouldFocus: false,
    });
  });
  const marker10 = new google.maps.Marker({
    //12.130266978229875, -86.27059715584359
    position: { lat: 12.130266978229875, lng: -86.27059715584359 },
    map,
    title: "Cafetin El Güegüense",
  });
  marker10.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker10.open({
      anchor: marker10,
      map,
      shouldFocus: false,
    });
  });
  const marker11 = new google.maps.Marker({
    //12.132295556570377, -86.26922819968364
    position: { lat: 12.132295556570377, lng: -86.26922819968364 },
    map,
    title: "Parqueo",
  });
  marker11.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker11.open({
      anchor: marker11,
      map,
      shouldFocus: false,
    });
  });
  const marker12 = new google.maps.Marker({
    //12.13259437482282, -86.27015032294346
    position: { lat: 12.13259437482282, lng: -86.27015032294346 },
    map,
    title: "Parqueo",
  });
  marker12.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker12.open({
      anchor: marker12,
      map,
      shouldFocus: false,
    });
  });
  const marker13 = new google.maps.Marker({
    //12.132564218384767, -86.27044402483666
    position: { lat: 12.132564218384767, lng: -86.27044402483666 },
    map,
    title: "Taekwondo UNI",
  });
  marker13.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker13.open({
      anchor: marker13,
      map,
      shouldFocus: false,
    });
  });
  const marker14 = new google.maps.Marker({
    //12.132131884072512, -86.27089770416512
    position: { lat: 12.132131884072512, lng: -86.27089770416512 },
    map,
    title: "UNI-IES",
  });
  marker14.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker14.open({
      anchor: marker14,
      map,
      shouldFocus: false,
    });
  });
  const marker15 = new google.maps.Marker({
    //12.131168534030941, -86.27081452238716
    position: { lat: 12.131168534030941, lng: -86.27081452238716 },
    map,
    title: "Biblioteca Esman Marín - UNI",
  });
  marker15.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker15.open({
      anchor: marker15,
      map,
      shouldFocus: false,
    });
  });
  const marker16 = new google.maps.Marker({
    //12.13075181061184, -86.27006951148763
    position: { lat: 12.13075181061184, lng: -86.27006951148763 },
    map,
    title: "Parqueo",
  });
  marker16.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker16.open({
      anchor: marker16,
      map,
      shouldFocus: false,
    });
  });
  const marker17 = new google.maps.Marker({
    //12.129579047278918, -86.26963098097372
    position: { lat: 12.129579047278918, lng: -86.26963098097372 },
    map,
    title: "Parqueo",
  });
  marker17.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker17.open({
      anchor: marker17,
      map,
      shouldFocus: false,
    });
  });
  const marker18 = new google.maps.Marker({
    //12.128278268725122, -86.26963412331125
    position: { lat: 12.128278268725122, lng: -86.26963412331125 },
    map,
    title: "Parqueo",
  });
  marker18.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker18.open({
      anchor: marker18,
      map,
      shouldFocus: false,
    });
  });
  const marker19 = new google.maps.Marker({
    //12.128732971459547, -86.26940374266637
    position: { lat: 12.128732971459547, lng: -86.26940374266637 },
    map,
    title: "Parqueo",
  });
  marker19.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker19.open({
      anchor: marker19,
      map,
      shouldFocus: false,
    });
  });
  const marker20 = new google.maps.Marker({
    //12.131117793819909, -86.26989971779449
    position: { lat: 12.131117793819909, lng: -86.26989971779449 },
    map,
    title: "Oficinas UNEN-RUSB",
  });
  marker20.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker20.open({
      anchor: marker20,
      map,
      shouldFocus: false,
    });
  });
  const marker21 = new google.maps.Marker({
    //12.131812718832354, -86.27073997593004
    position: { lat: 12.131812718832354, lng: -86.27073997593004 },
    map,
    title: "Auditorio Salomón de la Selva - UNI",
  });
  marker21.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker21.open({
      anchor: marker21,
      map,
      shouldFocus: false,
    });
  });
  /*const svgcircle = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillOpacity: 0.0,
    strokeOpacity: 0,
    anchor: new google.maps.Point(0, 0),
  };
  new google.maps.Marker({
    //12.131459251823115, -86.2689132347133
    position: { lat: 12.131459251823115, lng: -86.2689132347133 },
    icon: svgcircle,
    map,
    title: "Cancha Volleyball",
    label: {
      text: "Cancha Volleyball",
      color: "#fff",
      fontSize: "10px",
      fontWeight: "400",
    },
  });
  new google.maps.Marker({
    //12.13107907342103, -86.27013497669438
    position: { lat: 12.13107907342103, lng: -86.27013497669438 },
    icon: svgcircle,
    map,
    title: "UNI Postgrado",
    label: {
      text: "UNI Postgrado",
      color: "#fff",
      fontSize: "10px",
      fontWeight: "400",
    },
  });*/
}
window.initMap = initMap;
