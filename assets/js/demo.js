$('.owl-carousel').owlCarousel({
    stagePadding: 0,
    items: 1,
    loop:true,
    margin:0,
    singleItem:true,
    nav:false,
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    dots:false
});

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