$(document).ready(function(){
  $('.nav-main-dropdown').mouseenter (function(){
    $(this).children('.hidden').addClass('active');
    //console.log('li dropdown-menu');
  })
  $('.nav-main-dropdown').mouseleave (function(){
    $(this).children('.hidden').removeClass('active');
    //console.log('.dropdown-menu');
  })
})
