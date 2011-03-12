/**
 * selects the matching elements and adds a `current` class
 *
 *   $('#icon img').selectCurrent('[alt=' + anchorId + ']');
 *   $('#icon img').selectCurrent('[alt=' + anchorId + ']', {currentClass : 'active'});
 *   $('#icon img').selectCurrent(function(index) {
 *     return index == 4;
 *   }, {currentClass : 'selected'});
 */
(function($){
  
  $.fn.selectCurrent = function(selector, settings) {
    settings = $.extend({
  		currentClass : 'current'
  	}, settings);
    return $(this).removeClass(settings.currentClass).filter(selector).addClass(settings.currentClass);
  }
  
})(jQuery);
