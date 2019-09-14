

/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
    var Peterochka = new H.map.Marker({lat:55.9416, lng:37.5129});
    map.addObject(Peterochka);

    var subWay = new H.map.Marker({lat:55.932022, lng: 37.520124});
    map.addObject(subWay);

    var Peterochka1 = new H.map.Marker({lat:55.943505, lng:37.497132});
    map.addObject(Peterochka1);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
    apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();