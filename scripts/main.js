
$(document).ready(function(){
    $('.preview__slider-inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        freeMode: true,
        autoplaySpeed: 1300,
        centerMode: false,
        responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.resourses__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        freeMode: true,
        autoplaySpeed: 3000,
        prevArrow: "<div class='prev'>",
        nextArrow: "<div class='next'>",
        dots: true,
        dotsClass: 'slick-dots',
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                arrows:false
              }
            }
        ]
    });

    $('.testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        freeMode: true,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: 'slick-dots testimonials-slick-dots'
    });
    $('.help__qustion').on('click',function(){
        $(this).find('.help__question-block').toggleClass('help__question-block-active');
        $(this).find('.help__question-q').toggleClass('help__question-q-active');
    });
    $('.header__burger').on('click', function(){
        $(this).toggleClass('header__burger-active')
        $('.header__menu-list').toggleClass('header__menu-list-active');
    });


  
  });


  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
      $('.preloader').addClass('preloader-drop');
    },2000);
  });