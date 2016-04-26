$(document).ready(function(){
	// $(".wrapp").hover(function(){
	// 	$(this).find(".title").css({"visibility": "visible"});
	// 	$(".close-marker").find(":before").css({"background-color": "red"});
	// 	}, function(){
	// 		$(this).find(".title").css({"visibility": "hidden"});
	// });


	$(".wrapp").mouseenter(function(){
		$(this).find(".title").css({"visibility": "visible"});
		$(".crossVert").css({'-webkit-transform':'rotate(180deg)'});
	});

	$(".wrapp").mouseleave(function(){
		$(this).find(".title").css({"visibility": "hidden"});
		$(".crossVert").css({'-webkit-transform':'rotate(90deg)'});
	});

});


// '-moz-transform':'rotate(90deg)',
// 												'-webkit-transform':'rotate(90deg)',
// 												'-o-transform': 'rotate(90deg)'