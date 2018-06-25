$(document).ready(function() {
    // slider options
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5700,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    // btn mobile menu show
    $('#btn-toggle').on('click', function () {
        $('#mobile-menu').slideToggle(function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });

    // btn message close
    $('#btn-close-message').on('click', function () {
        $('#message').remove();
    });
    
});
