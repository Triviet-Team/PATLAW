$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  autoHeight: true,
  autoplaySpeed: 1000,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(document).ready(() => {
  const pageUrl = window.location.href;
  const windowWidth = document.body.clientWidth;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 170) {
      $('.go-top').fadeIn().css('transform','scale(1)');
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  let iScrollPos = 0; 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) { 
      $('.menu, .header-top').addClass('active');

      let iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos < iScrollPos) {
        $('.menu, .header-top').addClass('down');
      } else {
        $('.menu, .header-top').removeClass('down');
      }
      iScrollPos = iCurScrollPos;
    } else {
      $('.menu, .header-top').removeClass('active');
    }
  });

  $(".menu a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').toggleClass('out');
    $('.overlay-menu').toggleClass('overlay-in');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.search-btn').click(function() {
    $('.search-form').toggleClass('active');
    $('.search-btn i').toggleClass('mdi-magnify mdi-close');
    $('.search-form input').focus();
  });

  $('.close-search').click(() => {
    $('.search-form').removeClass('active');
    $('.search-btn i').removeClass('mdi-close');
    $('.search-btn i').addClass('mdi-magnify');
  })

  if (windowWidth < 1200) {
    $('.menu .nav-link').parent().find('ul').filter(function() {
      $(this).parent().find('.nav-link').removeAttr('href');
    });
  }

  $('.box-main-service').eq(1).addClass('main-1');
  $('.box-main-service').eq(2).addClass('main-2');

  setInterval(() => {
    const newsWidth = $('.box-news-img').width();
    const footerHeight = $('.footer').height();

    $('.box-news-img').css('max-height', `${newsWidth * 0.75}px`);
    $('article').css('margin-bottom', `${footerHeight + 30}px`);
  }, 1);

  $(window).scroll(function () {
    const windowScrollPosition = $(this).scrollTop();
    const newsPosition = $('.news-left').position();
    const newsHeight = $('.news-left').height();
    const articleHeight = $('article').height();
    const footerHeight = $('.footer').height();
    const mainHeight = $('.page-content .main').height();
    const leftHeight = $('.page-content .left').height();
 
    if (newsPosition !== undefined && mainHeight >= leftHeight) {
      if ( windowScrollPosition >= (newsPosition.top + newsHeight)) {
        $('.contact-left').addClass('active');
      } else {
        $('.contact-left').removeClass('active absolute');
      } 

      if (windowScrollPosition >= (articleHeight - footerHeight - 200)) {
        $('.contact-left').addClass('absolute');
      } else {
        $('.contact-left').removeClass('absolute');
      } 
    }
  });
});
