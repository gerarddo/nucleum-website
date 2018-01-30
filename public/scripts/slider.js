(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			// this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 6000);
		},
		// stopStart: function() {
		// 	var self = this;
		// 	self.el.addEventListener( "mouseover", function() {
		// 		clearInterval( self.timer );
		// 		self.timer = null;
				
		// 	}, false);
		// 	self.el.addEventListener( "mouseout", function() {
		// 		self.action();
				
		// 	}, false);
		// }
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();


// n=0;
// x=3;

// setInterval(function() { 
    
//     if (n < x - 1){
//     	n++;
//     } else {
//     	n=0;
//     }

//     var url = imgUrl(n)

// 	$('.slider-wrapper img').fadeOut(400, function() {
// 	    $('.slider-wrapper img').attr('src', url).fadeIn();
// 	});

// },  7000)


// function imgUrl(n){
// 	let baseUrl = "images/panelists/slideshow/slideshow-"
// 	return baseUrl + String(n) + ".jpg"
// }