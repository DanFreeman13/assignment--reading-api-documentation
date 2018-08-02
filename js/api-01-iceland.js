var request = superagent;

//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body
    console.log(apiJsonData)
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
  })

//========================================================================
// (2) What is the next concert event in Iceland?
const answerElement_iceland_2 = document.getElementById('iceland-2')

request
.get('http://apis.is/concerts')
.then(function(response) {
  var concerts = response.body;
  answerElement_iceland_2.textContent = concerts.results[0].eventDateName;
});

//

//========================================================================
// (3) How many **arrival** flights are scheduled for today?
const answerElement_iceland_3 = document.getElementById('iceland-3')

request
.get("http://apis.is/flight?language=en&type=arrivals")
.then(function (response) {
  var vuelos = response.body;
  answerElement_iceland_3.textContent = vuelos.results.length;

});
