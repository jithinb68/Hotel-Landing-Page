
if ($("#datepicker-arrival").length) {
    $('#datepicker-arrival').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
}

if ($("#datepicker-departure").length) {
    $('#datepicker-departure').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
}

if ($('.owl-carousel').length) {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4500,
    navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
}