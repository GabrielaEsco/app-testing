const request = require('request')

//below: callback function for getting geocode

const geocode = (address, callback) => {
	const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1vbnN0ZXI0YWxsIiwiYSI6ImNqeTUzYmE0djAxMGwzbW1mOWg1bmhrYmQifQ.uahWD-X2q5T6RQXbeiRnFA&limit=1'
	//' + encodeURIComponent(address) + ' replaces 'Toronto' 
	request({url: geocodeURL, json: true},(error,{body}) =>{
	//request({url: geocodeURL, json: true},(error,response) =>{ //before refactoring
		if (error){
			callback('Unable to connect', undefined)
			//no internet connection
		} else if (body.features.length === 0){
			//else if (response.body.features.length === 0){ //before refactoring
		callback('Unable to find location. The given location is invalid.', undefined)
		//mispelled location request
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude:body.features[0].center[0],
				location: body.features[0].place_name
				//above: data to return, as object with properties
				//Passing 2 arguments, 1st - is error but there is no error so it is "undefined" 
				//2nd - is the data requested which we set above as object with properties
			})
		}
	})
}

module.exports = geocode

				// latitude: response.body.features[0].center[1],
				// longitude: response.body.features[0].center[0],
				// location: response.body.features[0].place_name
				//before restructuring