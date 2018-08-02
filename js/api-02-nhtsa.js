/*
##### National Highway Transit Safety Administration
https://vpic.nhtsa.dot.gov/api/

1. How many types of Chevrolet models are registered with the NHTSA?

2. What are the vehicle types that Nissan has?

3. What are the types of models that exist for Toyota trucks in 2017?

*/

var request = superagent;

// 1 Number of models of Chevrolet:

const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request
.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
.then(function(response) {
  var cars = response.body;
  answerElement_nhtsa_1.textContent = cars.Results.length;
});

// 2 vehicle types that Nissan has:

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request
.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
.then(function(response) {
  var cars = response.body.Results;
  var carTypes = [];
  cars.forEach(function(type) {
    carTypes.push(type.VehicleTypeName)
  })
  carTypes = carTypes.join(", ");
  answerElement_nhtsa_2.textContent = carTypes;
});

// 3 types of models that exist for Toyota trucks in 2017:

const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')

request
.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
.then(function(response) {
  var cars = response.body.Results;
  var carModels = [];
  cars.forEach(function(model) {
    carModels.push(model.Model_Name)
  })
  carModels = carModels.join(", ");
  answerElement_nhtsa_3.textContent = carModels;
});
