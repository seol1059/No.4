$(function () {



    $('#xt').click(function () {
        $(".div1").fadeIn();
        $(".div2").hide();
        $(".div3").hide();
    });


    $('#xt2').click(function () {
        $(".div2").fadeIn();
        $(".div1").hide();
        $(".div3").hide();
    });


    $('#xt3').click(function () {
        $(".div3").fadeIn();
        $(".div1").hide();
        $(".div2").hide();
    });
});