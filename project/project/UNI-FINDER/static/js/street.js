function initPano() {
  // Set up Street View and initially set it visible. Register the
  // custom panorama provider function. Set the StreetView to display
  // the custom panorama 'reception' which we check for below.
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("streetmap"),
    { pano: "reception", visible: true }
  );

  panorama.registerPanoProvider(getCustomPanorama);
}

// Return a pano image given the panoID.
function getCustomPanoramaTileUrl() {
  var URLdomain = window.location.host;
  console.log("imagen:", imagen);
  return "http://" + URLdomain + "/static/images/streetview/" + imagen;
}

// Construct the appropriate StreetViewPanoramaData given
// the passed pano IDs.
function getCustomPanorama(pano) {
  if (pano === "reception") {
    // console.log(getCustomPanoramaTileUrl());
    return {
      location: {
        pano: "reception",
        description: "Hola mundo",
      },
      links: [],

      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(1024, 512),
        worldSize: new google.maps.Size(2048, 1024),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 105,
        getTileUrl: getCustomPanoramaTileUrl,
      },
    };
  }
  // @ts-ignore TODO fix typings
  return null;
}

window.initPano = initPano;
