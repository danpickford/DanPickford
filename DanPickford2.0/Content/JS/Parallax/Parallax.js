jQuery(document).ready(function ($) {
    var ua = navigator.userAgent,
        isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
    if (isMobileWebkit) {
        runSetup('mobile');
    } else {
        runSetup('normal');
    }
});

function runSetup(type) {
    if (type == 'mobile') {
        $('#Written2').html('Ahh i see you are using a mobile device... switched to a mobile friendly version for you. (Better on PC)');
        $('#Written2').css('top', '10px');
        $('#slide1').attr('id', 'mslide1');
        $('#slide2').attr('id', 'mslide2');
        $('#slide3').attr('id', 'mslide3');
        $('html').addClass('mobile');
        iScrollInstance = new iScroll('scroller');
        $('#scroller').stellar({
            scrollProperty: 'transform',
            positionProperty: 'transform',
            horizontalScrolling: false,
            verticalScrolling: true
        });
    }
    //initialise Stellar.js
    $(window).stellar();
    //Cache some variables
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    dataslide = 1;
    scrolling = false;
    //Setup waypoints plugin
    slide.waypoint(function (event) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        if (event === 'up') {
            if (dataslide - 1 == 0) {
                dataslide = 1;
            } else {
                dataslide = dataslide - 1;
            }
        }
    });

    (function () {
        var timer;
        $(window).bind('scroll', function () {
            clearTimeout(timer);
            timer = setTimeout(refresh, 1000);
        });
        var refresh = function () {
            goToByScroll(dataslide, 500);
        };
    })();

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide, mstime) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, mstime, 'easeInOutQuint');
    }
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide, 2000);
    });
}