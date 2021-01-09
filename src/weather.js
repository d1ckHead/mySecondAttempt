const request = require('postman-request')

let getWeatherData = function(areaName,callback){
    let url = 'http://api.weatherstack.com/current?access_key=4798be2d59c858d5424180038d377da7&query='
    url += areaName
    request(url,(error,response)=>{
        if(error){
            callback(error,undefined)
        }else{
            callback(undefined,response)
        }
    })
}

module.exports = getWeatherData
