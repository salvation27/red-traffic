$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["", ""],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
  },
});


jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](500);           
    });
});
