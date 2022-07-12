const bu = document.getElementsByClassName('bu')[0];

bu.onclick = function (e) {

    if (e.target.id == "tt1") {
        tt1.style.borderColor = "red";

        tt2.style.borderColor = "white";
        tt3.style.borderColor = "white";
        tt4.style.borderColor = "white";
    }

    if (e.target.id == "tt2") {
        tt2.style.borderColor = "red";

        tt1.style.borderColor = "white";
        tt3.style.borderColor = "white";
        tt4.style.borderColor = "white";
    }

    if (e.target.id == "tt3") {
        tt3.style.borderColor = "red";

        tt1.style.borderColor = "white";
        tt2.style.borderColor = "white";
        tt4.style.borderColor = "white";
    }

    if (e.target.id == "tt4") {
        tt4.style.borderColor = "red";

        tt1.style.borderColor = "white";
        tt2.style.borderColor = "white";
        tt3.style.borderColor = "white";
    }

}


$(function () {


    $(window).ready(function () {

        tt1.style.borderColor = "red";


    });

});