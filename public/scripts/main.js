


$(document).ready(function(){	
	// if($("nav.navbar").width() < 768){
	// 	$("#bs-nav-demo").css("background-color", "rgba(20, 20, 20, .95)")
	// }

	var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });

    if ($(".navbar").width() > 768) {
        // Parallax Background
        parallaxSlider()
		// Scroll reveal
        window.sr = ScrollReveal();
		sr.reveal('#block1', {container: "#masterContainer"});
		sr.reveal('#block2', {container: "#masterContainer"});
		sr.reveal('#block3', {container: "#masterContainer"});
		sr.reveal('#block4', {container: "#masterContainer"});
    } else {
    	$('div#parallaxSlider').css('background-image', 'url(http://sf.co.ua/14/01/wallpaper-1681949.jpg)');
    }

	// Dynamic navbar
	dynamicNavbar()


})

function dynamicNavbar(){
	// Automatic navbar height
	$("#masterContainer").scroll(function(){
		var wsScroll = $("#masterContainer").scrollTop();
		var width = $("nav.navbar").width()
		if (wsScroll > 100 && width > 768){
			shortenNavbar()
		} else if (wsScroll <= 100 && width > 768){
			tallenNavbar()
		} 
		$(window).on("resize", () => {
			width = $("nav.navbar").width()
			if(width > 768){
				if(wsScroll <= 100){
					tallenNavbar()
				} else {
					shortenNavbar()
				}
			} else {
				tallenNavbar()
			}
		})
	})
	function shortenNavbar(){
		$("nav.navbar-inverse").removeClass("navbar-pos-1").addClass("navbar-pos-2");
		$("ul.navbar-right > li > a").removeClass("nav-btn-1").addClass("nav-btn-2");
		$("ul.navbar-nav > li > a").removeClass("nav-btn-1").addClass("nav-btn-2");
		$("a.navbar-brand").removeClass("iHome-parent1").addClass("iHome-parent2");
		$("i.fa-home").removeClass("iHome1").addClass("iHome2");
		navTall = false;
	}
	function tallenNavbar(){
		$("nav.navbar-inverse").removeClass("navbar-pos-2").addClass("navbar-pos-1");
		$("ul.navbar-right > li > a").removeClass("nav-btn-2").addClass("nav-btn-1");
		$("ul.navbar-nav > li > a").removeClass("nav-btn-2").addClass("nav-btn-1");
		$("a.navbar-brand").removeClass("iHome-parent2").addClass("iHome-parent1");
		$("i.fa-home").removeClass("iHome2").addClass("iHome1");
		navTall = true;
	}
}


function parallaxSlider(){
	$('div#parallaxSlider').css("display", "none")

	var _image = new Image();
	_image.id = 'newImageId';
	_image.src = "http://sf.co.ua/14/01/wallpaper-1681949.jpg";

	$(_image).on("load",function () {
	    $('div#parallaxSlider').css('background-image', 'url(http://sf.co.ua/14/01/wallpaper-1681949.jpg)');
	    update()
	    $('div#parallaxSlider').fadeIn(3000, 0);
		$("#masterContainer").bind('scroll', update);
  	});

  	function update(){ 
		var velocity = 0.3;
	    var position = $("#masterContainer").scrollTop(); 
	    $('#parallaxSlider').each(function() { 
	        var $element = $(this);
	        // subtract some from the height b/c of the padding
	        // var height = $element.height();
	        var height = 0


	        $(this).css('backgroundPosition',  "50% " + Math.round((height - position)* velocity ) + 'px'); 
	    }); 
	};
// function update(){ 
//     var position = $("#masterContainer").scrollTop(); 
//     $('.row').each(function() { 
//         var $element = $(this);
//         // subtract some from the height b/c of the padding
//         var height = $element.height()-18;
//         $(this).css('backgroundPosition', '50% ' + Math.round((height - position) * velocity) + 'px'); 
//     }); 
// };
}


