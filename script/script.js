$(document).ready(function(){
  $(".nav-container a").on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr("href"); // Obtém o atributo href do link
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
});
