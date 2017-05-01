$(document).ready(function(){
  //Social icons Animations
  $('.footer img').hover(function(){
    $(this).animate({width:'55px', height:'55px'}, 'fast');
      }, function(){
    $(this).animate({width:'50px', height:'50px'}, 'fast');
  });

  //Pixel Bubble Appearance
  $('.pixel').hover(function(){
    $(".bubble").animate({opacity:'1'}, 'fast');
  });

  //Slider controls
	$('.my-slider').unslider({
    infinite: true,
    autoplay: true,
    delay:5000,
    arrows: false,
    nav: false
  });

  //Adding Active class to the active section in navi bar
  $('.navigationbar ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});

  //Anchor scrolling animations
  var $root = $('html, body');
  $('.anchor').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

});
