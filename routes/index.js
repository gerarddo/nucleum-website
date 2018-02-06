var express = require("express");
var router = express.Router();
var info = require("../information")

const request = require('request');
const config = require('../config/weather.js')
const weatherIcons = require("../weather-icons.json")

const panelists = info.panelists
const business = info.business
const workshops = info.workshops
const visits = info.visits

router.get("/", function(req, res){
    res.render("homepage/homepage", {
    	homepage: true, 
    	panelists: panelists,
    	business: business, 
    	workshops: workshops, 
    	visits: visits
    })
}); //router.get

router.get("/foreigners", function(req, res){

	let apiKey = config.apiKey;
	let city = config.city;
	let units = config.units;
	let lang = config.lang
	let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`


	request(url, function (err, response, body) {
	  	if(err){
	   		console.log('error:', error);
	  	} else {
	    	let forecast = modifyForecast(JSON.parse(body).list)
	    	let today = JSON.parse(body).list[0]
	    	console.log(today)
	        res.render("foreigners", {homepage: false, forecast: forecast, today: today})
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

	var temp_min = [[],[],[],[],[],[],[],[]]
	var temp_max = [[],[],[],[],[],[],[],[]]
	var icon_class = [[],[],[],[],[],[],[],[]]

	var defTemp_min = []
	var	defTemp_max = []
	var	defIcon_class = []

	forecast.forEach((weather) => {
		let date = new Date(weather.dt_txt + " GMT+06:00")
		// let date = new Date(weather.dt_txt + " GMT+00:00")
		let weekdayIndex = date.getDay()

	    if(weekdayIndex === lastWeekdayIndex ){
	    	temp_min[index].push(weather.main.temp_min)
	    	temp_max[index].push(weather.main.temp_max)
	    	icon_class[index].push({
	    		value: getIconUrl(weather),
	    		hour: date.getHours(),
	    		weekday: weekdays[weekdayIndex]
	    	})
	    } else {

	    	lastWeekdayIndex = weekdayIndex
	    	index++

	    	temp_min[index].push(weather.main.temp_min)
	    	temp_max[index].push(weather.main.temp_max)
	    	icon_class[index].push({
	    		value: getIconUrl(weather),
	    		hour: date.getHours(),
	    		weekday: weekdays[weekdayIndex]
	    	})
	    }
	})


	for(var i = 0; i < 6; i++){

		defTemp_min[i] = Math.min(...temp_min[i])
		defTemp_max[i] = Math.max(...temp_max[i])

		let foundClass = false;

		icon_class.forEach((i_class) => {
			if(i_class.hour === 12){
				defIcon_class[i] = i_class.value
				foundClass = true;
			}
		})

		if(!foundClass){
			defIcon_class[i] = icon_class[i][icon_class[i].length - 1]
		}

	}

	// console.log(defTemp_min)
	// console.log(defTemp_max)
	// console.log(defIcon_class)

	for(var i = 0; i < 6; i++){
		// weekForecast[i] = {
		// 	// weekday: defIcon_class[i].weekday,
		// 	temp_min: defTemp_min[i],
		// 	temp_max: defTemp_max[i]
		// 	// icon_class: defIcon_class[i].value
		// }

		if(defIcon_class[i]!=undefined){
			weekForecast[i] = {
				weekday: defIcon_class[i].weekday,
				temp_min: defTemp_min[i],
				temp_max: defTemp_max[i],
				icon_class: defIcon_class[i].value
			}
		} else {
			weekForecast[i] = {
				weekday: "no info yet",
				temp_min: "*",
				temp_max: "*",
				icon_class: ""
			}
			// weekForecast[i].icon_class = ""
			// weekForecast[i].weekday = "No info yet"
		}
	}





	return weekForecast
}










