$(document).ready(function(){
  $(".design").click(function(){
    $(".design").hide();
    $(".designp").toggle();
    $(".designp").show();
  })
})

$(".designp").click(function(){
  $(".design").hide();
  $(".designp").toggle();
  $(".design").show();
})
$(".development").click(function(){
  $(".development").hide();
  $(".developmentp").toggle();
  $(".developmentp").show();
})

$(".developmentp").click(function(){
  $(".development").hide();
  $(".developmentp").toggle();
  $(".development").show();
})

$(".product-management").click(function(){
  $(".product-management").hide();
  $(".product-managementp").toggle();
  $(".product-managementp").show();
  })


$(".product-managementp").click(function(){
  $(".product-management").hide();
  $(".product-managementp").toggle();
  $(".product-management").show();

})
$("img").hover(function (){
  $(this).toggleClass('offwite');

});
