$('.mycarousel').owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  autoplay:true,
  smartSpeed: 1500,
  navSpeed: 2000,
  responsiveClass:true,
  autoplayTimeout:4000,
  margin:0,
  navText:['<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'],
  responsive:{
   0:{
     items:1
   },
   768:{
     items:1
   },
   1024:{
     items:1
   }
  }
});
