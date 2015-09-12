console.log("YAY");

$(function() {

  $('.introduction__more').click(function() {

    if ($('#card').hasClass('card--description')) {
      $('#card').removeClass('card--description').addClass('card--introduction');
    } else {
      $('#card').removeClass('card--introduction').addClass('card--description');
    }

  });

});
