$( document ).ready(function() {

  $('.infobtn').click(function() {
    $(this).toggleClass('act');
    $('.header').toggleClass('openheader');

    setTimeout(function() {
      $('.info-lockup').toggleClass('openholder');
    }, 250);

    $('body').toggleClass('noscroll');
  });


});
