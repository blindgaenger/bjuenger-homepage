console.log("YAY")

$(function() {

  $('.introduction__more').click(function() {

    if ($('#card').hasClass('card--introduction')) {
      $('#card').removeClass('card--introduction').addClass('card--description');
    } else {
      $('#card').removeClass('card--description').addClass('card--introduction');
    }

  });

})
