$(document).ready(function(){
	$("li").css({"background-color": "#ffc0cb"});
	$(".myLink").attr("href", "https://www.google.ua");

	$('li').eq(0).css("color", "red");
	$('li').eq(3).css({"background-color": " #a95c68"})
	.end().eq(2).css({"color":"yellow"});

});