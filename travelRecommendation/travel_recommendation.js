let xhr = new XMLHttpRequest();

let url = "/travelRecommendation/travel_recommendation_api.json";

xhr.open("GET", url, true);

xhr.responseType = "json";

let searchInput = document.getElementById("search").value;


let destinations = xhr.response.countries;
let searchDiv = document.getElementById("searchresults")


console.log(searchInput);

