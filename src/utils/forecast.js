const request = require('request')

const forecast = (latitude, longitude, callback) => {
   const url = 'https://api.darksky.net/forecast/db1928b8e8ec6c5cb1b3f98e8da404a3&units=f' + latitude + ',' + longitude

request ( {url,  json: true}, (error, {body } ) => {
        if (error) {
             callback('Unable to connect weather service!', undefined)
        } else if (response.body.error) {
           callback('Unable to find location', undefined  )
        } else {
            callback(undifined, body.daily.data[0]. summary + 'It is currently ' + body.currently.temperature + 'degress out. There is a ' + body.currently.precipProbability)  
        }
   } )
}

module.exports = forecast  