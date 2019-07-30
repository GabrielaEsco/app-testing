const request = require('request')

//below: callback function for getting weather forecast

const forecast = (latitude, longitude, callback) =>{
//const forecast = (location, callback) =>{
	const weatherURL = 'https://api.darksky.net/forecast/7553c7a7b6bb027acccaf24cd277d44e/' + latitude + ',' + longitude
	//encodeURIComponent(location) - wont work can't request a function in url 
	request({url: weatherURL, json: true},(error,{body}) =>{
	//request({url: weatherURL, json: true},(error,response) =>{ //before restructuring
		if (error){

			callback('Unable to connect', undefined)

		} else if (body.error){
		//else if (response.body.error){ //before restructuring

			callback('coordinates not found', undefined)

		} else {
			//option a - data printed:
			callback(undefined, body.daily.data[0].summary + ' The temperature is currently ' 
				+ body.currently.temperature + '°F with '
				 + body.currently.precipProbability + '% chance of rain.')  
		}
	})
}


module.exports = forecast

			// callback(undefined, response.body.daily.data[0].summary + ' The temperature is currently ' 
			// 	+ response.body.currently.temperature + '°F with '
			// 	 + response.body.currently.precipProbability + '% chance of rain.') 
			//before restructuring

			//+ response.body.currently.temperature + ' degrees in ' + response.body.timezone + ' with '


//1°F = -17.222222°C

// const forecast = (latitude, longitude, callback) =>{
// //const forecast = (location, callback) =>{
// 	const weatherURL = 'https://api.darksky.net/forecast/7553c7a7b6bb027acccaf24cd277d44e/' + latitude + ',' + longitude
// 	//encodeURIComponent(location) - wont work can't request a function in url 
// 	request({url: weatherURL, json: true},(error,response) =>{
// 		if (error){

// 			callback('Unable to connect', undefined)

// 		} else if (response.body.error){

// 			callback('coordinates not found', undefined)

// 		} else {
// 			//option b - data returned as object:
// 			callback(undefined, {
// 			weatherSummary: response.body.daily.data[0].summary,
// 			currentTemperature: response.body.currently.temperature,
// 			rainProbability: response.body.currently.precipProbability,
// 			locationName: response.body.timezone
// 			}) 
// 		}
// 	})
// }
