$(function(){
  $('.inner4-intro').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        fade:true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  
/* Header Scroll add-Class */
$(window).scroll(function(){
  if($(window).scrollTop() > 50) {
    $(".gnb-inner, .goto-top").addClass("active")
  }
  else {
    $(".gnb-inner, .goto-top").removeClass("active")
  }
}) 
  
// Scroll Smooth 
//  $(".gnb a, .goto-top a").click(function(e){
//  $.scrollTo(this.hash || 0, 100)
//})
  
})

