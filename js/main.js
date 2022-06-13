$(function () {
  $("#slider").slick({
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    draggable: false,
    touchThreshold: 5,
  });
  $(".menu-arrow").click(function () {
    if ($(".menu__number-list").css("display") === "none") {
      $(".menu__number-list").css("display", "block");
      $(".menu-arrow").css("transform", "rotate(180deg)");
    } else {
      $(".menu__number-list").css("display", "none");
      $(".menu-arrow").css("transform", "rotate(0deg)");
    }
  });
});

$(".hamburger, .page__overlay").on('click', function(){
  $(".hamburger .mobile__menu-wrap").toggleClass("is-active");
  $("body").toggleClass("open");
}); 
