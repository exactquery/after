
/*!
 * Fires an event after the last repeated event.  Useful for resize & similar events.
 *
 * @version ExactQuery Afterwards v1.2.1
 * @license http://github.com/exactquery/afterwards/LICENSE
 * @author  AMJones <am@jonesiscoding.com>
 * @returns {jQuery}
 */
;(function($){
  $.fn.extend({
    afterwards: function( eventName, callback, options ) {

      var plugin = this;
      var $plugin = $(plugin);
      var eTimer;

      plugin.defaultOptions = {
        'interval': 250,
        'preventDefault': false,
        'stopPropagation': false
      };

      var settings = $.extend({}, plugin.defaultOptions, options);

      return $plugin.on(eventName, function(e) {

        if ( settings.preventDefault ) { e.preventDefault(); }
        if ( settings.stopPropagation ) { e.stopPropagation(); }
        if ( settings.stopImmediatePropagation ) { e.stopImmediatePropagation(); }

        clearTimeout(eTimer);
        eTimer = setTimeout(callback, settings.interval);
      });
    }
  });
})(jQuery);