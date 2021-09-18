// ハンバーガーメニュー
$(function() {
  var imgHeight = $('.kv__wrapper').outerHeight();
  var bgHeight = $('.fv').outerHeight();

  $(".burger__btn").on('click', function() {
    if( $(window).scrollTop() < imgHeight -50) {
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('.burger__musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    } else {
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('.burger__musk').fadeToggle(300);
      $(body).toggleClass('noscroll');
    }
  });


  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight -50) {
      $('.header__title').removeClass('black');
    } else {
      $('.header__title').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      $('.burger__btn').removeClass('black');
    } else {
      $('.burger__btn').addClass('black');
    }
  });
});