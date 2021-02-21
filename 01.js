$(document).ready(function() {
    $('.courses__box').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        loop: true,
        margin: 10,
        loop: true,
        responsiveClass: true,
        nav: false,
        dotsEachdotsEach: 2,

        stagePadding: 30,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 4,

                loop: true
            }
        }
    });
    $('.rate__content').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        loop: true,
        stagePadding: 30,
        smartSpeed: 450,
        nav: false,
        dots: false


    });
});