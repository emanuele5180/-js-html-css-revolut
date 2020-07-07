$(document).ready(function(){
  $('.nav-main-dropdown a').mouseenter (function(){
    $('.dropdown-menu').addClass('active');
    console.log('.dropdown-menu');
  })
  $('.nav-main-dropdown a').mouseleave (function(){
    $('.dropdown-menu').removeClass('active');
    console.log('.dropdown-menu');
  })
})
