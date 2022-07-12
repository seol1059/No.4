$(function () {

    $('.collapsible').click(function () {


        $('.collapsible').stop().removeClass("active");
        $('.content').stop().slideUp();

        $(this).stop().addClass("active");
        $(this).next('.content').stop().slideToggle();
    });

});