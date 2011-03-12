/**
 * Detects the current section to be in the viewport while scrolling and fires
 * the given callback. The "viewport" is the first half of the page of the 
 * visible window. Yep, I know this is not the real viewport, but IMHO this is 
 * where the user expects to be the current content.
 *
 * in difference to waypoints it fires not on the top of a page only, but if 
 * the next section is at the middle of the page and therefore in viewport of
 * the viewer.
 */
(function($){
  
  $.fn.reverse = [].reverse;
  
  $.fn.viewport = function(callback) {
    $.currentSection = null
    
    // reverse the sections to easily getting the last one
    $.sections = $(this).map(function() {
      var section = $(this)
      return {
        element: section,
        top: section.offset().top,
        bottom: section.offset().top + section.height()
      }
    }).reverse()
    
    var updateScroll = function() {
      var offset = $(this).scrollTop()
      var middle = offset + $(this).height() / 2
      
      var sectionToUpdate = $.grep($.sections, function(section, index) {
        // section is on top of the viewport
        if (offset >= section.top && offset <= section.bottom) return true
        // section is at bottom of half of the viewport
        if (middle >= section.top && middle <= section.bottom) return true
        return false
      })[0]
      
      // update the current section only once
      if (sectionToUpdate == $.currentSection) return
      $.currentSection = sectionToUpdate

      // trigger callback
      if ($.currentSection == undefined) return
      $.currentSection.element.each(callback)
    }

    $(window).scroll(updateScroll)
    $(window).resize(updateScroll)
    updateScroll()
    
  };

})(jQuery);
