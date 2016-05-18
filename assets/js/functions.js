$( document ).ready(function() {

  workLoad();

  $(window).load(function() {
		$('article').addClass('is-open');
	});



  $('.infobtn').click(function(e) {
    $(this).toggleClass('act');
    $('.header').toggleClass('openheader');

    setTimeout(function() {
      $('.info-lockup').toggleClass('openholder');
    }, 250);

    $('html, body').toggleClass('noscroll');
    $('.logo').toggleClass('white');
    e.stopPropagation();
  });

  $('.header').click(function(e) {
		$('.infobtn').removeClass('act');
		$('.header').removeClass('openheader');

		setTimeout(function() {
			$('.info-lockup').removeClass('openholder');
		}, 250);

		$('html, body').removeClass('noscroll');
    $('.logo').removeClass('white');
    e.stopPropagation();
	});



  $('article').click(function() {
    $('.work').addClass('workopen');
    $('.thumbs').addClass('thumbclose');
  });

  $('body').on("click", ".exit", function() {
    $('.work').removeClass('workopen');
    $('.thumbs').removeClass('thumbclose');
    history.pushState(null, '', '/');
  });

  $('article').on("click", function() {
    $('html, body').scrollTop(0);
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

      history.pushState(newFolder, '', newFolder);

    });

  }

  window.addEventListener('popstate', function(e) {
		var character = e.state;

		if (character === null) {
			$('.work').removeClass('workopen');
			$('.thumbs').removeClass('thumbclose');
		} else {
		}
	});
});
