$( document ).ready(function() {

  workLoad();

  $(window).load(function() {
		$('article').addClass('is-open');
	});



  $('.infobtn').click(function() {
    $(this).toggleClass('act');
    $('.header').toggleClass('openheader');

    setTimeout(function() {
      $('.info-lockup').toggleClass('openholder');
    }, 250);

    $('html, body').toggleClass('noscroll');
    $('.logo').toggleClass('white');
  });



  $('article').click(function() {
    $('.work').addClass('workopen');
    $('.thumbs').addClass('thumbclose');
  });

  $('body').on("click", ".exit", function() {
    $('.work').removeClass('workopen');
    $('.thumbs').removeClass('thumbclose');
  });

  $('article').on("click", function() {
    $('html, body').scrollTop(0);
  });
});

function workLoad() {

  $.ajaxSetup({
    cache: true
  });

  $('article').click(function() {

    var $this = $(this),
      spinner = '<div class="loader"></div>',
      newFolder = $this.data('folder'),
      newHTML = 'assets/work/' + newFolder + '.html';
    $('.work').html(spinner).load(newHTML);

  });

}
