$('#get-weather').click(function() {

 	// $.getJSON("http://api.apixu.com/v1/current.json?key=52bc1474354b48da843180020170110&q=" + latitude +','+longitude, function(weather){
 	$.getJSON("http://api.apixu.com/v1/current.json?key=52bc1474354b48da843180020170110&q='Monterrey", function(weather){
      	console.log(weather)
      	$("#current-condition").children("img").attr("src", "/images/weather" + weather.current.condition.icon.slice(29, 43) );
      	$("#location-name").text(String(weather.location.name));
      	$("#current-temperature").text(String(weather.current.temp_c) + " ˚ C");
	});
});

