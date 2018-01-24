var express = require("express");
var router = express.Router();
var info = require("../information")

const request = require('request');
const config = require('../config/weather.js')
const weatherIcons = require("../weather-icons.json")

const panelists = info.panelists
const workshops = info.workshops
const visits = info.visits

router.get("/", function(req, res){
    res.render("homepage/homepage", {homepage: true, panelists: panelists, workshops: workshops, visits: visits})
}); //router.get

router.get("/foreigners", function(req, res){

	let apiKey = config.apiKey;
	let city = config.city;
	let units = config.units;
	let lang = config.lang
	let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
	var forecast = [];

	request(url, function (err, response, body) {
	  	if(err){
	   		console.log('error:', error);
	  	} else {
	    	forecast = modifyForecast(JSON.parse(body).list)
	    	console.log(forecast)
	        res.render("foreigners", {homepage: false, forecast: forecast})
	  	}
	});

}); //router.get

router.get("/schedules", function(req, res){
    res.render("schedules", {homepage: false})
}); //router.get

router.get("/tickets", function(req, res){
    res.render("tickets", {homepage: false})
}); //router.get

router.get("/legal", function(req, res){
    res.render("legal", {homepage: false})
}); //router.get

router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;


// getIconUrl gets as parameter the object thrown as a response from openweathermap api
function getIconUrl(obj){
  var prefix = 'wi wi-';
  var code = obj.weather[0].id;
  var icon = weatherIcons[code].icon;

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon;
  }

  // Finally tack on the prefix.
  icon = prefix + icon;

  return icon
}

function modifyForecast(forecast){

	var weekForecast = [[],[],[],[],[],[]]
	var weekdays = new Array(7);
	weekdays[0] = "Domingo";
	weekdays[1] = "Lunes";
	weekdays[2] = "Martes";
	weekdays[3] = "Miércoles";
	weekdays[4] = "Jueves";
	weekdays[5] = "Viernes";
	weekdays[6] = "Sábado";

	var lastWeekdayIndex = -1
	var index = -1


	forecast.forEach((weather) => {
		let date = new Date(weather.dt_txt + " GMT+06:00")
		let weekdayIndex = date.getDay()

	    let newWeatherObj = {
	    	temp: weather.main.temp,
	    	temp_min: weather.main.temp_min,
	    	temp_max: weather.main.temp_max,
	    	humidity: weather.main.humidity,
	    	icon_class: getIconUrl(weather),
	    	weekday: weekdays[weekdayIndex],
	    	hour: date.getHours()
	    }


	    if(weekdayIndex === lastWeekdayIndex ){
	    	weekForecast[index].push(newWeatherObj)
	    } else {
	    	lastWeekdayIndex = weekdayIndex
	    	index++
	    	weekForecast[index].push(newWeatherObj)
	    }

	})

	return weekForecast

}










