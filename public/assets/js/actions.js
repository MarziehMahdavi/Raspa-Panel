// import $ from 'jquery'

$(document).ready(function () {

    let contentHeight = $("body").height() - $(".navbar-bg").outerHeight(true);
    let contentChildHeight = $("body").height() - ($(".footer-bg").outerHeight(true) + $(".navbar-bg").outerHeight(true));
    //
    $(".content").attr("style", "height: " + contentHeight + "px !important;");
    $(".content-child").attr("style", "min-height: " + contentChildHeight + "px !important;");


});
