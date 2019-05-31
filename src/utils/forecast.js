const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/37e6b4dd07e1df57dbedbaad0e285043/' + latitude + ',' + longitude + "?units=si"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const weatherForcast =  "Todays temperature is: " + body.currently.temperature + " degrees." +
                                    " Todays Forcast is: " + body.daily.data[0].summary + "." +
                                    " Todays max temperature is: " + body.daily.data[0].temperatureHigh + " degrees." +
                                    " Todays min temperature is: " + body.daily.data[0].temperatureLow + " degrees." +
                                    " Todays chances of rain is: " + body.currently.precipProbability + "."                                     
            callback(undefined, weatherForcast)
        }
    })
}

module.exports = forecast



