$(document).ready(function( $ ) {


    $("#menu").mmenu({
        "offCanvas": {
            "position": "right"
        },
        "extensions": [
            "theme-dark"
        ],
        "navbars": [
            {
                "position": "top"
            },
            {
                "position": "bottom",
                "content": [
                    "<a class='fa fa-envelope' href='#/'></a>",
                    "<a class='fa fa-twitter' href='#/'></a>",
                    "<a class='fa fa-facebook' href='#/'></a>"
                ]
            }
        ]
    });


    var API = $("#menu").data("mmenu");

    $("#burger").click(function() {
        API.open();
    });

});