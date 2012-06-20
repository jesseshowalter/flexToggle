/* 	jQuery.flexToggle
	Author: Ryan DeBeasi (352 Media Group) - http://www.352media.com/
	Description:  Shows/hides a block of content when a toggle link is clicked. You can use this to build drawers, expand/collapse boxes, etc. */

(function ($) {
	$.fn.flexToggle = function (options) {
		var s = $.extend({
			'animation' : 'none',	// [string] How should we animate as it appears and disappears?
									// Options are 'none' and 'slideDown'. Coming soon: 'slideRight'.
			'bindValue' : false		// If you call flexMenu on a checkbox or radio button, you can bind
									// the value of the input to the state of the drawer. If the value
									// changes to true, the drawer opens. If the value changes  to 
									// false, the drawer closes.
		}, options);
		return this.each(function () {
			var $drawerLink = $(this),
			$drawer = $($drawerLink.attr('href'));
			$drawer.parent().addClass('flexToggle-parent');
			$drawerLink.addClass('flexToggle-toggle');
			// Use this class to set position: relative if needed
			$drawerLink.click(function(e) {
				e.preventDefault();
				if (!$drawer.hasClass('open')) {
					openDrawer($drawer, $drawerLink);
				} else {
					closeDrawer($drawer, $drawerLink)
				}
			});
		});
		function openDrawer($drawer, $drawerLink) {
			switch (s.animation) {
				case 'slideDown':
					$drawerLink.addClass('active');	
					$drawer.slideDown(100, function() {
						$drawer.addClass('open');
					});
					break;
				case 'none':
				default:
					$drawer.addClass('open');
					$drawerLink.addClass('active');	
			}
		}
		function closeDrawer($drawer, $drawerLink) {
			switch (s.animation) {
				case 'slideDown':
					$drawerLink.removeClass('active');
					$drawer.slideUp(100, function() {
						$drawer.removeClass('open');
					});
					break;
				case 'none':
				default:
					$drawer.removeClass('open');
					$drawerLink.removeClass('active');
			}
		}
	};
})(jQuery);