(function($) {
	jQuery.fn.extend({
		doublespace: function(options) {
			var defaults = {
				softhyphen: true
			};

			options = $.extend(defaults, options);

			var collapse_char = (options.softhyphen) ? "&shy;" : "";

			return this.each(function() {
				var html = $(this).html();
				html = html.replace( /([A-Za-z])(\s){2}([A-Za-z])/gm , "$1"+collapse_char+"$3" );
				$(this).html(html);
			});
		}
	});
})(jQuery);
