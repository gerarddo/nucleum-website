var express = require("express");
var router = express.Router();
var info = require("../information")

const panelists = info.panelists
const workshops = info.workshops
const visits = info.visits

router.get("/", function(req, res){
    res.render("homepage/homepage", {homepage: true, panelists: panelists, workshops: workshops, visits: visits})
}); //router.get

router.get("/foreigners", function(req, res){
    res.render("foreigners", {homepage: false})
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