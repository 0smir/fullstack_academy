$(document).ready(function(){

	$(".send").click(function(){
		console.log("Pressed!!!!!");
	});

	$("#myText").keydown(function(event){
		console.log($(this).val());
		console.log(event.keyCode);
	});



});