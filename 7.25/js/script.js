 $(document).ready(function() {
    $('#gnb>li').hover(function() {
        $('.submenu', this).stop().slideDown();
    }, function() {
        $('.submenu', this).stop().slideUp();
    });

    var idx = 0;
    setInterval(function() {
        $('#slide>a').eq(idx).fadeOut();
        idx==2?idx=0:idx++;
        $('#slide>a').eq(idx).fadeIn();
    }, 3000);

    $('#pop').click(function() {
        $('#popup').fadeIn();
    });

    $('#close').click(function() {
        $('#popup').hide();
    });

    $('#site').change(function() {
        open($(this).val());
    });

});
