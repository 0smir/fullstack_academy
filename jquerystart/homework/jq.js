$(document).ready(function(){
	$(".wrapp").hover(function(){
		$(this).find(".title").css({"visibility": "visible"});
		$(this).css({"background-size": "contain"});
		}, function(){
			$(this).find(".title").css({"visibility": "hidden"});
	});
	

});