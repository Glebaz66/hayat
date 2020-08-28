$(document).ready(function(){
    $('.portfolio').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    //custom next btn
    $('.next-btn').click(function(){
        $('.portfolio').slick('slickNext');
    })

    //slides counter
    const totalSlides = $('.slick-track ').children();

    if(!totalSlides.length < totalSlides.length < 0) return;
    if(totalSlides.length > 0 || totalSlides.length < 10 ) {
        $('.counter .total').text('0' + totalSlides.length);
    };

    //get current slide
    
    $('.portfolio').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log('currentSlide', currentSlide);
        if(!currentSlide || currentSlide < 0) return;
        if(currentSlide == 0){
            console.log('0000');
            $('.counter .current').text(1);
        };
        if(currentSlide < 10){
            $('.counter .current').text('0' + $(slick.$slides.get(currentSlide)).data('slickIndex'));
        };
    });
});

    //nav add backdrop when opened to mobile

    $('.navbar-toggler').on('click', function(){
        if($('.menu .navbar-collapse').hasClass('show')){
            $('body').addClass('backdrop')
        } else {
            $('body').removeClass('backdrop')
            console.log('no');
        }

    })

    // Find all YouTube videos
// Expand that selector for Vimeo and whatever else
var $allVideos = $("iframe[src^='//www.youtube.com']"),

// The element that is fluid width
$fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

$(this)
  .data('aspectRatio', this.height / this.width)

  // and remove the hard coded width/height
  .removeAttr('height')
  .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

var newWidth = $fluidEl.width();

// Resize all videos according to their own aspect ratio
$allVideos.each(function() {

  var $el = $(this);
  $el
    .width(newWidth)
    .height(newWidth * $el.data('aspectRatio'));

});
console.log('reisze');
// Kick off one resize to fix all videos on page load
}).resize();