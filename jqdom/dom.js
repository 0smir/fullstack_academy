$(document).ready(function(){

	$(".send").click(function(){
		console.log("Pressed!!!!!");
	});

	$("#myText").keydown(function(event){
		console.log($(this).val());
		console.log(event.keyCode);
	});

	$(".send").mouseover(function(event){
		console.log("pageX:" + event.pageX);
		console.log("pageY:" + event.pageY);

	});


	$(".send").click(function press(){
		$(".one").animate({
			left: "250px",
			opacity: "0.5",
			height: "150px",
			width: "150px"
		}, 4000, function(){
			$(".one").animate({
				left: "0",
				opacity: "0.9",
				height: "100px",
				width: "100px"

			}, 3000, press())
		});

	});




});