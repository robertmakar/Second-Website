$(document).ready(function(){
  $('.footer img').hover(function(){
    $(this).animate({width:'55px', height:'55px'}, 'fast');
      }, function(){
    $(this).animate({width:'50px', height:'50px'}, 'fast');
  });

  $('.pixel').hover(function(){
    $(".bubble").animate({opacity:'1'}, 'fast');
  });

	$('.my-slider').unslider();

  var $root = $('html, body');
  $('.anchor').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

});
