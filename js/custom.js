/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Nabigation
===============================================*/
// Show / Hide navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            $("nav").addClass("navbar-default");
            $("nav").removeClass("navbar-fixed-top");
        } else {
            
            $("nav").addClass("navbar-fixed-top");
            $("nav").removeClass("navbar-default");
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

/*=============================================
                Skitter
===============================================*/
$(function() {
  $('.skitter-large').skitter();
});

/*=============================================
                Product
===============================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#product-container").isotope({});

    // filter items on button click
    $("#product-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#product-container").isotope({
            filter: filterValue
        });

        // active button
        $("#product-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*=============================================
                Fashion Categorie
===============================================*/
$(function () {
    $(".fashion-categorie-items").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            980: {
                items: 4
            }
        }
    });
});

/*=============================================
                News
===============================================*/
$(function () {
    $(".news-items").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            980: {
                items: 2
            }
        }
    });
});

/*=============================================
                Brands
===============================================*/
$(function () {
    $(".brands-items").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            768: {
                items: 4
            },
            980: {
                items: 5
            }
        }
    });
});

/*=============================================
                Comment
===============================================*/
// Show / Hide button
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    });
});
