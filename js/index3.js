$(function () {


    $(window).ready(function () {

        xt.style.borderColor = "red";


    });

});



this.onclick = function (e) {

    if (e.target.id == "xt") {
        xt.style.borderColor = "red";

        xt2.style.borderColor = "white";

        xt3.style.borderColor = "white";
    }

    if (e.target.id == "xt2") {
        xt2.style.borderColor = "red";

        xt.style.borderColor = "white";

        xt3.style.borderColor = "white";
    }

    if (e.target.id == "xt3") {
        xt3.style.borderColor = "red";

        xt.style.borderColor = "white";

        xt2.style.borderColor = "white";
    }

}