var express = require("express");
var router = express.Router();
var info = require("../information")

const panelists = info.panelists
const workshops = info.workshops
const visits = info.visits

router.get("/", function(req, res){
    res.render("homepage/homepage", {homepage: true})
}); //router.get

router.get("/panelists", function(req, res){
    res.render("panelists/panelists", {panelists: panelists, homepage: false})
}); //router.get

router.get("/workshops", function(req, res){
    res.render("workshops", {workshops: workshops, homepage: false})
}); //router.get

router.get("*", function(req, res){
    res.redirect("/")
}); //router.get

module.exports = router;