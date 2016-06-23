
$(document).ready(function() {
    $("[data-modal='show']").on("click", function () {
        var modalName = $(this).attr("data-modal-name");

        $("[data-modal-name=" + modalName + "]").css({"display": "block"});
    });

    $(".close").on("click", function () {
        $('.modal').css({"display": "none"});
    });
});