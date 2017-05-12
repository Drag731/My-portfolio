// responsiveSlides

$(function() {
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 500,
    pager: true 
  });
  
  $(".rslides2").responsiveSlides({
    auto: true,
    speed: 500,
    pager: false,
    nav: true,
    prevText: "Previous",
    nextText: "Next"
  });

  $(".rslides3").responsiveSlides({
    auto: true,
    speed: 500
  });
});
   
// owlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
      0:{
        items:2
      },
      500:{
        items:3
      },
      767:{
        items:4
      },
      990:{
        items:5
      }
    }
  });
});