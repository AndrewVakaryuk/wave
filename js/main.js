$(function(){

  function scrollMenu() {
    let menu = document.querySelector('.header__top');
    window.addEventListener('scroll', () => {
      if (pageYOffset >= document.documentElement.clientHeight) {
        menu.style['background-color'] = '#36669d'
        menu.style['background-image'] = 'linear-gradient(180deg, #36669d 0%, #d3d3d3 74%)'
        menu.style['height'] = '65px'
        menu.style['padding-top'] = '20px'
      } else {
        menu.style['background-color'] = 'transparent'
        menu.style['background-image'] = 'none'
        menu.style['height'] = '78px'
        menu.style['padding-top'] = '50px'
      }
    });
  }

  scrollMenu();

  $(".menu a, .header__link, .footer__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
  $('.blog__slider').slick({
    arrows: false,
    dots: true
  });
  
  $('.menu__btn, .menu__link').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });
  
  var mixer = mixitup('.gallery__photos');

});