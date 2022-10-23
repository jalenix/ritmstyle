$(document).ready(function(){
  $(".feedback-items").owlCarousel({
    items: 2,
    dots: true,
    nav: false,
    center: false,
    autoWidth: false,
    startPosition: 2,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        center: false,
        autoWidth: false,
      },
      768: {
        center: true,
        autoWidth: false,
      }
    }
    
  });

  

  
});