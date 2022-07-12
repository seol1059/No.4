$(function () {


    $(window).ready(function () {

        var ws = $(this).scrollTop();


        if (ws > -10) {

            $('.slbox p').css("transform", "translateY(0px)").css("opacity", "1");
            $('.ibox img').css("transform", "translateY(0px)").css("opacity", "1");
            $('.debox').css("transform", "translateY(0px)").css("opacity", "1");


        }


    });

});