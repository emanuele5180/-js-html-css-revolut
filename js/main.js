$(document).ready(function(){
  $('.nav-main-dropdown').mouseenter (function(){
    $('.dropdown-menu').addClass('active');
    console.log('.dropdown-menu');
  })
  $('.nav-main-dropdown').mouseleave (function(){
    $('.dropdown-menu').removeClass('active');
    console.log('.dropdown-menu');
  })
})
