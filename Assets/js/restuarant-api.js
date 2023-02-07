var zipInputEl = document.querySelector('#zipcodeInput');
var searchForm = document.querySelector('#zipsearchform');
var searchBTN = document.querySelector('.button-primary');
var RestList = document.querySelector('#dinnerChoices');


var submissionHandler = function (event) {
	event.preventDefault();
	var zip = zipInputEl.value.trim();
	console.log(zip);
	getUserRest(zip);
}

var getUserRest = function (zipcode) {
	var apiUrl = "https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/" + zipcode + "/0"
	fetch(apiUrl, options)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data);
					writeRestData(data);
				})
			} else {
				console.log('Error' + response.statusText);
			}
		})
		.catch(err => console.error(err));
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f39b688f3msh710dd9da1b7341ep1a85aajsn085d4449e741',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};

var writeRestData = function (data) {
	console.log(data);
	console.log(data.restaurants.length);
	var html = "";

	for (var i = 0; i < data.restaurants.length; i++) {
		html +=
			`
			<h3 class = "rest-result" data-latitude = ${data.restaurants[i].latitude} data-longitude = ${data.restaurants[i].longitude}>${data.restaurants[i].restaurantName}</h3>
			`

		RestList.innerHTML = html;

	}
}


//add event listener to rest result container
//for function of the click event 
//check to see if the targety of what was clicked ie event.target has the rest-result class
//if true console log event.target
//console log the event.target data lat and long attributes
// add code to update map based on those long and lat



searchForm.addEventListener("submit", submissionHandler);



// if (response.ok){
// 	console.log('SUCCESS');
// } else{
// 	console.log('NOT SUCCESSFUL');
// }

// const testData =
// {
// 	"matching_results": 41,
// 	"restaurants": [
// 		{
// 			"id": 4543279,
// 			"restaurantName": "Franks pizza & Italian restaurant",
// 			"address": "601 Tea St",
// 			"zipCode": "08805",
// 			"phone": "+1 732-868-0488",
// 			"website": "http://www.frankspizza1.com/",
// 			"email": "",
// 			"latitude": "40.56955",
// 			"longitude": "-74.55298",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun (12:00 PM - 10:00 PM) | Mon - Thu (11:00 AM - 10:00 PM) | Fri - Sat (11:00 AM - 11:00 PM)",
// 			"cuisineType": "Italian,Pizza"
// 		},
// 		{
// 			"id": 4519818,
// 			"restaurantName": "Burger King",
// 			"address": "607 West Union Ave",
// 			"zipCode": "08805",
// 			"phone": "+1 732-564-5273",
// 			"website": "https://burgerking.com/store-locator/store/restaurant_7091",
// 			"email": "12272@racksonbk.com",
// 			"latitude": "40.568394",
// 			"longitude": "-74.551735",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun (7:00 AM - 11:00 PM) | Mon - Thu (6:00 AM - 11:00 PM) | Fri - Sat (6:00 AM - 12:00 AM)",
// 			"cuisineType": "Restaurant"
// 		},
// 		{
// 			"id": 14067479,
// 			"restaurantName": "The Habit Burger Grill",
// 			"address": "314 Chimney Rock Road Suite H1",
// 			"zipCode": "08805",
// 			"phone": "+1 732-469-4693",
// 			"website": "https://www.habitburger.com",
// 			"email": "",
// 			"latitude": "40.57674",
// 			"longitude": "-74.55961",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun (10:30 AM - 9:00 PM) | Mon - Sat (10:30 AM - 10:00 PM)",
// 			"cuisineType": "Fast Food,American"
// 		},
// 		{
// 			"id": 4465793,
// 			"restaurantName": "Baskin-Robbins",
// 			"address": "109 E Main St Ste 111",
// 			"zipCode": "08805",
// 			"phone": "+1 732-302-9022",
// 			"website": "http://www.baskinrobbins.com",
// 			"email": "",
// 			"latitude": "40.561825",
// 			"longitude": "-74.53279",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun (6:00 AM - 10:00 PM) | Mon - Wed (5:00 AM - 10:00 PM) | Thu (5:00 AM - 6:00 PM) | Fri - Sat (5:00 AM - 10:00 PM)",
// 			"cuisineType": "Cafe"
// 		},
// 		{
// 			"id": 17832104,
// 			"restaurantName": "Dunkin'",
// 			"address": "404 W. Union Ave",
// 			"zipCode": "08805",
// 			"phone": "+1 732-764-9807",
// 			"website": "https://locations.dunkindonuts.com/en/nj/bound-brook/404-w.-union-ave/308759",
// 			"email": "",
// 			"latitude": "40.56737",
// 			"longitude": "-74.54362",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Mon - Thu (5:00 AM - 8:00 PM) | Fri (5:00 AM - 10:00 PM) | Sat - Sun (5:00 AM - 9:00 PM)",
// 			"cuisineType": "Restaurant"
// 		},
// 		{
// 			"id": 16825653,
// 			"restaurantName": "Chipotle Mexican Grill",
// 			"address": "318 Chimney Rock Rd",
// 			"zipCode": "08805",
// 			"phone": "+1 732-469-4348",
// 			"website": "https://locations.chipotle.com/nj/bound-brook/318-chimney-rock-rd",
// 			"email": "NJ.2934.ChimneyRck@chipotle.com",
// 			"latitude": "40.57662",
// 			"longitude": "-74.55912",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun - Sat (10:45 AM - 10:00 PM)",
// 			"cuisineType": "Restaurant"
// 		},
// 		{
// 			"id": 2392298,
// 			"restaurantName": "Mama Rosina's",
// 			"address": "350 E Main St.",
// 			"zipCode": "08805",
// 			"phone": "+1 732-805-3377",
// 			"website": "http://mamarosinas.info",
// 			"email": "Dominicktodaro24@gmail.com",
// 			"latitude": "40.561302",
// 			"longitude": "-74.530396",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun (12:00 PM - 10:00 PM) | Mon - Fri (11:30 AM - 10:00 PM) | Sat (12:00 PM - 11:00 PM)",
// 			"cuisineType": "Italian"
// 		},
// 		{
// 			"id": 17832101,
// 			"restaurantName": "Dunkin'",
// 			"address": "109 E Main St Ste 111",
// 			"zipCode": "08805",
// 			"phone": "+1 732-302-9022",
// 			"website": "https://locations.dunkindonuts.com/en/nj/bound-brook/109-e-main-st/341412",
// 			"email": "",
// 			"latitude": "40.561806",
// 			"longitude": "-74.53278",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun (6:00 AM - 10:00 PM) | Mon - Wed (5:00 AM - 10:00 PM) | Thu (5:00 AM - 6:00 PM) | Fri - Sat (5:00 AM - 10:00 PM)",
// 			"cuisineType": "Restaurant"
// 		},
// 		{
// 			"id": 17832105,
// 			"restaurantName": "Dunkin",
// 			"address": "1620 US Highway 22 In Speedway",
// 			"zipCode": "08805",
// 			"phone": "+1 732-271-9042",
// 			"website": "http://www.dunkindonuts.com",
// 			"email": "",
// 			"latitude": "40.575855",
// 			"longitude": "-74.551605",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun - Sat (12:00 AM - 12:00 AM)",
// 			"cuisineType": "Restaurant"
// 		},
// 		{
// 			"id": 949270,
// 			"restaurantName": "Chimney Rock Inn",
// 			"address": "800 Thompson Ave",
// 			"zipCode": "08805-1124",
// 			"phone": "+1 732-469-4600",
// 			"website": "http://www.chimneyrockinn.com/",
// 			"email": "info@chimneyrockinn.com",
// 			"latitude": "40.579227",
// 			"longitude": "-74.55651",
// 			"stateName": "NJ",
// 			"cityName": "Bound Brook",
// 			"hoursInterval": "Sun - Sat (12:00 PM - 10:00 PM)",
// 			"cuisineType": "American,Pizza,Bar"
// 		}
// 	]
// }

// writeRestData(testData);