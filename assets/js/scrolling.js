$(window).scroll(function(){
  if($(window).scrollTop()>10){
    $('.navbar').css('background-color','rgb(151,151,151)');
  }
  else{
    $('.navbar').css('background-color','transparent');
  }
});
