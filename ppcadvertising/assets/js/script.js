$(document).ready(function(){
      $(".services-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        appendDots: $('#theDots'),
        mobileFirst: true,
        autoplay: true,
        // appendDots: $('.slider-dots-box'),
        // appendDots:$(".services-slider-dots")
      });
      $(".about-us-sec").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        appendDots: $('#aboutUs'),
        mobileFirst: true,
        autoplay: true,
        // appendDots: $('.slider-dots-box'),
        // appendDots:$(".services-slider-dots")
      });
  });
