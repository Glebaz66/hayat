//slider
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
        arrows: false,
         responsive: [
            {
              breakpoint: 768,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 5000,
                adaptiveHeight: true,
                fade: true,
                cssEase: 'linear',
                arrows: true,
                appendArrows: $('.arrows'),
                prevArrow: '<div id="prev" type="button" class="arrow arrow__left"></div>',
                nextArrow: '<div id="next" type="button" class="arrow"></div>',
              },
            },
          ]
    });

    //custom next btn
    $('.next-btn').click(function(){
        $('.portfolio').slick('slickNext');
    })
    $('.arrow__left').click(function(){
        $('.portfolio').slick('slickPrev');
    });
    $('.arrow').click(function(){
        $('.portfolio').slick('slickNext');
    });

    //slides counter
    const totalSlides = $('.slick-track ').children();

    if(!totalSlides.length || totalSlides.length < 0) return;
    if(totalSlides.length > 0 || totalSlides.length < 10 ) {
        $('.counter .total').text('0' + totalSlides.length);
    } 
    if(totalSlides.length >= 10 ) {
        $('.counter .total').text(totalSlides.length);
    }

    //get current slide
    $('.portfolio').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if(!currentSlide || currentSlide < 0) return;
        if(currentSlide == 0){
            console.log('0000');
            $('.counter .current').text(1);
        };
        if(currentSlide < 10){
            $('.counter .current').text('0' + $(slick.$slides.get(currentSlide)).data('slickIndex'));
        };
        if(currentSlide >= 10){
            $('.counter .current').text($(slick.$slides.get(currentSlide)).data('slickIndex'));
        };
    });

    //nav add backdrop when opened to mobile
    $('.navbar-toggler').on('click', function(){
        if( $(this).hasClass('collapsed') ){
            $('body').toggleClass('backdrop1')
        } 
        console.log(this.classList);
    })
});