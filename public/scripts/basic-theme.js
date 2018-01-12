
// For setting the height of first view to that of the screen
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.logo-content').css('height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

// $(document).ready(function(){

// 	var containerBody = $(".container-body")
// 	var nav = $("nav.nav")
// 	containerBody.scroll(function(){

		
// 		var wsScroll = containerBody.scrollTop();
// 		var width = nav.width()


// 		if (wsScroll > 100 && width > 768){
// 			shortenNavbar()
// 		} else if (wsScroll <= 100 && width > 768){
// 			tallenNavbar()
// 		} 
// 		$(window).on("resize", () => {
// 			width = nav.width()
// 			if(width > 768){
// 				if(wsScroll <= 100){
// 					tallenNavbar()
// 				} else {
// 					shortenNavbar()
// 				}
// 			} else {
// 				tallenNavbar()
// 			}
// 		})
// 	})
// 	function shortenNavbar(){
// 		nav.removeClass("nav-tall").addClass("nav-short");
// 	}
// 	function tallenNavbar(){
// 		nav.removeClass("nav-short").addClass("nav-tall");
// 	}
// })

