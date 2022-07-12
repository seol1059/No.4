$(function () {


    $(window).ready(function () {

        var ws = $(this).scrollTop();


        if (ws > -10) {

            $('.sl1 p').css("transform", "translateY(0px)").css("opacity", "1");
            $('.sl2 p').css("transform", "translateY(0px)").css("opacity", "1");
            $('.sl3 p').css("transform", "translateY(0px)").css("opacity", "1");
            $('.er').css("transform", "translateY(0px)").css("opacity", "1");


        }


    });

});