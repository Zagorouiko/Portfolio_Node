$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.header').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    if(wScroll > $('.about').offset().top -
        ($(window).height() / 6)) {

        $('.about h2').each(function() {
            $('.about h2').addClass('is-showing');
        })
    }

    if(wScroll > $('.about').offset().top -
        ($(window).height() / 6)) {

        $('.about p').each(function() {
            $('.about p').addClass('is-showing');
        })
    }
});