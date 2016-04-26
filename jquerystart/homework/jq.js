$(document).ready(function(){
	// $(".wrapp").hover(function(){
	// 	$(this).find(".title").css({"visibility": "visible"});
	// 	$(".close-marker").find(":before").css({"background-color": "red"});
	// 	}, function(){
	// 		$(this).find(".title").css({"visibility": "hidden"});
	// });


	$(".wrapp").mouseenter(function(){
		$(this).find(".title").css({"visibility": "visible"});
		$(".crossVert").css({'-webkit-transform':'rotate(180deg)',
								'transition': "transform 0.2s"});
	});

	$(".wrapp").mouseleave(function(){
		$(this).find(".title").css({"visibility": "hidden"});
		$(".crossVert").css({'-webkit-transform':'rotate(90deg)',
							'-moz-transform':'rotate(90deg)',
							'-o-transform': 'rotate(90deg)',
							'transition': "transform 0.3s"});
	});


	$(".close-block").mouseenter(function(){
		$(".close-block").find(".vert").css({WebkitTransform: "rotate(180deg)",
												transition: "transform 0.3s"});

	});
	$(".close-block").mouseleave(function(){
		$(".close-block").find(".vert").css({WebkitTransform: "rotate(90deg)",
												transition: "transform 0.3s"});

	});

	$(".second").mouseenter(function(){
		$("img").css({
			"display":"block",
			"transform": "scale(1.1)",
			"transition": " transform 0.3s"
		});
	});
	$(".second").mouseleave(function(){
		$("img").css({
			"transform": "scale(1)",
			"transition": " transform 0.3s",
			"display": "none"
		});
	});
});
