
/*$(function() {
var body = $(‘.header’);
var backgrounds = new Array(
‘url(images/image1.jpg)’,
‘url(images/image2.jpg)’
);
var current = 0;

function nextBackground() {
.header.css(
‘background’,
backgrounds[current = ++current % backgrounds.length]
);

setTimeout(nextBackground, 10000);
}
setTimeout(nextBackground, 10000);
.header.css(‘background’, backgrounds[0]);
});


window.onload=function(){
$(".header").fadeOut(4000);
$(".header").addClass("zoom");
    setTimeout(function(){
    $(".header").removeClass("zoom");
    },5000);
}
/*$(document).ready(function(){
  $('footer a img').hover(function(){
    $(this).animate({width:'55px', height:'55px'}, 'fast');
      }, function(){
    $(this).animate({width:'50px', height:'50px'}, 'fast');
  });
});
