$(document).ready(function () {
    $("#header").removeClass("default");
    $(window).scroll(function(){
        if($(window).scrollTop() >100){
            $("#header").addClass("default").fadeIn("fast");
        } else {
            $("#header").removeClass("default").fadeIn("fast");
        }
    });
});