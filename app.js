var express        			= require("express"),
	app            			= express(),
	bodyParser     			= require("body-parser");
 	
 	// routes
var indexRoutes 		= require("./routes/index")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/scripts", express.static( __dirname + "/public/scripts"));
app.use("/images", express.static( __dirname + "/public/images"));

app.use(indexRoutes);




// app.listen(process.env.PORT, process.env.IP, function(){
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("-------------------------")
    console.log("NucleumProj server is running") 
    console.log("-------------------------")
});
