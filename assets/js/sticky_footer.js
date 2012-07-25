/*-------------------------------

	STICKY_FOOTER.JS

-------------------------------*/

;(function(window, $, undefined){

	'use strict';

	/**
	 * Sticks the footer to the bottom of the page
	 * 
	 * @return {Object}
	 */
	$.fn.stickyFooter = function()
	{

		var windowHeight = 0,
			offset = 0,
			$div = this;

		// Call initial positioning
		position();

		$(window).bind('resize.stickyFooter', function(){
			position();
		});

		/**
		 * Position the footer
		 * 
		 * @return {void}
		 */
		function position(){

			if( $div.css('position') !== 'static' )
			{

				offset = $div.outerHeight(true);

			}else{

				offset = 0;

			}

			windowHeight = window.innerHeight
				? window.innerHeight
				: $(window).height();

			if( $('body').outerHeight(true) + offset < windowHeight ){

				$div.css({
					position	: 'fixed',
					bottom		: 0
				});

			}else{

				$div.css({
					position	: 'static'
				});

			}

		}

		return this;

	};

}(window, jQuery));