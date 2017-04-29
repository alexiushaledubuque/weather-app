// 7a111862a24c6ef25a2deff1b62cff88

const request = require('request');

const geocodeAddress = ((address, callback) => {
	var input = encodeURIComponent(address);
	request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
	json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable able to connect to Google servers');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address');
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			})	
		} else {
			callback('Invalid input - no data found!');
		}
	})	
});

module.exports = {
	geocodeAddress
}

