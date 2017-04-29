const request = require('request');

// use lat & lng, cb (undefined for error message)
// print temp & actual temp properties

const getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/7a111862a24c6ef25a2deff1b62cff88/${lat},${lng}
		`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Darksky servers');
		} else if (!error && response.statusCode === 200) {
			callback(body.currently.temperature);	
		} else {
			callback('Unable to fetch weather from darksky api!');
		}
	})	
}

module.exports = {
	getWeather
}