// Play button of video
function hide() {
    document.getElementById('icon-play').style.display = 'none';
}


// Nav Slider
function openSlideMenu() {
    document.getElementById('slide-menu').style.width = '300px';
}

function closeSlideMenu() {
    document.getElementById('slide-menu').style.width = '0%';
}




// Dropdown Menu

$(".btn-group, .dropdown").hover(
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('open');
    },
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('open');
    });




// Slider

$('.owl-1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: 1000,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 1
        }
    }
});


// Tab

$('.owl-2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: 1000,
    responsive: {
        0: {
            items: 1.5
        },
        620: {
            items: 2
        },
        700: {
            items: 2
        },
        1200: {
            items: 2.5
        },
        1300: {
            items: 3
        },
        1400: {
            items: 4
        },
        1500: {
            items: 4
        }

    }
});


// Courses

$('.owl-x').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1.5
        },
        620: {
            items: 2
        },
        700: {
            items: 3.2
        },
        1000: {
            items: 4
        },
        1200: {
            items: 4
        },
        1300: {
            items: 5
        },
        1400: {
            items: 5
        },
        1500: {
            items: 6
        }
    }
});

// Testimonial

$('.owl-y').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1.2
        },
        620: {
            items: 1.5
        },
        700: {
            items: 2
        },
        1000: {
            items: 2.2
        },
        1200: {
            items: 2.3
        },
        1300: {
            items: 2.4
        },
        1400: {
            items: 2.5
        },
        1500: {
            items: 3
        }
    }
});

// Our Partners
$('.owl-partner').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },

        680: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})