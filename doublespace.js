(function ($) {
    jQuery.fn.extend({
        doublespace: function (options) {
			var defaults = {
				softhyphen: true
			};

			options = $.extend(defaults, options);
            
			var collapse_char = (options.softhyphen) ? "&shy;" : "";
			
            return this.each(function () {
                var html = $(this).html();
                html = html.replace("  ", collapse_char);
                $(this).html(html);
            });
        }
    });
})(jQuery);