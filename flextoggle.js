/* 	jQuery.flexToggle
	Author: Ryan DeBeasi (352 Media Group) - http://www.352media.com/
	Description:  Shows/hides a block of content when a toggle link is clicked. You can use this to build drawers, expand/collapse boxes, etc. */

(function ($) {
	$.fn.flexToggle = function (options) {
		var s = $.extend({
			'animation' : 'none',	// [string] How should we animate as it appears and disappears?
									// Options are 'none' and 'slideDown'. Coming soon: 'slideRight'.
			'activeText' : '',		// [string] Link text when drawer is open. If empty, don't
									// change the text.
			'inactiveText' : ''		// [string] Link text when drawer is closed. If empty, don't
									// change the text.
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
			$drawerLink.addClass('active');	
			if (s.activeText!='' && s.inactiveText!='') {
				$drawerLink.text(s.activeText);
			}
			switch (s.animation) {
				case 'slideDown':
					$drawer.slideDown(100, function() {
						$drawer.addClass('open');
					});
					break;
				case 'none':
				default:
					$drawer.addClass('open');
			}
		}
		function closeDrawer($drawer, $drawerLink) {
			$drawerLink.removeClass('active');
			if (s.activeText!='' && s.inactiveText!='') {
				$drawerLink.text(s.inactiveText);
			}
			switch (s.animation) {
				case 'slideDown':
					$drawer.slideUp(100, function() {
						$drawer.removeClass('open');
					});
					break;
				case 'none':
				default:
					$drawer.removeClass('open');
			}
		}
	};
})(jQuery);