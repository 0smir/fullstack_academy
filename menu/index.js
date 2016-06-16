$(document).ready(function( $ ) {
   
   $.mmenu.configuration.classNames.fixedElements = {
   fixed: "Fixed"
   };


   $("#menu").mmenu({
      "offCanvas": {
         "position": "right"
         // "zposition": "next"
      },
      "extensions": [
         "theme-dark"
      ],
      "navbars": [
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
   
   $("#open").click(function() {
      API.open();
   });

});