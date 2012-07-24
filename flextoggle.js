/*	jQuery.flexToggle
	Author: Ryan DeBeasi (352 Media Group) - http://www.352media.com/
	Description:  Shows/hides a block of content when a toggle link is clicked. You can use this to build drawers, expand/collapse boxes, etc. 
	URL: https://github.com/352Media/flexToggle/ */
(function ($) {
	$.fn.flexToggle = function (options) {
		var s = $.extend({
			animation : 'none',		// [string] How should we animate as it appears and disappears?
										// Options are 'none' and 'slideDown'. Coming soon: 'slideRight'.
			activeText : '',			// [string] Link text when drawer is open. If empty, don't
										// change the text.
			inactiveText : '',			// [string] Link text when drawer is closed. If empty, don't
										// change the text.
			afterToggle : function (isOpen) {}	// Function to call after the drawer is opened or closed.

		}, options);

		/* flexToggle can be called on a link - place the ID of the elment to show/hide in the link's
		   href attribute if you use a link. It can also be called on a radio button or checkbox -
		   place the ID of the element to show/hide in a data-flex-toggle-target attribute if you do that. */
		function openDrawer($drawer, $drawerToggle, isInput) {
			var newText;
			$drawerToggle.addClass('active');
			if (s.activeText !== '' && s.inactiveText !== '' && !isInput) {
				newText = $drawerToggle.html().replace(s.inactiveText, s.activeText);
				$drawerToggle.html(newText);
			}
			switch (s.animation) {
				case 'slideDown':
					$drawer.slideDown(100, function () {
						$drawer.addClass('open');
						if (typeof s.afterToggle === 'function') {
							s.afterToggle.call(this, true);
						}
					});
					break;
				default: // aka case 'none':
					$drawer.addClass('open');
					if (typeof s.afterToggle === 'function') {
						s.afterToggle.call(this, true);
					}
			}
		}
		function closeDrawer($drawer, $drawerToggle, isInput) {
			$drawerToggle.removeClass('active');
			if (s.activeText !== '' && s.inactiveText !== '' && !isInput) {
				var newText = $drawerToggle.html().replace(s.activeText, s.inactiveText);
				$drawerToggle.html(newText);
			}
			switch (s.animation) {
				case 'slideDown':
					$drawer.slideUp(100, function () {
						$drawer.removeClass('open');
						if (typeof s.afterToggle === 'function') {
							s.afterToggle.call(this, false);
						}
					});
					break;
				default: // aka case 'none':
					$drawer.removeClass('open');
					if (typeof s.afterToggle === 'function') {
						s.afterToggle.call(this, false);
					}
			}
		}
		return this.each(function () {
			var $drawerToggle = $(this),
				drawerToggleName, // Only used if drawerToggle is a radio button
				isInput, // Is $drawerToggle a radio button? If not, it's probably a link.
				$drawer;

			// Use this class to set position: relative if needed
			if (($drawerToggle.attr('type') === 'radio') || ($drawerToggle.attr('type') === 'checkbox')) {
				isInput = true;
				$drawer = $($drawerToggle.data('flexToggleTarget'));
				drawerToggleName = $drawerToggle.attr('name');
				$('input[name=' + drawerToggleName + ']').change(function (e) {
					if ($drawerToggle.prop('checked')) {
						openDrawer($drawer, $drawerToggle, isInput);
					} else {
						closeDrawer($drawer, $drawerToggle, isInput);
					}
				});
				/* Fire the change() event to open/close the drawer when flexToggle is first called,
				in case we need to open/close the drawer once the page loads. */
				$drawerToggle.change();
			} else {
				isInput = false;
				$drawer = $($drawerToggle.attr('href'));
				$drawerToggle.click (function(e) {
					e.preventDefault();
					if (!$drawer.hasClass('open')) {
						openDrawer($drawer, $drawerToggle, isInput);
					} else {
						closeDrawer($drawer, $drawerToggle, isInput);
					}
				});
			}
			$drawerToggle.addClass('flexToggle-toggle');
			$drawer.parent().addClass('flexToggle-parent');
		});
	};
})(jQuery);