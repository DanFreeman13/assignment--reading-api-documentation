/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?

2. When was the premiere date for the 9th season of Friends?

3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
*/
var request = superagent;

// 1. Average raiting of "Better Call Saul"

const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

request
.get('http://api.tvmaze.com/search/shows?q=Better-call-saul')
.then(function(response) {
  var averageRating = response.body[0].show.rating.average;

  answerElement_tvmaze_1.textContent = averageRating;
});

// 2. Premiere Date for Friends

const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

request
.get('http://api.tvmaze.com/shows/431/seasons')
.then(function(response) {
  var premieredDate = response.body[8].premiereDate
  answerElement_tvmaze_2.textContent = premieredDate;
})

// 3 shows has appeared actor Andrew Lincoln

const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request
.get('http://api.tvmaze.com/people/10257?embed=castcredits')
.then(function(response) {
  var numberOfShows = response.body._embedded.castcredits.length
  // console.log(numberOfShows)
  answerElement_tvmaze_3.textContent = numberOfShows;
})
