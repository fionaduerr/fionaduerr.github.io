$(document).ready(function() {

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,

});

$('a').click(function(){
  $('html, body').animate({
  scrollTop: $( $.attr(this, 'href')).offset().top
  }, 300);
  return false;
});


$('.img-wrap img:gt(0)').hide();

$('.next').click(function() {
    $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
});

$('.prev').click(function() {
    $('.img-wrap img:first-child').fadeOut();
    $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
    $('.img-wrap img:first-child').fadeIn();
});

if ($('.back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
  
});

