jQuery(function( $ ){

	// Set front page 1 height
	// scott - trimming height so it isn't full sized

	//  var windowHeight = $( window ).height() - 90;
	var windowHeight = $( window ).height() - 350;

	$( '.front-page-1' ) .css({'height': windowHeight +'px'});

/*	$( window ).resize(function(){

		// scott - stop it from reseting to full page on resize....
    // doesn't look the best on mobile having a full page image

		// var windowHeight = $( window ).height();
		var windowHeight = $( window ).height() - 150;

		$( '.front-page-1' ) .css({'height': windowHeight +'px'});

	});*/

	// Local Scroll Speed
	$.localScroll({
		duration: 750
	});

});