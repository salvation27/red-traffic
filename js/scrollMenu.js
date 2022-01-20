// $(window).scroll(function(){
//     if ($(window).scrollTop() > 900) {
//         $('.header').addClass('header_fixed');
//     }
// )};


$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if (height > 900) {
    $(".header").addClass("header_fixed");
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $("header").removeClass("header_fixed");
  }
});