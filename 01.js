$(document).ready(function() {
    $('.courses__box').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dotsEachdotsEach: 2,

        stagePadding: 30,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,

            },
            601: {
                items: 2,

            },
            900: {
                items: 3,

                loop: true
            },
            1200: {
                items: 4
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
