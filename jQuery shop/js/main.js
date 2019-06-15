$(document).ready(function() {
  $('.main_btna,.main_btn,ul li:eq(-5)').on('click', function() {
    $('.overlay').fadeIn("slow");
    $('.modal').animate({
      opacity: 1,
      height: "toggle"
    }, 600);
  });
  $('.close span, .back').on('click', function () {
    $('.overlay').fadeToggle("slow");
    $('.modal').animate({
      opacity: 0,
      height: "toggle"
    }, 600);
    $('.thanks').slideToggle("slow");
  });
  
  $("#theForm").submit(function (e) {
    e.preventDefault();

    var form = $(this);
    var url = form.attr('action');

    $.ajax({
      type: "POST",
      url: 'server.php',
      data: form.serialize(),
      success: function (){
        $('.thanks').slideDown("slow");
      }
    });
  });
});