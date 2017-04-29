const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, null, 4));
// 	}
// });

// lat & lng (static #), callback
weather.getWeather('40.6212119', '-74.03294989999999', (errorMessage, temp) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, null, 4));
	}
});





















