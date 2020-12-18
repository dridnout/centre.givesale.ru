$(document).ready(function(){

    // Fix svg for ie
    
    svg4everybody({});

    enquire.register("screen and (max-width: 1200px)", {

		// OPTIONAL
		// If supplied, triggered when a media query matches.
		match : function() {
            // $('.ccard .ccard-contacts').appendTo('.ccard .ccard-right');
            $('.form-block').insertAfter('.centers-container');
            $('.footer').insertAfter('.form-block');
		},

		// OPTIONAL
		// If supplied, triggered when the media query transitions
		// *from a matched state to an unmatched state*.
		unmatch : function() {
            $('.form-block').insertAfter('.centers-cards-wrap');
            $('.footer').insertAfter('.form-block');

        }
	});

})