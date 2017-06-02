$(function() {
  $('.navbar-nav a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var scrollTo = $(this).attr('href');
      var whitespace = scrollTo == '#s0' ? 50 : 30
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000);
    });
  });
});
