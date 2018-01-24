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
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
	var weather = {};

	request(url, function (err, response, body) {
	  	if(err){
	   		console.log('error:', error);
	  	} else {
	    	weather = JSON.parse(body)
	    	// let iconUrl = getIconUrl(weather)
	    	console.log(weather)
	        res.render("foreigners", {homepage: false, weather: weather, iconClass: getIconUrl(weather)})
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
