$(document).ready(function() {
    var $navbar = $('.navbar');
    var navbarDefaultClass = 'transparent-navbar';
    var navbarFilledClass = 'filled-navbar';
    var scrollOffset = 100;

    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollOffset) {
            $navbar.removeClass(navbarDefaultClass).addClass(navbarFilledClass);
        } else {
            $navbar.removeClass(navbarFilledClass).addClass(navbarDefaultClass);
        }
    });
});