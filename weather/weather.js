const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
    url: `https://api.darksky.net/forecast/28e45c843883bd8653fed06d2f2d4914/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('Unable to connect to Forecast.io server');
    } else if (response.statusCode === 400) {
        callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }





    // if (!error && response.statusCode === 200) {
    //     console.log(body.currently.temperature);   
    // } else {
    //     console.log('Unable to fetch weather');
    // }
});
};

module.exports.getWeather = getWeather;