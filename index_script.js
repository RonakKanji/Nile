$(document).ready(function(){
  $(".about").fadeIn(2000);
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop() > 100){
      $(".about").css({"opacity": "0"});
    }
    else{
      $(".about").css({"opacity": "1 "});
    }
    if($(this).scrollTop() > 750){
      $("#product_details").css({"opacity": "0"});
    }
    else{
      $("#product_details").css({"opacity": "1 "});
    }
    if($(this).scrollTop() > 1400){
      $("#why_us").css({"opacity": "0"});
    }
    else{
      $("#why_us").css({"opacity": "1 "});
    }
  });
})
