$(document).ready(function() {

  var iconMap = {
    intro: 'user',
    resume: 'clip',
    contact: 'mail'
  }

  $("nav a[href^='#']").anchorAnimate({speed : 700});
  $("#content section[id]").viewport(function() {
    var anchorId = $(this).attr('id');
    $('nav a').blur().selectCurrent('[href=#' + anchorId + ']');

    var icon = iconMap[anchorId]
    var attr = {fill: "315-#111:15-#202020", stroke: "#111", "stroke-width": 2}
    $('#paper').drawIcon(icon, attr)
  });

});
