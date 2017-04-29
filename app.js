// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, null, 4));
// 	}
// });

const request = require('request');

// https://api.darksky.net/forecast/7a111862a24c6ef25a2deff1b62cff88/40.6212119,-74.03294989999999

request({
url: `https://api.darksky.net/forecast/7a111862a24c6ef25a2deff1b62cff88/40.6212119,-74.03294989999999
`,
json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);	
	} else {
		console.log('Unable to fetch weather from darksky api!');
	}
})	























