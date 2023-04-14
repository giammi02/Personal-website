
$(function() {
  $.scrollify({
      section : ".section",
      easing: "easeOutBounce",
      scrollSpeed: 100,
      afterResize: function() {
      if( $(window).width() < 768) {
        $.scrollify.disable()
      }else{
        $.scrollify.enable()
      }
      },  });
});


/*
$('.link').click(function(){
    var moveTo = $(this).attr('href');
    $.scrollify("move",moveTo);
  });
  */