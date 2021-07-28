$(document).ready(function() {
    $('.bar').click(function() {
        $('header>nav').animate({left: 0});
    });

    $('.close').click(function() {
        $('header>nav').animate({left: '-80%'});
    });

    $(window).on('touchstart', function(event) {
        start_x = event.originalEvent.touches[0].pageX;
    });
    $(window).on('touchend', function(event) {
        end_x = event.originalEvent.changedTouches[0].pageX;
        var dist = end_x - start_x;
        if(dist>=80) {
            $('header>nav').animate({left: 0});
        }
        if(dist<=-80) {
            $('header>nav').animate({left: '-80%'});
        }
    });
});


