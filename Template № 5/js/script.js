//  jarallax effect 

$(function() {
  $('.jarallax').jarallax({
        speed : 0.3
      })

  $('.jarallax1').jarallax({
        speed : 0.7
      })
});

//  easyResponsiveTab

$(document).ready(function () {
  $('#demoTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any width like 600px
    fit: true   // 100% fit in a container
  });
});

//  datePicker

$(document).ready(function () {
  $( "#datepicker" ).datepicker()
});

//  timePicker

$(document).ready(function () {
  $('.timepicker').wickedpicker();
});

//  Top of page button

$(document).ready(function() {
      /*
      var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear' 
      };
      */
  $().UItoTop({ easingType: 'easeOutQuart' });
});

//  typeAnimation

jQuery(document).ready(function($) {
  $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
});

//  skillBar

$(document).ready(function(){
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000, 
    interval: 100,
    decimals: 0,
  });
});

// carousel

$(document).ready(function(){
$('.carousel').carousel({
  interval: 5000
});
});

// filterizr

$(function() {
  //Initialize filterizr with default options
  $('.filtr-container').filterizr();
});

// swipebox

jQuery(function($) {
  $(".swipebox").swipebox();
});