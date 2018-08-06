/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/

var montrealCoord = [];
const answerElement_apimashup_1 = document.getElementById('apimashup-1')
const answerElement_apimashup_2 = document.getElementById('apimashup-2')
const answerElement_apimashup_3 = document.getElementById('apimashup-3')

request
.get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
.then(function(response) {

//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

  var location = response.body;
  var props = location.results[0];
  var geometrySpecs = props.geometry;
  montrealCoord.push(geometrySpecs.location.lat + "");
  montrealCoord.push(geometrySpecs.location.lng + "");

  answerElement_apimashup_1.textContent = "Latitud = " + montrealCoord[0] + " & Longitud = " + montrealCoord[1];

//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

  var API_URL_COORDS = "https://api.sunrise-sunset.org/json?lat=" + montrealCoord[0] + "&lng=" + montrealCoord[1];

  console.log()

  request
  .get(API_URL_COORDS)
  .then(function(newInfo) {
    answerElement_apimashup_2.textContent = newInfo.body.results.sunset;
  });







//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')
var API_DRKSKY_URL_COORDS = "https://api.darksky.net/forecast/" + API_KEY_DRKSKY + "/" + montrealCoord[0] + "," + montrealCoord[1];

  request
  .get(API_DRKSKY_URL_COORDS)
  .then(function(weatherInfo) {
    answerElement_apimashup_3.textContent = weatherInfo.body.daily.summary;
  });

});








//
