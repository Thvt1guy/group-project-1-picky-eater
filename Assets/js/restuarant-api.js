const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f39b688f3msh710dd9da1b7341ep1a85aajsn085d4449e741',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};
fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/90210/0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	// if (response.ok){
	// 	console.log('SUCCESS');
	// } else{
	// 	console.log('NOT SUCCESSFUL');
	// }